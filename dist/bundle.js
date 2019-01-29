import { Component as Component$1, Watch } from 'vue-property-decorator';
import { flatMap, mapKeys, map } from 'lodash';
import { Component } from 'vue-tsx-support';
import Component$2 from 'vue-class-component';
import { stringify } from 'qs';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var ModelError =
/*#__PURE__*/
function (_tsx$Component) {
  _inherits(ModelError, _tsx$Component);

  function ModelError() {
    _classCallCheck(this, ModelError);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModelError).apply(this, arguments));
  }

  _createClass(ModelError, [{
    key: "render",
    value: function render() {
      var _this = this;

      var h = arguments[0];
      return h("b-alert", {
        attrs: {
          show: true,
          variant: "danger"
        }
      }, [flatMap(mapKeys(this.errors, function (fieldName) {
        return map(_this.errors[fieldName], function (fieldError) {
          if (fieldName == 'base') {
            return h("div", [fieldError]);
          } else {
            return h("div", [fieldName, " ", fieldError]);
          }
        });
      }))]);
    }
  }]);

  return ModelError;
}(Component);

ModelError = __decorate([Component$1({
  props: {
    errors: {
      required: true
    }
  }
})], ModelError);

var ResourceStatus =
/*#__PURE__*/
function (_tsx$Component) {
  _inherits(ResourceStatus, _tsx$Component);

  function ResourceStatus() {
    _classCallCheck(this, ResourceStatus);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResourceStatus).apply(this, arguments));
  }

  _createClass(ResourceStatus, [{
    key: "renderError",
    value: function renderError() {
      var h = this.$createElement;

      if (this.status.error.status == 422) {
        return h(ModelError, {
          attrs: {
            errors: this.status.error.body
          }
        });
      } else if (this.status.error.status == 500) {
        if (this.status.error.body) {
          return h("b-alert", {
            attrs: {
              show: true,
              variant: "danger"
            }
          }, [this.status.error.body.error]);
        } else {
          return h("b-alert", {
            attrs: {
              show: true,
              variant: "danger"
            }
          }, ["Something went wrong: Server returned Error 500"]);
        }
      } else if (this.status.error.status == 'error') {
        return h("b-alert", {
          attrs: {
            show: true,
            variant: "danger"
          }
        }, [this.status.error.error]);
      } else {
        return h("pre", [this.status]);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];

      if (this.status) {
        return h("div", {
          style: "position: relative"
        }, [this.status.start ? h("b-alert", {
          style: "position: absolute; z-index: 99;",
          attrs: {
            show: true,
            variant: "info"
          }
        }, ["Loading ", this.label, " ...", h("font-awesome-icon", {
          attrs: {
            icon: "spinner",
            pulse: true
          }
        })]) : null, this.status.ready ? h("div", [h("slot", {
          attrs: {
            name: "ready"
          }
        })]) : null, this.status.error ? h("div", [this.renderError()]) : null]);
      } else {
        return h("div");
      }
    }
  }]);

  return ResourceStatus;
}(Component);

ResourceStatus = __decorate([Component$2({
  props: {
    status: {
      required: true
    },
    label: {}
  }
})], ResourceStatus);

