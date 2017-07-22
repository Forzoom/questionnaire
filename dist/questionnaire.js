(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["questionnaire"] = factory();
	else
		root["questionnaire"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholder = placeholder;
exports.isUndef = isUndef;
function placeholder(val) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return isUndef(val) ? placeholder : val;
}

function isUndef(val) {
  return val === null || val === undefined;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports._options = exports._Vue = undefined;
exports.install = install;

var _questionnaire = __webpack_require__(26);

var _questionnaire2 = _interopRequireDefault(_questionnaire);

var _choice = __webpack_require__(3);

var _choice2 = _interopRequireDefault(_choice);

var _multipleChoice = __webpack_require__(4);

var _multipleChoice2 = _interopRequireDefault(_multipleChoice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Vue = exports._Vue = void 0;
var _options = exports._options = void 0;

function install(Vue, options) {
    if (install.installed) {
        return;
    }
    install.installed = true;
    exports._Vue = _Vue = Vue;
    exports._options = _options = options;

    if (!options.AMAP_KEY) {
        console.log('[questionnaire warning] lost AMAP_KEY, address components cannot work correctly');
    }

    console.log('[questionnaire] installed');

    Vue.component('Questionnaire', _questionnaire2.default);
    Vue.component('ROChoice', _choice2.default);
    Vue.component('ROMultipleChoice', _multipleChoice2.default);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//     <div class="weui-cells weui-cells_radio">
//         <label v-for="choice in source" class="weui-cell weui-check__label" :for="`${id}_${choice.value}`">
//             <div class="weui-cell__bd">
//                 <p>{{choice.text}}</p>
//             </div>
//             <div class="weui-cell__ft" :style="{color: color}">
//                 <input type="radio" class="weui-check" :id="`${id}_${choice.value}`"  :value="choice.value" v-model="val">
//                 <span class="weui-icon-checked"></span>
//             </div>
//         </label>
//     </div>
// </template>


exports.default = {
    name: 'ROChoice',
    props: {
        /**
         *
         */
        id: {
            required: true,
            type: String
        },
        // {value: string, text: string}
        source: {
            required: true,
            type: Array,
            default: function _default() {
                return [];
            }
        },
        /**
         * 结果
         */
        result: {
            type: String
        },
        /**
         * 勾选框所显示的颜色
         */
        color: '' // 颜色
    },
    computed: {
        val: {
            get: function get() {
                return this.result;
            },
            set: function set(val) {
                this.$emit('item', {
                    id: this.id,
                    result: val
                });
            }
        }
    },
    render: function render(h) {
        var vm = this;
        var labels = [];

        var _loop = function _loop(i, len) {
            var choice = vm.source[i];
            // 渲染bd
            var bd = h('div', {
                'class': ['weui-cell__bd']
            }, [h('p', {}, choice.text)]);
            // 渲染ft
            var ft = h('div', {
                'class': ['weui-cell__ft'],
                style: {
                    color: vm.color
                }
            }, [
            // input
            h('input', {
                'class': ['weui-check'],
                attrs: {
                    type: 'radio',
                    id: vm.id + '_' + choice.value,
                    value: choice.value
                    // checked: false,
                },
                domProps: {
                    checked: choice.value === vm.val
                }
            }),
            // span
            h('span', {
                'class': ['weui-icon-checked']
            })]);
            // label
            var label = h('label', {
                'class': ['weui-cell', 'weui-check__label'],
                attrs: {
                    for: vm.id + '_' + choice.value
                },
                on: {
                    click: function click(val) {
                        vm.val = choice.value;
                    }
                }
            }, [bd, ft]);

            labels.push(label);
        };

        for (var i = 0, len = vm.source.length; i < len; i++) {
            _loop(i, len);
        }

        return h('div', {
            'class': ['weui-cells', 'weui-cells_radio']
        }, labels);
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//     <div class="weui-cells weui-cells_checkbox">
//         <label v-for="choice in source" class="weui-cell weui-check__label" :for="`${id}_${choice.value}`">
//             <div class="weui-cell__hd" :style="{color: color}">
//                 <input type="checkbox" class="weui-check" :id="`${id}_${choice.value}`" :value="choice.value"  v-model="val">
//                 <i class="weui-icon-checked"></i>
//             </div>
//             <div class="weui-cell__bd">
//                 <p>{{choice.text}}</p>
//             </div>
//         </label>
//     </div>
// </template>

exports.default = {
    name: 'ROMultiChoice',
    props: {
        id: {
            required: true,
            type: String
        },
        // {value: string, text: string}
        source: {
            required: true,
            type: Array,
            default: function _default() {
                return [];
            }
        },
        result: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        color: ''
    },
    data: function data() {
        return {
            // 最终的结果
            val: []
        };
    },

    watch: {
        '$prop.result': function $propResult(val) {
            this.val = val;
        },
        val: function val(_val) {
            this.$emit('item', {
                id: this.id,
                result: _val
            });
        }
    },
    mounted: function mounted() {
        this.val = this.result;
    },
    render: function render(h) {
        var vm = this;
        var labels = [];

        var _loop = function _loop(i, len) {
            var choice = vm.source[i];
            // 渲染bd
            var hd = h('div', {
                'class': ['weui-cell__hd']
            }, [h('p', {}, choice.text)]);
            // 渲染ft
            var bd = h('div', {
                'class': ['weui-cell__bd'],
                style: {
                    color: vm.color
                }
            }, [
            // input
            h('input', {
                'class': ['weui-check'],
                attrs: {
                    type: 'checkbox',
                    id: vm.id + '_' + choice.value,
                    value: choice.value
                    // checked: false,
                },
                domProps: {
                    checked: vm.val.indexOf(choice.value) !== -1
                }
            }),
            // span
            h('span', {
                'class': ['weui-icon-checked']
            })]);
            // label
            var label = h('label', {
                'class': ['weui-cell', 'weui-check__label'],
                attrs: {
                    for: vm.id + '_' + choice.value
                },
                on: {
                    click: function toggle(e) {
                        var pos = vm.val.indexOf(choice.value);
                        // 已经存在的情况下
                        if (pos !== -1) {
                            vm.val.splice(pos, 1);
                        } else {
                            // 不存在的情况下
                            vm.val.push(choice.value);
                        }
                        e.preventDefault();
                    }
                }
            }, [hd, bd]);

            labels.push(label);
        };

        for (var i = 0, len = vm.source.length; i < len; i++) {
            _loop(i, len);
        }

        return h('div', {
            'class': ['weui-cells', 'weui-cells_checkbox']
        }, labels);
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(40)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["mobile-button"]=e():t["mobile-button"]=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return null===t||void 0===t};e.default={name:"MobileButton",props:{id:{type:String},name:{type:String},classList:{type:Array},tag:null,to:null,isDisabled:{type:Boolean,default:!1},isBlock:{type:Boolean,default:!1}},render:function(t){var e=this,n=["btn","btn-mobile",r(e.name)?null:"btn-"+e.name].concat(o(e.classList||[]),[e.isDisabled?"disabled":null,e.isBlock?"btn-block":null]),i=r(e.tag)?"a":e.tag,l=r(e.id)?{}:{id:e.id},u={};return r(e.to)||("router-link"===i?u.to=e.to:"a"===i&&(l.href=e.to)),t(i,{class:n,domProps:l,on:{click:function(){e.isDisabled||e.$emit("click")}}},e.$slots.default)}}}])});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _wx = __webpack_require__(18);

var _install = __webpack_require__(2);

exports.default = {
    name: 'ROAddressLocation',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Object,
            default: function _default() {
                return {
                    placeholder: ''
                };
            }
        },
        result: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            mutableSource: {
                placeholder: ''
            }
        };
    },

    computed: {
        val: {
            get: function get() {
                return this.result;
            },
            set: function set(val) {
                this.$emit('item', {
                    id: this.id,
                    result: val
                });
            }
        },
        mergeSource: function mergeSource() {
            return _extends(_extends({
                placeholder: ''
            }, this.source), this.mutableSource);
        }
    },
    methods: {
        regeo: function regeo() {
            var vm = this;
            return (0, _wx.getLocation)().then(function (_ref) {
                var status = _ref.status,
                    location = _ref.data;

                if (status !== 0) {
                    throw new Error('getLocation fail');
                }
                return location;
            }).then(function (location) {
                var key = _install._options.AMAP_KEY;
                var url = 'https://restapi.amap.com/v3/geocode/regeo?key=' + key + '&location=' + location.longitude + ',' + location.latitude;
                return vm.axios.get(url);
            }).then(function (response) {
                var data = response.data.regeocode.addressComponent;
                var province = data.province;
                var city = data.city;
                vm.val = '' + province + city;
            });
        },

        // 当点击按钮进行定位
        onClickLocation: function onClickLocation() {
            var vm = this;
            vm.$emit('load');
            vm.regeo().then(function () {
                vm.$emit('finish');
            }, function () {
                vm.mutableSource.placeholder = '自动获取失败，请手动输入';
                vm.$emit('finish');
            });
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); //
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
//

var _utils = __webpack_require__(1);

var _address = __webpack_require__(17);

var _address2 = _interopRequireDefault(_address);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 通过rawAddress生成provinceList
var provinceList = _address2.default.map(function (_) {
    return _.n;
});
exports.default = {
    name: 'ROAddressPicker',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Object,
            default: function _default() {
                return {
                    placeholder: '', // 
                    date: new Date()
                };
            }
        },
        result: {
            type: Array
        }
    },
    data: function data() {
        return {
            visible: false, // 是否显示
            cancelText: '取消', // 
            confirmText: '确定',
            slots: [], // 需要使用代码来生成
            currentValue: [] // 当前页面上显示的内容
        };
    },
    computed: {
        itemHeight: function itemHeight() {
            return 36 * (window.devicePixelRatio || 1);
        }
    },
    watch: {
        visible: function visible(_visible) {
            if (_visible) {
                this.$emit('background');
            } else {
                this.$emit('foreground');
            }
        },
        /**
         * 尝试修改slots
         */
        currentValue: function currentValue(val, old) {
            var _this = this;

            var v = this.currentValue;
            this.generateSlots(val, old);
            this.$nextTick(function () {
                var $picker = _this.$refs.picker;
                $picker.setSlotValue(0, v[0]);
                $picker.setSlotValue(1, v[1]);
            });
        },
        '$props.result': function $propsResult(v) {
            this.currentValue = v;
        }
    },
    methods: {
        /**
         * 当用户操作时更新currentValue
         *
         * @param picker picker对象
         * @param values 各个slots中的数据
         */
        onValueChange: function onValueChange(picker, values) {
            this.currentValue = picker.$children.filter(function (child) {
                return child.currentValue !== undefined;
            }).map(function (child) {
                return child.currentValue;
            });
        },
        onClick: function onClick() {
            this.open();
        },
        onClickContainer: function onClickContainer() {
            this.close();
        },
        /**
         */
        onConfirm: function onConfirm() {
            this.$emit('item', {
                id: this.id,
                result: this.currentValue
            });
            this.close();
        },
        open: function open() {
            this.visible = true;
        },
        close: function close() {
            this.visible = false;
        },
        /**
                  *
         * @param {Array} oldValue
         * @param {Array} newValue
         */
        generateSlots: function generateSlots(newValue, oldValue) {
            var _oldValue = _slicedToArray(oldValue, 1),
                oldProvince = _oldValue[0];

            var _newValue = _slicedToArray(newValue, 1),
                newProvince = _newValue[0];

            if (oldProvince !== newProvince) {
                var cityList = [];
                for (var i = 0, len = _address2.default.length; i < len; i++) {
                    if (_address2.default[i].n === newProvince) {
                        cityList = _address2.default[i].c.map(function (_) {
                            return _.n;
                        });
                    }
                }
                this.slots = [{
                    flex: 1,
                    values: provinceList
                }, {
                    flex: 1,
                    values: cityList
                }];
            }
        }
    },
    filters: {
        placeholder: _utils.placeholder
    },
    mounted: function mounted() {
        var vm = this;
        var currentValue = ['北京市', ''];
        if (Array.isArray(vm.result) && vm.result[0] != null && vm.result[0] != null) {
            currentValue = vm.result;
        }
        vm.currentValue = currentValue;
    }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(1);

// find MONTH_DAY fail in safari
// const MONTH_DAY = [ null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, ];
function isLeapYear(year) {
    return year % 4 === 0 && (year % 400 === 0 ? true : year % 100 !== 0);
}
// month
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

