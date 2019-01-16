import Vue, { Vue as _Vue, VNode, VueConstructor } from 'vue'
import { Resource } from './resource'

declare module 'vue/types/vue' {
  export interface VueConstructor extends VueConstructor {
    resources: any
  }

  export interface Vue extends _Vue {
    $resource(name: string): Resource<any>
    $setDottedProps(): void
  }
}