var Model =
/*#__PURE__*/
function (_tsx$Component) {
  _inherits(Model, _tsx$Component);

  function Model() {
    var _this;

    _classCallCheck(this, Model);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).apply(this, arguments));
    _this.status = {};
    _this.formStatus = {};
    _this._resource = null;
    return _this;
  }

  _createClass(Model, [{
    key: "created",
    value: function created() {
      this._resource = this.$resource(this.name);
    }
  }, {
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$setDottedProps();
                _context.next = 3;
                return this.refresh();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", [h(ResourceStatus, {
        attrs: {
          status: this.status,
          label: this.label
        }
      }), h(ResourceStatus, {
        attrs: {
          status: this.formStatus,
          label: this.label
        }
      })]);
    }
  }, {
    key: "sync_data",
    value: function sync_data(data) {
      this.$emit('update:data', data);
    }
  }, {
    key: "refresh",
    value: function () {
      var _refresh = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.action) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 3;
                return this._resource.member_get(this.id, this.action, {
                  statusTo: [this, 'status'],
                  throwErrors: false,
                  queryParams: this.filter
                });

              case 3:
                data = _context2.sent;
                _context2.next = 9;
                break;

              case 6:
                _context2.next = 8;
                return this._resource.get(this.id, {
                  statusTo: [this, 'status'],
                  throwErrors: false,
                  queryParams: this.filter
                });

              case 8:
                data = _context2.sent;

              case 9:
                this.sync_data(data);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function refresh() {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(data) {
        var record;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.action) {
                  _context3.next = 2;
                  break;
                }

                throw new Error('update not supported for custom actions');

              case 2:
                _context3.next = 4;
                return this._resource.update(this.id, data, {
                  statusTo: [this, 'formStatus'],
                  throwErrors: false,
                  queryParams: this.filter
                });

              case 4:
                record = _context3.sent;
                this.sync_data(record);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function update(_x) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function _delete() {
      if (this.action) {
        throw new Error('delete not supported for custom actions');
      }

      return this._resource.delete(this.id, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    }
  }, {
    key: "onStatusChange",
    value: function onStatusChange() {
      this.$emit('update:status', this.status);
    }
  }, {
    key: "onSeedChange",
    value: function () {
      var _onSeedChange = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.refresh();

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onSeedChange() {
        return _onSeedChange.apply(this, arguments);
      }

      return onSeedChange;
    }()
  }]);

  return Model;
}(Component);

