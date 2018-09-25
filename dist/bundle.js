'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var qs = _interopDefault(require('qs'));

//
//
//
//
//
//
//

var script = {
  props: {
    errors: {
      required: true
    }
  },
  data() {
    return {};
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("b-alert", { attrs: { show: "show", variant: "danger" } }, [_vm._l(_vm.errors, function (fieldErrors, fieldName) {
    return [_vm._l(fieldErrors, function (fieldError) {
      return [fieldName === "base" ? _c("div", [_vm._v(_vm._s(fieldError))]) : _c("div", [_vm._v(_vm._s(fieldName) + " " + _vm._s(fieldError))])];
    })];
  })], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

/* style */
const __vue_inject_styles__ = undefined;
/* scoped */
const __vue_scope_id__ = undefined;
/* module identifier */
const __vue_module_identifier__ = undefined;
/* functional template */
const __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "/Users/piotr/Projects/vue-restful-resource/src/model.error.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var ModelError = __vue_normalize__({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

//
//
//
//
//

var script$1 = {
  props: {
    label: {},
    name: {
      required: true
    },
    id: {
      required: true
    },
    action: {
      default: null
    },
    filter: {
      default() {
        return {};
      }
    },
    seed: {}
  },
  created() {
    this._resource = this.$resource(this.name);
  },
  async mounted() {
    this.$setDottedProps();
    await this.refresh();
  },
  data() {
    return {
      status: {},
      formStatus: {},
      _resource: null
    };
  },
  methods: {
    sync_data(data) {
      this.$emit('update:data', data);
    },
    async refresh() {
      let data;
      if (this.action) {
        data = await this._resource.member_get(this.id, this.action, {
          statusTo: [this, 'status'],
          throwErrors: false,
          queryParams: this.filter
        });
      } else {
        data = await this._resource.get(this.id, {
          statusTo: [this, 'status'],
          throwErrors: false,
          queryParams: this.filter
        });
      }
      this.sync_data(data);
    },
    async update(data) {
      if (this.action) {
        throw new Error('update not supported for custom actions');
      }
      let record = await this._resource.update(this.id, data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
      this.sync_data(record);
    },
    delete() {
      if (this.action) {
        throw new Error('delete not supported for custom actions');
      }
      return this._resource.delete(this.id, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    }
  },
  watch: {
    status() {
      this.$emit('update:status', this.status);
    },
    async seed() {
      await this.refresh();
    }
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("rr-resource-status", {
    attrs: { status: _vm.status, label: _vm.label }
  }), _c("rr-resource-status", {
    attrs: { status: _vm.formStatus, label: _vm.label }
  })], 1);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

/* style */
const __vue_inject_styles__$1 = undefined;
/* scoped */
const __vue_scope_id__$1 = undefined;
/* module identifier */
const __vue_module_identifier__$1 = undefined;
/* functional template */
const __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "/Users/piotr/Projects/vue-restful-resource/src/model.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Model = __vue_normalize__$1({ render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, undefined, undefined);

class ResourceError extends Error {
  constructor(message, errorInfo) {
    super(message);
    this.errorInfo = errorInfo;
  }
}

class Resource {

  constructor(resouceName, basePath, options) {
    this.resouceName = resouceName;
    this.basePath = basePath;
    if (options) {
      this.defaultQuery = options.defaultQuery;
    } else {
      this.defaultQuery = {};
    }
  }

  async query(options, runtimeOptions) {
    let url = this._buildUrl(null, options);
    return this._execute({ url: url }, runtimeOptions);
  }

  async create(data, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams'];
    delete runtimeOptions['queryParams'];
    let url = this._buildUrl(undefined, queryParams);
    let body = {};
    data._ = '_';
    body[this.resouceName] = data;
    return this._execute({
      url: url,
      method: 'post',
      body: JSON.stringify(body),
      headers: Resource.commonHeaders
    }, runtimeOptions);
  }

  async update(id, data, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams'];
    delete runtimeOptions['queryParams'];
    let url = this._buildUrl(`/${encodeURIComponent(id)}`, queryParams);
    let body = {};
    data._ = '_';
    body[this.resouceName] = data;
    return this._execute({
      url: url,
      method: 'put',
      body: JSON.stringify(body),
      headers: Resource.commonHeaders
    }, runtimeOptions);
  }

  async delete(id, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams'];
    delete runtimeOptions['queryParams'];
    let url = this._buildUrl(`/${encodeURIComponent(id)}`, queryParams);
    return this._execute({
      url: url,
      method: 'delete',
      headers: Resource.commonHeaders
    }, runtimeOptions);
  }

  async get(id, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams'];
    delete runtimeOptions['queryParams'];
    let url = this._buildUrl(`/${encodeURIComponent(id)}`, queryParams);
    return this._execute({
      url: url,
      headers: Resource.commonHeaders
    }, runtimeOptions);
  }

  async member_get(id, action, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams'];
    delete runtimeOptions['queryParams'];
    let url = this._buildUrl(`/${encodeURIComponent(id)}/${action}`, queryParams);
    return this._execute({
      url: url,
      headers: Resource.commonHeaders
    }, runtimeOptions);
  }

  async member_post(id, action, data, runtimeOptions) {
    let queryParams = runtimeOptions['queryParams'];
    delete runtimeOptions['queryParams'];
    let url = this._buildUrl(`/${encodeURIComponent(id)}/${action}`, queryParams);
    return this._execute({
      url: url,
      method: 'post',
      body: JSON.stringify(data),
      headers: Resource.commonHeaders
    }, runtimeOptions);
  }

  async _execute(options, runtimeOptions = {}) {
    this._signalStatus({ start: true, busy: true }, runtimeOptions);
    let result = await fetch(options.url, options);
    return this._handleResult(result, runtimeOptions);
  }

  _signalStatus(status, runtimeOptions) {
    let statusFunction = runtimeOptions.status;
    if (runtimeOptions.statusTo) {
      statusFunction = s => {
        runtimeOptions.statusTo[0][runtimeOptions.statusTo[1]] = s;
      };
    }
    if (statusFunction) {
      statusFunction(status);
    }
  }

  _buildUrl(relative, options) {
    options = Object.assign({}, this.defaultQuery, options);
    let url = this.basePath;
    if (relative) {
      url += relative;
    }
    if (options) {
      url += '?' + qs.stringify(options);
    }
    return url;
  }

  async _handleResult(result, runtimeOptions) {
    if (result.ok) {
      try {
        let data = await result.json();
        this._signalStatus({ ready: true, busy: false }, runtimeOptions);
        return data;
      } catch (e) {
        this._signalStatus({ ready: true, busy: false }, runtimeOptions);
        return null;
      }
    } else {
      let errorInfo = {
        status: result.status,
        statusText: result.statusText,
        body: null
      };

      try {
        errorInfo.body = await result.json();
      } catch (e) {
        errorInfo.body = null;
      }

      this._signalStatus({ error: errorInfo, busy: false }, runtimeOptions);

      if (runtimeOptions.throwErrors) {
        throw new ResourceError('request failed', errorInfo);
      }
    }
  }
}
Resource.commonHeaders = { 'Content-Type': 'application/json' };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$2 = {
  props: {
    status: {
      required: true
    },
    label: {}
  },
  data() {
    return {};
  }
};

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.status ? _c("div", { staticClass: "status" }, [_vm.status.start ? _c("b-alert", {
    staticClass: "loading",
    attrs: { show: "show", variant: "info" }
  }, [_vm._v("Loading " + _vm._s(_vm.label) + " ..."), _c("font-awesome-icon", {
    attrs: { icon: "spinner", pulse: "pulse" }
  })], 1) : _vm._e(), _vm.status.ready ? _c("div", [_vm._t("ready")], 2) : _vm._e(), _vm.status.error ? _c("div", [_vm.status.error.status === 422 ? [_c("rr-model-error", {
    attrs: { errors: _vm.status.error.body }
  })] : _vm.status.error.status === 500 ? [_vm.status.error.body ? [_c("b-alert", {
    attrs: { show: "show", variant: "danger" }
  }, [_vm._v(_vm._s(_vm.status.error.body.error))])] : [_c("b-alert", {
    attrs: { show: "show", variant: "danger" }
  }, [_vm._v("Something went wrong: Server returned Error 500")])]] : _vm.status.error.status === "error" ? [_c("b-alert", { attrs: { show: "show", variant: "danger" } }, [_vm._v(_vm._s(_vm.status.error.error))])] : [_c("pre", [_vm._v(_vm._s(_vm.status))])]], 2) : _vm._e()], 1) : _vm._e();
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

/* style */
const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-4b909558_0", { source: "\n.status[data-v-4b909558] {\n  position: relative;\n}\n.status .loading[data-v-4b909558] {\n  position: absolute;\n  z-index: 99;\n}\n", map: { "version": 3, "sources": ["/Users/piotr/Projects/vue-restful-resource/src/resource.status.vue"], "names": [], "mappings": ";AAkCA;EACA,mBAAA;CACA;AACA;EACA,mBAAA;EACA,YAAA;CACA", "file": "resource.status.vue", "sourcesContent": ["<template lang=\"pug\">\n  div.status(v-if=\"status\")\n    b-alert.loading(show variant=\"info\" v-if=\"status.start\")\n      | Loading {{label}} ...\n      font-awesome-icon(icon=\"spinner\" pulse)\n    div(v-if=\"status.ready\")\n      slot(name=\"ready\")\n    div(v-if=\"status.error\")\n      template(v-if=\"status.error.status === 422\")\n        rr-model-error(:errors=\"status.error.body\")\n      template(v-else-if=\"status.error.status === 500\")\n        template(v-if=\"status.error.body\")\n          b-alert(show variant=\"danger\") {{status.error.body.error}}\n        template(v-else)\n          b-alert(show variant=\"danger\") Something went wrong: Server returned Error 500\n      template(v-else-if=\"status.error.status === 'error'\")\n        b-alert(show variant=\"danger\") {{status.error.error}}\n      template(v-else)\n        pre {{status}}\n</template>\n<script>\nexport default {\n  props: {\n    status: {\n      required: true,\n    },\n    label: {},\n  },\n  data() {\n    return {}\n  },\n}\n</script>\n<style scoped>\n.status {\n  position: relative;\n}\n.status .loading {\n  position: absolute;\n  z-index: 99;\n}\n</style>\n"] }, media: undefined });
};
/* scoped */
const __vue_scope_id__$2 = "data-v-4b909558";
/* module identifier */
const __vue_module_identifier__$2 = undefined;
/* functional template */
const __vue_is_functional_template__$2 = false;
/* component normalizer */
function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "/Users/piotr/Projects/vue-restful-resource/src/resource.status.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var ResourceStatus = __vue_normalize__$2({ render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 }, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, __vue_create_injector__, undefined);

