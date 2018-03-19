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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
exports._options = exports._Vue = undefined;
exports.install = install;

var _questionnaire = __webpack_require__(24);

var _questionnaire2 = _interopRequireDefault(_questionnaire);

var _choice = __webpack_require__(6);

var _choice2 = _interopRequireDefault(_choice);

var _multipleChoice = __webpack_require__(7);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeholder = placeholder;
exports.isUndef = isUndef;
function placeholder(val) {
  var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var equal = arguments[2];

  return isUndef(val) || val === equal ? placeholder : val;
}

function isUndef(val) {
  return val === null || val === undefined;
}

/***/ }),
/* 3 */
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
/* 4 */
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

var listToStyles = __webpack_require__(38)

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["mobile-button"]=e():t["mobile-button"]=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return null===t||void 0===t};e.default={name:"MobileButton",props:{id:{type:String},name:{type:String},classList:{type:Array},tag:String,to:{type:[Object,String]},isSelected:{type:Boolean,default:!1},isDisabled:{type:Boolean,default:!1},isBlock:{type:Boolean,default:!1}},render:function(t){var e=this,n=this,i=["btn","btn-mobile",r(n.name)?null:"btn-"+n.name].concat(o(n.classList||[]),[n.isDisabled?"disabled":null,n.isSelected?"selected":null,n.isBlock?"btn-block":null]),l=r(n.tag)?"a":n.tag,u=r(n.id)?{}:{id:n.id},a={};r(n.to)||("router-link"===l?a.to=n.to:"a"===l&&(u.href=n.to));var c=function(){n.isDisabled?n.$emit("click-when-disabled"):n.$emit("click")},s=function(){e.$emit("touchstart")},f={},d={};return"router-link"==l?(d.click=c,d.touchstart=s):(f.click=c,f.touchstart=s),t(l,{class:i,props:a,domProps:u,on:f,nativeOn:d},n.$slots.default)}}}])});

/***/ }),
/* 6 */
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
/* 7 */
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

var _wx = __webpack_require__(16);

var _install = __webpack_require__(1);

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

/**
 * 内容输入
 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

/**
 * 日期选择
 */