__decorate([Watch('status'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Model.prototype, "onStatusChange", null);

__decorate([Watch('seed'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], Model.prototype, "onSeedChange", null);

Model = __decorate([Component$2({
  props: {
    label: String,
    name: {
      required: true,
      type: String
    },
    id: {
      required: true
    },
    action: {
      default: null
    },
    filter: {
      default: function _default() {
        return {};
      }
    },
    seed: {}
  }
})], Model);

var Collection =
/*#__PURE__*/
function (_tsx$Component) {
  _inherits(Collection, _tsx$Component);

  function Collection() {
    var _this;

    _classCallCheck(this, Collection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collection).apply(this, arguments));
    _this.data = [];
    _this.status = {};
    _this.formStatus = {};
    _this._resource = null;
    return _this;
  }

  _createClass(Collection, [{
    key: "created",
    value: function created() {
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
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", [h(ResourceStatus, {
        attrs: {
          status: this.status,
          label: this.label
        }
      }), h(ResourceStatus, {
        attrs: {
          status: this.formStatus,
          label: this.label
        }
      })]);
    }
  }, {
    key: "mounted",
    value: function () {
      var _mounted = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.$setDottedProps();
                _context.next = 3;
                return this.refresh();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function mounted() {
        return _mounted.apply(this, arguments);
      }

      return mounted;
    }()
  }, {
    key: "sync_data",
    value: function sync_data() {
      this.$emit('update:data', this.data);
    }
  }, {
    key: "get",
    value: function get(id) {
      return this._resource.get(id, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    }
  }, {
    key: "refresh",
    value: function () {
      var _refresh = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this._resource.query(this.filter, {
                  statusTo: [this, 'status'],
                  throwErrors: false
                });

              case 2:
                this.data = _context2.sent;
                this.sync_data();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function refresh() {
        return _refresh.apply(this, arguments);
      }

      return refresh;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(data) {
        var result, index;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this._resource.create(data, {
                  statusTo: [this, 'formStatus'],
                  throwErrors: false,
                  queryParams: this.filter
                });

              case 2:
                result = _context3.sent;

                if (this.formStatus.ready) {
                  index = this.data.findIndex(function (item) {
                    return item.id === result.id;
                  });

                  if (index >= 0) {
                    this.$set(this.data, index, result);
                  } else {
                    this.data.push(result);
                  }

                  this.sync_data();
                }

                return _context3.abrupt("return", result);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id, data) {
        var result, index;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._resource.update(id, data, {
                  statusTo: [this, 'formStatus'],
                  throwErrors: false,
                  queryParams: this.filter
                });

              case 2:
                result = _context4.sent;

                if (this.formStatus.ready) {
                  index = this.data.findIndex(function (item) {
                    return item.id === id;
                  });
                  this.$set(this.data, index, result);
                }

                return _context4.abrupt("return", result);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function update(_x2, _x3) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id) {
        var result, index;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._resource.delete(id, {
                  statusTo: [this, 'formStatus'],
                  throwErrors: false,
                  queryParams: this.filter
                });

              case 2:
                result = _context5.sent;

                if (result === null || result === undefined || !result.error) {
                  if (!this.formStatus.error) {
                    index = this.data.findIndex(function (item) {
                      return item.id === id;
                    });
                    this.$delete(this.data, index);
                  }
                }

                this.sync_data();
                return _context5.abrupt("return", result);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _delete(_x4) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "member_get",
    value: function member_get(id, action) {
      return this._resource.member_get(id, action, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    }
  }, {
    key: "member_post",
    value: function member_post(id, action, data) {
      return this._resource.member_post(id, action, data, {
        statusTo: [this, 'formStatus'],
        throwErrors: false,
        queryParams: this.filter
      });
    }
  }, {
    key: "onStatusChange",
    value: function onStatusChange() {
      this.$emit('update:status', this.status);
    }
  }, {
    key: "onSeedChange",
    value: function () {
      var _onSeedChange = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.refresh();

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onSeedChange() {
        return _onSeedChange.apply(this, arguments);
      }

      return onSeedChange;
    }()
  }]);

  return Collection;
}(Component);

__decorate([Watch('status'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Collection.prototype, "onStatusChange", null);

__decorate([Watch('seed'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], Collection.prototype, "onSeedChange", null);

Collection = __decorate([Component$2({
  props: {
    label: String,
    name: {
      required: true,
      type: String
    },
    filter: {
      default: function _default() {
        return {};
      }
    },
    seed: {}
  }
})], Collection);

var ResourceError =
/*#__PURE__*/
function (_Error) {
  _inherits(ResourceError, _Error);

  function ResourceError(message, errorInfo) {
    var _this;

    _classCallCheck(this, ResourceError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceError).call(this, message));
    _this.errorInfo = errorInfo;
    return _this;
  }

  return ResourceError;
}(_wrapNativeSuper(Error));

var Resource =
/*#__PURE__*/
function () {
  function Resource(resouceName, basePath, options) {
    _classCallCheck(this, Resource);

    this.resourceName = resouceName;
    this.basePath = basePath;

    if (options) {
      this.defaultQuery = options.defaultQuery;
    } else {
      this.defaultQuery = {};
    }
  }

  _createClass(Resource, [{
    key: "query",
    value: function () {
      var _query = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(options) {
        var runtimeOptions,
            url,
            _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                runtimeOptions = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                url = this._buildUrl(undefined, options);
                return _context.abrupt("return", this._execute({
                  url: url
                }, runtimeOptions));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function query(_x) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(data, runtimeOptions) {
        var queryParams, url, body;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                queryParams = runtimeOptions.queryParams;
                delete runtimeOptions.queryParams;
                url = this._buildUrl(undefined, queryParams);
                body = {};
                data._ = '_';
                body[this.resourceName] = data;
                return _context2.abrupt("return", this._execute({
                  url: url,
                  method: 'post',
                  body: JSON.stringify(body),
                  headers: Resource.commonHeaders
                }, runtimeOptions));

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function create(_x2, _x3) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id, data) {
        var runtimeOptions,
            queryParams,
            url,
            body,
            _args3 = arguments;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                runtimeOptions = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : {};
                queryParams = runtimeOptions['queryParams'];
                delete runtimeOptions['queryParams'];
                url = this._buildUrl("/".concat(encodeURIComponent(String(id))), queryParams);
                body = {};
                data._ = '_';
                body[this.resourceName] = data;
                return _context3.abrupt("return", this._execute({
                  url: url,
                  method: 'put',
                  body: JSON.stringify(body),
                  headers: Resource.commonHeaders
                }, runtimeOptions));

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function update(_x4, _x5) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id) {
        var runtimeOptions,
            queryParams,
            url,
            _args4 = arguments;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                runtimeOptions = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
                queryParams = runtimeOptions.queryParams;
                delete runtimeOptions.queryParams;
                url = this._buildUrl("/".concat(encodeURIComponent(String(id))), queryParams);
                return _context4.abrupt("return", this._execute({
                  url: url,
                  method: 'delete',
                  headers: Resource.commonHeaders
                }, runtimeOptions));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function _delete(_x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "get",
    value: function () {
      var _get$$1 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(id) {
        var runtimeOptions,
            queryParams,
            url,
            _args5 = arguments;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                runtimeOptions = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
                queryParams = runtimeOptions['queryParams'];
                delete runtimeOptions['queryParams'];
                url = this._buildUrl("/".concat(encodeURIComponent(String(id))), queryParams);
                return _context5.abrupt("return", this._execute({
                  url: url,
                  headers: Resource.commonHeaders
                }, runtimeOptions));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function get(_x7) {
        return _get$$1.apply(this, arguments);
      }

      return get;
    }()
  }, {
    key: "member_get",
    value: function () {
      var _member_get = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(id, action) {
        var runtimeOptions,
            queryParams,
            url,
            _args6 = arguments;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                runtimeOptions = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : {};
                queryParams = runtimeOptions.queryParams;
                delete runtimeOptions.queryParams;
                url = this._buildUrl("/".concat(encodeURIComponent(String(id)), "/").concat(action), queryParams);
                return _context6.abrupt("return", this._execute({
                  url: url,
                  headers: Resource.commonHeaders
                }, runtimeOptions));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function member_get(_x8, _x9) {
        return _member_get.apply(this, arguments);
      }

      return member_get;
    }()
  }, {
    key: "member_post",
    value: function () {
      var _member_post = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(id, action, data) {
        var runtimeOptions,
            queryParams,
            url,
            _args7 = arguments;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                runtimeOptions = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : {};
                queryParams = runtimeOptions.queryParams;
                delete runtimeOptions.queryParams;
                url = this._buildUrl("/".concat(encodeURIComponent(String(id)), "/").concat(action), queryParams);
                return _context7.abrupt("return", this._execute({
                  url: url,
                  method: 'post',
                  body: JSON.stringify(data),
                  headers: Resource.commonHeaders
                }, runtimeOptions));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function member_post(_x10, _x11, _x12) {
        return _member_post.apply(this, arguments);
      }

      return member_post;
    }()
  }, {
    key: "_execute",
    value: function () {
      var _execute2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(options) {
        var runtimeOptions,
            result,
            _args8 = arguments;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                runtimeOptions = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};

                this._signalStatus({
                  start: true,
                  busy: true
                }, runtimeOptions);

                _context8.next = 4;
                return fetch(options.url, options);

              case 4:
                result = _context8.sent;
                return _context8.abrupt("return", this._handleResult(result, runtimeOptions));

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function _execute(_x13) {
        return _execute2.apply(this, arguments);
      }

      return _execute;
    }()
  }, {
    key: "_signalStatus",
    value: function _signalStatus(status) {
      var runtimeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var statusFunction = runtimeOptions.status;

      if (runtimeOptions.statusTo) {
        statusFunction = function statusFunction(s) {
          runtimeOptions.statusTo[0][runtimeOptions.statusTo[1]] = s;
        };
      }

      if (statusFunction) {
        statusFunction(status);
      }
    }
  }, {
    key: "_buildUrl",
    value: function _buildUrl(relative, options) {
      options = Object.assign({}, this.defaultQuery, options);
      var url = this.basePath;

      if (relative) {
        url += relative;
      }

      if (options) {
        url += '?' + stringify(options);
      }

      return url;
    }
  }, {
    key: "_handleResult",
    value: function () {
      var _handleResult2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(result) {
        var runtimeOptions,
            data,
            errorInfo,
            _args9 = arguments;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                runtimeOptions = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};

                if (!result.ok) {
                  _context9.next = 16;
                  break;
                }

                _context9.prev = 2;
                _context9.next = 5;
                return result.json();

              case 5:
                data = _context9.sent;

                this._signalStatus({
                  ready: true,
                  busy: false
                }, runtimeOptions);

                return _context9.abrupt("return", data);

              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](2);

                this._signalStatus({
                  ready: true,
                  busy: false
                }, runtimeOptions);

                return _context9.abrupt("return", null);

              case 14:
                _context9.next = 29;
                break;

              case 16:
                errorInfo = {
                  status: result.status,
                  statusText: result.statusText,
                  body: null
                };
                _context9.prev = 17;
                _context9.next = 20;
                return result.json();

              case 20:
                errorInfo.body = _context9.sent;
                _context9.next = 26;
                break;

              case 23:
                _context9.prev = 23;
                _context9.t1 = _context9["catch"](17);
                errorInfo.body = null;

              case 26:
                this._signalStatus({
                  error: errorInfo,
                  busy: false
                }, runtimeOptions);

                if (!runtimeOptions.throwErrors) {
                  _context9.next = 29;
                  break;
                }

                throw new ResourceError('request failed', errorInfo);

              case 29:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[2, 10], [17, 23]]);
      }));

      function _handleResult(_x14) {
        return _handleResult2.apply(this, arguments);
      }

      return _handleResult;
    }()
  }]);

  return Resource;
}();
Resource.commonHeaders = {
  'Content-Type': 'application/json'
};

var ResourceCollection =
/*#__PURE__*/
function () {
  function ResourceCollection() {
    _classCallCheck(this, ResourceCollection);

    this.resources = {};
  }

  _createClass(ResourceCollection, [{
    key: "register",
    value: function register(name, basePath) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var resourceName = options.resourceName;
      delete options.resourceName;

      if (resourceName === undefined) {
        resourceName = name;
      }

      this.resources[name] = new Resource(resourceName, basePath, options);
    }
  }, {
    key: "get",
    value: function get(name) {
      if (this.resources[name] !== undefined) {
        return this.resources[name];
      } else {
        throw new Error("no resource registered as: ".concat(name));
      }
    }
  }]);

  return ResourceCollection;
}();

var VueResource =
/*#__PURE__*/
function () {
  function VueResource() {
    _classCallCheck(this, VueResource);
  }

  _createClass(VueResource, [{
    key: "install",
    value: function install(Vue, options) {
      Vue.resources = new ResourceCollection();

      Vue.prototype.$resource = function (name) {
        return Vue.resources.get(name);
      };

      Vue.prototype.$setDottedProps = function () {
        var _arr = Object.keys(this.$attrs);

        for (var _i = 0; _i < _arr.length; _i++) {
          var key = _arr[_i];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.$options._propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var pKey = _step.value;
              var mr = key.match("^".concat(pKey, "-([^.]+)$"));

              if (mr) {
                var subKey = mr[1];
                if (this[pKey] === undefined) this[pKey] = {};
                this[pKey][subKey] = this.$attrs[key];
                delete this.$attrs[key];
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      };
    }
  }]);

  return VueResource;
}();

var VueRestfulResource = function VueRestfulResource(Vue, options) {
  Vue.use(new VueResource());
  Vue.component('rr-model', Model);
  Vue.component('rr-collection', Collection);
  Vue.component('rr-resource-status', ResourceStatus);
  Vue.component('rr-model-error', ModelError);
};

export { VueRestfulResource, Model, ResourceStatus, Collection, Resource };
