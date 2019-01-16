import { Watch } from 'vue-property-decorator'
import { DataType, IdType, RequestStatus, Resource } from './resource'
import { ResourceStatus } from './resource.status'

import * as tsx from 'vue-tsx-support'
import Component from 'vue-class-component'

export interface CollectionProps {
  label?: string
  name: string
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
    filter: {
      default() {
        return {}
      },
    },
    seed: {},
  },
})
export class Collection<T extends DataType> extends tsx.Component<CollectionProps> {
  label?: string
  name!: string
  filter: any
  seed: any

  data: T[] = []
  status: RequestStatus = {}
  formStatus: RequestStatus = {}
  _resource: Resource<T> | null = null

  created() {
    try {
      this._resource = this.$resource(this.name)
    } catch (e) {
      this.status = {
        error: {
          status: 'error',
          error: e.message,
        },
      }
    }
  }

  render() {
    return (
      <div>
        <ResourceStatus status={this.status} label={this.label} />
        <ResourceStatus status={this.formStatus} label={this.label} />
      </div>
    )
  }

  async mounted() {
    this.$setDottedProps()
    await this.refresh()
  }

  sync_data() {
    this.$emit('update:data', this.data)
  }

  get(id: IdType) {
    return this._resource!.get(id, { statusTo: [this, 'formStatus'], throwErrors: false, queryParams: this.filter })
  }

  async refresh() {
    this.data = await this._resource!.query(this.filter, { statusTo: [this, 'status'], throwErrors: false })
    this.sync_data()
  }

  async create(data: T) {
    let result = await this._resource!.create(data, {
      statusTo: [this, 'formStatus'],
      throwErrors: false,
      queryParams: this.filter,
    })
    if (this.formStatus.ready) {
      let index = this.data.findIndex((item) => item.id === result.id)
      if (index >= 0) {
        this.$set(this.data, index, result)
      } else {
        this.data.push(result)
      }
      this.sync_data()
    }
    return result
  }

  async update(id: IdType, data: T) {
    let result = await this._resource!.update(id, data, {
      statusTo: [this, 'formStatus'],
      throwErrors: false,
      queryParams: this.filter,
    })
    if (this.formStatus.ready) {
      let index = this.data.findIndex((item) => item.id === id)
      this.$set(this.data, index, result)
    }
    return result
  }

  async delete(id: IdType) {
    let result = await this._resource!.delete(id, {
      statusTo: [this, 'formStatus'],
      throwErrors: false,
      queryParams: this.filter,
    })
    if (result === null || result === undefined || !result.error) {
      if (!this.formStatus.error) {
        let index = this.data.findIndex((item) => item.id === id)
        this.$delete(this.data, index)
      }
    }
    this.sync_data()
    return result
  }

  member_get(id: IdType, action: string) {
    return this._resource!.member_get(id, action, {
      statusTo: [this, 'formStatus'],
      throwErrors: false,
      queryParams: this.filter,
    })
  }

  member_post(id: IdType, action: string, data: DataType) {
    return this._resource!.member_post(id, action, data, {
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
