// import Vue from 'vue'

import ModelError from './model.error.vue'
import Model from './model.vue'
import Resource from './resource.js'
import ResourceStatus from './resource.status.vue'
import Collection from './collection.vue'
import VueResource from './vue-resource'

function install(Vue, options) {
  Vue.use(new VueResource())
  Vue.component('rr-model', Model)
  Vue.component('rr-collection', Collection)
  Vue.component('rr-resource-status', ResourceStatus)
  Vue.component('rr-model-error', ModelError)
}

export { install }
