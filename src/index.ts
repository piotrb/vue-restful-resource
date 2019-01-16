import { ModelError } from './model.error'

import { Model } from './model'
import { ResourceStatus } from './resource.status'
import { Collection } from './collection'
import { VueResource } from './vue-resource'
import { Vue as _Vue } from 'vue/types/vue'
import { PluginFunction } from 'vue/types/plugin'

export { Model } from './model'
export { ResourceStatus } from './resource.status'
export { Collection } from './collection'
export { RequestStatus } from './resource'

export interface OptionsType {}

export const VueRestfulResource: PluginFunction<OptionsType> = function(Vue: typeof _Vue, options?: OptionsType): void {
  Vue.use(new VueResource())
  Vue.component('rr-model', Model)
  Vue.component('rr-collection', Collection)
  Vue.component('rr-resource-status', ResourceStatus)
  Vue.component('rr-model-error', ModelError)
}
