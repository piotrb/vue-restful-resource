import { Resource, ResourceOptions } from './resource'
import { Vue as _Vue, Vue, VueConstructor } from 'vue/types/vue'

export interface RegisterOptions extends ResourceOptions {
  resourceName?: string
}

class ResourceCollection {
  resources: { [key: string]: Resource<any> } = {}

  register<T>(name: string, basePath: string, options: RegisterOptions = {}) {
    let resourceName = options.resourceName
    delete options.resourceName
    if (resourceName === undefined) {
      resourceName = name
    }
    this.resources[name] = new Resource<T>(resourceName, basePath, options)
  }

  get(name: string) {
    if (this.resources[name] !== undefined) {
      return this.resources[name]
    } else {
      throw new Error(`no resource registered as: ${name}`)
    }
  }
}

export class VueResource {
  install<T>(Vue: typeof _Vue, options?: T): void {
    Vue.resources = new ResourceCollection()

    Vue.prototype.$resource = (name: string) => {
      return Vue.resources.get(name)
    }

    Vue.prototype.$setDottedProps = function() {
      for (let key of Object.keys(this.$attrs)) {
        for (let pKey of this.$options._propKeys) {
          let mr = key.match(`^${pKey}-([^.]+)$`)
          if (mr) {
            let subKey = mr[1]
            if (this[pKey] === undefined) this[pKey] = {}
            this[pKey][subKey] = this.$attrs[key]
            delete this.$attrs[key]
          }
        }
      }
    }
  }
}