exports.default = {
    name: 'ROPlaceholder',
    props: {
        id: {
            required: true,
            type: String
        },
        source: {
            type: Object,
            default: function _default() {
                return {
                    placeholder: '', // 提示内容
                    text: '' // 显示的文本内容
                };
            }
        },
        result: {}
    },
    filters: {
        placeholder: _utils.placeholder
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click', this.id);
        }
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _install = __webpack_require__(1);

var _mobileButton = __webpack_require__(5);

var _mobileButton2 = _interopRequireDefault(_mobileButton);

var _choice = __webpack_require__(6);

var _choice2 = _interopRequireDefault(_choice);

var _multipleChoice = __webpack_require__(7);

var _multipleChoice2 = _interopRequireDefault(_multipleChoice);

var _addressLocation = __webpack_require__(21);

var _addressLocation2 = _interopRequireDefault(_addressLocation);

var _textarea = __webpack_require__(27);

var _textarea2 = _interopRequireDefault(_textarea);

var _uploader = __webpack_require__(17);

var _uploader2 = _interopRequireDefault(_uploader);

var _placeholder = __webpack_require__(23);

var _placeholder2 = _interopRequireDefault(_placeholder);

var _select = __webpack_require__(26);

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(22);

var _input2 = _interopRequireDefault(_input);

var _segment = __webpack_require__(25);

var _segment2 = _interopRequireDefault(_segment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 问卷
 */
exports.default = {
    name: 'ROQuestionnaire',
    components: {
        ROChoice: _choice2.default,
        ROMultipleChoice: _multipleChoice2.default,
        ROAddressLocation: _addressLocation2.default,
        ROTextarea: _textarea2.default,
        ROUploader: _uploader2.default,
        ROPlaceholder: _placeholder2.default,
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
            default: ''
        },
        /**
         * mobileButton的样式
         */
        mobileButtonStyle: {
            type: [Array, Object]
        },
        /**
         * mobileButton的样式类
         */
        mobileButtonClass: {
            type: [Array, Object]
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
            background: false, // 是否在后台，即在弹窗之后，用来判断是否需要锁定touch事件 => no
            warnCount: 0 // 当前的warn的数量
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
    methods: {
        /**
         * 设置数据
         *
         * @param patch 数据
         *  - id
         *  - result 结果
         */
        setResult: function setResult(patch) {
            this.$emit('item', patch);
            for (var i = 0, len = this.questions.length; i < len; i++) {
                var question = this.questions[i];
                if (question.id === patch.id) {
                    if (false) {
                        console.log('setResult', question.id, patch.result);
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
        },

        /**
         * 点击事件
         */
        onClick: function onClick(id) {
            this.$emit('click', id);
        }
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

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mobileButton = __webpack_require__(5);

var _mobileButton2 = _interopRequireDefault(_mobileButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 类似于radio
 *
 *  颜色默认使用黑色
 */
exports.default = {
    name: 'ROSegment',
    components: {
        MobileButton: _mobileButton2.default
    },
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

/**
 * 选择
 */
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
                    slots: [], // 所有的显示内容
                    placeholder: '', // 默认的显示内容
                    disabled: false // 是否禁用
                };
            }
        },
        // 最终的输出
        result: {
            type: String, // 输出的数据是一个string
            default: ''
        }
    },
    data: function data() {
        return {
            currentValue: '' // 当前页面上显示的内容
        };
    },
    computed: {
        /**
         * value => text 的 map
         */
        map: function map() {
            var result = {};
            this.source.slots.forEach(function (slot) {
                result[slot.value] = slot.text;
            });
            return result;
        },
        /**
         * 当没有数据时候显示的内容
         */
        placeholder: function placeholder() {
            var text = this.map[this.currentValue] || '';
            return this.source ? this.source.disabled ? text + '(\u5F53\u524D\u4E0D\u53EF\u4FEE\u6539)' : this.source.placeholder || '点击选择' : '点击选择';
        }
    },
    filters: {
        placeholder: _utils.placeholder
    },
    watch: {
        /**
         * 更新数据
         */
        '$props.result': function $propsResult() {
            this.currentValue = this.result;
        },
        /**
         * 发生变化需要通知外界
         */
        currentValue: function currentValue(val) {
            this.$emit('item', {
                id: this.id,
                result: val
            });
        }
    },
    created: function created() {
        this.currentValue = this.result;
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

/***/ }),
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _install = __webpack_require__(1);

exports.default = {
    install: _install.install
};

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = __webpack_require__(2);

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
            type: Array // [{ image, serverId, }]
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
        onAdd: function onAdd() {
            var images = this.$refs.uploader.getImages();
            this.count = images.length;
            this.$emit('item', {
                id: this.id,
                result: images
            });
        },

        /**
         * 当图片被删除时触发
         */
        onRemove: function onRemove() {
            var images = this.$refs.uploader.getImages();
            this.count = images.length;
            this.$emit('item', {
                id: this.id,
                result: images
            });
        },

        /**
         * 统一更新image
         *
         * @param {Array<{image, serverId}> images
         */
        updateImage: function updateImage(images) {
            this.count = images.length;
            this.$refs.uploader.setImages(images);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".ro-questions{background-color:#f8f8f8;padding-top:1px}.ro-questions .ro-question-banner,.ro-questions .ro-question-banner-wrap{width:100%}.ro-questions .ro-question{width:100%;margin-top:1px}.ro-questions .ro-questionnaire-submit-button{padding:24px 12px;padding-bottom:0}.ro-questions .ro-required-tag:before{content:\"*\";color:red}.ro-text-view{font-size:17px;line-height:20px;height:20px}.ro-text-view.placeholder{color:#717171}.date-picker-control .date-picker-control-item{float:left;width:50%;text-align:center}.ro-input{width:100%}.ro-uploader{position:relative;text-align:center}.ro-uploader-img{width:100%}.ro-uploader-icon{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.ro-questions .ro-btn-submit{margin-top:.6rem}.ro-text-view{font-size:.425rem;line-height:.5rem;height:.5rem}.ro-uploader{min-height:160px}.ro-uploader-icon .icon{font-size:64px}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{line-height:1.6;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{margin:0;padding:0}a img{border:0}a{text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}@font-face{font-weight:400;font-style:normal;font-family:weui;src:url(\"data:application/octet-stream;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzJAKEx+AAABfAAAAFZjbWFw65cFHQAAAhwAAAJQZ2x5ZvCRR/EAAASUAAAKtGhlYWQMPROtAAAA4AAAADZoaGVhCCwD+gAAALwAAAAkaG10eEJo//8AAAHUAAAASGxvY2EYqhW4AAAEbAAAACZtYXhwASEAVQAAARgAAAAgbmFtZeNcHtgAAA9IAAAB5nBvc3T6bLhLAAARMAAAAOYAAQAAA+gAAABaA+j/////A+kAAQAAAAAAAAAAAAAAAAAAABIAAQAAAAEAACbZbxtfDzz1AAsD6AAAAADUm2dvAAAAANSbZ2///wAAA+kD6gAAAAgAAgAAAAAAAAABAAAAEgBJAAUAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQOwAZAABQAIAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA6gHqEQPoAAAAWgPqAAAAAAABAAAAAAAAAAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+j//wPoAAAD6AAAAAAABQAAAAMAAAAsAAAABAAAAXQAAQAAAAAAbgADAAEAAAAsAAMACgAAAXQABABCAAAABAAEAAEAAOoR//8AAOoB//8AAAABAAQAAAABAAIAAwAEAAUABgAHAAgACQAKAAsADAANAA4ADwAQABEAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAANwAAAAAAAAAEQAA6gEAAOoBAAAAAQAA6gIAAOoCAAAAAgAA6gMAAOoDAAAAAwAA6gQAAOoEAAAABAAA6gUAAOoFAAAABQAA6gYAAOoGAAAABgAA6gcAAOoHAAAABwAA6ggAAOoIAAAACAAA6gkAAOoJAAAACQAA6goAAOoKAAAACgAA6gsAAOoLAAAACwAA6gwAAOoMAAAADAAA6g0AAOoNAAAADQAA6g4AAOoOAAAADgAA6g8AAOoPAAAADwAA6hAAAOoQAAAAEAAA6hEAAOoRAAAAEQAAAAAARgCMANIBJAF4AcQCMgJgAqgC/ANIA6YD/gROBKAE9AVaAAAAAgAAAAADrwOtABQAKQAAASIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAfV4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NlteA608O2Rn8GdjOzw8O2Nn8GdkOzz8rzc1W17bXlw1Nzc1XF7bXls1NwAAAAACAAAAAAOzA7MAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTBwYiLwEmNjsBETQ2OwEyFhURMzIWAe52Z2Q7PT07ZGd2fGpmOz4+O2ZpIXYOKA52Dg0XXQsHJgcLXRcNA7M+O2ZqfHZnZDs9PTtkZ3Z9aWY7Pv3wmhISmhIaARcICwsI/ukaAAMAAAAAA+UD5QAXACMALAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAxQrASI1AzQ7ATIHJyImNDYyFhQGAe6Ecm9BRERBb3KEiXZxQkREQnF1aQIxAwgCQgMBIxIZGSQZGQPkREJxdomEcm9BRERBb3KEinVxQkT9HQICAWICAjEZIxkZIxkAAAAAAgAAAAADsQPkABkALgAAAQYHBgc2BREUFxYXFhc2NzY3NjURJBcmJyYTAQYvASY/ATYyHwEWNjclNjIfARYB9VVVQk+v/tFHPmxebGxdbT1I/tGvT0JVo/7VBASKAwMSAQUBcQEFAgESAgUBEQQD4xMYEhk3YP6sjnVlSD8cHD9IZXWOAVRgNxkSGP62/tkDA48EBBkCAVYCAQHlAQIQBAAAAAADAAAAAAOxA+QAGwAqADMAAAEGBwYHBgcGNxEUFxYXFhc2NzY3NjURJBcmJyYHMzIWFQMUBisBIicDNDYTIiY0NjIWFAYB9UFBODssO38gRz5sXmxsXW09SP7YqFBBVW80BAYMAwImBQELBh4PFhYeFRUD5A8SDhIOEikK/q2PdWRJPh0dPklkdY8BU141GRIY/AYE/sYCAwUBOgQG/kAVHxUVHxUAAAACAAAAAAPkA+QAFwAtAAABIgcGBwYVFBcWFxYzMjc2NzY1NCcmJyYTAQYiLwEmPwE2Mh8BFjI3ATYyHwEWAe6Ecm9BQ0NCbnODiXVxQkREQnF1kf6gAQUBowMDFgEFAYUCBQEBQwIFARUEA+NEQnF1iYNzbkJDQ0FvcoSJdXFCRP6j/qUBAagEBR4CAWYBAQENAgIVBAAAAAQAAAAAA68DrQAUACkAPwBDAAABIgcGBwYUFxYXFjI3Njc2NCcmJyYDIicmJyY0NzY3NjIXFhcWFAcGBwYTBQ4BLwEmBg8BBhYfARYyNwE+ASYiFzAfAQH1eGdkOzw8O2Rn8GZkOzw8O2RmeG5eWzY3NzZbXtteWzY3NzZbXmn+9gYSBmAGDwUDBQEGfQUQBgElBQELEBUBAQOtPDtkZ/BnYzs8PDtjZ/BnZDs8/K83NVte215cNTc3NVxe215bNTcCJt0FAQVJBQIGBAcRBoAGBQEhBQ8LBAEBAAABAAAAAAO7AzoAFwAAEy4BPwE+AR8BFjY3ATYWFycWFAcBBiInPQoGBwUHGgzLDCELAh0LHwsNCgr9uQoeCgGzCyEOCw0HCZMJAQoBvgkCCg0LHQv9sQsKAAAAAAIAAAAAA+UD5gAXACwAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMHBi8BJicmNRM0NjsBMhYVExceAQHvhHJvQUNDQm5zg4l1cUJEREJxdVcQAwT6AwIEEAMCKwIDDsUCAQPlREJxdYmDc25CQ0NBb3KEiXVxQkT9VhwEAncCAgMGAXoCAwMC/q2FAgQAAAQAAAAAA68DrQADABgALQAzAAABMB8BAyIHBgcGFBcWFxYyNzY3NjQnJicmAyInJicmNDc2NzYyFxYXFhQHBgcGAyMVMzUjAuUBAfJ4Z2Q7PDw7ZGfwZmQ7PDw7ZGZ4bl5bNjc3Nlte215bNjc3NltemyT92QKDAQEBLDw7ZGfwZ2M7PDw7Y2fwZ2Q7PPyvNzVbXtteXDU3NzVcXtteWzU3AjH9JAAAAAMAAAAAA+QD5AAXACcAMAAAASIHBgcGFRQXFhcWMzI3Njc2NTQnJicmAzMyFhUDFAYrASImNQM0NhMiJjQ2MhYUBgHuhHJvQUNDQm5zg4l1cUJEREJxdZ42BAYMAwInAwMMBh8PFhYeFhYD40RCcXWJg3NuQkNDQW9yhIl1cUJE/vYGBf7AAgMDAgFABQb+NhYfFhYfFgAABAAAAAADwAPAAAgAEgAoAD0AAAEyNjQmIgYUFhcjFTMRIxUzNSMDIgcGBwYVFBYXFjMyNzY3NjU0Jy4BAyInJicmNDc2NzYyFxYXFhQHBgcGAfQYISEwISFRjzk5yTorhG5rPT99am+DdmhlPD4+PMyFbV5bNTc3NVte2l5bNTc3NVteAqAiLyIiLyI5Hf7EHBwCsT89a26Ed8w8Pj48ZWh2g29qffyjNzVbXtpeWzU3NzVbXtpeWzU3AAADAAAAAAOoA6gACwAgADUAAAEHJwcXBxc3FzcnNwMiBwYHBhQXFhcWMjc2NzY0JyYnJgMiJyYnJjQ3Njc2MhcWFxYUBwYHBgKOmpocmpocmpocmpq2dmZiOjs7OmJm7GZiOjs7OmJmdmtdWTQ2NjRZXdZdWTQ2NjRZXQKqmpocmpocmpocmpoBGTs6YmbsZmI6Ozs6YmbsZmI6O/zCNjRZXdZdWTQ2NjRZXdZdWTQ2AAMAAAAAA+kD6gAaAC8AMAAAAQYHBiMiJyYnJjQ3Njc2MhcWFxYVFAcGBwEHATI3Njc2NCcmJyYiBwYHBhQXFhcWMwKONUBCR21dWjU3NzVaXdpdWzU2GBcrASM5/eBXS0grKysrSEuuSkkqLCwqSUpXASMrFxg2NVtd2l1aNTc3NVpdbUdCQDX+3jkBGSsrSEuuSkkqLCwqSUquS0grKwAC//8AAAPoA+gAFAAwAAABIgcGBwYQFxYXFiA3Njc2ECcmJyYTFg4BIi8BBwYuATQ/AScmPgEWHwE3Nh4BBg8BAfSIdHFDRERDcXQBEHRxQ0REQ3F0SQoBFBsKoqgKGxMKqKIKARQbCqKoChsUAQqoA+hEQ3F0/vB0cUNERENxdAEQdHFDRP1jChsTCqiiCgEUGwqiqAobFAEKqKIKARQbCqIAAAIAAAAAA+QD5AAXADQAAAEiBwYHBhUUFxYXFjMyNzY3NjU0JyYnJhMUBiMFFxYUDwEGLwEuAT8BNh8BFhQPAQUyFh0BAe6Ecm9BQ0NCbnODiXVxQkREQnF1fwQC/pGDAQEVAwTsAgEC7AQEFAIBhAFwAgMD40RCcXWJg3NuQkNDQW9yhIl1cUJE/fYCAwuVAgQCFAQE0AIFAtEEBBQCBQGVCwMDJwAAAAUAAAAAA9QD0wAjACcANwBHAEgAAAERFAYjISImNREjIiY9ATQ2MyE1NDYzITIWHQEhMhYdARQGIyERIREHIgYVERQWOwEyNjURNCYjISIGFREUFjsBMjY1ETQmKwEDeyYb/XYbJkMJDQ0JAQYZEgEvExkBBgkNDQn9CQJc0QkNDQktCQ0NCf7sCQ0NCS0JDQ0JLQMi/TQbJiYbAswMCiwJDS4SGRkSLg0JLAoM/UwCtGsNCf5NCQ0NCQGzCQ0NCf5NCQ0NCQGzCQ0AAAAAEADGAAEAAAAAAAEABAAAAAEAAAAAAAIABwAEAAEAAAAAAAMABAALAAEAAAAAAAQABAAPAAEAAAAAAAUACwATAAEAAAAAAAYABAAeAAEAAAAAAAoAKwAiAAEAAAAAAAsAEwBNAAMAAQQJAAEACABgAAMAAQQJAAIADgBoAAMAAQQJAAMACAB2AAMAAQQJAAQACAB+AAMAAQQJAAUAFgCGAAMAAQQJAAYACACcAAMAAQQJAAoAVgCkAAMAAQQJAAsAJgD6d2V1aVJlZ3VsYXJ3ZXVpd2V1aVZlcnNpb24gMS4wd2V1aUdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAHcAZQB1AGkAUgBlAGcAdQBsAGEAcgB3AGUAdQBpAHcAZQB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwAHcAZQB1AGkARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETAAZjaXJjbGUIZG93bmxvYWQEaW5mbwxzYWZlX3N1Y2Nlc3MJc2FmZV93YXJuB3N1Y2Nlc3MOc3VjY2Vzcy1jaXJjbGURc3VjY2Vzcy1uby1jaXJjbGUHd2FpdGluZw53YWl0aW5nLWNpcmNsZQR3YXJuC2luZm8tY2lyY2xlBmNhbmNlbAZzZWFyY2gFY2xlYXIEYmFjawZkZWxldGUAAAAA\") format(\"truetype\")}[class*=\" weui-icon-\"],[class^=weui-icon-]{display:inline-block;vertical-align:middle;font:normal normal normal 14px/1 weui;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}[class*=\" weui-icon-\"]:before,[class^=weui-icon-]:before{display:inline-block;margin-left:.2em;margin-right:.2em}.weui-icon-circle:before{content:\"\\EA01\"}.weui-icon-download:before{content:\"\\EA02\"}.weui-icon-info:before{content:\"\\EA03\"}.weui-icon-safe-success:before{content:\"\\EA04\"}.weui-icon-safe-warn:before{content:\"\\EA05\"}.weui-icon-success:before{content:\"\\EA06\"}.weui-icon-success-circle:before{content:\"\\EA07\"}.weui-icon-success-no-circle:before{content:\"\\EA08\"}.weui-icon-waiting:before{content:\"\\EA09\"}.weui-icon-waiting-circle:before{content:\"\\EA0A\"}.weui-icon-warn:before{content:\"\\EA0B\"}.weui-icon-info-circle:before{content:\"\\EA0C\"}.weui-icon-cancel:before{content:\"\\EA0D\"}.weui-icon-search:before{content:\"\\EA0E\"}.weui-icon-clear:before{content:\"\\EA0F\"}.weui-icon-back:before{content:\"\\EA10\"}.weui-icon-delete:before{content:\"\\EA11\"}[class*=\" weui-icon_\"]:before,[class^=weui-icon_]:before{margin:0}.weui-icon-success{font-size:23px;color:#09bb07}.weui-icon-waiting{font-size:23px;color:#10aeff}.weui-icon-warn{font-size:23px;color:#f43530}.weui-icon-info{font-size:23px;color:#10aeff}.weui-icon-success-circle,.weui-icon-success-no-circle{font-size:23px;color:#09bb07}.weui-icon-waiting-circle{font-size:23px;color:#10aeff}.weui-icon-circle{font-size:23px;color:#c9c9c9}.weui-icon-download,.weui-icon-info-circle{font-size:23px;color:#09bb07}.weui-icon-safe-success{color:#09bb07}.weui-icon-safe-warn{color:#ffbe00}.weui-icon-cancel{color:#f43530;font-size:22px}.weui-icon-clear,.weui-icon-search{color:#b2b2b2;font-size:14px}.weui-icon-delete.weui-icon_gallery-delete{color:#fff;font-size:22px}.weui-icon_msg{font-size:93px}.weui-icon_msg.weui-icon-warn{color:#f76260}.weui-icon_msg-primary{font-size:93px}.weui-icon_msg-primary.weui-icon-warn{color:#ffbe00}.weui-btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;text-align:center;text-decoration:none;color:#fff;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden}.weui-btn:after{content:\" \";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);transform:scale(.5);transform-origin:0 0;box-sizing:border-box;border-radius:10px}.weui-btn_inline{display:inline-block}.weui-btn_default{color:#000;background-color:#f8f8f8}.weui-btn_default:not(.weui-btn_disabled):visited{color:#000}.weui-btn_default:not(.weui-btn_disabled):active{color:rgba(0,0,0,.6);background-color:#dedede}.weui-btn_primary{background-color:#1aad19}.weui-btn_primary:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_primary:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#179b16}.weui-btn_warn{background-color:#e64340}.weui-btn_warn:not(.weui-btn_disabled):visited{color:#fff}.weui-btn_warn:not(.weui-btn_disabled):active{color:hsla(0,0%,100%,.6);background-color:#ce3c39}.weui-btn_disabled{color:hsla(0,0%,100%,.6)}.weui-btn_disabled.weui-btn_default{color:rgba(0,0,0,.3);background-color:#f7f7f7}.weui-btn_disabled.weui-btn_primary{background-color:#9ed99d}.weui-btn_disabled.weui-btn_warn{background-color:#ec8b89}.weui-btn_loading .weui-loading{margin:-.2em .34em 0 0}.weui-btn_loading.weui-btn_primary,.weui-btn_loading.weui-btn_warn{color:hsla(0,0%,100%,.6)}.weui-btn_loading.weui-btn_primary{background-color:#179b16}.weui-btn_loading.weui-btn_warn{background-color:#ce3c39}.weui-btn_plain-primary{color:#1aad19;border:1px solid #1aad19}.weui-btn_plain-primary:not(.weui-btn_plain-disabled):active{color:rgba(26,173,25,.6);border-color:rgba(26,173,25,.6)}.weui-btn_plain-primary:after{border-width:0}.weui-btn_plain-default{color:#353535;border:1px solid #353535}.weui-btn_plain-default:not(.weui-btn_plain-disabled):active{color:rgba(53,53,53,.6);border-color:rgba(53,53,53,.6)}.weui-btn_plain-default:after{border-width:0}.weui-btn_plain-disabled{color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.2)}button.weui-btn,input.weui-btn{width:100%;border-width:0;outline:0;-webkit-appearance:none}button.weui-btn:focus,input.weui-btn:focus{outline:0}button.weui-btn_inline,button.weui-btn_mini,input.weui-btn_inline,input.weui-btn_mini{width:auto}button.weui-btn_plain-default,button.weui-btn_plain-primary,input.weui-btn_plain-default,input.weui-btn_plain-primary{border-width:1px;background-color:transparent}.weui-btn_mini{display:inline-block;padding:0 1.32em;line-height:2.3;font-size:13px}.weui-btn+.weui-btn{margin-top:15px}.weui-btn.weui-btn_inline+.weui-btn.weui-btn_inline{margin-top:auto;margin-left:15px}.weui-btn-area{margin:47.05882353em 15px .3em}.weui-btn-area_inline{display:flex}.weui-btn-area_inline .weui-btn{margin-top:auto;margin-right:15px;width:100%;flex:1}.weui-btn-area_inline .weui-btn:last-child{margin-right:0}.weui-cells{margin-top:47.05882353em;background-color:#fff;line-height:1.47058824;font-size:.425rem;overflow:hidden;position:relative}.weui-cells:before{top:0;border-top:1px solid #e5e5e5;transform-origin:0 0;transform:scaleY(.5)}.weui-cells:after,.weui-cells:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5;z-index:2}.weui-cells:after{bottom:0;border-bottom:1px solid #e5e5e5;transform-origin:0 100%;transform:scaleY(.5)}.weui-cells__title{margin-top:.77em}.weui-cells__tips{margin-top:.3em;color:#999;padding-left:.375rem;padding-right:.375rem;font-size:.385rem}.weui-cell{padding:.25rem .375rem;position:relative;display:flex;align-items:center}.weui-cell:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #e5e5e5;color:#e5e5e5;transform-origin:0 0;transform:scaleY(.5);left:.375rem;z-index:2}.weui-cell:first-child:before{display:none}.weui-cell_primary{align-items:flex-start}.weui-cell__bd{flex:1}.weui-cell__ft{text-align:right;color:#999}.weui-cell_swiped{display:block;padding:0}.weui-cell_swiped>.weui-cell__bd{position:relative;z-index:1;background-color:#fff}.weui-cell_swiped>.weui-cell__ft{position:absolute;right:0;top:0;bottom:0;display:flex;color:#fff}.weui-swiped-btn{display:block;padding:.25rem 1em;line-height:1.47058824;color:inherit}.weui-swiped-btn_default{background-color:#c7c7cc}.weui-swiped-btn_warn{background-color:#ff3b30}.weui-cell_access{-webkit-tap-highlight-color:rgba(0,0,0,0);color:inherit}.weui-cell_access:active{background-color:#ececec}.weui-cell_access .weui-cell__ft{padding-right:13px;position:relative}.weui-cell_access .weui-cell__ft:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;margin-top:-4px;right:2px}.weui-cell_link{color:#586c94;font-size:14px}.weui-cell_link:first-child:before{display:block}.weui-check__label{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-check__label:active{background-color:#ececec}.weui-check{position:absolute;left:-9999em}.weui-cells_radio .weui-cell__ft{padding-left:.35em}.weui-cells_radio .weui-check:checked+.weui-icon-checked:before{display:block;content:\"\\EA08\";color:#09bb07;font-size:16px}.weui-cells_checkbox .weui-cell__hd{padding-right:.35em}.weui-cells_checkbox .weui-icon-checked:before{content:\"\\EA01\";color:#c9c9c9;font-size:23px;display:block}.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{content:\"\\EA06\";color:#09bb07}.weui-label{display:block;width:2.625rem;word-wrap:break-word;word-break:break-all}.weui-input{width:100%;border:0;outline:0;-webkit-appearance:none;background-color:transparent;font-size:inherit;color:inherit;height:1.47058824em;line-height:1.47058824}.weui-input::-webkit-inner-spin-button,.weui-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.weui-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0}.weui-textarea-counter{color:#b2b2b2;text-align:right}.weui-cell_warn .weui-textarea-counter{color:#e64340}.weui-toptips{display:none;position:fixed;transform:translateZ(0);top:0;left:0;right:0;padding:5px;font-size:14px;text-align:center;color:#fff;z-index:5000;word-wrap:break-word;word-break:break-all}.weui-toptips_warn{background-color:#e64340}.weui-cells_form .weui-cell__ft{font-size:0}.weui-cells_form .weui-icon-warn{display:none}.weui-cells_form input,.weui-cells_form label[for],.weui-cells_form textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-cell_warn{color:#e64340}.weui-cell_warn .weui-icon-warn{display:inline-block}.weui-form-preview{position:relative;background-color:#fff}.weui-form-preview:before{top:0;border-top:1px solid #e5e5e5;transform-origin:0 0;transform:scaleY(.5)}.weui-form-preview:after,.weui-form-preview:before{content:\" \";position:absolute;left:0;right:0;height:1px;color:#e5e5e5}.weui-form-preview:after{bottom:0;border-bottom:1px solid #e5e5e5;transform-origin:0 100%;transform:scaleY(.5)}.weui-form-preview__hd{position:relative;padding:.25rem .375rem;text-align:right;line-height:2.5em}.weui-form-preview__hd:after{content:\" \";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;transform-origin:0 100%;transform:scaleY(.5);left:.375rem}.weui-form-preview__hd .weui-form-preview__value{font-style:normal;font-size:1.6em}.weui-form-preview__bd{padding:.25rem .375rem;font-size:.9em;text-align:right;color:#999;line-height:2}.weui-form-preview__ft{position:relative;line-height:50px;display:flex}.weui-form-preview__ft:before{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleY(.5)}.weui-form-preview__item{overflow:hidden}.weui-form-preview__label{float:left;margin-right:1em;min-width:4em;color:#999;text-align:justify;text-align-last:justify}.weui-form-preview__value{display:block;overflow:hidden;word-break:normal;word-wrap:break-word}.weui-form-preview__btn{position:relative;display:block;flex:1;color:#3cc51f;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}button.weui-form-preview__btn{background-color:transparent;border:0;outline:0;line-height:inherit;font-size:inherit}.weui-form-preview__btn:active{background-color:#eee}.weui-form-preview__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleX(.5)}.weui-form-preview__btn:first-child:after{display:none}.weui-form-preview__btn_default{color:#999}.weui-form-preview__btn_primary{color:#0bb20c}.weui-cell_select{padding:0}.weui-cell_select .weui-select{padding-right:30px}.weui-cell_select .weui-cell__bd:after{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:.375rem;margin-top:-4px}.weui-select{-webkit-appearance:none;border:0;outline:0;background-color:transparent;width:100%;font-size:inherit;height:1.125rem;line-height:1.125rem;position:relative;z-index:1;padding-left:.375rem}.weui-cell_select-before{padding-right:.375rem}.weui-cell_select-before .weui-select{width:2.625rem;box-sizing:border-box}.weui-cell_select-before .weui-cell__hd{position:relative}.weui-cell_select-before .weui-cell__hd:after{content:\" \";position:absolute;right:0;top:0;width:1px;bottom:0;border-right:1px solid #e5e5e5;color:#e5e5e5;transform-origin:100% 0;transform:scaleX(.5)}.weui-cell_select-before .weui-cell__hd:before{content:\" \";display:inline-block;height:6px;width:6px;border-width:2px 2px 0 0;border-color:#c8c8cd;border-style:solid;transform:matrix(.71,.71,-.71,.71,0,0);position:relative;top:-2px;position:absolute;top:50%;right:.375rem;margin-top:-4px}.weui-cell_select-before .weui-cell__bd{padding-left:.375rem}.weui-cell_select-before .weui-cell__bd:after{display:none}.weui-cell_select-after{padding-left:.375rem}.weui-cell_select-after .weui-select{padding-left:0}.weui-cell_vcode{padding-top:0;padding-right:0;padding-bottom:0}.weui-vcode-btn,.weui-vcode-img{margin-left:5px;height:1.125rem;vertical-align:middle}.weui-vcode-btn{display:inline-block;padding:0 .6em 0 .7em;border-left:1px solid #e5e5e5;line-height:1.125rem;font-size:.425rem;color:#3cc51f}button.weui-vcode-btn{background-color:transparent;border-top:0;border-right:0;border-bottom:0;outline:0}.weui-vcode-btn:active{color:#52a341}.weui-gallery{display:none;position:fixed;top:0;right:0;bottom:0;left:0;background-color:#000;z-index:1000}.weui-gallery__img{position:absolute;top:0;right:0;bottom:60px;left:0;background:50% no-repeat;background-size:contain}.weui-gallery__opr{position:absolute;right:0;bottom:0;left:0;background-color:#0d0d0d;color:#fff;line-height:60px;text-align:center}.weui-gallery__del{display:block}.weui-cell_switch{padding-top:-15.4375rem;padding-bottom:-15.4375rem}.weui-switch{appearance:none}.weui-switch,.weui-switch-cp__box{position:relative;width:52px;height:32px;border:1px solid #dfdfdf;outline:0;border-radius:16px;box-sizing:border-box;background-color:#dfdfdf;transition:background-color .1s,border .1s}.weui-switch-cp__box:before,.weui-switch:before{content:\" \";position:absolute;top:0;left:0;width:50px;height:30px;border-radius:15px;background-color:#fdfdfd;transition:transform .35s cubic-bezier(.45,1,.4,1)}.weui-switch-cp__box:after,.weui-switch:after{content:\" \";position:absolute;top:0;left:0;width:30px;height:30px;border-radius:15px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4);transition:transform .35s cubic-bezier(.4,.4,.25,1.35)}.weui-switch-cp__input:checked~.weui-switch-cp__box,.weui-switch:checked{border-color:#04be02;background-color:#04be02}.weui-switch-cp__input:checked~.weui-switch-cp__box:before,.weui-switch:checked:before{transform:scale(0)}.weui-switch-cp__input:checked~.weui-switch-cp__box:after,.weui-switch:checked:after{transform:translateX(20px)}.weui-switch-cp__input{position:absolute;left:-9999px}.weui-switch-cp__box{display:block}.weui-uploader__hd{display:flex;padding-bottom:.25rem;align-items:center}.weui-uploader__title{flex:1}.weui-uploader__info{color:#b2b2b2}.weui-uploader__bd{margin-bottom:-8.875rem;margin-right:-9px;overflow:hidden}.weui-uploader__files{list-style:none}.weui-uploader__file{float:left;margin-right:9px;margin-bottom:9px;width:79px;height:79px;background:no-repeat 50%;background-size:cover}.weui-uploader__file_status{position:relative}.weui-uploader__file_status:before{content:\" \";position:absolute;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.weui-uploader__file_status .weui-uploader__file-content{display:block}.weui-uploader__file-content{display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff}.weui-uploader__file-content .weui-icon-warn{display:inline-block}.weui-uploader__input-box{float:left;position:relative;margin-right:9px;margin-bottom:9px;width:77px;height:77px;border:1px solid #d9d9d9}.weui-uploader__input-box:after,.weui-uploader__input-box:before{content:\" \";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#d9d9d9}.weui-uploader__input-box:before{width:2px;height:39.5px}.weui-uploader__input-box:after{width:39.5px;height:2px}.weui-uploader__input-box:active{border-color:#999}.weui-uploader__input-box:active:after,.weui-uploader__input-box:active:before{background-color:#999}.weui-uploader__input{position:absolute;z-index:1;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.weui-footer{color:#999;font-size:14px;text-align:center}.weui-footer a{color:#586c94}.weui-footer_fixed-bottom{position:fixed;bottom:.52em;left:0;right:0}.weui-footer__links{font-size:0}.weui-footer__link{display:inline-block;vertical-align:top;margin:0 .62em;position:relative;font-size:14px}.weui-footer__link:before{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #c7c7c7;color:#c7c7c7;transform-origin:0 0;transform:scaleX(.5);left:-.65em;top:.36em;bottom:.36em}.weui-footer__link:first-child:before{display:none}.weui-footer__text{padding:0 .34em;font-size:12px}.weui-flex{display:flex}.weui-flex__item{flex:1}.weui-dialog{position:fixed;z-index:5000;width:80%;max-width:300px;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;text-align:center;border-radius:3px;overflow:hidden}.weui-dialog__hd{padding:1.3em 1.6em .5em}.weui-dialog__title{font-weight:400;font-size:18px}.weui-dialog__bd{padding:0 1.6em .8em;min-height:40px;font-size:15px;line-height:1.3;word-wrap:break-word;word-break:break-all;color:#999}.weui-dialog__bd:first-child{padding:2.7em 20px 1.7em;color:#353535}.weui-dialog__ft{position:relative;line-height:48px;font-size:18px;display:flex}.weui-dialog__ft:after{content:\" \";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleY(.5)}.weui-dialog__btn{display:block;flex:1;color:#3cc51f;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative}.weui-dialog__btn:active{background-color:#eee}.weui-dialog__btn:after{content:\" \";position:absolute;left:0;top:0;width:1px;bottom:0;border-left:1px solid #d5d5d6;color:#d5d5d6;transform-origin:0 0;transform:scaleX(.5)}.weui-dialog__btn:first-child:after{display:none}.weui-dialog__btn_default{color:#353535}.weui-dialog__btn_primary{color:#0bb20c}.weui-skin_android .weui-dialog{text-align:left;box-shadow:0 6px 30px 0 rgba(0,0,0,.1)}.weui-skin_android .weui-dialog__title{font-size:21px}.weui-skin_android .weui-dialog__hd{text-align:left}.weui-skin_android .weui-dialog__bd{color:#999;padding:.25em 1.6em 2em;font-size:17px;text-align:left}.weui-skin_android .weui-dialog__bd:first-child{padding:1.6em 1.6em 2em;color:#353535}.weui-skin_android .weui-dialog__ft{display:block;text-align:right;line-height:42px;font-size:16px;padding:0 1.6em .7em}.weui-skin_android .weui-dialog__ft:after{display:none}.weui-skin_android .weui-dialog__btn{display:inline-block;vertical-align:top;padding:0 .8em}.weui-skin_android .weui-dialog__btn:after{display:none}.weui-skin_android .weui-dialog__btn:active,.weui-skin_android .weui-dialog__btn:visited{background-color:rgba(0,0,0,.06)}.weui-skin_android .weui-dialog__btn:last-child{margin-right:-.8em}.weui-skin_android .weui-dialog__btn_default{color:gray}@media screen and (min-width:1024px){.weui-dialog{width:35%}}.weui-toast{position:fixed;z-index:5000;width:7.6em;min-height:7.6em;top:180px;left:50%;margin-left:-3.8em;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.weui-icon_toast{margin:22px 0 0;display:block}.weui-icon_toast.weui-icon-success-no-circle:before{color:#fff;font-size:55px}.weui-icon_toast.weui-loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.weui-toast__content{margin:0 0 15px}.weui-mask{background:rgba(0,0,0,.6)}.weui-mask,.weui-mask_transparent{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0}.weui-loading{width:20px;height:20px;display:inline-block;vertical-align:middle;animation:weuiLoading 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}.weui-btn_loading.weui-btn_primary .weui-loading,.weui-btn_loading.weui-btn_warn .weui-loading,.weui-loading.weui-loading_transparent{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect xmlns='http://www.w3.org/2000/svg' width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.56)' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.5)' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.43)' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.38)' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.32)' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.28)' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.25)' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.2)' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.17)' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.14)' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.1)' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='rgba(255,255,255,.03)' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E\")}@-webkit-keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes weuiLoading{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.weui-btn{font-size:.45rem}.weui-cells__title{margin-top:1.2em;margin-bottom:.3em;padding-left:.375rem;padding-right:.375rem;color:#999;font-size:.385rem}.weui-cells__title+.weui-cells{margin-top:0}.weui-cells_checkbox .weui-icon-checked:before{font-size:.575rem}.weui-cells_radio .weui-check:checked+.weui-icon-checked:before{font-size:.4rem;color:inherit}.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{color:inherit}.weui-toast{width:3.04rem;min-height:3.04rem;top:4.5rem;margin-left:-1.52rem;border-radius:.125rem}.weui-icon_toast{margin:.55rem 0 0}.weui-icon_toast.weui-icon-success-no-circle:before{font-size:1.375rem}.weui-icon_toast.weui-loading{margin:.75rem 0 0;width:.95rem;height:.95rem}.weui-toast__content{margin:0 0 .375rem;font-size:.4rem}.weui-footer{font-size:.35rem}.weui-footer__text{padding:.136rem;font-size:.3rem}.weui-icon-warn{font-size:.575rem}.weui-mask_transparent{z-index:3000}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".ro-segment-item{position:relative;text-align:center}.ro-segment-item:after{content:\"\";display:inline-block;position:absolute;top:0;right:0;bottom:0;width:1px;border-right:1px solid #e5e5e5;transform:scaleX(.5)}.ro-segment-item:last-child:after{display:none}.btn.btn-mobile.btn-ro-questionnaire-segment{color:#3c3c3c;background-color:#fff;transition:background-color .2s;user-select:none;cursor:pointer}.btn.btn-mobile.btn-ro-questionnaire-segment:hover,.btn.btn-mobile.btn-ro-questionnaire-segment:link,.btn.btn-mobile.btn-ro-questionnaire-segment:visited{color:#3c3c3c;background-color:#fff;text-decoration:none}.btn.btn-mobile.btn-ro-questionnaire-segment.active,.btn.btn-mobile.btn-ro-questionnaire-segment.disabled,.btn.btn-mobile.btn-ro-questionnaire-segment:active,.btn.btn-mobile.btn-ro-questionnaire-segment:disabled{color:#3c3c3c;background-color:#e5e5e5}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".ro-select{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(29),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(28),
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
  __webpack_require__(10),
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(31),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(36)
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(33),
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

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(34),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
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
  }, [_vm._v(_vm._s(_vm._f("placeholder")(_vm.source.text, _vm.source.placeholder, '')))])])])])
},staticRenderFns: []}

