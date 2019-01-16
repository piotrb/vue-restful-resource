import { ResourceOptions } from './resource';
import { Vue as _Vue } from 'vue/types/vue';
export interface RegisterOptions extends ResourceOptions {
    resourceName?: string;
}
export declare class VueResource {
    install<T>(Vue: typeof _Vue, options?: T): void;
}