function getMonthDay(year, month) {
    var MONTH_DAY = [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year) && month === 2) {
        return MONTH_DAY[month] + 1;
    }
    return MONTH_DAY[month];
}
function fillValues(rim) {
    var arr = [];
    for (var i = rim[0], len = rim[1]; i <= len; i++) {
        arr.push('' + i);
    }
    return arr;
}
exports.default = {
    name: 'RODatePicker',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Object,
            default: function _default() {
                return {
                    placeholder: '', // 
                    date: new Date()
                };
            }
        },
        result: {
            type: String // 输出的数据是一个string
        }
    },
    data: function data() {
        return {
            visible: false, // 是否显示
            cancelText: '取消', // 
            confirmText: '确定',
            slots: [], // 需要使用代码来生成
            currentValue: [] // 当前页面上显示的内容
        };
    },
    computed: {
        // 原始数据
        rims: function rims() {
            var year = this.currentValue[0];
            var month = this.currentValue[1];
            var date = this.currentValue[2];
            var current = new Date();
            var rims = {
                year: [1900, current.getFullYear()], // 到今年为止
                month: [1, 12],
                date: [1, 31]
            };
            // 修正正确的month数据
            rims.date[1] = getMonthDay(year, month);
            // 限制最大时间
            if (year === String(current.getFullYear())) {
                rims.month[1] = String(current.getMonth() + 1); // 限制month
                if (month === String(current.getMonth() + 1)) {
                    rims.date[1] = String(current.getDate()); // 限制date 
                }
            }
            return rims;
        },
        itemHeight: function itemHeight() {
            return 36 * (window.devicePixelRatio || 1);
        }
    },
    watch: {
        rims: function rims() {
            this.generateSlots();
        },
        visible: function visible(_visible) {
            if (_visible) {
                this.$emit('background');
            } else {
                this.$emit('foreground');
            }
        },
        '$props.result': function $propsResult() {
            var v = this.currentValue;
            var $picker = this.$refs.picker;
            $picker.setSlotValue(0, '' + v[0]);
            $picker.setSlotValue(1, '' + v[1]);
            $picker.setSlotValue(2, '' + v[2]);
        }
    },
    methods: {
        /**
         * @param picker picker对象
         * @param value 各个slots中的数据
         */
        onValueChange: function onValueChange(picker, values) {
            this.currentValue = picker.$children.filter(function (child) {
                return child.currentValue !== undefined;
            }).map(function (child) {
                return child.currentValue;
            });
        },
        onClick: function onClick() {
            this.open();
        },
        onClickContainer: function onClickContainer() {
            this.close();
        },
        /**
         */
        onConfirm: function onConfirm() {
            var value = this.currentValue.map(function (_) {
                return parseInt(_);
            });
            var year = value[0];
            var month = (value[1] < 10 ? '0' : '') + value[1];
            var date = (value[2] < 10 ? '0' : '') + value[2];
            this.$emit('item', {
                id: this.id,
                result: year + '-' + month + '-' + date
            });
            this.close();
        },
        open: function open() {
            this.visible = true;
        },
        close: function close() {
            this.visible = false;
        },
        generateSlots: function generateSlots() {
            var vm = this;
            var rims = vm.rims;
            vm.slots = [{
                flex: 1,
                values: fillValues(rims.year)
            }, {
                flex: 1,
                values: fillValues(rims.month)
            }, {
                flex: 1,
                values: fillValues(rims.date)
            }];
        }
    },
    filters: {
        placeholder: _utils.placeholder
    },
    mounted: function mounted() {
        var vm = this;
        var currentValue = null;
        if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(vm.result)) {
            currentValue = vm.currentValue = vm.result.split('-');
        } else {
            var current = vm.source.date || new Date();
            currentValue = vm.currentValue = [current.getFullYear(), current.getMonth() + 1, current.getDate()];
        }
        vm.$nextTick(function () {
            var $picker = vm.$refs.picker;
            $picker.setSlotValue(0, '' + currentValue[0]);
            $picker.setSlotValue(1, '' + currentValue[1]);
            $picker.setSlotValue(2, '' + currentValue[2]);
        });
    }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

