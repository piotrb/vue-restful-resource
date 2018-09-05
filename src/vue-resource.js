import Resource from './resource'

class ResourceCollection {
  constructor() {
    this.resources = {}
  }
  register(name, basePath, options) {
    if (options === undefined) {
      options = {}
    }
    let resourceName = options['resourceName']
    delete options.resourceName
    if (resourceName === undefined) {
      resourceName = name
    }
    this.resources[name] = new Resource(resourceName, basePath, options)
  }
  get(name) {
    if (this.resources[name] !== undefined) {
      return this.resources[name]
    } else {
      throw new Error(`no resource registered as: ${name}`)
    }
  }
}

export default class VueResource {
  constructor() {}

  install(Vue, options) {
    Vue.resources = new ResourceCollection()

    Vue.prototype.$resource = (name) => {
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
