import { RequestStatus } from './resource'
import { ModelError } from './model.error'
import * as tsx from 'vue-tsx-support'
import Component from 'vue-class-component'

export interface ResourceStatusProps {
  status: RequestStatus
  label?: string
}

@Component({
  props: {
    status: {
      required: true,
    },
    label: {},
  },
})
export class ResourceStatus extends tsx.Component<ResourceStatusProps> {
  status!: RequestStatus
  label?: string

  renderError() {
    if (this.status.error.status == 422) {
      return <ModelError errors={this.status.error.body} />
    } else if (this.status.error.status == 401) {
      return (
        <b-alert show variant="danger">
          {this.status.error.body.error.message}
        </b-alert>
      )
    } else if (this.status.error.status == 500) {
      if (this.status.error.body) {
        return (
          <b-alert show variant="danger">
            {this.status.error.body.error}
          </b-alert>
        )
      } else {
        return (
          <b-alert show variant="danger">
            Something went wrong: Server returned Error 500
          </b-alert>
        )
      }
    } else if (this.status.error.status == 'error') {
      return (
        <b-alert show variant="danger">
          {this.status.error.error}
        </b-alert>
      )
    } else {
      return <pre>{this.status}</pre>
    }
  }

  render() {
    if (this.status) {
      return (
        <div style="position: relative">
          {this.status.start ? (
            <b-alert style="position: absolute; z-index: 99;" show variant="info">
              Loading {this.label} ...
              <font-awesome-icon icon="spinner" pulse />
            </b-alert>
          ) : null}
          {this.status.ready ? (
            <div>
              <slot name="ready" />
            </div>
          ) : null}
          {this.status.error ? <div>{this.renderError()}</div> : null}
        </div>
      )
    } else {
      return <div />
    }
  }
}