exports.default = {
    name: 'ROInput',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            required: true,
            type: Object,
            default: function _default() {
                return {
                    placeholder: '',
                    type: 'text',
                    pattern: null,
                    inputValidator: null,
                    submitValidator: null
                };
            }
        },
        result: {
            type: String,
            default: ''
        }
    },
    data: function data() {
        return {
            warn: false,
            focus: false
        };
    },
    computed: {
        mergeSource: function mergeSource() {
            return _extends({
                placeholder: '',
                type: 'text',
                pattern: null,
                inputValidator: null,
                submitValidator: null
            }, this.source);
        },
        val: {
            get: function get() {
                return this.result;
            },
            set: function set(val) {
                // 检测inputValidator
                var source = this.mergeSource;
                if (false) {
                    console.log('inputValidator', source.inputValidator, !source.inputValidator.test(val));
                }

                // 将input中的值修正，使用之前的this.result
                if (source.inputValidator && !source.inputValidator.test(val)) {
                    if (false) {
                        console.log('try to modify this.val', this.val, this.result);
                    }
                    val = this.val = this.result;
                }
                // 
                if (val !== this.result) {
                    this.$emit('item', {
                        id: this.id,
                        result: val
                    });
                }
            }
        }
    },
    methods: {
        onFocus: function onFocus() {
            this.focus = true;
        },
        onBlur: function onBlur() {
            this.focus = false;
            // 检测并且判断是否需要warn
            var source = this.mergeSource;
            if (source.submitValidator) {
                if (!source.submitValidator.test(this.val) && !this.warn) {
                    this.warn = true;
                    this.$emit('warn');
                } else if (source.submitValidator.test(this.val) && this.warn) {
                    this.warn = false;
                    this.$emit('validate');
                }
            }
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _install = __webpack_require__(2);

var _mobileButton = __webpack_require__(7);

var _mobileButton2 = _interopRequireDefault(_mobileButton);

var _choice = __webpack_require__(3);

var _choice2 = _interopRequireDefault(_choice);

var _multipleChoice = __webpack_require__(4);

var _multipleChoice2 = _interopRequireDefault(_multipleChoice);

var _addressLocation = __webpack_require__(22);

var _addressLocation2 = _interopRequireDefault(_addressLocation);

var _addressPicker = __webpack_require__(23);

var _addressPicker2 = _interopRequireDefault(_addressPicker);

var _textarea = __webpack_require__(29);

var _textarea2 = _interopRequireDefault(_textarea);

var _uploader = __webpack_require__(19);

var _uploader2 = _interopRequireDefault(_uploader);

var _datePicker = __webpack_require__(24);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = __webpack_require__(28);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(25);

var _input2 = _interopRequireDefault(_input);

var _segment = __webpack_require__(27);

var _segment2 = _interopRequireDefault(_segment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    name: 'ROQuestionnaire',
    components: {
        ROChoice: _choice2.default,
        ROMultipleChoice: _multipleChoice2.default,
        ROAddressLocation: _addressLocation2.default,
        ROAddressPicker: _addressPicker2.default,
        ROTextarea: _textarea2.default,
        ROUploader: _uploader2.default,
        RODatePicker: _datePicker2.default,
        ROSelect: _select2.default,
        ROInput: _input2.default,
        ROSegment: _segment2.default,
        MobileButton: _mobileButton2.default
    },
    props: {
        /**
         * banner链接，存在的情况下，将显示头部banner
         */
        banner: {
            type: String
        },
        /**
         * 问卷数据
         */
        questions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        /**
         * 是否禁止提交
         */
        disableSubmit: {
            type: Boolean,
            default: false
        },
        /**
         * 禁止提交时显示文本
         */
        disableHint: {
            type: String,
            default: ''
        },
        /**
         * 允许提交文本
         */
        allowHint: {
            type: String,
            default: '提交'
        },
        /**
         * 提醒填写文本
         */
        fillHint: {
            type: String,
            default: '未填写完整'
        },
        /**
         * 需要统一的颜色，将应用在
         *  ROChoice
         *  ROMultipleChoice
         */
        color: {
            required: true,
            type: String
        },
        /**
         * - name
         */
        mobileButtonName: {
            type: String,
            default: function _default() {
                return '';
            }
        },
        /**
         * 要求检查的required，包含类型 {type: 'equal', key, value}
         */
        requiredCondition: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    data: function data() {
        return {
            showDialog: false, // 是否显示dialog
            showLoading: false, // 是否显示load
            background: false, // 是否在后台，即在弹窗之后，用来判断是否需要锁定touch事件 => no
            warnCount: 0, // 当前的warn的数量
            dialogTitle: null,
            dialogContent: null
        };
    },
    computed: {
        // 是否必填都已经填写完成
        isComplete: function isComplete() {
            console.log('in isComplete', this.warnCount);
            if (this.warnCount > 0) {
                return false;
            }
            var result = true;
            for (var i = 0, len = this.questions.length; i < len; i++) {
                var question = this.questions[i];
                var qResult = question.result;
                var isRequired = this.required[question.id];
                if (isRequired && (qResult === '' || qResult === null || Object.prototype.toString.call(qResult) === '[object Array]' && qResult.length === 0)) {
                    result = false;
                    break;
                }
            }
            return result;
        },
        submitHint: function submitHint() {
            if (this.disableSubmit) {
                return this.disableHint || ' ';
            }
            // 请求数据: 获取测试结果
            if (this.isComplete) {
                return this.allowHint;
            } else {
                return this.fillHint;
            }
        },
        /**
         * 最后的结果
         */
        result: function result() {
            var data = {};
            this.questions.forEach(function (question) {
                data[question.id] = question.result;
            });
            return data;
        },
        /**
         * 所有的required要求，默认没有要求
         */
        required: function required() {
            var vm = this;

            var required = {};
            for (var i = 0, len = vm.questions.length; i < len; i++) {
                var question = vm.questions[i];
                required[question.id] = question.meta ? Boolean(question.meta.isRequired) : false;
            }

            // 当前的数据结果
            vm.requiredCondition.forEach(function (condition) {
                switch (condition.type) {
                    case 'equal':
                        // 处理break
                        if (vm.result[condition.key] === condition.value) {
                            // 条件成立
                            required[condition.id] = condition.isRequired;
                        }
                        break;
                }
            });

            console.log(required);
            return required;
        }
    },
    watch: {
        watchCount: function watchCount(val) {
            this.isComplete;
        }
    },
    mounted: function mounted() {
        console.log(this.required);
    },

    methods: {
        onUpdate: function onUpdate(patch) {
            for (var i = 0, len = this.questions.length; i < len; i++) {
                var question = this.questions[i];
                if (question.id === patch.id) {
                    if (false) {
                        console.log(question.id, patch.result);
                    }
                    question.result = patch.result;
                    break;
                }
            }
        },
        onStartLoad: function onStartLoad() {
            this.processing();
        },
        onFinishLoad: function onFinishLoad() {
            this.finish();
        },
        onBackground: function onBackground() {
            this.goBackground();
        },
        onForeground: function onForeground() {
            this.goForeground();
        },
        onClickSubmit: function onClickSubmit() {
            if (!this.disableSubmit && this.isComplete) {
                this.$emit('submit', this.result);
            }
        },
        onWarn: function onWarn() {
            this.warnCount++;
        },
        onValidate: function onValidate() {
            this.warnCount--;
        },
        onDialog: function onDialog(val) {
            this.dialogTitle = val.dialogTitle;
            this.dialogContent = val.dialogContent;
            this.showDialog = true;
        },
        // 显示load
        processing: function processing() {
            this.showLoading = true;
        },
        // 隐藏load
        finish: function finish() {
            this.showLoading = false;
        },
        // 进入到后台
        goBackground: function goBackground() {
            this.background = true;
        },
        goForeground: function goForeground() {
            this.background = false;
        },
        noWhenBackground: function noWhenBackground(e) {
            if (this.background) {
                e.preventDefault();
                return false;
            }
            return true;
        }
    }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

/**
 * 类似于radio
 *
 *  颜色默认使用黑色
 */
exports.default = {
    name: 'ROSegment',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        result: {
            type: String
        },
        /**
         * 显示颜色
         */
        color: {
            type: String
        }
    },
    data: function data() {
        return {
            val: null
        };
    },

    computed: {
        /**
         * 每行中显示的数量
         */
        rowCount: function rowCount() {
            var len = this.source.length;
            if (len === 2) {
                return 2;
            }
            var mod4remain = len % 4;
            var mod3remain = len % 3;
            if (mod4remain === 0) {
                return 4;
            }
            if (mod3remain === 0) {
                return 3;
            }
            // 如果两者相同的情况下，选择4，让整个页面看起来更致密
            if (4 - mod4remain <= 3 - mod3remain) {
                return 4;
            }
            return 3;
        }
    },
    watch: {
        /**
         * 当prop.result改变是，对应的val也需要改变
         */
        '$props.result': function $propsResult(val) {
            this.val = val;
        }
    },
    methods: {
        /**
         * 点击按钮时的效果
         */
        onClickItem: function onClickItem(val) {
            if (val !== this.val) {
                console.log('emit');
                this.$emit('item', {
                    id: this.id,
                    result: val
                });
            }
        }
    }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(1);

exports.default = {
    name: 'ROSelect',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Object,
            default: function _default() {
                return {
                    slots: [],
                    placeholder: '' // 
                };
            }
        },
        result: {
            type: String // 输出的数据是一个string
        }
    },
    data: function data() {
        return {
            visible: false, // 是否显示
            cancelText: '取消', // 
            confirmText: '确定',
            currentValue: '' // 当前页面上显示的内容
        };
    },
    computed: {
        generatedSlots: function generatedSlots() {
            return [{
                flex: 1,
                values: this.source.slots
            }];
        },
        itemHeight: function itemHeight() {
            return 36 * (window.devicePixelRatio || 1);
        }
    },
    watch: {
        visible: function visible(_visible) {
            if (_visible) {
                this.$emit('background');
            } else {
                this.$emit('foreground');
            }
        }
    },
    filters: {
        placeholder: _utils.placeholder
    },
    methods: {
        /**
         * @param picker picker对象
         * @param value 各个slots中的数据
         */
        onValueChange: function onValueChange(picker, values) {
            this.currentValue = values[0];
        },
        onClick: function onClick() {
            this.open();
        },
        onClickContainer: function onClickContainer() {
            this.close();
        },
        /**
         */
        onConfirm: function onConfirm() {
            this.$emit('item', {
                id: this.id,
                result: this.currentValue
            });
            this.close();
        },
        open: function open() {
            // this.$refs.picker.open();
            this.visible = true;
        },
        close: function close() {
            this.visible = false;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.$refs.picker.setSlotValue(0, _this.source.slots[0]);
        });
    }
}; //
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: 'ROTextarea',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Object,
            default: function _default() {
                return {
                    placeholder: '',
                    max: 200
                };
            }
        },
        result: {
            type: String,
            default: ''
        }
    },
    computed: {
        val: {
            get: function get() {
                return this.result;
            },
            set: function set(val) {
                this.$emit('item', {
                    id: this.id,
                    result: val
                });
            }
        }
    },
    watch: {
        '$props.result': function $propsResult(value, oldValue) {
            if (value !== oldValue) {
                if (value.length > this.source.max) {
                    this.val = value.substr(0, this.source.max);
                } else {
                    this.val = value;
                }
            }
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _install = __webpack_require__(2);

exports.default = {
  install: _install.install
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	n: '北京市',
	// d: '110000',
	c: [{
		n: ''
		// d: '110100',
	}]
}, {
	n: '天津市',
	// d: '120000',
	c: [{
		n: ''
		// d: '120100',
	}]
}, {
	n: '河北省',
	// d: '130000',
	c: [{
		// d: '130100',
		n: '石家庄市'
	}, {
		// d: '130183',
		n: '晋州市'
	}, {
		// d: '130184',
		n: '新乐市'
	}, {
		// d: '130200',
		n: '唐山市'
	}, {
		// d: '130281',
		n: '遵化市'
	}, {
		// d: '130283',
		n: '迁安市'
	}, {
		// d: '130300',
		n: '秦皇岛市'
	}, {
		// d: '130400',
		n: '邯郸市'
	}, {
		// d: '130481',
		n: '武安市'
	}, {
		// d: '130500',
		n: '邢台市'
	}, {
		// d: '130581',
		n: '南宫市'
	}, {
		// d: '130582',
		n: '沙河市'
	}, {
		// d: '130600',
		n: '保定市'
	}, {
		// d: '130681',
		n: '涿州市'
	}, {
		// d: '130683',
		n: '安国市'
	}, {
		// d: '130684',
		n: '高碑店市'
	}, {
		// d: '130700',
		n: '张家口市'
	}, {
		// d: '130800',
		n: '承德市'
	}, {
		// d: '130900',
		n: '沧州市'
	}, {
		// d: '130981',
		n: '泊头市'
	}, {
		// d: '130982',
		n: '任丘市'
	}, {
		// d: '130983',
		n: '黄骅市'
	}, {
		// d: '130984',
		n: '河间市'
	}, {
		// d: '131000',
		n: '廊坊市'
	}, {
		// d: '131081',
		n: '霸州市'
	}, {
		// d: '131082',
		n: '三河市'
	}, {
		// d: '131100',
		n: '衡水市'
	}, {
		// d: '131181',
		n: '冀州市'
	}, {
		// d: '131182',
		n: '深州市'
	}, {
		// d: '139001',
		n: '定州市'
	}, {
		// d: '139002',
		n: '辛集市'
	}]
}, {
	n: '山西省',
	// d: '140000',
	c: [{
		// d: '140100',
		n: '太原市'
	}, {
		// d: '140181',
		n: '古交市'
	}, {
		// d: '140200',
		n: '大同市'
	}, {
		// d: '140300',
		n: '阳泉市'
	}, {
		// d: '140400',
		n: '长治市'
	}, {
		// d: '140481',
		n: '潞城市'
	}, {
		// d: '140500',
		n: '晋城市'
	}, {
		// d: '140581',
		n: '高平市'
	}, {
		// d: '140600',
		n: '朔州市'
	}, {
		// d: '140700',
		n: '晋中市'
	}, {
		// d: '140781',
		n: '介休市'
	}, {
		// d: '140800',
		n: '运城市'
	}, {
		// d: '140881',
		n: '永济市'
	}, {
		// d: '140882',
		n: '河津市'
	}, {
		// d: '140900',
		n: '忻州市'
	}, {
		// d: '140981',
		n: '原平市'
	}, {
		// d: '141000',
		n: '临汾市'
	}, {
		// d: '141081',
		n: '侯马市'
	}, {
		// d: '141082',
		n: '霍州市'
	}, {
		// d: '141100',
		n: '吕梁市'
	}, {
		// d: '141181',
		n: '孝义市'
	}, {
		// d: '141182',
		n: '汾阳市'
	}]
}, {
	n: '内蒙古自治区',
	// d: '150000',
	c: [{
		// d: '150100',
		n: '呼和浩特市'
	}, {
		// d: '150200',
		n: '包头市'
	}, {
		// d: '150300',
		n: '乌海市'
	}, {
		// d: '150400',
		n: '赤峰市'
	}, {
		// d: '150500',
		n: '通辽市'
	}, {
		// d: '150581',
		n: '霍林郭勒市'
	}, {
		// d: '150600',
		n: '鄂尔多斯市'
	}, {
		// d: '150700',
		n: '呼伦贝尔市'
	}, {
		// d: '150781',
		n: '满洲里市'
	}, {
		// d: '150782',
		n: '牙克石市'
	}, {
		// d: '150783',
		n: '扎兰屯市'
	}, {
		// d: '150784',
		n: '额尔古纳市'
	}, {
		// d: '150785',
		n: '根河市'
	}, {
		// d: '150800',
		n: '巴彦淖尔市'
	}, {
		// d: '150900',
		n: '乌兰察布市'
	}, {
		// d: '150981',
		n: '丰镇市'
	}, {
		// d: '152200',
		n: '兴安盟'
	}, {
		// d: '152201',
		n: '乌兰浩特市'
	}, {
		// d: '152202',
		n: '阿尔山市'
	}, {
		// d: '152500',
		n: '锡林郭勒盟'
	}, {
		// d: '152501',
		n: '二连浩特市'
	}, {
		// d: '152502',
		n: '锡林浩特市'
	}, {
		// d: '152900',
		n: '阿拉善盟'
	}]
}, {
	n: '辽宁省',
	// d: '210000',
	c: [{
		// d: '210100',
		n: '沈阳市'
	}, {
		// d: '210181',
		n: '新民市'
	}, {
		// d: '210200',
		n: '大连市'
	}, {
		// d: '210281',
		n: '瓦房店市'
	}, {
		// d: '210282',
		n: '普兰店市'
	}, {
		// d: '210283',
		n: '庄河市'
	}, {
		// d: '210300',
		n: '鞍山市'
	}, {
		// d: '210381',
		n: '海城市'
	}, {
		// d: '210400',
		n: '抚顺市'
	}, {
		// d: '210500',
		n: '本溪市'
	}, {
		// d: '210600',
		n: '丹东市'
	}, {
		// d: '210681',
		n: '东港市'
	}, {
		// d: '210682',
		n: '凤城市'
	}, {
		// d: '210700',
		n: '锦州市'
	}, {
		// d: '210781',
		n: '凌海市'
	}, {
		// d: '210782',
		n: '北镇市'
	}, {
		// d: '210800',
		n: '营口市'
	}, {
		// d: '210881',
		n: '盖州市'
	}, {
		// d: '210882',
		n: '大石桥市'
	}, {
		// d: '210900',
		n: '阜新市'
	}, {
		// d: '211000',
		n: '辽阳市'
	}, {
		// d: '211081',
		n: '灯塔市'
	}, {
		// d: '211100',
		n: '盘锦市'
	}, {
		// d: '211200',
		n: '铁岭市'
	}, {
		// d: '211281',
		n: '调兵山市'
	}, {
		// d: '211282',
		n: '开原市'
	}, {
		// d: '211300',
		n: '朝阳市'
	}, {
		// d: '211381',
		n: '北票市'
	}, {
		// d: '211382',
		n: '凌源市'
	}, {
		// d: '211400',
		n: '葫芦岛市'
	}, {
		// d: '211481',
		n: '兴城市'
	}]
}, {
	n: '吉林省',
	// d: '220000',
	c: [{
		// d: '220100',
		n: '长春市'
	}, {
		// d: '220182',
		n: '榆树市'
	}, {
		// d: '220183',
		n: '德惠市'
	}, {
		// d: '220200',
		n: '吉林市'
	}, {
		// d: '220281',
		n: '蛟河市'
	}, {
		// d: '220282',
		n: '桦甸市'
	}, {
		// d: '220283',
		n: '舒兰市'
	}, {
		// d: '220284',
		n: '磐石市'
	}, {
		// d: '220300',
		n: '四平市'
	}, {
		// d: '220381',
		n: '公主岭市'
	}, {
		// d: '220382',
		n: '双辽市'
	}, {
		// d: '220400',
		n: '辽源市'
	}, {
		// d: '220500',
		n: '通化市'
	}, {
		// d: '220581',
		n: '梅河口市'
	}, {
		// d: '220582',
		n: '集安市'
	}, {
		// d: '220600',
		n: '白山市'
	}, {
		// d: '220681',
		n: '临江市'
	}, {
		// d: '220700',
		n: '松原市'
	}, {
		// d: '220781',
		n: '扶余市'
	}, {
		// d: '220800',
		n: '白城市'
	}, {
		// d: '220881',
		n: '洮南市'
	}, {
		// d: '220882',
		n: '大安市'
	}, {
		// d: '222401',
		n: '延吉市'
	}, {
		// d: '222402',
		n: '图们市'
	}, {
		// d: '222403',
		n: '敦化市'
	}, {
		// d: '222404',
		n: '珲春市'
	}, {
		// d: '222405',
		n: '龙井市'
	}, {
		// d: '222406',
		n: '和龙市'
	}]
}, {
	n: '黑龙江省',
	// d: '230000',
	c: [{
		// d: '230100',
		n: '哈尔滨市'
	}, {
		// d: '230183',
		n: '尚志市'
	}, {
		// d: '230184',
		n: '五常市'
	}, {
		// d: '230200',
		n: '齐齐哈尔市'
	}, {
		// d: '230281',
		n: '讷河市'
	}, {
		// d: '230300',
		n: '鸡西市'
	}, {
		// d: '230381',
		n: '虎林市'
	}, {
		// d: '230382',
		n: '密山市'
	}, {
		// d: '230400',
		n: '鹤岗市'
	}, {
		// d: '230500',
		n: '双鸭山市'
	}, {
		// d: '230600',
		n: '大庆市'
	}, {
		// d: '230700',
		n: '伊春市'
	}, {
		// d: '230781',
		n: '铁力市'
	}, {
		// d: '230800',
		n: '佳木斯市'
	}, {
		// d: '230881',
		n: '同江市'
	}, {
		// d: '230882',
		n: '富锦市'
	}, {
		// d: '230900',
		n: '七台河市'
	}, {
		// d: '231000',
		n: '牡丹江市'
	}, {
		// d: '231081',
		n: '绥芬河市'
	}, {
		// d: '231083',
		n: '海林市'
	}, {
		// d: '231084',
		n: '宁安市'
	}, {
		// d: '231085',
		n: '穆棱市'
	}, {
		// d: '231100',
		n: '黑河市'
	}, {
		// d: '231181',
		n: '北安市'
	}, {
		// d: '231182',
		n: '五大连池市'
	}, {
		// d: '231200',
		n: '绥化市'
	}, {
		// d: '231281',
		n: '安达市'
	}, {
		// d: '231282',
		n: '肇东市'
	}, {
		// d: '231283',
		n: '海伦市'
	}]
}, {
	n: '上海市',
	// d: '310000',
	c: [{
		n: ''
	}]
}, {
	n: '江苏省',
	// d: '320000',
	c: [{
		// d: '320100',
		n: '南京市'
	}, {
		// d: '320200',
		n: '无锡市'
	}, {
		// d: '320281',
		n: '江阴市'
	}, {
		// d: '320282',
		n: '宜兴市'
	}, {
		// d: '320300',
		n: '徐州市'
	}, {
		// d: '320381',
		n: '新沂市'
	}, {
		// d: '320382',
		n: '邳州市'
	}, {
		// d: '320400',
		n: '常州市'
	}, {
		// d: '320481',
		n: '溧阳市'
	}, {
		// d: '320500',
		n: '苏州市'
	}, {
		// d: '320581',
		n: '常熟市'
	}, {
		// d: '320582',
		n: '张家港市'
	}, {
		// d: '320583',
		n: '昆山市'
	}, {
		// d: '320585',
		n: '太仓市'
	}, {
		// d: '320600',
		n: '南通市'
	}, {
		// d: '320681',
		n: '启东市'
	}, {
		// d: '320682',
		n: '如皋市'
	}, {
		// d: '320684',
		n: '海门市'
	}, {
		// d: '320700',
		n: '连云港市'
	}, {
		// d: '320800',
		n: '淮安市'
	}, {
		// d: '320900',
		n: '盐城市'
	}, {
		// d: '320981',
		n: '东台市'
	}, {
		// d: '321000',
		n: '扬州市'
	}, {
		// d: '321081',
		n: '仪征市'
	}, {
		// d: '321084',
		n: '高邮市'
	}, {
		// d: '321100',
		n: '镇江市'
	}, {
		// d: '321181',
		n: '丹阳市'
	}, {
		// d: '321182',
		n: '扬中市'
	}, {
		// d: '321183',
		n: '句容市'
	}, {
		// d: '321200',
		n: '泰州市'
	}, {
		// d: '321281',
		n: '兴化市'
	}, {
		// d: '321282',
		n: '靖江市'
	}, {
		// d: '321283',
		n: '泰兴市'
	}, {
		// d: '321300',
		n: '宿迁市'
	}]
}, {
	// d: '330000',
	n: '浙江省',
	c: [{
		// d: '330100',
		n: '杭州市'
	}, {
		// d: '330182',
		n: '建德市'
	}, {
		// d: '330185',
		n: '临安市'
	}, {
		// d: '330200',
		n: '宁波市'
	}, {
		// d: '330281',
		n: '余姚市'
	}, {
		// d: '330282',
		n: '慈溪市'
	}, {
		// d: '330283',
		n: '奉化市'
	}, {
		// d: '330300',
		n: '温州市'
	}, {
		// d: '330381',
		n: '瑞安市'
	}, {
		// d: '330382',
		n: '乐清市'
	}, {
		// d: '330400',
		n: '嘉兴市'
	}, {
		// d: '330481',
		n: '海宁市'
	}, {
		// d: '330482',
		n: '平湖市'
	}, {
		// d: '330483',
		n: '桐乡市'
	}, {
		// d: '330500',
		n: '湖州市'
	}, {
		// d: '330600',
		n: '绍兴市'
	}, {
		// d: '330681',
		n: '诸暨市'
	}, {
		// d: '330683',
		n: '嵊州市'
	}, {
		// d: '330700',
		n: '金华市'
	}, {
		// d: '330781',
		n: '兰溪市'
	}, {
		// d: '330782',
		n: '义乌市'
	}, {
		// d: '330783',
		n: '东阳市'
	}, {
		// d: '330784',
		n: '永康市'
	}, {
		// d: '330800',
		n: '衢州市'
	}, {
		// d: '330881',
		n: '江山市'
	}, {
		// d: '330900',
		n: '舟山市'
	}, {
		// d: '331000',
		n: '台州市'
	}, {
		// d: '331081',
		n: '温岭市'
	}, {
		// d: '331082',
		n: '临海市'
	}, {
		// d: '331100',
		n: '丽水市'
	}, {
		// d: '331181',
		n: '龙泉市'
	}]
}, {
	// d: '340000',
	n: '安徽省',
	c: [{
		// d: '340100',
		n: '合肥市'
	}, {
		// d: '340181',
		n: '巢湖市'
	}, {
		// d: '340200',
		n: '芜湖市'
	}, {
		// d: '340300',
		n: '蚌埠市'
	}, {
		// d: '340400',
		n: '淮南市'
	}, {
		// d: '340500',
		n: '马鞍山市'
	}, {
		// d: '340600',
		n: '淮北市'
	}, {
		// d: '340700',
		n: '铜陵市'
	}, {
		// d: '340800',
		n: '安庆市'
	}, {
		// d: '340881',
		n: '桐城市'
	}, {
		// d: '341000',
		n: '黄山市'
	}, {
		// d: '341100',
		n: '滁州市'
	}, {
		// d: '341181',
		n: '天长市'
	}, {
		// d: '341182',
		n: '明光市'
	}, {
		// d: '341200',
		n: '阜阳市'
	}, {
		// d: '341282',
		n: '界首市'
	}, {
		// d: '341300',
		n: '宿州市'
	}, {
		// d: '341500',
		n: '六安市'
	}, {
		// d: '341600',
		n: '亳州市'
	}, {
		// d: '341700',
		n: '池州市'
	}, {
		// d: '341800',
		n: '宣城市'
	}, {
		// d: '341881',
		n: '宁国市'
	}]
}, {
	// d: '350000',
	n: '福建省',
	c: [{
		// d: '350100',
		n: '福州市'
	}, {
		// d: '350181',
		n: '福清市'
	}, {
		// d: '350182',
		n: '长乐市'
	}, {
		// d: '350200',
		n: '厦门市'
	}, {
		// d: '350300',
		n: '莆田市'
	}, {
		// d: '350400',
		n: '三明市'
	}, {
		// d: '350481',
		n: '永安市'
	}, {
		// d: '350500',
		n: '泉州市'
	}, {
		// d: '350581',
		n: '石狮市'
	}, {
		// d: '350582',
		n: '晋江市'
	}, {
		// d: '350583',
		n: '南安市'
	}, {
		// d: '350600',
		n: '漳州市'
	}, {
		// d: '350681',
		n: '龙海市'
	}, {
		// d: '350700',
		n: '南平市'
	}, {
		// d: '350781',
		n: '邵武市'
	}, {
		// d: '350782',
		n: '武夷山市'
	}, {
		// d: '350783',
		n: '建瓯市'
	}, {
		// d: '350800',
		n: '龙岩市'
	}, {
		// d: '350881',
		n: '漳平市'
	}, {
		// d: '350900',
		n: '宁德市'
	}, {
		// d: '350981',
		n: '福安市'
	}, {
		// d: '350982',
		n: '福鼎市'
	}]
}, {
	// d: '360000',
	n: '江西省',
	c: [{
		// d: '360100',
		n: '南昌市'
	}, {
		// d: '360200',
		n: '景德镇市'
	}, {
		// d: '360281',
		n: '乐平市'
	}, {
		// d: '360300',
		n: '萍乡市'
	}, {
		// d: '360400',
		n: '九江市'
	}, {
		// d: '360481',
		n: '瑞昌市'
	}, {
		// d: '360482',
		n: '共青城市'
	}, {
		// d: '360500',
		n: '新余市'
	}, {
		// d: '360600',
		n: '鹰潭市'
	}, {
		// d: '360681',
		n: '贵溪市'
	}, {
		// d: '360700',
		n: '赣州市'
	}, {
		// d: '360781',
		n: '瑞金市'
	}, {
		// d: '360800',
		n: '吉安市'
	}, {
		// d: '360881',
		n: '井冈山市'
	}, {
		// d: '360900',
		n: '宜春市'
	}, {
		// d: '360981',
		n: '丰城市'
	}, {
		// d: '360982',
		n: '樟树市'
	}, {
		// d: '360983',
		n: '高安市'
	}, {
		// d: '361000',
		n: '抚州市'
	}, {
		// d: '361100',
		n: '上饶市'
	}, {
		// d: '361181',
		n: '德兴市'
	}]
}, {
	// d: '370000',
	n: '山东省',
	c: [{
		// d: '370100',
		n: '济南市'
	}, {
		// d: '370181',
		n: '章丘市'
	}, {
		// d: '370200',
		n: '青岛市'
	}, {
		// d: '370281',
		n: '胶州市'
	}, {
		// d: '370282',
		n: '即墨市'
	}, {
		// d: '370283',
		n: '平度市'
	}, {
		// d: '370285',
		n: '莱西市'
	}, {
		// d: '370300',
		n: '淄博市'
	}, {
		// d: '370400',
		n: '枣庄市'
	}, {
		// d: '370481',
		n: '滕州市'
	}, {
		// d: '370500',
		n: '东营市'
	}, {
		// d: '370600',
		n: '烟台市'
	}, {
		// d: '370681',
		n: '龙口市'
	}, {
		// d: '370682',
		n: '莱阳市'
	}, {
		// d: '370683',
		n: '莱州市'
	}, {
		// d: '370684',
		n: '蓬莱市'
	}, {
		// d: '370685',
		n: '招远市'
	}, {
		// d: '370686',
		n: '栖霞市'
	}, {
		// d: '370687',
		n: '海阳市'
	}, {
		// d: '370700',
		n: '潍坊市'
	}, {
		// d: '370781',
		n: '青州市'
	}, {
		// d: '370782',
		n: '诸城市'
	}, {
		// d: '370783',
		n: '寿光市'
	}, {
		// d: '370784',
		n: '安丘市'
	}, {
		// d: '370785',
		n: '高密市'
	}, {
		// d: '370786',
		n: '昌邑市'
	}, {
		// d: '370800',
		n: '济宁市'
	}, {
		// d: '370881',
		n: '曲阜市'
	}, {
		// d: '370883',
		n: '邹城市'
	}, {
		// d: '370900',
		n: '泰安市'
	}, {
		// d: '370982',
		n: '新泰市'
	}, {
		// d: '370983',
		n: '肥城市'
	}, {
		// d: '371000',
		n: '威海市'
	}, {
		// d: '371082',
		n: '荣成市'
	}, {
		// d: '371083',
		n: '乳山市'
	}, {
		// d: '371100',
		n: '日照市'
	}, {
		// d: '371200',
		n: '莱芜市'
	}, {
		// d: '371300',
		n: '临沂市'
	}, {
		// d: '371400',
		n: '德州市'
	}, {
		// d: '371481',
		n: '乐陵市'
	}, {
		// d: '371482',
		n: '禹城市'
	}, {
		// d: '371500',
		n: '聊城市'
	}, {
		// d: '371581',
		n: '临清市'
	}, {
		// d: '371600',
		n: '滨州市'
	}, {
		// d: '371700',
		n: '菏泽市'
	}]
}, {
	// d: '410000',
	n: '河南省',
	c: [{
		// d: '410100',
		n: '郑州市'
	}, {
		// d: '410181',
		n: '巩义市'
	}, {
		// d: '410182',
		n: '荥阳市'
	}, {
		// d: '410183',
		n: '新密市'
	}, {
		// d: '410184',
		n: '新郑市'
	}, {
		// d: '410185',
		n: '登封市'
	}, {
		// d: '410200',
		n: '开封市'
	}, {
		// d: '410300',
		n: '洛阳市'
	}, {
		// d: '410381',
		n: '偃师市'
	}, {
		// d: '410400',
		n: '平顶山市'
	}, {
		// d: '410481',
		n: '舞钢市'
	}, {
		// d: '410482',
		n: '汝州市'
	}, {
		// d: '410500',
		n: '安阳市'
	}, {
		// d: '410581',
		n: '林州市'
	}, {
		// d: '410600',
		n: '鹤壁市'
	}, {
		// d: '410700',
		n: '新乡市'
	}, {
		// d: '410781',
		n: '卫辉市'
	}, {
		// d: '410800',
		n: '焦作市'
	}, {
		// d: '410882',
		n: '沁阳市'
	}, {
		// d: '410883',
		n: '孟州市'
	}, {
		// d: '410900',
		n: '濮阳市'
	}, {
		// d: '411000',
		n: '许昌市'
	}, {
		// d: '411081',
		n: '禹州市'
	}, {
		// d: '411082',
		n: '长葛市'
	}, {
		// d: '411100',
		n: '漯河市'
	}, {
		// d: '411200',
		n: '三门峡市'
	}, {
		// d: '411281',
		n: '义马市'
	}, {
		// d: '411282',
		n: '灵宝市'
	}, {
		// d: '411300',
		n: '南阳市'
	}, {
		// d: '411381',
		n: '邓州市'
	}, {
		// d: '411400',
		n: '商丘市'
	}, {
		// d: '411481',
		n: '永城市'
	}, {
		// d: '411500',
		n: '信阳市'
	}, {
		// d: '411600',
		n: '周口市'
	}, {
		// d: '411681',
		n: '项城市'
	}, {
		// d: '411700',
		n: '驻马店市'
	}, {
		// d: '419001',
		n: '济源市'
	}]
}, {
	// d: '420000',
	n: '湖北省',
	c: [{
		// d: '420100',
		n: '武汉市'
	}, {
		// d: '420200',
		n: '黄石市'
	}, {
		// d: '420281',
		n: '大冶市'
	}, {
		// d: '420300',
		n: '十堰市'
	}, {
		// d: '420381',
		n: '丹江口市'
	}, {
		// d: '420500',
		n: '宜昌市'
	}, {
		// d: '420581',
		n: '宜都市'
	}, {
		// d: '420582',
		n: '当阳市'
	}, {
		// d: '420583',
		n: '枝江市'
	}, {
		// d: '420600',
		n: '襄阳市'
	}, {
		// d: '420682',
		n: '老河口市'
	}, {
		// d: '420683',
		n: '枣阳市'
	}, {
		// d: '420684',
		n: '宜城市'
	}, {
		// d: '420700',
		n: '鄂州市'
	}, {
		// d: '420800',
		n: '荆门市'
	}, {
		// d: '420881',
		n: '钟祥市'
	}, {
		// d: '420900',
		n: '孝感市'
	}, {
		// d: '420981',
		n: '应城市'
	}, {
		// d: '420982',
		n: '安陆市'
	}, {
		// d: '420984',
		n: '汉川市'
	}, {
		// d: '421000',
		n: '荆州市'
	}, {
		// d: '421081',
		n: '石首市'
	}, {
		// d: '421083',
		n: '洪湖市'
	}, {
		// d: '421087',
		n: '松滋市'
	}, {
		// d: '421100',
		n: '黄冈市'
	}, {
		// d: '421181',
		n: '麻城市'
	}, {
		// d: '421182',
		n: '武穴市'
	}, {
		// d: '421200',
		n: '咸宁市'
	}, {
		// d: '421281',
		n: '赤壁市'
	}, {
		// d: '421300',
		n: '随州市'
	}, {
		// d: '421381',
		n: '广水市'
	}, {
		// d: '422801',
		n: '恩施市'
	}, {
		// d: '422802',
		n: '利川市'
	}, {
		// d: '429004',
		n: '仙桃市'
	}, {
		// d: '429005',
		n: '潜江市'
	}, {
		// d: '429006',
		n: '天门市'
	}]
}, {
	// d: '430000',
	n: '湖南省',
	c: [{
		// d: '430100',
		n: '长沙市'
	}, {
		// d: '430181',
		n: '浏阳市'
	}, {
		// d: '430200',
		n: '株洲市'
	}, {
		// d: '430281',
		n: '醴陵市'
	}, {
		// d: '430300',
		n: '湘潭市'
	}, {
		// d: '430381',
		n: '湘乡市'
	}, {
		// d: '430382',
		n: '韶山市'
	}, {
		// d: '430400',
		n: '衡阳市'
	}, {
		// d: '430481',
		n: '耒阳市'
	}, {
		// d: '430482',
		n: '常宁市'
	}, {
		// d: '430500',
		n: '邵阳市'
	}, {
		// d: '430581',
		n: '武冈市'
	}, {
		// d: '430600',
		n: '岳阳市'
	}, {
		// d: '430681',
		n: '汨罗市'
	}, {
		// d: '430682',
		n: '临湘市'
	}, {
		// d: '430700',
		n: '常德市'
	}, {
		// d: '430781',
		n: '津市市'
	}, {
		// d: '430800',
		n: '张家界市'
	}, {
		// d: '430900',
		n: '益阳市'
	}, {
		// d: '430981',
		n: '沅江市'
	}, {
		// d: '431000',
		n: '郴州市'
	}, {
		// d: '431081',
		n: '资兴市'
	}, {
		// d: '431100',
		n: '永州市'
	}, {
		// d: '431200',
		n: '怀化市'
	}, {
		// d: '431281',
		n: '洪江市'
	}, {
		// d: '431300',
		n: '娄底市'
	}, {
		// d: '431381',
		n: '冷水江市'
	}, {
		// d: '431382',
		n: '涟源市'
	}, {
		// d: '433101',
		n: '吉首市'
	}]
}, {
	// d: '440000',
	n: '广东省',
	c: [{
		// d: '440100',
		n: '广州市'
	}, {
		// d: '440200',
		n: '韶关市'
	}, {
		// d: '440281',
		n: '乐昌市'
	}, {
		// d: '440282',
		n: '南雄市'
	}, {
		// d: '440300',
		n: '深圳市'
	}, {
		// d: '440400',
		n: '珠海市'
	}, {
		// d: '440500',
		n: '汕头市'
	}, {
		// d: '440600',
		n: '佛山市'
	}, {
		// d: '440700',
		n: '江门市'
	}, {
		// d: '440781',
		n: '台山市'
	}, {
		// d: '440783',
		n: '开平市'
	}, {
		// d: '440784',
		n: '鹤山市'
	}, {
		// d: '440785',
		n: '恩平市'
	}, {
		// d: '440800',
		n: '湛江市'
	}, {
		// d: '440881',
		n: '廉江市'
	}, {
		// d: '440882',
		n: '雷州市'
	}, {
		// d: '440883',
		n: '吴川市'
	}, {
		// d: '440900',
		n: '茂名市'
	}, {
		// d: '440981',
		n: '高州市'
	}, {
		// d: '440982',
		n: '化州市'
	}, {
		// d: '440983',
		n: '信宜市'
	}, {
		// d: '441200',
		n: '肇庆市'
	}, {
		// d: '441284',
		n: '四会市'
	}, {
		// d: '441300',
		n: '惠州市'
	}, {
		// d: '441400',
		n: '梅州市'
	}, {
		// d: '441481',
		n: '兴宁市'
	}, {
		// d: '441500',
		n: '汕尾市'
	}, {
		// d: '441581',
		n: '陆丰市'
	}, {
		// d: '441600',
		n: '河源市'
	}, {
		// d: '441700',
		n: '阳江市'
	}, {
		// d: '441781',
		n: '阳春市'
	}, {
		// d: '441800',
		n: '清远市'
	}, {
		// d: '441881',
		n: '英德市'
	}, {
		// d: '441882',
		n: '连州市'
	}, {
		// d: '441900',
		n: '东莞市'
	}, {
		// d: '442000',
		n: '中山市'
	}, {
		// d: '445100',
		n: '潮州市'
	}, {
		// d: '445200',
		n: '揭阳市'
	}, {
		// d: '445281',
		n: '普宁市'
	}, {
		// d: '445300',
		n: '云浮市'
	}, {
		// d: '445381',
		n: '罗定市'
	}]
}, {
	// d: '450000',
	n: '广西壮族自治区',
	c: [{
		// d: '450100',
		n: '南宁市'
	}, {
		// d: '450200',
		n: '柳州市'
	}, {
		// d: '450300',
		n: '桂林市'
	}, {
		// d: '450400',
		n: '梧州市'
	}, {
		// d: '450481',
		n: '岑溪市'
	}, {
		// d: '450500',
		n: '北海市'
	}, {
		// d: '450600',
		n: '防城港市'
	}, {
		// d: '450681',
		n: '东兴市'
	}, {
		// d: '450700',
		n: '钦州市'
	}, {
		// d: '450800',
		n: '贵港市'
	}, {
		// d: '450881',
		n: '桂平市'
	}, {
		// d: '450900',
		n: '玉林市'
	}, {
		// d: '450981',
		n: '北流市'
	}, {
		// d: '451000',
		n: '百色市'
	}, {
		// d: '451081',
		n: '靖西市'
	}, {
		// d: '451100',
		n: '贺州市'
	}, {
		// d: '451200',
		n: '河池市'
	}, {
		// d: '451281',
		n: '宜州市'
	}, {
		// d: '451300',
		n: '来宾市'
	}, {
		// d: '451381',
		n: '合山市'
	}, {
		// d: '451400',
		n: '崇左市'
	}, {
		// d: '451481',
		n: '凭祥市'
	}]
}, {
	// d: '460000',
	n: '海南省',
	c: [{
		// d: '460100',
		n: '海口市'
	}, {
		// d: '460200',
		n: '三亚市'
	}, {
		// d: '460300',
		n: '三沙市'
	}, {
		// d: '460321',
		n: '西沙群岛'
	}, {
		// d: '460322',
		n: '南沙群岛'
	}, {
		// d: '460323',
		n: '中沙群岛的岛礁及其海域'
	}, {
		// d: '469001',
		n: '五指山市'
	}, {
		// d: '469002',
		n: '琼海市'
	}, {
		// d: '469003',
		n: '儋州市'
	}, {
		// d: '469005',
		n: '文昌市'
	}, {
		// d: '469006',
		n: '万宁市'
	}, {
		// d: '469007',
		n: '东方市'
	}]
}, {
	n: '重庆市',
	// d: '500000',
	c: [{
		n: ''
	}]
}, {
	// d: '510000',
	n: '四川省',
	c: [{
		// d: '510100',
		n: '成都市'
	}, {
		// d: '510181',
		n: '都江堰市'
	}, {
		// d: '510182',
		n: '彭州市'
	}, {
		// d: '510183',
		n: '邛崃市'
	}, {
		// d: '510184',
		n: '崇州市'
	}, {
		// d: '510300',
		n: '自贡市'
	}, {
		// d: '510400',
		n: '攀枝花市'
	}, {
		// d: '510500',
		n: '泸州市'
	}, {
		// d: '510600',
		n: '德阳市'
	}, {
		// d: '510681',
		n: '广汉市'
	}, {
		// d: '510682',
		n: '什邡市'
	}, {
		// d: '510683',
		n: '绵竹市'
	}, {
		// d: '510700',
		n: '绵阳市'
	}, {
		// d: '510781',
		n: '江油市'
	}, {
		// d: '510800',
		n: '广元市'
	}, {
		// d: '510900',
		n: '遂宁市'
	}, {
		// d: '511000',
		n: '内江市'
	}, {
		// d: '511100',
		n: '乐山市'
	}, {
		// d: '511181',
		n: '峨眉山市'
	}, {
		// d: '511300',
		n: '南充市'
	}, {
		// d: '511381',
		n: '阆中市'
	}, {
		// d: '511400',
		n: '眉山市'
	}, {
		// d: '511500',
		n: '宜宾市'
	}, {
		// d: '511600',
		n: '广安市'
	}, {
		// d: '511681',
		n: '华蓥市'
	}, {
		// d: '511700',
		n: '达州市'
	}, {
		// d: '511781',
		n: '万源市'
	}, {
		// d: '511800',
		n: '雅安市'
	}, {
		// d: '511900',
		n: '巴中市'
	}, {
		// d: '512000',
		n: '资阳市'
	}, {
		// d: '512081',
		n: '简阳市'
	}, {
		// d: '513301',
		n: '康定市'
	}, {
		// d: '513401',
		n: '西昌市'
	}]
}, {
	// d: '520000',
	n: '贵州省',
	c: [{
		// d: '520100',
		n: '贵阳市'
	}, {
		// d: '520181',
		n: '清镇市'
	}, {
		// d: '520200',
		n: '六盘水市'
	}, {
		// d: '520300',
		n: '遵义市'
	}, {
		// d: '520381',
		n: '赤水市'
	}, {
		// d: '520382',
		n: '仁怀市'
	}, {
		// d: '520400',
		n: '安顺市'
	}, {
		// d: '520500',
		n: '毕节市'
	}, {
		// d: '520600',
		n: '铜仁市'
	}, {
		// d: '522301',
		n: '兴义市'
	}, {
		// d: '522601',
		n: '凯里市'
	}, {
		// d: '522701',
		n: '都匀市'
	}, {
		// d: '522702',
		n: '福泉市'
	}]
}, {
	// d: '530000',
	n: '云南省',
	c: [{
		// d: '530100',
		n: '昆明市'
	}, {
		// d: '530181',
		n: '安宁市'
	}, {
		// d: '530300',
		n: '曲靖市'
	}, {
		// d: '530381',
		n: '宣威市'
	}, {
		// d: '530400',
		n: '玉溪市'
	}, {
		// d: '530500',
		n: '保山市'
	}, {
		// d: '530581',
		n: '腾冲市'
	}, {
		// d: '530600',
		n: '昭通市'
	}, {
		// d: '530700',
		n: '丽江市'
	}, {
		// d: '530800',
		n: '普洱市'
	}, {
		// d: '530900',
		n: '临沧市'
	}, {
		// d: '532301',
		n: '楚雄市'
	}, {
		// d: '532501',
		n: '个旧市'
	}, {
		// d: '532502',
		n: '开远市'
	}, {
		// d: '532503',
		n: '蒙自市'
	}, {
		// d: '532504',
		n: '弥勒市'
	}, {
		// d: '532601',
		n: '文山市'
	}, {
		// d: '532801',
		n: '景洪市'
	}, {
		// d: '532901',
		n: '大理市'
	}, {
		// d: '533102',
		n: '瑞丽市'
	}, {
		// d: '533103',
		n: '芒市'
	}, {
		// d: '533401',
		n: '香格里拉市'
	}]
}, {
	// d: '540000',
	n: '西藏自治区',
	c: [{
		// d: '540100',
		n: '拉萨市'
	}, {
		// d: '540200',
		n: '日喀则市'
	}, {
		// d: '540300',
		n: '昌都市'
	}, {
		// d: '540400',
		n: '林芝市'
	}]
}, {
	// d: '610000',
	n: '陕西省',
	c: [{
		// d: '610100',
		n: '西安市'
	}, {
		// d: '610200',
		n: '铜川市'
	}, {
		// d: '610300',
		n: '宝鸡市'
	}, {
		// d: '610400',
		n: '咸阳市'
	}, {
		// d: '610481',
		n: '兴平市'
	}, {
		// d: '610500',
		n: '渭南市'
	}, {
		// d: '610581',
		n: '韩城市'
	}, {
		// d: '610582',
		n: '华阴市'
	}, {
		// d: '610600',
		n: '延安市'
	}, {
		// d: '610700',
		n: '汉中市'
	}, {
		// d: '610800',
		n: '榆林市'
	}, {
		// d: '610900',
		n: '安康市'
	}, {
		// d: '611000',
		n: '商洛市'
	}]
}, {
	// d: '620000',
	n: '甘肃省',
	c: [{
		// d: '620100',
		n: '兰州市'
	}, {
		// d: '620200',
		n: '嘉峪关市'
	}, {
		// d: '620300',
		n: '金昌市'
	}, {
		// d: '620400',
		n: '白银市'
	}, {
		// d: '620500',
		n: '天水市'
	}, {
		// d: '620600',
		n: '武威市'
	}, {
		// d: '620700',
		n: '张掖市'
	}, {
		// d: '620800',
		n: '平凉市'
	}, {
		// d: '620900',
		n: '酒泉市'
	}, {
		// d: '620981',
		n: '玉门市'
	}, {
		// d: '620982',
		n: '敦煌市'
	}, {
		// d: '621000',
		n: '庆阳市'
	}, {
		// d: '621100',
		n: '定西市'
	}, {
		// d: '621200',
		n: '陇南市'
	}, {
		// d: '622901',
		n: '临夏市'
	}, {
		// d: '623001',
		n: '合作市'
	}]
}, {
	// d: '630000',
	n: '青海省',
	c: [{
		// d: '630100',
		n: '西宁市'
	}, {
		// d: '630200',
		n: '海东市'
	}, {
		// d: '632701',
		n: '玉树市'
	}, {
		// d: '632801',
		n: '格尔木市'
	}, {
		// d: '632802',
		n: '德令哈市'
	}]
}, {
	// d: '640000',
	n: '宁夏回族自治区',
	c: [{
		// d: '640100',
		n: '银川市'
	}, {
		// d: '640181',
		n: '灵武市'
	}, {
		// d: '640200',
		n: '石嘴山市'
	}, {
		// d: '640300',
		n: '吴忠市'
	}, {
		// d: '640381',
		n: '青铜峡市'
	}, {
		// d: '640400',
		n: '固原市'
	}, {
		// d: '640500',
		n: '中卫市'
	}]
}, {
	// d: '650000',
	n: '新疆维吾尔自治区',
	c: [{
		// d: '650100',
		n: '乌鲁木齐市'
	}, {
		// d: '650200',
		n: '克拉玛依市'
	}, {
		// d: '650400',
		n: '吐鲁番市'
	}, {
		// d: '652201',
		n: '哈密市'
	}, {
		// d: '652301',
		n: '昌吉市'
	}, {
		// d: '652302',
		n: '阜康市'
	}, {
		// d: '652701',
		n: '博乐市'
	}, {
		// d: '652702',
		n: '阿拉山口市'
	}, {
		// d: '652801',
		n: '库尔勒市'
	}, {
		// d: '652901',
		n: '阿克苏市'
	}, {
		// d: '653001',
		n: '阿图什市'
	}, {
		// d: '653101',
		n: '喀什市'
	}, {
		// d: '653201',
		n: '和田市'
	}, {
		// d: '654002',
		n: '伊宁市'
	}, {
		// d: '654003',
		n: '奎屯市'
	}, {
		// d: '654004',
		n: '霍尔果斯市'
	}, {
		// d: '654201',
		n: '塔城市'
	}, {
		// d: '654202',
		n: '乌苏市'
	}, {
		// d: '654301',
		n: '阿勒泰市'
	}, {
		// d: '659001',
		n: '石河子市'
	}, {
		// d: '659002',
		n: '阿拉尔市'
	}, {
		// d: '659003',
		n: '图木舒克市'
	}, {
		// d: '659004',
		n: '五家渠市'
	}]
}, {
	// d: '710000',
	n: '台湾省',
	c: [{
		n: ''
		// d: '110100',
	}]
}, {
	// d: '810000',
	n: '香港特别行政区',
	c: [{
		n: ''
		// d: '110100',
	}]
}, {
	// d: '820000',
	n: '澳门特别行政区',
	c: [{
		n: ''
		// d: '110100',
	}]
}];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocation = getLocation;
/**
 * @return {object} 
 *  - status
 *  - data: errMsg || { latitude, longitude, }
 */
function getLocation() {
    return new Promise(function (resolve, reject) {
        if (!wx || !wx.getLocation) {
            reject({
                status: 1,
                errMsg: 'lost wx'
            });
            return;
        }
        wx.getLocation({
            type: 'wgs84',
            success: function success(res) {
                // let latitude = ; // 纬度，浮点数，范围为90 ~ -90
                // let longitude = ; // 经度，浮点数，范围为180 ~ -180。
                resolve({
                    status: 0,
                    data: {
                        latitude: res.latitude,
                        longitude: res.longitude
                    }
                });
            },
            fail: function fail(res) {
                reject({
                    status: -1,
                    data: res.errMsg
                });
            }
        });
    });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(1);

exports.default = {
    name: 'ROUploader',
    props: {
        id: {
            required: true,
            type: String
        },
        /**
         * - size 允许的最大数量，默认为1
         */
        source: {
            type: Object,
            default: function _default() {
                return {
                    size: 1
                };
            }
        },
        result: {
            type: String // 输出的数据是一个string
        }
    },
    computed: {
        /**
         * 当前已经上传的图片的数量
         */
        imageCount: function imageCount() {
            return this.count;
        },

        /**
         * 总的可以上传的图片数量
         */
        imageSize: function imageSize() {
            return this.source.size;
        }
    },
    data: function data() {
        return {
            // 当前已经上传的图片数量
            count: 0
        };
    },

    methods: {
        /**
         * 当新图片添加时触发，将serverId发送出去
         */
        onAdd: function onAdd(_ref) {
            var serverId = _ref.serverId;

            this.count++;
            this.$emit('item', {
                id: this.id,
                result: serverId
            });
        },

        /**
         * 当图片被删除时触发
         */
        onRemove: function onRemove() {
            this.count--;
            this.$emit('item', {
                id: this.id,
                result: null
            });
        },

        /**
         * 统一更新image
         */
        updateImage: function updateImage(val) {
            if (!(0, _utils.isUndef)(val) && val.indexOf('http') === 0) {
                this.$refs.uploader.removeAll();
                this.$refs.uploader.add(val, null);
            }
        }
    },
    mounted: function mounted() {
        this.updateImage(this.result);
    },

    watch: {
        // 为了让result同步
        '$props.result': function $propsResult(val) {
            this.updateImage(val);
        }
    },
    render: function render(h) {
        var bd = h('div', {
            'class': ['weui-cell__bd']
        }, [h('WechatUploader', {
            ref: 'uploader',
            props: {
                size: this.source.size
            },
            on: {
                add: this.onAdd,
                remove: this.onRemove
            }
        }), h('div', {
            'class': ['weui-textarea-counter']
        }, [h('span', {}, this.imageCount), '/' + this.imageSize])]);
        return h('div', {
            'class': ['weui-cells']
        }, [h('div', {
            'class': ['weui-cell']
        }, [bd])]);
    }
}; // <template>
//     <div class="weui-cells">
//         <div class="weui-cell">
//             <div class="weui-cell__bd">
//                 <WechatUploader
//                     ref="uploader"
//                     :size="source.size"
//                     @add="onAdd"
//                     @remove="onRemove"
//                 >
//                 </WechatUploader>
//                 <div class="weui-textarea-counter"><span>{{imageCount}}</span>/{{imageSize}}</div>
//             </div>
//         </div>
//     </div>
// </template>

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".ro-questions{background-color:#f8f8f8;padding-top:1px}.ro-questions .ro-question-banner,.ro-questions .ro-question-banner-wrap{width:100%}.ro-questions .ro-question{width:100%;margin-top:1px}.ro-questions .ro-questionnaire-submit-button{padding:24px 12px;padding-bottom:0}.ro-questions .ro-required-tag:before{content:\"*\";color:red}.ro-text-view{font-size:17px;line-height:20px;height:20px}.ro-text-view.placeholder{color:#717171}.ro-input{width:100%}.ro-uploader{position:relative;text-align:center}.ro-uploader-img{width:100%}.ro-uploader-icon{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.ro-questions .ro-btn-submit{margin-top:.6rem}.ro-text-view{font-size:.425rem;line-height:.5rem;height:.5rem}.ro-uploader{min-height:160px}.ro-uploader-icon .icon{font-size:64px}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{margin:0;padding:0}a img{border:0}a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}@font-face{font-weight:400;font-style:normal;font-family:weui;src:url(\"data:application/octet-stream;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJAKEx+AAABfAAAAFZjbWFw65cFHQAAAhwAAAJQZ2x5ZvCRR/EAAASUAAAKtGhlYWQMPROtAAAA4AAAADZoaGVhCCwD+gAAALwAAAAkaG10eEJo//8AAAHUAAAASGxvY2EYqhW4AAAEbAAAACZtYXhwASEAVQAAARgAAAAgbmFtZeNcHtgAAA9IAAAB5nBvc3T6bLhLAAARMAAAAOYAAQAAA+gAAABaA+j/////A+kAAQAAAAAAAAAAAAAAAAAAABIAAQAAAAEAACbZbxtfDzz1AAsD6AAAAADUm2dvAAAAANSbZ2///wAAA+kD6gAAAAgAAgAAAAAAAAABAAAAEgBJAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQOwAZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6gHqEQPoAAAAWgPqAAAAAAABAAAAAAAAAAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+j//wPoAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAXQAAQAAAAAAbgADAAEAAAAsAAMACgAAAXQABABCAAAABAAEAAEAAOoR//8AAOoB//8AAAABAAQAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAANwAAAAAAAAAEQAA6gEAAOoBAAAAAQAA6gIAAOoCAAAAAgAA6gMAAOoDAAAAAwAA6gQAAOoEAAAABAAA6gUAAOoFAAAABQAA6gYAAOoGAAAABgAA6gcAAOoHAAAABwAA6ggAAOoIAAAACAAA6gkAAOoJAAAACQAA6goAAOoKAAAACgAA6gsAAOoLAAAACwAA6gwAAOoMAAAADAAA6g0AAOoNAAAADQAA6g4AAOoOAAAADgAA6g8AAOoPAAAADwAA6hAAAOoQAAAAEAAA6hEAAOoRAAAAEQAAAAAARgCMANIBJAF4AcQCMgJgAqgC/ANIA6YD/gROBKAE9AVaAAAAAgAAAAADrwOtABQAKQAAASIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAfV4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NlteA608O2Rn8GdjOzw8O2Nn8GdkOzz8rzc1W17bXlw1Nzc1XF7bXls1NwAAAAACAAAAAAOzA7MAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTBwYiLwEmNjsBETQ2OwEyFhURMzIWAe52Z2Q7PT07ZGd2fGpmOz4+O2ZpIXYOKA52Dg0XXQsHJgcLXRcNA7M+O2ZqfHZnZDs9PTtkZ3Z9aWY7Pv3wmhISmhIaARcICwsI/ukaAAMAAAAAA+UD5QAXACMALAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAxQrASI1AzQ7ATIHJyImNDYyFhQGAe6Ecm9BRERBb3KEiXZxQkREQnF1aQIxAwgCQgMBIxIZGSQZGQPkREJxdomEcm9BRERBb3KEinVxQkT9HQICAWICAjEZIxkZIxkAAAAAAgAAAAADsQPkABkALgAAAQYHBgc2BREUFxYXFhc2NzY3NjURJBcmJyYTAQYvASY/ATYyHwEWNjclNjIfARYB9VVVQk+v/tFHPmxebGxdbT1I/tGvT0JVo/7VBASKAwMSAQUBcQEFAgESAgUBEQQD4xMYEhk3YP6sjnVlSD8cHD9IZXWOAVRgNxkSGP62/tkDA48EBBkCAVYCAQHlAQIQBAAAAAADAAAAAAOxA+QAGwAqADMAAAEGBwYHBgcGNxEUFxYXFhc2NzY3NjURJBcmJyYHMzIWFQMUBisBIicDNDYTIiY0NjIWFAYB9UFBODssO38gRz5sXmxsXW09SP7YqFBBVW80BAYMAwImBQELBh4PFhYeFRUD5A8SDhIOEikK/q2PdWRJPh0dPklkdY8BU141GRIY/AYE/sYCAwUBOgQG/kAVHxUVHxUAAAACAAAAAAPkA+QAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTAQYiLwEmPwE2Mh8BFjI3ATYyHwEWAe6Ecm9BQ0NCbnODiXVxQkREQnF1kf6gAQUBowMDFgEFAYUCBQEBQwIFARUEA+NEQnF1iYNzbkJDQ0FvcoSJdXFCRP6j/qUBAagEBR4CAWYBAQENAgIVBAAAAAQAAAAAA68DrQAUACkAPwBDAAABIgcGBwYUFxYXFjI3Njc2NCcmJyYDIicmJyY0NzY3NjIXFhcWFAcGBwYTBQ4BLwEmBg8BBhYfARYyNwE+ASYiFzAfAQH1eGdkOzw8O2Rn8GZkOzw8O2RmeG5eWzY3NzZbXtteWzY3NzZbXmn+9gYSBmAGDwUDBQEGfQUQBgElBQELEBUBAQOtPDtkZ/BnYzs8PDtjZ/BnZDs8/K83NVte215cNTc3NVxe215bNTcCJt0FAQVJBQIGBAcRBoAGBQEhBQ8LBAEBAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAIAAAAAA+UD5gAXACwAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMHBi8BJicmNRM0NjsBMhYVExceAQHvhHJvQUNDQm5zg4l1cUJEREJxdVcQAwT6AwIEEAMCKwIDDsUCAQPlREJxdYmDc25CQ0NBb3KEiXVxQkT9VhwEAncCAgMGAXoCAwMC/q2FAgQAAAQAAAAAA68DrQADABgALQAzAAABMB8BAyIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAyMVMzUjAuUBAfJ4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NltemyT92QKDAQEBLDw7ZGfwZ2M7PDw7Y2fwZ2Q7PPyvNzVbXtteXDU3NzVcXtteWzU3AjH9JAAAAAMAAAAAA+QD5AAXACcAMAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAzMyFhUDFAYrASImNQM0NhMiJjQ2MhYUBgHuhHJvQUNDQm5zg4l1cUJEREJxdZ42BAYMAwInAwMMBh8PFhYeFhYD40RCcXWJg3NuQkNDQW9yhIl1cUJE/vYGBf7AAgMDAgFABQb+NhYfFhYfFgAABAAAAAADwAPAAAgAEgAoAD0AAAEyNjQmIgYUFhcjFTMRIxUzNSMDIgcGBwYVFBYXFjMyNzY3NjU0Jy4BAyInJicmNDc2NzYyFxYXFhQHBgcGAfQYISEwISFRjzk5yTorhG5rPT99am+DdmhlPD4+PMyFbV5bNTc3NVte2l5bNTc3NVteAqAiLyIiLyI5Hf7EHBwCsT89a26Ed8w8Pj48ZWh2g29qffyjNzVbXtpeWzU3NzVbXtpeWzU3AAADAAAAAAOoA6gACwAgADUAAAEHJwcXBxc3FzcnNwMiBwYHBhQXFhcWMjc2NzY0JyYnJgMiJyYnJjQ3Njc2MhcWFxYUBwYHBgKOmpocmpocmpocmpq2dmZiOjs7OmJm7GZiOjs7OmJmdmtdWTQ2NjRZXdZdWTQ2NjRZXQKqmpocmpocmpocmpoBGTs6YmbsZmI6Ozs6YmbsZmI6O/zCNjRZXdZdWTQ2NjRZXdZdWTQ2AAMAAAAAA+kD6gAaAC8AMAAAAQYHBiMiJyYnJjQ3Njc2MhcWFxYVFAcGBwEHATI3Njc2NCcmJyYiBwYHBhQXFhcWMwKONUBCR21dWjU3NzVaXdpdWzU2GBcrASM5/eBXS0grKysrSEuuSkkqLCwqSUpXASMrFxg2NVtd2l1aNTc3NVpdbUdCQDX+3jkBGSsrSEuuSkkqLCwqSUquS0grKwAC//8AAAPoA+gAFAAwAAABIgcGBwYQFxYXFiA3Njc2ECcmJyYTFg4BIi8BBwYuATQ/AScmPgEWHwE3Nh4BBg8BAfSIdHFDRERDcXQBEHRxQ0REQ3F0SQoBFBsKoqgKGxMKqKIKARQbCqKoChsUAQqoA+hEQ3F0/vB0cUNERENxdAEQdHFDRP1jChsTCqiiCgEUGwqiqAobFAEKqKIKARQbCqIAAAIAAAAAA+QD5AAXADQAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMUBiMFFxYUDwEGLwEuAT8BNh8BFhQPAQUyFh0BAe6Ecm9BQ0NCbnODiXVxQkREQnF1fwQC/pGDAQEVAwTsAgEC7AQEFAIBhAFwAgMD40RCcXWJg3NuQkNDQW9yhIl1cUJE/fYCAwuVAgQCFAQE0AIFAtEEBBQCBQGVCwMDJwAAAAUAAAAAA9QD0wAjACcANwBHAEgAAAERFAYjISImNREjIiY9ATQ2MyE1NDYzITIWHQEhMhYdARQGIyERIREHIgYVERQWOwEyNjURNCYjISIGFREUFjsBMjY1ETQmKwEDeyYb/XYbJkMJDQ0JAQYZEgEvExkBBgkNDQn9CQJc0QkNDQktCQ0NCf7sCQ0NCS0JDQ0JLQMi/TQbJiYbAswMCiwJDS4SGRkSLg0JLAoM/UwCtGsNCf5NCQ0NCQGzCQ0NCf5NCQ0NCQGzCQ0AAAAAEADGAAEAAAAAAAEABAAAAAEAAAAAAAIABwAEAAEAAAAAAAMABAALAAEAAAAAAAQABAAPAAEAAAAAAAUACwATAAEAAAAAAAYABAAeAAEAAAAAAAoAKwAiAAEAAAAAAAsAEwBNAAMAAQQJAAEACABgAAMAAQQJAAIADgBoAAMAAQQJAAMACAB2AAMAAQQJAAQACAB+AAMAAQQJAAUAFgCGAAMAAQQJAAYACACcAAMAAQQJAAoAVgCkAAMAAQQJAAsAJgD6d2V1aVJlZ3VsYXJ3ZXVpd2V1aVZlcnNpb24gMS4wd2V1aUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETAAZjaXJjbGUIZG93bmxvYWQEaW5mbwxzYWZlX3N1Y2Nlc3MJc2FmZV93YXJuB3N1Y2Nlc3MOc3VjY2Vzcy1jaXJjbGURc3VjY2Vzcy1uby1jaXJjbGUHd2FpdGluZw53YWl0aW5nLWNpcmNsZQR3YXJuC2luZm8tY2lyY2xlBmNhbmNlbAZzZWFyY2gFY2xlYXIEYmFjawZkZWxldGUAAAAA\") format(\"truetype\")}[class*=\" weui-icon-\"],[class^=weui-icon-]{display:inline-block;vertical-align:middle;font:normal normal normal 14px/1 weui;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}[class*=\" weui-icon-\"]:before,[class^=weui-icon-]:before{display:inline-block;margin-left:.2em;margin-right:.2em}.weui-icon-circle:before{content:\"\\EA01\"}.weui-icon-download:before{content:\"\\EA02\"}.weui-icon-info:before{content:\"\\EA03\"}.weui-icon-safe-success:before{content:\"\\EA04\"}.weui-icon-safe-warn:before{content:\"\\EA05\"}.weui-icon-success:before{content:\"\\EA06\"}.weui-icon-success-circle:before{content:\"\\EA07\"}.weui-icon-success-no-circle:before{content:\"\\EA08\"}.weui-icon-waiting:before{content:\"\\EA09\"}.weui-icon-waiting-circle:before{content:\"\\EA0A\"}.weui-icon-warn:before{content:\"\\EA0B\"}.weui-icon-info-circle:before{content:\"\\EA0C\"}.weui-icon-cancel:before{content:\"\\EA0D\"}.weui-icon-search:before{content:\"\\EA0E\"}.weui-icon-clear:before{content:\"\\EA0F\"}.weui-icon-back:before{content:\"\\EA10\"}.weui-icon-delete:before{content:\"\\EA11\"}[class*=\" weui-icon_\"]:before,[class^=weui-icon_]:before{margin:0}.weui-icon-success{font-size:23px;color:#09bb07}.weui-icon-waiting{font-size:23px;color:#10aeff}.weui-icon-warn{font-size:23px;color:#f43530}.weui-icon-info{font-size:23px;color:#10aeff}.weui-icon-success-circle,.weui-icon-success-no-circle{font-size:23px;color:#09bb07}.weui-icon-waiting-circle{font-size:23px;color:#10aeff}.weui-icon-circle{font-size:23px;color:#c9c9c9}.weui-icon-download,.weui-icon-info-circle{font-size:23px;color:#09bb07}.weui-icon-safe-success{color:#09bb07}.weui-icon-safe-warn{color:#ffbe00}.weui-icon-cancel{color:#f43530;font-size:22px}.weui-icon-clear,.weui-icon-search{color:#b2b2b2;font-size:14px}.weui-icon-delete.weui-icon_gallery-delete{color:#fff;font-size:22px}.weui-icon_msg{font-size:93px}.weui-icon_msg.weui-icon-warn{color:#f76260}.weui-icon_msg-primary{font-size:93px}.weui-icon_msg-primary.weui-icon-warn{color:#ffbe00}.weui-btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;text-align:center;text-decoration:none;color:#fff;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden}.weui-btn:after{content:\" \";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);transform:scale(.5);transform-origin:0 0;box-sizing:border-box;border-radius:10px}.weui-btn_inline{display:inline-block}.weui-btn_default{color:#000;background-color:#f8f8f8}.weui-btn_default:not(.weui-btn_disabled):visited{color:#000}.weui-btn_default:not(.weui-btn_disabled):active{color:rgba(0,0,0,.6);background-color:#dedede}.weui-btn_primary{background-color:#1aad19}.weui-btn_primary:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_primary:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#179b16}.weui-btn_warn{background-color:#e64340}.weui-btn_warn:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_warn:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}.weui-btn_disabled{color:hsla(0,0%,100%,.6)}.weui-btn_disabled.weui-btn_default{color:rgba(0,0,0,.3);background-color:#f7f7f7}.weui-btn_disabled.weui-btn_primary{background-color:#9ed99d}.weui-btn_disabled.weui-btn_warn{background-color:#ec8b89}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:hsla(0,0%,100%,.6)}.weui-btn_loading.weui-btn_primary{background-color:#179b16}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}.weui-btn_plain-primary{color:#1aad19;border:1px solid #1aad19}.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6)}.weui-btn_plain-primary:after{border-width:0}.weui-btn_plain-default{color:#353535;border:1px solid #353535}.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6)}.weui-btn_plain-default:after{border-width:0}.weui-btn_plain-disabled{color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.2)}button.weui-btn,input.weui-btn{width:100%;border-width:0;outline:0;-webkit-appearance:none}button.weui-btn:focus,input.weui-btn:focus{outline:0}button.weui-btn_inline,button.weui-btn_mini,input.weui-btn_inline,input.weui-btn_mini{width:auto}button.weui-btn_plain-default,button.weui-btn_plain-primary,input.weui-btn_plain-default,input.weui-btn_plain-primary{border-width:1px;background-color:transparent}.weui-btn_mini{display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}.weui-btn+.weui-btn{margin-top:15px}.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline{margin-top:auto;margin-left:15px}.weui-btn-area{margin:47.05882353em 15px .3em}.weui-btn-area_inline{display:flex}.weui-btn-area_inline .weui-btn{margin-top:auto;margin-right:15px;width:100%;flex:1}.weui-btn-area_inline .weui-btn:last-child{margin-right:0}.weui-cells{margin-top:47.05882353em;background-color:#fff;line-height:1.47058824;font-size:.425rem;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #e5e5e5;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5;z-index:2}.weui-cells:after{bottom:0;border-bottom:1px solid #e5e5e5;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:.375rem;padding-right:.375rem;font-size:.385rem}.weui-cell{padding:.25rem .375rem;position:relative;display:flex;align-items:center}.weui-cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #e5e5e5;color:#e5e5e5;transform-origin:0 0;transform:scaleY(.5);left:.375rem;z-index:2}.weui-cell:first-child:before{display:none}.weui-cell_primary{align-items:flex-start}.weui-cell__bd{flex:1}.weui-cell__ft{text-align:right;color:#999}.weui-cell_swiped{display:block;padding:0}.weui-cell_swiped>.weui-cell__bd{position:relative;z-index:1;background-color:#fff}.weui-cell_swiped>.weui-cell__ft{position:absolute;right:0;top:0;bottom:0;display:flex;color:#fff}.weui-swiped-btn{display:block;padding:.25rem 1em;line-height:1.47058824;color:inherit}.weui-swiped-btn_default{background-color:#c7c7cc}.weui-swiped-btn_warn{background-color:#ff3b30}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-check__label{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-check__label:active{background-color:#ececec}.weui-check{position:absolute;left:-9999em}.weui-cells_radio .weui-cell__ft{padding-left:.35em}.weui-cells_radio .weui-check:checked+.weui-icon-checked:before{display:block;content:\"\\EA08\";color:#09bb07;font-size:16px}.weui-cells_checkbox .weui-cell__hd{padding-right:.35em}.weui-cells_checkbox .weui-icon-checked:before{content:\"\\EA01\";color:#c9c9c9;font-size:23px;display:block}.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{content:\"\\EA06\";color:#09bb07}.weui-label{display:block;width:2.625rem;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.47058824em;line-height:1.47058824}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-form-preview{position:relative;background-color:#fff}.weui-form-preview:before{top:0;border-top:1px solid #e5e5e5;transform-origin:0 0;transform:scaleY(.5)}.weui-form-preview:after,.weui-form-preview:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-form-preview:after{bottom:0;border-bottom:1px solid #e5e5e5;transform-origin:0 100%;transform:scaleY(.5)}.weui-form-preview__hd{position:relative;padding:.25rem .375rem;text-align:right;line-height:2.5em}.weui-form-preview__hd:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;transform-origin:0 100%;transform:scaleY(.5);left:.375rem}.weui-form-preview__hd .weui-form-preview__value{font-style:normal;font-size:1.6em}.weui-form-preview__bd{padding:.25rem .375rem;font-size:.9em;text-align:right;color:#999;line-height:2}.weui-form-preview__ft{position:relative;line-height:50px;display:flex}.weui-form-preview__ft:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleY(.5)}.weui-form-preview__item{overflow:hidden}.weui-form-preview__label{float:left;margin-right:1em;min-width:4em;color:#999;text-align:justify;text-align-last:justify}.weui-form-preview__value{display:block;overflow:hidden;word-break:normal;word-wrap:break-word}.weui-form-preview__btn{position:relative;display:block;flex:1;color:#3cc51f;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}button.weui-form-preview__btn{background-color:transparent;border:0;outline:0;line-height:inherit;font-size:inherit}.weui-form-preview__btn:active{background-color:#eee}.weui-form-preview__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleX(.5)}.weui-form-preview__btn:first-child:after{display:none}.weui-form-preview__btn_default{color:#999}.weui-form-preview__btn_primary{color:#0bb20c}.weui-cell_select{padding:0}.weui-cell_select .weui-select{padding-right:30px}.weui-cell_select .weui-cell__bd:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:.375rem;margin-top:-4px}.weui-select{-webkit-appearance:none;border:0;outline:0;background-color:transparent;width:100%;font-size:inherit;height:1.125rem;line-height:1.125rem;position:relative;z-index:1;padding-left:.375rem}.weui-cell_select-before{padding-right:.375rem}.weui-cell_select-before .weui-select{width:2.625rem;box-sizing:border-box}.weui-cell_select-before .weui-cell__hd{position:relative}.weui-cell_select-before .weui-cell__hd:after{content:\" \";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #e5e5e5;color:#e5e5e5;transform-origin:100% 0;transform:scaleX(.5)}.weui-cell_select-before .weui-cell__hd:before{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:.375rem;margin-top:-4px}.weui-cell_select-before .weui-cell__bd{padding-left:.375rem}.weui-cell_select-before .weui-cell__bd:after{display:none}.weui-cell_select-after{padding-left:.375rem}.weui-cell_select-after .weui-select{padding-left:0}.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.weui-vcode-btn,.weui-vcode-img{margin-left:5px;height:1.125rem;vertical-align:middle}.weui-vcode-btn{display:inline-block;padding:0 .6em 0 .7em;border-left:1px solid #e5e5e5;line-height:1.125rem;font-size:.425rem;color:#3cc51f}button.weui-vcode-btn{background-color:transparent;border-top:0;border-right:0;border-bottom:0;outline:0}.weui-vcode-btn:active{color:#52a341}.weui-gallery{display:none;position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;z-index:1000}.weui-gallery__img{position:absolute;top:0;right:0;bottom:60px;left:0;background:50% no-repeat;background-size:contain}.weui-gallery__opr{position:absolute;right:0;bottom:0;left:0;background-color:#0d0d0d;color:#fff;line-height:60px;text-align:center}.weui-gallery__del{display:block}.weui-cell_switch{padding-top:-15.4375rem;padding-bottom:-15.4375rem}.weui-switch{appearance:none}.weui-switch,.weui-switch-cp__box{position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background-color:#dfdfdf;transition:background-color .1s,border .1s}.weui-switch-cp__box:before,.weui-switch:before{content:\" \";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#fdfdfd;transition:transform .35s cubic-bezier(.45,1,.4,1)}.weui-switch-cp__box:after,.weui-switch:after{content:\" \";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);transition:transform .35s cubic-bezier(.4,.4,.25,1.35)}.weui-switch-cp__input:checked~.weui-switch-cp__box,.weui-switch:checked{border-color:#04be02;background-color:#04be02}.weui-switch-cp__input:checked~.weui-switch-cp__box:before,.weui-switch:checked:before{transform:scale(0)}.weui-switch-cp__input:checked~.weui-switch-cp__box:after,.weui-switch:checked:after{transform:translateX(20px)}.weui-switch-cp__input{position:absolute;left:-9999px}.weui-switch-cp__box{display:block}.weui-uploader__hd{display:flex;padding-bottom:.25rem;align-items:center}.weui-uploader__title{flex:1}.weui-uploader__info{color:#b2b2b2}.weui-uploader__bd{margin-bottom:-8.875rem;margin-right:-9px;overflow:hidden}.weui-uploader__files{list-style:none}.weui-uploader__file{float:left;margin-right:9px;margin-bottom:9px;width:79px;height:79px;background:no-repeat 50%;background-size:cover}.weui-uploader__file_status{position:relative}.weui-uploader__file_status:before{content:\" \";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.weui-uploader__file_status .weui-uploader__file-content{display:block}.weui-uploader__file-content{display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff}.weui-uploader__file-content .weui-icon-warn{display:inline-block}.weui-uploader__input-box{float:left;position:relative;margin-right:9px;margin-bottom:9px;width:77px;height:77px;border:1px solid #d9d9d9}.weui-uploader__input-box:after,.weui-uploader__input-box:before{content:\" \";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#d9d9d9}.weui-uploader__input-box:before{width:2px;height:39.5px}.weui-uploader__input-box:after{width:39.5px;height:2px}.weui-uploader__input-box:active{border-color:#999}.weui-uploader__input-box:active:after,.weui-uploader__input-box:active:before{background-color:#999}.weui-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-footer{color:#999;font-size:14px;text-align:center}.weui-footer a{color:#586c94}.weui-footer_fixed-bottom{position:fixed;bottom:.52em;left:0;right:0}.weui-footer__links{font-size:0}.weui-footer__link{display:inline-block;vertical-align:top;margin:0 .62em;position:relative;font-size:14px}.weui-footer__link:before{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #c7c7c7;color:#c7c7c7;transform-origin:0 0;transform:scaleX(.5);left:-.65em;top:.36em;bottom:.36em}.weui-footer__link:first-child:before{display:none}.weui-footer__text{padding:0 .34em;font-size:12px}.weui-flex{display:flex}.weui-flex__item{flex:1}.weui-dialog{position:fixed;z-index:5000;max-width:300px;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{min-height:40px;font-size:15px;word-wrap:break-word;word-break:break-all}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:flex}.weui-dialog__btn{display:block;flex:1;text-decoration:none}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_primary{color:#0bb20c}.weui-skin_android .weui-dialog{text-align:left}.weui-skin_android .weui-dialog__title{font-size:21px}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{font-size:17px;text-align:left}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.weui-toast{position:fixed;z-index:5000;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.weui-icon_toast{margin:22px 0 0;display:block}.weui-icon_toast.weui-icon-success-no-circle:before{color:#fff;font-size:55px}.weui-icon_toast.weui-loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.weui-toast__content{margin:0 0 15px}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.weui-btn_loading.weui-btn_primary .weui-loading,.weui-btn_loading.weui-btn_warn .weui-loading,.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\")}@-webkit-keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.weui-btn{font-size:.45rem}.weui-cells__title{margin-top:1.2em;margin-bottom:.3em;padding-left:.375rem;padding-right:.375rem;color:#999;font-size:.385rem}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells_checkbox .weui-icon-checked:before{font-size:.575rem}.weui-cells_radio .weui-check:checked+.weui-icon-checked:before{font-size:.4rem;color:inherit}.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{color:inherit}.weui-toast{width:3.04rem;min-height:3.04rem;top:4.5rem;margin-left:-1.52rem;border-radius:.125rem}.weui-icon_toast{margin:.55rem 0 0}.weui-icon_toast.weui-icon-success-no-circle:before{font-size:1.375rem}.weui-icon_toast.weui-loading{margin:.75rem 0 0;width:.95rem;height:.95rem}.weui-toast__content{margin:0 0 .375rem;font-size:.4rem}.weui-footer{font-size:.35rem}.weui-footer__text{padding:.136rem;font-size:.3rem}.weui-icon-warn{font-size:.575rem}.weui-dialog{width:80%;max-width:7.5rem;background-color:#fff;border-radius:.075rem}.weui-dialog__hd{padding:.52rem 1.6em .2rem;font-size:.4rem}.weui-dialog__title{font-size:.45rem}.weui-dialog__bd{padding:0 1.6em .8em;min-height:1rem;font-size:.375rem;line-height:1.3;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{line-height:1.2rem;font-size:.45rem}.weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleY(.5)}.weui-dialog__btn{color:#3cc51f;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleX(.5)}.weui-dialog__btn_default{color:#353535}.weui-skin_android .weui-dialog{box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:.525rem}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:.425rem}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{line-height:1.05rem;font-size:.4rem;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__btn{padding:0 .8em}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}.weui-mask_transparent{z-index:3000}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, ".ro-segment-item{float:left;text-align:center}", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(31),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(33),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(35),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(30),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(32),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(34),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(36),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(37),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    class: ['weui-cell', {
      'weui-cell_warn': _vm.warn && !_vm.focus
    }]
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [(_vm.source.type == 'text') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "text",
      "pattern": _vm.source.pattern,
      "placeholder": _vm.source.placeholder
    },
    domProps: {
      "value": (_vm.val)
    },
    on: {
      "focus": _vm.onFocus,
      "blur": _vm.onBlur,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.val = $event.target.value
      }
    }
  }) : (_vm.source.type == 'number') ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "number",
      "pattern": _vm.source.pattern,
      "placeholder": _vm.source.placeholder
    },
    domProps: {
      "value": (_vm.val)
    },
    on: {
      "focus": _vm.onFocus,
      "blur": [_vm.onBlur, function($event) {
        _vm.$forceUpdate()
      }],
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.val = $event.target.value
      }
    }
  }) : _vm._e()]), _vm._v(" "), (_vm.warn && !_vm.focus) ? _c('div', {
    staticClass: "weui-cell__ft"
  }, [_c('i', {
    staticClass: "weui-icon-warn"
  })]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "text",
      "placeholder": _vm.mergeSource.placeholder
    },
    domProps: {
      "value": (_vm.val)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.val = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__ft",
    on: {
      "click": _vm.onClickLocation
    }
  }, [_vm._v("\n            点击获取\n        ")])])])
},staticRenderFns: []}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "wrap",
    staticClass: "ro-questions"
  }, [(_vm.banner) ? _c('div', {
    staticClass: "ro-question-banner-wrap",
    on: {
      "touchstart": function($event) {
        _vm.noWhenBackground($event)
      },
      "touchmove": function($event) {
        _vm.noWhenBackground($event)
      },
      "touchend": function($event) {
        _vm.noWhenBackground($event)
      }
    }
  }, [_c('img', {
    staticClass: "ro-question-banner",
    attrs: {
      "src": _vm.banner
    }
  })]) : _vm._e(), _vm._v(" "), _vm._l((_vm.questions), function(question, index) {
    return _c('div', {
      key: question.id,
      staticClass: "ro-question"
    }, [_c('div', {
      staticClass: "weui-cells__title"
    }, [_vm._v("\n            " + _vm._s(index + 1) + "." + _vm._s(question.caption)), (_vm.required[question.id]) ? _c('span', {
      staticClass: "ro-required-tag"
    }) : _vm._e()]), _vm._v(" "), _c(question.type, {
      tag: "component",
      attrs: {
        "id": question.id,
        "source": question.source,
        "result": question.result,
        "color": _vm.color
      },
      on: {
        "item": _vm.onUpdate,
        "load": _vm.onStartLoad,
        "finish": _vm.onFinishLoad,
        "background": _vm.onBackground,
        "foreground": _vm.onForeground,
        "warn": _vm.onWarn,
        "validate": _vm.onValidate,
        "dialog": _vm.onDialog
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    staticClass: "ro-questionnaire-submit-button"
  }, [_c('MobileButton', {
    attrs: {
      "name": _vm.mobileButtonName,
      "is-block": true,
      "is-disabled": !(!_vm.disableSubmit && _vm.isComplete)
    },
    on: {
      "click": _vm.onClickSubmit
    }
  }, [_vm._v("\n            " + _vm._s(_vm.submitHint) + "\n        ")])], 1), _vm._v(" "), (_vm.showLoading) ? _c('div', [_c('div', {
    staticClass: "weui-mask_transparent"
  }), _vm._v(" "), _vm._m(0)]) : _vm._e(), _vm._v(" "), (_vm.showDialog) ? _c('div', [_c('div', {
    staticClass: "weui-mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-dialog"
  }, [_c('div', {
    staticClass: "weui-dialog__hd"
  }, [_c('strong', {
    staticClass: "weui-dialog__title"
  }, [_vm._v(_vm._s(_vm.dialogTitle))])]), _vm._v(" "), _c('div', {
    staticClass: "weui-dialog__bd"
  }, [_vm._v(_vm._s(_vm.dialogContent))]), _vm._v(" "), _c('div', {
    staticClass: "weui-dialog__ft"
  }, [_c('a', {
    staticClass: "weui-dialog__btn weui-dialog__btn_primary",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        _vm.showDialog = false;
      }
    }
  }, [_vm._v("确定")])])])]) : _vm._e()], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-toast"
  }, [_c('i', {
    staticClass: "weui-loading weui-icon_toast"
  }), _vm._v(" "), _c('p', {
    staticClass: "weui-toast__content"
  }, [_vm._v("数据加载中")])])
}]}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    staticClass: "ro-text-view",
    class: {
      placeholder: _vm.result === null || typeof _vm.result === 'undefined'
    },
    on: {
      "click": _vm.onClick
    }
  }, [_vm._v("\n                " + _vm._s(_vm._f("placeholder")(_vm.result.join(''), _vm.source.placeholder)) + "\n            ")])])]), _vm._v(" "), _c('mt-popup', {
    staticClass: "mint-datetime",
    attrs: {
      "position": "bottom"
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [_c('mt-picker', {
    ref: "picker",
    attrs: {
      "slots": _vm.slots,
      "show-toolbar": true,
      "item-height": _vm.itemHeight
    },
    on: {
      "change": _vm.onValueChange
    }
  }, [_c('span', {
    staticClass: "mint-datetime-action mint-datetime-cancel",
    on: {
      "click": function($event) {
        _vm.visible = false;
        _vm.$emit('cancel')
      },
      "touchstart": function($event) {
        _vm.visible = false;
        _vm.$emit('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('span', {
    staticClass: "mint-datetime-action mint-datetime-confirm",
    on: {
      "click": _vm.onConfirm,
      "touchstart": _vm.onConfirm
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, _vm._l((_vm.source), function(item) {
    return _c('div', {
      staticClass: "ro-segment-item",
      style: ({
        color: item.value == _vm.val ? _vm.color : 'rgba(53,53,53,1)',
        width: (100 / _vm.rowCount) + '%'
      }),
      on: {
        "click": function($event) {
          _vm.onClickItem(item.value)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.text) + "\n        ")])
  }))])
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    class: ['ro-text-view', {
      placeholder: _vm.result === null || typeof _vm.result === 'undefined'
    }],
    on: {
      "click": _vm.onClick
    }
  }, [_vm._v(_vm._s(_vm._f("placeholder")(_vm.result, _vm.source.placeholder)))])])]), _vm._v(" "), _c('mt-popup', {
    staticClass: "mint-datetime",
    attrs: {
      "position": "bottom"
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [_c('mt-picker', {
    ref: "picker",
    attrs: {
      "slots": _vm.slots,
      "show-toolbar": true,
      "item-height": _vm.itemHeight
    },
    on: {
      "change": _vm.onValueChange
    }
  }, [_c('span', {
    staticClass: "mint-datetime-action mint-datetime-cancel",
    on: {
      "click": function($event) {
        _vm.visible = false;
        _vm.$emit('cancel')
      },
      "touchstart": function($event) {
        _vm.visible = false;
        _vm.$emit('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('span', {
    staticClass: "mint-datetime-action mint-datetime-confirm",
    on: {
      "click": _vm.onConfirm,
      "touchstart": _vm.onConfirm
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('div', {
    class: ['ro-text-view', {
      placeholder: _vm.result === null || typeof _vm.result === 'undefined'
    }],
    on: {
      "click": _vm.onClick
    }
  }, [_vm._v(_vm._s(_vm._f("placeholder")(_vm.result, _vm.source.placeholder)))])])]), _vm._v(" "), _c('mt-popup', {
    staticClass: "mint-datetime",
    attrs: {
      "position": "bottom"
    },
    model: {
      value: (_vm.visible),
      callback: function($$v) {
        _vm.visible = $$v
      },
      expression: "visible"
    }
  }, [_c('mt-picker', {
    ref: "picker",
    attrs: {
      "slots": _vm.generatedSlots,
      "show-toolbar": true,
      "item-height": _vm.itemHeight
    },
    on: {
      "change": _vm.onValueChange
    }
  }, [_c('span', {
    staticClass: "mint-datetime-action mint-datetime-cancel",
    on: {
      "click": function($event) {
        _vm.visible = false;
        _vm.$emit('cancel')
      },
      "touchstart": function($event) {
        _vm.visible = false;
        _vm.$emit('cancel')
      }
    }
  }, [_vm._v(_vm._s(_vm.cancelText))]), _vm._v(" "), _c('span', {
    staticClass: "mint-datetime-action mint-datetime-confirm",
    on: {
      "click": _vm.onConfirm,
      "touchstart": _vm.onConfirm
    }
  }, [_vm._v(_vm._s(_vm.confirmText))])])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells weui-cells_form"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__bd"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.val),
      expression: "val"
    }],
    staticClass: "weui-textarea",
    attrs: {
      "placeholder": _vm.source.placeholder,
      "rows": "3"
    },
    domProps: {
      "value": (_vm.val)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.val = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-textarea-counter"
  }, [_c('span', [_vm._v(_vm._s(_vm.val.length))]), _vm._v("/" + _vm._s(_vm.source.max))])])])])
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("30a9aa3a", content, true);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("3ab80824", content, true);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});