//
//
//
//
//

var script$3 = {
  props: {
    label: {},
    name: {
      required: true
    },
    filter: {
      default() {
        return {};
      }
    },
    seed: {}
  },
  created() {
    try {
      this._resource = this.$resource(this.name);
    } catch (e) {
      this.status = {
        error: {
          status: 'error',
          error: e.message
        }
      };
    }
  },
  async mounted() {
    this.$setDottedProps();
    await this.refresh();
  },
  data() {
    return {
      data: [],
      status: {},
      formStatus: {},
      _resource: null
    };
  },
  methods: {
    sync_data() {
      this.$emit('update:data', this.data);
    },
    get(id) {
      return this._resource.get(id, { statusTo: [this, 'formStatus'], throwErrors: false, queryParams: this.filter });
    },
    async refresh() {
      this.data = await this._resource.query(this.filter, { statusTo: [this, 'status'], throwErrors: false });
      this.sync_data();
    },
    async create(data) {
      let result = await this._resource.create(data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
      if (this.formStatus.ready) {
        let index = this.data.findIndex(item => item.id === result.id);
        if (index >= 0) {
          this.$set(this.data, index, result);
        } else {
          this.data.push(result);
        }
        this.sync_data();
      }
      return result;
    },
    async update(id, data) {
      let result = await this._resource.update(id, data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
      if (this.formStatus.ready) {
        let index = this.data.findIndex(item => item.id === id);
        this.$set(this.data, index, result);
      }
      return result;
    },
    async delete(id) {
      let result = await this._resource.delete(id, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
      if (result === null || !result.error) {
        let index = this.data.findIndex(item => item.id === id);
        this.$delete(this.data, index);
      }
      this.sync_data();
      return result;
    },
    member_get(id, action) {
      return this._resource.member_get(id, action, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    },
    member_post(id, action, data) {
      return this._resource.member_post(id, action, data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    }
  },
  watch: {
    status() {
      this.$emit('update:status', this.status);
    },
    async seed() {
      await this.refresh();
    }
  }
};

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("rr-resource-status", {
    attrs: { status: _vm.status, label: _vm.label }
  }), _c("rr-resource-status", {
    attrs: { status: _vm.formStatus, label: _vm.label }
  })], 1);
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

/* style */
const __vue_inject_styles__$3 = undefined;
/* scoped */
const __vue_scope_id__$3 = undefined;
/* module identifier */
const __vue_module_identifier__$3 = undefined;
/* functional template */
const __vue_is_functional_template__$3 = false;
/* component normalizer */
function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  // For security concerns, we use only base name in production mode.
  component.__file = "/Users/piotr/Projects/vue-restful-resource/src/collection.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */

var Collection = __vue_normalize__$3({ render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, undefined, undefined);

class ResourceCollection {
  constructor() {
    this.resources = {};
  }
  register(name, basePath, options) {
    if (options === undefined) {
      options = {};
    }
    let resourceName = options['resourceName'];
    delete options.resourceName;
    if (resourceName === undefined) {
      resourceName = name;
    }
    this.resources[name] = new Resource(resourceName, basePath, options);
  }
  get(name) {
    if (this.resources[name] !== undefined) {
      return this.resources[name];
    } else {
      throw new Error(`no resource registered as: ${name}`);
    }
  }
}

class VueResource {
  constructor() {}

  install(Vue, options) {
    Vue.resources = new ResourceCollection();

    Vue.prototype.$resource = name => {
      return Vue.resources.get(name);
    };

    Vue.prototype.$setDottedProps = function () {
      for (let key of Object.keys(this.$attrs)) {
        for (let pKey of this.$options._propKeys) {
          let mr = key.match(`^${pKey}-([^.]+)$`);
          if (mr) {
            let subKey = mr[1];
            if (this[pKey] === undefined) this[pKey] = {};
            this[pKey][subKey] = this.$attrs[key];
            delete this.$attrs[key];
          }
        }
      }
    };
  }
}

// import Vue from 'vue'

function install(Vue, options) {
  Vue.use(new VueResource());
  Vue.component('rr-model', Model);
  Vue.component('rr-collection', Collection);
  Vue.component('rr-resource-status', ResourceStatus);
  Vue.component('rr-model-error', ModelError);
}

module.exports = install;
