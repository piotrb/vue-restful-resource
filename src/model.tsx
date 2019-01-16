import { DataType, Resource, RequestStatus } from './resource'
import * as tsx from 'vue-tsx-support'
import Component from 'vue-class-component'
import { Watch } from 'vue-property-decorator'
import { ResourceStatus } from './resource.status'

export interface ModelProps {
  label?: string
  name: string
  id: string
  action?: string
  filter?: any
  seed?: any
}

@Component({
  props: {
    label: String,
    name: {
      required: true,
      type: String,
    },
    id: {
      required: true,
    },
    action: {
      default: null,
    },
    filter: {
      default() {
        return {}
      },
    },
    seed: {},
  },
})
export class Model<T extends DataType> extends tsx.Component<ModelProps> {
  label?: string
  name!: string
  id!: string
  action?: string
  filter: any
  seed: any

  status: RequestStatus = {}
  formStatus: RequestStatus = {}
  _resource: Resource<T> | null = null

  created() {
    this._resource = this.$resource(this.name)
  }

  async mounted() {
    this.$setDottedProps()
    await this.refresh()
  }

  render() {
    return (
      <div>
        <ResourceStatus status={this.status} label={this.label} />
        <ResourceStatus status={this.formStatus} label={this.label} />
      </div>
    )
  }

  sync_data(data: T) {
    this.$emit('update:data', data)
  }

  async refresh() {
    let data
    if (this.action) {
      data = await this._resource!.member_get(this.id, this.action, {
        statusTo: [this, 'status'],
        throwErrors: false,
        queryParams: this.filter,
      })
    } else {
      data = await this._resource!.get(this.id, {
        statusTo: [this, 'status'],
        throwErrors: false,
        queryParams: this.filter,
      })
    }
    this.sync_data(data)
  }

  async update(data: T) {
    if (this.action) {
      throw new Error('update not supported for custom actions')
    }
    let record = await this._resource!.update(this.id, data, {
      statusTo: [this, 'formStatus'],
      throwErrors: false,
      queryParams: this.filter,
    })
    this.sync_data(record)
  }

  delete() {
    if (this.action) {
      throw new Error('delete not supported for custom actions')
    }
    return this._resource!.delete(this.id, {
      statusTo: [this, 'formStatus'],
      throwErrors: false,
      queryParams: this.filter,
    })
  }

  @Watch('status')
  onStatusChange() {
    this.$emit('update:status', this.status)
  }

  @Watch('seed')
  async onSeedChange() {
    await this.refresh()
  }
}
