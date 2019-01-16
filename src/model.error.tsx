import { Component, Prop } from 'vue-property-decorator'
import * as _ from 'lodash'
import * as tsx from 'vue-tsx-support'
import { TsxComponentAttrs } from 'vue-tsx-support'

export interface ModelErrorProps {
  errors: any
}

@Component({
  props: {
    errors: {
      required: true as true,
    },
  },
})
export class ModelError extends tsx.Component<ModelErrorProps> {
  errors!: any

  render() {
    return (
      <b-alert show variant="danger">
        {_.flatMap(
          _.mapKeys(this.errors, (fieldName: string) => {
            return _.map(this.errors[fieldName], (fieldError: string) => {
              if (fieldName == 'base') {
                return <div>{fieldError}</div>
              } else {
                return (
                  <div>
                    {fieldName} {fieldError}
                  </div>
                )
              }
            })
          })
        )}
      </b-alert>
    )
  }
}
