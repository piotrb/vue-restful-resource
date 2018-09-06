// For some reason these can't be in the module .. not sure why .. need to fix this still
import { ResourceCollection } from './index'
import { Vue } from 'vue/types/vue'
declare module 'vue/types/vue' {
  export interface VueConstructor<V extends Vue = Vue> {
    resources: ResourceCollection
  }
}