/***/ }),
/* 31 */
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
        "item": _vm.setResult,
        "load": _vm.onStartLoad,
        "finish": _vm.onFinishLoad,
        "background": _vm.onBackground,
        "foreground": _vm.onForeground,
        "warn": _vm.onWarn,
        "validate": _vm.onValidate,
        "click": _vm.onClick
      }
    })], 1)
  }), _vm._v(" "), _c('div', {
    staticClass: "ro-questionnaire-submit-button"
  }, [_c('MobileButton', {
    class: _vm.mobileButtonClass,
    style: (_vm.mobileButtonStyle),
    attrs: {
      "name": _vm.mobileButtonName,
      "is-block": true,
      "is-disabled": !(!_vm.disableSubmit && _vm.isComplete)
    },
    on: {
      "click": _vm.onClickSubmit
    }
  }, [_vm._v("\n            " + _vm._s(_vm.submitHint) + "\n        ")])], 1)], 2)
},staticRenderFns: []}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "weui-cells"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, _vm._l((_vm.source), function(item) {
    return _c('MobileButton', {
      staticClass: "ro-segment-item",
      style: ({
        color: item.value == _vm.val ? _vm.color : 'rgba(53,53,53,1)',
        width: (100 / _vm.rowCount) + '%'
      }),
      attrs: {
        "name": "ro-questionnaire-segment"
      },
      on: {
        "click": function($event) {
          _vm.onClickItem(item.value)
        }
      }
    }, [_vm._v("\n            " + _vm._s(item.text) + "\n        ")])
  }))])
},staticRenderFns: []}

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
    class: ['ro-text-view', {
      placeholder: _vm.currentValue === null || typeof _vm.currentValue === 'undefined'
    }]
  }, [_vm._v(_vm._s(_vm._f("placeholder")(_vm.map[_vm.currentValue], _vm.placeholder)) + _vm._s(_vm.source.disabled ? '(当前不可修改)' : ''))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.currentValue),
      expression: "currentValue"
    }],
    staticClass: "ro-select",
    attrs: {
      "disabled": _vm.source.disabled
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.currentValue = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.source.slots), function(item, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": item.value
      }
    }, [_vm._v(_vm._s(item.text))])
  }))])])])
},staticRenderFns: []}

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("30a9aa3a", content, true);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2fb0891a", content, true);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("5c57a974", content, true);

/***/ }),
/* 38 */
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