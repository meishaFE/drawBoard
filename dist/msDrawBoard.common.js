module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xGkn");
var global = __webpack_require__("7KvD");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var TO_STRING_TAG = __webpack_require__("dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "/bQp":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "/n6Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("+tPU");
module.exports = __webpack_require__("Kh4W").f('iterator');


/***/ }),

/***/ "/whu":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vgs7");


/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("3Eo+")('meta');
var isObject = __webpack_require__("EqjI");
var has = __webpack_require__("D2L2");
var setDesc = __webpack_require__("evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "0qmw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fS6E");

/***/ }),

/***/ "1kS7":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2p1q":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk");
var createDesc = __webpack_require__("fU25");
module.exports = __webpack_require__("bUqO") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "3T7U":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4mcu":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "7UU1":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "7gX0":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "94VQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Yobk");
var descriptor = __webpack_require__("X8DO");
var setToStringTag = __webpack_require__("e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("hJx8")(IteratorPrototype, __webpack_require__("dSzd")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "9vb1":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("bN1p");
var ITERATOR = __webpack_require__("kkCw")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "BbyF":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("oeih");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "BwfY":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fWfb");
__webpack_require__("M6a0");
__webpack_require__("OYls");
__webpack_require__("QWe/");
module.exports = __webpack_require__("FeBl").Symbol;


/***/ }),

/***/ "C9uT":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("Q0Ak");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "DIVP":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "Ds5P":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var core = __webpack_require__("7gX0");
var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var ctx = __webpack_require__("rFzY");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "DuR2":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "EGZi":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "EOM2":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("lRwf"), __webpack_require__("c+8m"), __webpack_require__("I8yv")) :
	typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vue-class-component', 'reflect-metadata'], factory) :
	(factory((global.VuePropertyDecorator = {}),global.Vue,global.VueClassComponent));
}(this, (function (exports,vue,vueClassComponent) { 'use strict';

vue = vue && vue.hasOwnProperty('default') ? vue['default'] : vue;
var vueClassComponent__default = 'default' in vueClassComponent ? vueClassComponent['default'] : vueClassComponent;

/** vue-property-decorator verson 6.0.0 MIT LICENSE copyright 2017 kaorun343 */
'use strict';
/**
 * decorator of an inject
 * @param key key
 * @return PropertyDecorator
 */
function Inject(key) {
    return vueClassComponent.createDecorator(function (componentOptions, k) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[k] = key || k;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return vueClassComponent.createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        if (!Array.isArray(options) && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
        vueClassComponent.createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        if (!Array.isArray(options) && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
        vueClassComponent.createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return vueClassComponent.createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (original.apply(this, args) !== false)
                this.$emit.apply(this, [event || key].concat(args));
        };
    };
}

exports.Component = vueClassComponent__default;
exports.Vue = vue;
exports.Inject = Inject;
exports.Provide = Provide;
exports.Model = Model;
exports.Prop = Prop;
exports.Watch = Watch;
exports.Emit = Emit;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "EuXz":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("lDLk").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("bUqO") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "FZ+f":
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

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "FryR":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("/whu");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "I8yv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
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
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && Object({"NODE_ENV":"production","BASE_URL":"/"}) && Object({"NODE_ENV":"production","BASE_URL":"/"})["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("KNAl"), __webpack_require__("DuR2")))

/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "KNAl":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("o/zv");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "Kh4W":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("dSzd");


/***/ }),

/***/ "Kh5d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("sB3e");
var $getPrototypeOf = __webpack_require__("PzxK");

__webpack_require__("uqUo")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "KkFq":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, ".ms-draw[data-v-2332bbf2]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:1024px;height:100%;max-height:700px}.ms-draw[data-v-2332bbf2]::-webkit-scrollbar{display:none}.ms-draw__control__container[data-v-2332bbf2]{position:absolute;bottom:20px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;overflow-y:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:400px;margin-left:30px}.ms-draw__control__container[data-v-2332bbf2]::-webkit-scrollbar{display:none}.ms-draw__control__content[data-v-2332bbf2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ms-draw__control__button[data-v-2332bbf2],.ms-draw__control__content[data-v-2332bbf2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.ms-draw__control__button[data-v-2332bbf2]{position:relative;z-index:2;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20px;height:20px;margin-top:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%}.ms-draw__control__button.is-color[data-v-2332bbf2]{padding-bottom:2px}.ms-draw__control__button.is-toggle[data-v-2332bbf2]{margin-top:20px}.ms-draw__control__button.is-toggle[data-v-2332bbf2],.ms-draw__control__button.is-toggle img[data-v-2332bbf2]{width:32px;height:32px}.ms-draw__control__button.is-eraser[data-v-2332bbf2],.ms-draw__control__button.is-eraser img[data-v-2332bbf2]{width:20px;height:20px}.ms-draw__control__button.is-back[data-v-2332bbf2],.ms-draw__control__button.is-back img[data-v-2332bbf2]{width:18px;height:16px}.ms-draw__core[data-v-2332bbf2]{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;min-height:430px}.ms-draw__save-button[data-v-2332bbf2]{font-size:14px;font-weight:500;line-height:1;position:absolute;right:0;bottom:30px;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:12px 20px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:.1s;transition:.1s;text-align:center;white-space:nowrap;color:#fff;border:1px solid #409eff;border-radius:4px;outline:none;background:#409eff;-webkit-appearance:none}.ms-draw__save-button[data-v-2332bbf2]:hover{color:#fff;border-color:#66b1ff;background:#66b1ff}.ms-draw__save-button[data-v-2332bbf2]:active{color:#fff;border-color:#3a8ee6;background:#3a8ee6}.draw-control-container[data-v-2332bbf2]{position:absolute;bottom:20px;left:0;display:-webkit-box;display:-ms-flexbox;display:flex;overflow-y:auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:400px;margin-left:30px}.draw-control-container[data-v-2332bbf2]::-webkit-scrollbar{display:none}.draw-control-container .draw-control-content[data-v-2332bbf2]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.draw-control-container .control-button[data-v-2332bbf2],.draw-control-container .draw-control-content[data-v-2332bbf2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box}.draw-control-container .control-button[data-v-2332bbf2]{position:relative;z-index:2;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20px;height:20px;margin-top:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:50%}.draw-control-container .control-button-color[data-v-2332bbf2]{padding-bottom:2px}.draw-control-container .control-button-toggle[data-v-2332bbf2]{margin-top:20px}.draw-control-container .control-button-toggle[data-v-2332bbf2],.draw-control-container .control-button-toggle img[data-v-2332bbf2]{width:32px;height:32px}.draw-control-container .control-button-eraser[data-v-2332bbf2],.draw-control-container .control-button-eraser img[data-v-2332bbf2]{width:20px;height:20px}.draw-control-container .control-button-back[data-v-2332bbf2],.draw-control-container .control-button-back img[data-v-2332bbf2]{width:18px;height:16px}", ""]);

// exports


/***/ }),

/***/ "LKZe":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NpIQ");
var createDesc = __webpack_require__("X8DO");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var has = __webpack_require__("D2L2");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("+E39") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "M1I4":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "M6a0":
/***/ (function(module, exports) {



/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "MfeA":
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__("Vg1y")('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "NM/j":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("7UU1");

var iterableToArrayLimit = __webpack_require__("cXIJ");

var nonIterableRest = __webpack_require__("3T7U");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "NNrz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("zgIt");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "No4x":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__("Ds5P");

$export($export.P, 'Array', { fill: __webpack_require__("zCYm") });

__webpack_require__("RhFG")('fill');


/***/ }),

/***/ "NpIQ":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "OYls":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("crlp")('asyncIterator');


/***/ }),

/***/ "Oy1H":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("tRu9");

var _Symbol = __webpack_require__("xah7");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "OzIq":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "PHYF":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAABb0lEQVR4Ac3DA6heYQDH4dm2bdu2bYTZtm3bC3Namu0tzLZt879f9VbX+L5zz3ueeqJFQEKu4m4mplWFeZ0yN9KabvxGmR/YgK5LzM1UgOeYna4rxltUgAsZh67rzR+U+Y5N6bqcvEQx4ANc78C1nMeezM9wXaNcfJGdGJ0hWkVZeJIZGUwMDuRrKsAdrMgKfq7KdpzBG1SAT1iUIcrIo1SAO5mcTmrFh5T5ipkYopicxr+U+YDl6KRUPEWZZxiboarNl5T5m8MYnU5JwhuUOZBhSsdDVICL6aRi/EvxGeMwTDE4kX8pdqPTtlBmQ0ZIVXZmVKhFmUtoXRx+o3icnnCL4kN6wgmKb+gJxyi+oydcoPiMnvCK4iVal5cyt9G6MZTZh1Yl4muKv5ieVq2hzJW0aghlfmZGWpGQS6kAW9N1OTmCz6gAx9NnmXiINyLxLr9RAfMXu9IvIygHHmZR+q0wn1GR+JfveJZzWYqh+g9xOfjSMdWGNQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "PHqh":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("Q6Nf");
var defined = __webpack_require__("/whu");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("D2L2");
var toObject = __webpack_require__("sB3e");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "Q0Ak":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9bBU");

/***/ }),

/***/ "Q6Nf":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("ydD5");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "QKXm":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "QWe/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("crlp")('observable');


/***/ }),

/***/ "Qh14":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ReGu");
var enumBugKeys = __webpack_require__("QKXm");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "R3AP":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var hide = __webpack_require__("2p1q");
var has = __webpack_require__("WBcL");
var SRC = __webpack_require__("ulTY")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("7gX0").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "ReGu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("WBcL");
var toIObject = __webpack_require__("PHqh");
var arrayIndexOf = __webpack_require__("ot5s")(false);
var IE_PROTO = __webpack_require__("mZON")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "RhFG":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("kkCw")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("2p1q")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "Rrel":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("TcQ7");
var gOPN = __webpack_require__("n0T6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SHe9":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("wC1N");
var ITERATOR = __webpack_require__("kkCw")('iterator');
var Iterators = __webpack_require__("bN1p");
module.exports = __webpack_require__("7gX0").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "T/v0":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("Oy1H");

var assertThisInitialized = __webpack_require__("M1I4");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "UKM+":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "VWgF":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("OzIq");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "Vg1y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("2p1q");
var redefine = __webpack_require__("R3AP");
var fails = __webpack_require__("zgIt");
var defined = __webpack_require__("/whu");
var wks = __webpack_require__("kkCw");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "VjuZ":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("Vg1y")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "WBcL":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "X8DO":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "XSOZ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "Xc4G":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "XvUs":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("DIVP");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "Y1N3":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "Y1aA":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "Z60a":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "ZaQb":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("EqjI");
var anObject = __webpack_require__("77Pl");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("+ZMJ")(Function.call, __webpack_require__("LKZe").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bN1p":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "bSML":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("lDLk");
var createDesc = __webpack_require__("fU25");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "bUqO":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("zgIt")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "beEN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("rFzY");
var $export = __webpack_require__("Ds5P");
var toObject = __webpack_require__("FryR");
var call = __webpack_require__("XvUs");
var isArrayIter = __webpack_require__("9vb1");
var toLength = __webpack_require__("BbyF");
var createProperty = __webpack_require__("bSML");
var getIterFn = __webpack_require__("SHe9");

$export($export.S + $export.F * !__webpack_require__("qkyc")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "c+8m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.2.0
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("lRwf"));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {
        if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
            warn('Component class must inherit Vue or its descendant class ' +
                'when class property is used.');
        }
    }
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {
            warn("Static property name '" + key + "' declared on class '" + Original.name + "' " +
                'conflicts with reserved property name of Vue internal. ' +
                'It may cause unexpected behavior of the component. Consider renaming the property.');
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports.default = Component$1;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "cXIJ":
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__("xgqT");

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "crlp":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var LIBRARY = __webpack_require__("O4g8");
var wksExt = __webpack_require__("Kh4W");
var defineProperty = __webpack_require__("evD5").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dkdY":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("rjX0");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "exh5":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("kM2E");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZaQb").set });


/***/ }),

/***/ "fS6E":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Kh5d");
module.exports = __webpack_require__("FeBl").Object.getPrototypeOf;


/***/ }),

/***/ "fU25":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "fWfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7KvD");
var has = __webpack_require__("D2L2");
var DESCRIPTORS = __webpack_require__("+E39");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var META = __webpack_require__("06OY").KEY;
var $fails = __webpack_require__("S82l");
var shared = __webpack_require__("e8AB");
var setToStringTag = __webpack_require__("e6n0");
var uid = __webpack_require__("3Eo+");
var wks = __webpack_require__("dSzd");
var wksExt = __webpack_require__("Kh4W");
var wksDefine = __webpack_require__("crlp");
var enumKeys = __webpack_require__("Xc4G");
var isArray = __webpack_require__("7UMu");
var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var createDesc = __webpack_require__("X8DO");
var _create = __webpack_require__("Yobk");
var gOPNExt = __webpack_require__("Rrel");
var $GOPD = __webpack_require__("LKZe");
var $DP = __webpack_require__("evD5");
var $keys = __webpack_require__("lktj");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("n0T6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NpIQ").f = $propertyIsEnumerable;
  __webpack_require__("1kS7").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("O4g8")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("hJx8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "fxRn":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("g8Ux");


/***/ }),

/***/ "g8Ux":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var get = __webpack_require__("3fs2");
module.exports = __webpack_require__("FeBl").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "h65t":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var defined = __webpack_require__("52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "i/C/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("exh5");
module.exports = __webpack_require__("FeBl").Object.setPrototypeOf;


/***/ }),

/***/ "j/rp":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("dkdY");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  setPrototypeOf(subClass.prototype, superClass && superClass.prototype);
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "jhxf":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("UKM+");
var document = __webpack_require__("OzIq").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var has = __webpack_require__("D2L2");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "kkCw":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("VWgF")('wks');
var uid = __webpack_require__("ulTY");
var Symbol = __webpack_require__("OzIq").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "lDLk":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("DIVP");
var IE8_DOM_DEFINE = __webpack_require__("xZa+");
var toPrimitive = __webpack_require__("s4j0");
var dP = Object.defineProperty;

exports.f = __webpack_require__("bUqO") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', { defineProperty: __webpack_require__("evD5").f });


/***/ }),

/***/ "mJx5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("Vg1y")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("u0PK");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "mZON":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("VWgF")('keys');
var uid = __webpack_require__("ulTY");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "n0T6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("Ibhu");
var hiddenKeys = __webpack_require__("xnc9").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "n12u":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("Ds5P");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("oYd7") });


/***/ }),

/***/ "o/zv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("KNAl")))

/***/ }),

/***/ "oYd7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("Qh14");
var gOPS = __webpack_require__("Y1N3");
var pIE = __webpack_require__("Y1aA");
var toObject = __webpack_require__("FryR");
var IObject = __webpack_require__("Q6Nf");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("zgIt")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "oeih":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "ot5s":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("PHqh");
var toLength = __webpack_require__("BbyF");
var toAbsoluteIndex = __webpack_require__("zo/l");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "qkyc":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("kkCw")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "rFzY":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("XSOZ");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "rjX0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("i/C/");

/***/ }),

/***/ "rjj0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
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

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
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
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

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
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

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
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
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

/***/ "s4j0":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("UKM+");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "s6bQ":
/***/ (function(module, exports, __webpack_require__) {

!function t(e,r){ true?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,"function"))return w?r():t.on("raphael.DOMload",r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],"function")){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on("raphael.DOMload",function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[A](i)&&(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;r<i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[A](s)?(i(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&&(h=1),h=h>1?1:h<0?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g<c;g++){var v=u*f[g]+u,x=o(v,t,r,n,s),y=o(v,e,i,a,l),m=x*x+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(h<0||l(t,e,r,i,n,a,s,o)<h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)>d;)c/=2,f+=(p<h?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)<G(n,s)||G(t,r)>W(n,s)||W(e,i)<G(a,o)||G(e,i)>W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+G(t,r).toFixed(2)||p>+W(t,r).toFixed(2)||p<+G(n,s).toFixed(2)||p>+W(n,s).toFixed(2)||d<+G(e,i).toFixed(2)||d>+W(e,i).toFixed(2)||d<+G(a,o).toFixed(2)||d>+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;v<h+1;v++){var x=e.findDotsAtSegment.apply(e,t.concat(v/h));f.push({x:x.x,y:x.y,t:v/h})}for(v=0;v<c+1;v++)x=e.findDotsAtSegment.apply(e,r.concat(v/c)),p.push({x:x.x,y:x.y,t:v/c});for(v=0;v<h;v++)for(var y=0;y<c;y++){var m=f[v],b=f[v+1],_=p[y],w=p[y+1],k=H(b.x-m.x)<.001?"y":"x",B=H(w.x-_.x)<.001?"y":"x",C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&S<=1.001&&A>=0&&A<=1.001&&(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(A,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],v=0,x=t.length;v<x;v++){var y=t[v];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;m<b;m++){var _=r[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;k<B;k++)w[k].segment1=v,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function v(){return this.x+j+this.y}function x(){return this.x+j+this.y+j+this.width+" × "+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;l<8;l++){if(a=s(n)-t,H(a)<e)return n;if(o=(3*c*n+2*u)*n+h,H(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,n<r)return r;if(n>i)return i;for(;r<i;){if(a=s(n),H(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[A](n)&&(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,v=r.ms,x={},m={},b={};if(a)for(w=0,B=Ee.length;w<B;w++){var _=Ee[w];if(_.el.id==i.id&&_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;w<B;w++){if(r.percents[w]==n||r.percents[w]>a*r.top){n=r.percents[w],p=r.percents[w-1]||0,v=v/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&&i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[A](C)&&(pt[A](C)||i.paper.customAttributes[A](C)))switch(x[C]=i.attr(C),null==x[C]&&(x[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-x[C])/v;break;case"colour":x[C]=e.getRGB(x[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-x[C].r)/v,g:(S.g-x[C].g)/v,b:(S.b-x[C].b)/v};break;case"path":var T=Qt(x[C],m[C]),E=T[1];for(x[C]=T[0],b[C]=[],w=0,B=x[C].length;w<B;w++){b[C][w]=[0];for(var M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(E[w][M]-x[C][w][M])/v}break;case"transform":var L=i._,z=le(L[C],m[C]);if(z)for(x[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=x[C].length;w<B;w++)for(b[C][w]=[x[C][w][0]],M=1,N=x[C][w].length;M<N;M++)b[C][w][M]=(m[C][w][M]-x[C][w][M])/v;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};x[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/v,(R.matrix.b-F.b)/v,(R.matrix.c-F.c)/v,(R.matrix.d-F.d)/v,(R.matrix.e-F.e)/v,(R.matrix.f-F.f)/v]}break;case"csv":var j=I(l[C])[q](k),D=I(x[C])[q](k);if("clip-rect"==C)for(x[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(j[w]-x[C][w])/v;m[C]=j;break;default:for(j=[][P](l[C]),D=[][P](x[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((j[w]||0)-(D[w]||0))/v}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=I(V).match(st),O&&5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],v)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:v,easing:O,from:x,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&&!h&&!u&&(_.stop=!0,_.start=new Date-v*a,1==Ee.length))return Ne();u&&(_.start=new Date-_.ms*a),1==Ee.length&&Me(Ne)}t("raphael.anim.start."+i.id,i,r)}}function _(t){for(var e=0;e<Ee.length;e++)Ee[e].el.paper==t&&Ee.splice(e--,1)}e.version="2.2.0",e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="prototype",A="hasOwnProperty",T={doc:document,win:window},E={was:Object.prototype[A].call(T.win,"Raphael"),is:T.win.Raphael},M=function(){this.ca=this.customAttributes={}},N,L="appendChild",z="apply",P="concat",F="ontouchstart"in T.win||T.win.DocumentTouch&&T.doc instanceof DocumentTouch,R="",j=" ",I=String,q="split",D="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[q](j),V={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},O=I.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$="number",Z="string",Q="array",J="toString",K="fill",tt=Object.prototype.toString,et={},rt="push",it=e._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,"-Infinity":1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt="setAttribute",ht=parseFloat,ut=parseInt,ct=I.prototype.toUpperCase,ft=e._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0,"class":""},pt=e._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,vt={hs:1,rg:1},xt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},At=e._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},Tt=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},Et=e._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)}},Mt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;n<s;n++)for(l=t[n],a=1,o=l.length;a<o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=T,e.type=T.win.SVGAngle||T.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==e.type){var Nt=T.doc.createElement("div"),Lt;if(Nt.innerHTML='<v:shape adj="1"/>',Lt=Nt.firstChild,Lt.style.behavior="url(#default#VML)",!Lt||"object"!=typeof Lt.adj)return e.type=R;Nt=null}e.svg=!(e.vml="VML"==e.type),e._Paper=M,e.fn=N=M.prototype=e.prototype,e._id=0,e.is=function(t,e){return e=O.call(e),"finite"==e?!at[A](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,"finite")?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)<=i)return t[n]}else{t=+t;var a=r%t;if(a<i)return r-a;if(a>t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});e.setWindow=function(r){t("raphael.setWindow",e,T.win,r),T.win=r,T.doc=T.win.document,e._engine.initWin&&e._engine.initWin(T.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject("htmlfile");a.write("<body>"),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=I(t).replace(r,R);var e=o.queryCommandValue("ForeColor");return e=(255&e)<<16|65280&e|(16711680&e)>>>16,"#"+("000000"+e.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=T.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",T.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,T.doc.defaultView.getComputedStyle(l,R).getPropertyValue("color")})}return Pt(t)},Ft=function(){return"hsb("+[this.h,this.s,this.b]+")"},Rt=function(){return"hsl("+[this.h,this.s,this.l]+")"},jt=function(){return this.hex},It=function(t,r,i){if(null==r&&e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,r=t.g,t=t.r),null==r&&e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t>1||r>1||i>1)&&(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:jt};return e.is(n,"finite")&&(a.opacity=n),a};e.color=function(t){var r;return e.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,"string")&&(t=e.getRGB(t)),e.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=jt,t},e.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(r<.5?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a<.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(",").replace(xt,"$1")};var Dt=e._preload=function(t,e){var r=T.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,T.doc.body.removeChild(this)},r.onerror=function(){T.doc.body.removeChild(this)},T.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=I(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:a};!(vt[A](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&&(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&&(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&&(h=u[4][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),"%"==h[0].slice(-1)&&(i*=2.55),n=ht(h[1]),"%"==h[1].slice(-1)&&(n*=2.55),s=ht(h[2]),"%"==h[2].slice(-1)&&(s*=2.55),("deg"==h[0].slice(-3)||"°"==h[0].slice(-1))&&(i/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(o=ht(h[3])),h[3]&&"%"==h[3].slice(-1)&&(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex="#"+(16777216|s|n<<8|i<<16).toString(16).slice(1),e.is(o,"finite")&&(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return"#"+(16777216|i(r)|i(e)<<8|i(t)<<16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&&e.is(t[0],Q)&&(n=Yt(t)),n.length||I(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][P](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][P](a));else for(;a.length>=i[s]&&(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&&e.is(t[0],Q)&&(i=Yt(t)),i.length||I(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&&n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[A](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(v-y,x-m)/U;return(v>y||x<m)&&(B+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,"array")||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x<r.x2&&t.x>r.x||r.x<t.x2&&r.x>t.x)&&(t.y<r.y2&&t.y>r.y||r.y<t.y2&&r.y>t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&&d(t,[["M",r,i],["H",n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t("raphael.log",null,"Raphaël: you are calling to method “"+e+"” of removed object",e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;l<h;l++)if(o=t[l],"M"==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=r(x),x},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;h<u;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;p<d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;g<v;g++)i[h][g]=f[g]}var x=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][x-1];break;case"v":a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&&e.is(t&&t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=["M",n,a]);for(var u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),c,f,p=h,d=t.length;p<d;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case"A":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case"V":c[1]=+f[1]+a;break;case"H":c[1]=+f[1]+n;break;case"R":for(var g=[n,a][P](f.slice(1)),v=2,x=g.length;v<x;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;i.pop(),i=i[P](s(g,u));break;case"M":o=+f[1]+n,l=+f[2]+a;default:for(v=1,x=f.length;v<x;v++)c[v]=+f[v]+(v%2?n:a)}else if("R"==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=["R"][P](f.slice(-2));else for(var y=0,m=f.length;y<m;y++)c[y]=f[y];switch(c[0]){case"Z":n=o,a=l;break;case"H":n=c[1];break;case"V":a=c[1];break;case"M":o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],A=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var v=Y.cos(U/180*a),x=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b>1&&(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),A=Y.asin(((h-C)/i).toFixed(9));S=t<B?U-S:S,A=l<B?U-A:A,S<0&&(S=2*U+S),A<0&&(A=2*U+A),o&&S>A&&(S-=2*U),!o&&A>S&&(A-=2*U)}var T=A-S;if(H(T)>c){var E=A,M=l,N=h;A=S+c*(o&&A>S?1:-1),l=B+r*Y.cos(A),h=C+i*Y.sin(A),p=Ut(l,h,r,i,a,0,o,M,N,[A,E,B,C])}T=A-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(A),R=Y.sin(A),j=Y.tan(T/4),I=4/3*r*j,D=4/3*i*j,V=[t,e],O=[t+I*z,e-D*L],W=[l+I*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](",");for(var X=[],$=0,Z=p.length;$<Z;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)>"1e12"&&(c=.5),H(f)>"1e12"&&(f=.5),c>0&&c<1&&(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f>0&&f<1&&(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&&Vt(t);if(!e&&r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&&Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][P](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][P](Ht(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][P](Ht(e.x,e.y,t[1],e.y));break;case"V":t=["C"][P](Ht(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=W(i.length,n&&n.length||0);d<g;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var v=i[d],x=n&&n[d],y=v.length,m=n&&x.length;a.x=v[y-2],a.y=v[y-1],a.bx=ht(v[y-4])||a.x,a.by=ht(v[y-3])||a.y,s.bx=n&&(ht(x[m-4])||s.x),s.by=n&&(ht(x[m-3])||s.y),s.x=n&&x[m-2],s.y=n&&x[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;i<n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),r.push(a)}for(i=1,n=r.length-1;i<n;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;h<n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);i<h;i++)o+=u,r[i].offset=o+"%"}return r}),Kt=e._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&&(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&&(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Mt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=I(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;c<f;c++){var p=i[c],d=p.length,v=I(p[0]).toLowerCase(),x=p[0]!=v,y=x?u.invert():0,m,b,_,w,k;"t"==v&&3==d?x?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):"r"==v?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&&(x?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):"s"==v?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&&(x?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):"m"==v&&7==d&&u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=I(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;s<i;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||"r"==h[0].toLowerCase()&&(h[2]!=u[2]||h[3]!=u[3])||"s"==h[0].toLowerCase()&&(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);o<l;o++)o in h&&(n[s][o]=h[o]),o in u&&(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;if(a=null!=n||e.is(t,"object")?t:T.doc.getElementById(t),null!=a)return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&&(t[0]/=e),t[1]&&(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&&t instanceof g&&(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;h<3;h++)for(u=0;u<3;u++){for(f=0,c=0;c<3;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){
this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[I.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s<0?(t.rotate=e.deg(Y.acos(s)),a<0&&(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:R)+(e.rotate?"r"+[e.rotate,0,0]:R)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,r=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return T.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&&V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;s<o;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&&V[e]&&t.removeEventListener(V[e],a,!1),!0}}:T.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||T.win.event;var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,n=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),ge=[],ve=function(e){for(var r=e.clientX,i=e.clientY,n=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,a=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&&e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;T.win.opera&&p.removeChild(u),u.style.display="none",c=s.el.paper.getElementByPoint(r,i),u.style.display=d,T.win.opera&&(f?p.insertBefore(u,f):p.appendChild(u)),c&&t("raphael.drag.over."+s.el.id,s.el,c),r+=a,i+=n,t("raphael.drag.move."+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},xe=function(r){e.unmousemove(ve).unmouseup(xe);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,"function")&&(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||T.doc,t,r,i||this)})),this},e["un"+t]=ye["un"+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,"undefined")&&i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,"object")){for(var a in r)r[A](a)&&this.data(a,r[a]);return this}return t("raphael.data.get."+this.id,this,n[r],r),n[r]}return n[r]=i,t("raphael.data.set."+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&&delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,f=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&&l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&&e.mousemove(ve).mouseup(xe),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&t.on("raphael.drag.start."+this.id,i),r&&t.on("raphael.drag.move."+this.id,r),n&&t.on("raphael.drag.end."+this.id,n),t("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on("raphael.drag.over."+this.id,e):t.unbind("raphael.drag.over."+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&&(this.unmousedown(be[r].start),be.splice(r,1),t.unbind("raphael.drag.*."+this.id));!be.length&&e.unmousemove(ve).unmouseup(xe),ge=[]},N.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&&this.__set__.push(n),n},N.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},N.path=function(t){t&&!e.is(t,Z)&&!e.is(t[0],Q)&&(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&&this.__set__.push(r),r},N.image=function(t,r,i,n,a){var s=e._engine.image(this,t||"about:blank",r||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},N.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,I(i));return this.__set__&&this.__set__.push(n),n},N.set=function(t){!e.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&&this.__set__.push(r),r.paper=this,r.type="set",r},N.setStart=function(t){this.__set__=t||this.set()},N.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},N.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},N.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},N.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},N.top=N.bottom=null,N.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(T.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(T.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};N.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=T.doc.elementFromPoint(t,e);if(T.win.opera&&"svg"==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},N.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&&r.push(i)}),r},N.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},N.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},N.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=e.transformPath(i,this.attr("transform"))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&&e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=x,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&(!e.dirty&&this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Mt(this.realPath,this.matrix)),e.bbox.toString=x,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},ye.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Mt(a,this.matrix):a;for(var s=1;s<r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u="",c={},f,p=0,d=0,g=i.length;d<g;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(r&&!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=["C"+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=["M"+f.x,f.y+"C"+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&&(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Ae=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return Ae(t,e).end;var i=Ae(t,r,1);return e?Ae(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return r&&(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Te=e.easing_formulas={linear:function(t){return t},"<":function(t){return X(t,1.7)},">":function(t){return X(t,.48)},"<>":function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(i<0?-1:1),a=-r-e,s=X(H(a),1/3)*(a<0?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return t<1/r?i=e*t*t:t<2/r?(t-=1.5/r,i=e*t*t+.75):t<2.5/r?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Te.easeIn=Te["ease-in"]=Te["<"],Te.easeOut=Te["ease-out"]=Te[">"],Te.easeInOut=Te["ease-in-out"]=Te["<>"],Te["back-in"]=Te.backIn,Te["back-out"]=Te.backOut;var Ee=[],Me=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Ne=function(){for(var r=+new Date,i=0;i<Ee.length;i++){var n=Ee[i];if(!n.el.removed&&!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},v;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&&Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(a<0))if(a<s){var x=o(a/s);for(var y in l)if(l[A](y)){switch(pt[y]){case $:d=+l[y]+x*s*h[y];break;case"colour":d="rgb("+[Le(ot(l[y].r+x*s*h[y].r)),Le(ot(l[y].g+x*s*h[y].g)),Le(ot(l[y].b+x*s*h[y].b))].join(",")+")";break;case"path":d=[];for(var m=0,_=l[y].length;m<_;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;w<k;w++)d[m][w]=+l[y][m][w]+x*s*h[y][m][w];d[m]=d[m].join(j)}d=d.join(j);break;case"transform":if(h[y].real)for(d=[],m=0,_=l[y].length;m<_;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;w<k;w++)d[m][w]=l[y][m][w]+x*s*h[y][m][w];else{var B=function(t){return+l[y][t]+x*s*h[y][t]};d=[["m",B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case"csv":if("clip-rect"==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+x*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+x*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t("raphael.anim.frame."+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t("raphael.anim.frame."+i.id,i,n),t("raphael.anim.finish."+i.id,i,n),e.is(r,"function")&&r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat>1&&!n.next){for(v in u)u[A](v)&&(g[v]=n.totalOrigin[v]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&&Me(Ne)},Le=function(t){return t>255?255:t<0?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;c<f;c++)if(Ee[c].anim==r&&Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on("raphael.anim.frame."+this.id,e):t.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,"function")&&i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[A](o)&&ht(o)!=o&&ht(o)+"%"!=o&&(s=!0,a[o]=t[o]);if(s)return i&&(a.easing=i),n&&(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[A](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&&null!=e&&this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;i<n;i++)if(a=Ee[i],a.el.id==this.id&&(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.pause."+this.id,this,Ee[r].anim)!==!1&&(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r<Ee.length;r++)if(Ee[r].el.id==this.id&&(!e||Ee[r].anim==e)){var i=Ee[r];t("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r<Ee.length;r++)Ee[r].el.id!=this.id||e&&Ee[r].anim!=e||t("raphael.anim.stop."+this.id,this,Ee[r].anim)!==!1&&Ee.splice(r--,1);return this},t.on("raphael.remove",_),t.on("raphael.clear",_),ye.toString=function(){return"Raphaël’s object"};var ze=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;e<r;e++)!t[e]||t[e].constructor!=ye.constructor&&t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;r<i;r++)t=arguments[r],!t||t.constructor!=ye.constructor&&t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;r<i;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[A](Fe)&&(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&&e.is(t,Q)&&e.is(t[0],"object"))for(var i=0,n=t.length;i<n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a<s;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=t<0?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s<arguments.length;s++)a.push(arguments[s]);for(s=0;s<e;s++)n.push(this[t+s]);for(;s<this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s<o+i.length;s++)this.items[t+s]=this[t+s]=s<o?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;e<r;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,"function")||!i)&&(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&&(h=function(){!--a&&n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&&!this.items[s].removed&&this.items[s].animateWith(o,u,u),this.items[s]&&!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e<r;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return"Raphaël‘s set"},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&&n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[A](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=ut(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[A](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[A](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},N.getFont=function(t,r,i,n){if(n=n||"normal",i=i||"normal",r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,R)+"(\\s|$)","i");for(var o in e.fonts)if(e.fonts[A](o)&&s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;h<u&&(l=a[h],l.face["font-weight"]!=r||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},N.print=function(t,r,i,n,a,s,o,l){s=s||"middle",o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=I(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,"string")&&(n=this.getFont(n)),n){p=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[q](k),g=+d[0],v=d[3]-d[1],x=0,y=+d[1]+("baseline"==s?v+ +n.face.descent:v/2),m=0,b=h.length;m<b;m++){if("\n"==h[m])u=0,w=0,c=0,x+=v*l;else{var _=c&&n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&&_.k[h[m]]||0)+n.w*o:0,c=1}w&&w.d&&(f+=e.transformPath(w.d,["t",u*p,x*p,"s",p,p,g,y,"t",(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:"#000",stroke:"none"})},N.add=function(t){if(e.is(t,"array"))for(var r=this.set(),i=0,n=t.length,a;i<n;i++)a=t[i]||{},B[A](a.type)&&r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&&e.is(t,Z)&&i.length-1&&(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)T.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on("raphael.DOMload",function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;!function(r){var a="0.5.0",s="hasOwnProperty",o=/[\.\/]/,l=/\s*,\s*/,h="*",u=function(){},c=function(t,e){return t-e},f,p,d={n:{}},g=function(){for(var t=0,e=this.length;t<e;t++)if("undefined"!=typeof this[t])return this[t]},v=function(){for(var t=this.length;--t;)if("undefined"!=typeof this[t])return this[t]},x=Object.prototype.toString,y=String,m=Array.isArray||function(t){return t instanceof Array||"[object Array]"==x.call(t)};eve=function(t,e){var r=d,i=p,n=Array.prototype.slice.call(arguments,2),a=eve.listeners(t),s=0,o=!1,l,h=[],u={},x=[],y=f,m=[];x.firstDefined=g,x.lastDefined=v,f=t,p=0;for(var b=0,_=a.length;b<_;b++)"zIndex"in a[b]&&(h.push(a[b].zIndex),a[b].zIndex<0&&(u[a[b].zIndex]=a[b]));for(h.sort(c);h[s]<0;)if(l=u[h[s++]],x.push(l.apply(e,n)),p)return p=i,x;for(b=0;b<_;b++)if(l=a[b],"zIndex"in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),p)break;do if(s++,l=u[h[s]],l&&x.push(l.apply(e,n)),p)break;while(l)}else u[l.zIndex]=l;else if(x.push(l.apply(e,n)),p)break;return p=i,f=y,x},eve._events=d,eve.listeners=function(t){var e=m(t)?t:t.split(o),r=d,i,n,a,s,l,u,c,f,p=[r],g=[];for(s=0,l=e.length;s<l;s++){for(f=[],u=0,c=p.length;u<c;u++)for(r=p[u].n,n=[r[e[s]],r[h]],a=2;a--;)i=n[a],i&&(f.push(i),g=g.concat(i.f||[]));p=f}return g},eve.separator=function(t){t?(t=y(t).replace(/(?=[\.\^\]\[\-])/g,"\\"),t="["+t+"]",o=new RegExp(t)):o=/[\.\/]/},eve.on=function(t,e){if("function"!=typeof e)return function(){};for(var r=m(t)?m(t[0])?t:[t]:y(t).split(l),i=0,n=r.length;i<n;i++)!function(t){for(var r=m(t)?t:y(t).split(o),i=d,n,a=0,s=r.length;a<s;a++)i=i.n,i=i.hasOwnProperty(r[a])&&i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;a<s;a++)if(i.f[a]==e){n=!0;break}!n&&i.f.push(e)}(r[i]);return function(t){+t==+t&&(e.zIndex=+t)}},eve.f=function(t){var e=[].slice.call(arguments,1);return function(){eve.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},eve.stop=function(){p=1},eve.nt=function(t){var e=m(f)?f.join("."):f;return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},eve.nts=function(){return m(f)?f:f.split(o)},eve.off=eve.unbind=function(t,e){if(!t)return void(eve._events=d={n:{}});var r=m(t)?m(t[0])?t:[t]:y(t).split(l);if(r.length>1)for(var i=0,n=r.length;i<n;i++)eve.off(r[i],e);else{r=m(t)?t:y(t).split(o);var a,u,c,i,n,f,p,g=[d];for(i=0,n=r.length;i<n;i++)for(f=0;f<g.length;f+=c.length-2){if(c=[f,1],a=g[f].n,r[i]!=h)a[r[i]]&&c.push(a[r[i]]);else for(u in a)a[s](u)&&c.push(a[u]);g.splice.apply(g,c)}for(i=0,n=g.length;i<n;i++)for(a=g[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f<p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&&delete a.f}for(u in a.n)if(a.n[s](u)&&a.n[u].f){var v=a.n[u].f;for(f=0,p=v.length;f<p;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete a.n[u].f}}else{delete a.f;for(u in a.n)a.n[s](u)&&a.n[u].f&&delete a.n[u].f}a=a.n}}},eve.once=function(t,e){var r=function(){return eve.off(t,r),e.apply(this,arguments)};return eve.on(t,r)},eve.version=a,eve.toString=function(){return"You are running Eve "+a},"undefined"!=typeof t&&t.exports?t.exports=eve:(i=[],n=function(){return eve}.apply(e,i),!(void 0!==n&&(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e="hasOwnProperty",r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};t.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var v=function(i,n){if(n){"string"==typeof i&&(i=v(i));for(var a in n)n[e](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},x=function(e,n){var h="linear",u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]<0&&(_[0]=-_[2],_[2]=0),_[3]<0&&(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),e.gradient&&u!=e.gradient.id&&(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+"Gradient",{id:u}),e.gradient=y,v(y,"radial"==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;B<C;B++)y.appendChild(v("stop",{offset:k[B].offset?k[B].offset:B?"100%":"0%","stop-color":k[B].color||"#fff","stop-opacity":isFinite(k[B].opacity)?k[B].opacity:1}))}}return v(d,{fill:m(u),opacity:1,"fill-opacity":1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&&(9===t||10===t)},m=function(t){if(y())return"url('#"+t+"')";var e=document.location,r=e.protocol+"//"+e.host+e.pathname+e.search;return"url('"+r+"#"+t+"')"},b=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},_=function(i,n,a){if("path"==i.type){for(var s=r(n).toLowerCase().split("-"),o=i.paper,l=a?"end":"start",h=i.node,u=i.attrs,f=u["stroke-width"],p=s.length,x="classic",y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":x=s[p];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==x?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:"none",stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=x){var S="raphael-marker-"+x,A="raphael-marker-"+l+x+k+B+"-obj"+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[x],id:S})),g[S]=1);var T=t._g.doc.getElementById(A),E;T?(g[A]++,E=T.getElementsByTagName("use")[0]):(T=v(v("marker"),{id:A,markerHeight:B,markerWidth:k,orient:"auto",refX:_,refY:B/2}),E=v(v("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),T.appendChild(E),o.defs.appendChild(T),g[A]=1),v(E,w);var M=b*("diamond"!=x&&"oval"!=x);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-M*f):(y=M*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w["marker-"+l]="url(#"+A+")",(m||y)&&(w.d=t.getSubpath(u.path,y,m)),v(h,w),i._.arrows[l+"Path"]=S,i._.arrows[l+"Marker"]=A,i._.arrows[l+"dx"]=M,i._.arrows[l+"Type"]=x,i._.arrows[l+"String"]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+"Path"]&&v(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+"Path"],delete i._.arrows[l+"Marker"],delete i._.arrows[l+"dx"],delete i._.arrows[l+"Type"],delete i._.arrows[l+"String"];for(w in g)if(g[e](w)&&!g[w]){var N=t._g.doc.getElementById(w);N&&N.parentNode.removeChild(N)}}},w={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;v(t.node,{"stroke-dasharray":s.join(",")})}else v(t.node,{"stroke-dasharray":"none"})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var y=l.getElementsByTagName("title");if(y.length&&(y=y[0]))y.firstChild.nodeValue=g;else{y=v("title");var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case"href":case"target":var w=l.parentNode;if("a"!=w.tagName.toLowerCase()){var B=v("a");w.insertBefore(B,l),B.appendChild(l),w=B}"target"==d?w.setAttributeNS(p,"show","blank"==g?"new":g):w.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":_(i,g);break;case"arrow-end":_(i,g,1);break;case"clip-rect":var C=r(g).split(h);if(4==C.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var A=v("clipPath"),T=v("rect");A.id=t.createUUID(),v(T,{x:C[0],y:C[1],width:C[2],height:C[3]}),A.appendChild(T),i.paper.defs.appendChild(A),v(l,{"clip-path":"url(#"+A.id+")"}),i.clip=T}if(!g){var E=l.getAttribute("clip-path");if(E){var M=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));M&&M.parentNode.removeChild(M),v(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(v(l,{d:g?u.path=t._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&b(i),i._.dirty=1;break;case"r":"rect"==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":1==i._.sx&&1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&k(i,u["stroke-dasharray"],a),
i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"stroke-dasharray":k(i,g,a);break;case"fill":var N=r(g).match(t._ISURL);if(N){A=v("pattern");var L=v("image");A.id=t.createUUID(),v(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),A.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(L,{width:t,height:r})})}(A),i.paper.defs.appendChild(A),v(l,{fill:"url(#"+A.id+")"}),i.pattern=A,i.pattern&&b(i);break}var z=t.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g)){if("opacity"in u||"fill-opacity"in u){var P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");v(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,"undefined")&&t.is(a.opacity,"undefined")&&v(l,{opacity:u.opacity}),!t.is(u["fill-opacity"],"undefined")&&t.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":u["fill-opacity"]});z[e]("opacity")&&v(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=t.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[e]("opacity")&&v(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&_(i,i._.arrows.startString),"endString"in i._.arrows&&_(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=r(g).charAt())&&x(i,g);break;case"opacity":u.gradient&&!u[e]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=t._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),v(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if("text"==i.type&&(a[e]("text")||a[e]("font")||a[e]("font-size")||a[e]("x")||a[e]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[e]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split("\n"),u=[],f,p=0,d=h.length;p<d;p++)f=v("tspan"),p&&v(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName("tspan"),p=0,d=u.length;p<d;p++)p?v(u[p],{dy:l*C,x:s.x}):v(u[0],{dy:0});v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&&t.is(x,"finite")&&v(u[0],{dy:x})}},A=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},T=function(e,r){function i(){return("0000"+(Math.random()*Math.pow(36,5)<<0).toString(36)).slice(-5)}var n=0,a=0;this[0]=this.node=e,e.raphael=!0,this.id=i(),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},E=t.el;T.prototype=E,E.constructor=T,t._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var i=new T(r,e);return i.type="path",B(i,{fill:"none",stroke:"#000",path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([["t",t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&b(this),this.node&&v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},E.hide=function(){return this.removed||(this.node.style.display="none"),this},E.show=function(){return this.removed||(this.node.style.display=""),this},E.remove=function(){var e=A(this.node);if(!this.removed&&e.parentNode){var r=this.paper;r.__set__&&r.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(r=this.paper.canvas.parentNode.style),r&&"none"==r.display&&(e=!0,r.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&&(r.display="none")}return t&&this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if("fill"==r&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l<c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&&t.is(r,"array")){for(o={},l=0,c=r.length;l<c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&&t.is(r,"object")&&(f=r);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&&f[e](p)&&t.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&&(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=A(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&&t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=A(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=v("filter"),n=v("feGaussianBlur");r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:"url(#"+i.id+")"})}else r._blur&&(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute("filter");return r},t._engine.circle=function(t,e,r,i){var n=v("circle");t.canvas&&t.canvas.appendChild(n);var a=new T(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v("rect");t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new T(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v("image");v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},t._engine.text=function(e,r,i,n){var a=v("text");e.canvas&&e.canvas.appendChild(a);var s=new T(a,e);return s.attrs={x:r,y:i,"text-anchor":"middle",text:n,"font-family":t._availableAttrs["font-family"],"font-size":t._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&&e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error("SVG container not found.");var o=v("svg"),l="overflow:hidden;",h;return i=i||0,n=n||0,a=a||512,s=s||342,v(o,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==r?(o.style.cssText=l+"position:absolute;left:"+i+"px;top:"+n+"px",t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+"position:relative",r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&&(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?"xMidYMid meet":"xMinYMin",c,p;for(null==t?(this._vbSize&&(o=1),delete this._vbSize,c="0 0 "+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),v(this.canvas,{viewBox:c,preserveAspectRatio:h});o&&l;)p="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,e.left=this._left+"px"),a&&(this._top=(this._top+a)%1,e.top=this._top+"px"))},t.prototype.clear=function(){t.eve("raphael.clear",this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(t._g.doc.createTextNode("Created with Raphaël "+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v("defs"))},t.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null};var M=t.st;for(var N in E)E[e](N)&&!M[e](N)&&(M[N]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(N))}}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e="hasOwnProperty",r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=t.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&&(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&&!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;u<c;u++){l=o[u],h=o[u][0].toLowerCase(),"z"==h&&(h="x");for(var f=1,x=l.length;f<x;f++)h+=a(l[f]*b)+(f!=x-1?",":d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",v,x=b/e,y=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(y),f.rotation=a*(e*r<0?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(e<0&&(g+="x"),r<0&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&&_[0],c.removeChild(_),u&&(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&&(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility="visible"}};t.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&&(f[B]=l[B]);if(x&&(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~r(f.path).toLowerCase().indexOf("r")?t._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),y){var A=+f.cx,E=+f.cy,M=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((A-M)*b),a((E-L)*b),a((A+M)*b),a((E+L)*b),a(A*b)),n._.dirty=1}if("clip-rect"in l){var z=r(l["clip-rect"]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement("div"),F=P.style;F.clip=t.format("rect({1}px {2}px {3}px {0}px)",z),c.clipRect||(F.position="absolute",F.top=0,F.left=0,F.width=n.paper.width+"px",F.height=n.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var R=n.textpath.style;l.font&&(R.font=l.font),l["font-family"]&&(R.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(R.fontSize=l["font-size"]),l["font-weight"]&&(R.fontWeight=l["font-weight"]),l["font-style"]&&(R.fontStyle=l["font-style"])}if("arrow-start"in l&&S(m,l["arrow-start"]),"arrow-end"in l&&S(m,l["arrow-end"],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var j=c.getElementsByTagName(h),I=!1;if(j=j&&j[0],!j&&(I=j=N(h)),"image"==n.type&&l.src&&(j.src=l.src),l.fill&&(j.on=!0),null!=j.on&&"none"!=l.fill&&null!==l.fill||(j.on=!1),j.on&&l.fill){var q=r(l.fill).match(t._ISURL);if(q){j.parentNode==c&&c.removeChild(j),j.rotate=!0,j.src=q[1],j.type="tile";var D=n.getBBox(1);j.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=d,j.type="solid",t.getRGB(l.fill).error&&(m.type in{circle:1,ellipse:1}||"r"!=r(l.fill).charAt())&&T(m,l.fill,j)&&(f.fill="none",f.gradient=l.fill,j.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var V=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),j.opacity=V,j.src&&(j.color="none")}c.appendChild(j);var O=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],Y=!1;!O&&(Y=O=N("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(O.on=!0),("none"==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l["stroke-width"])&&(O.on=!1);var W=t.getRGB(l.stroke);O.on&&l.stroke&&(O.color=W.hex),V=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l["stroke-width"])||1);if(V=o(s(V,0),1),null==l["stroke-width"]&&(G=f["stroke-width"]),l["stroke-width"]&&(O.weight=G),G&&G<1&&(V*=G)&&(O.weight=1),O.opacity=V,l["stroke-linejoin"]&&(O.joinstyle=l["stroke-linejoin"]||"miter"),O.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(O.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var H={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};O.dashstyle=H[e](l["stroke-dasharray"])?H[l["stroke-dasharray"]]:d}Y&&c.appendChild(O)}if("text"==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),$=i(f["font-size"]||$&&$[0])||10,g.fontSize=$*U+"px",m.textpath.string&&(X.innerHTML=r(m.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,("x"in l||"y"in l)&&(m.path.v=t.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=["x","y","text","font","font-family","font-weight","font-style","font-size"],J=0,K=Q.length;J<K;J++)if(Q[J]in l){m._.dirty=1;break}switch(f["text-anchor"]){case"start":m.textpath.style["v-text-align"]="left",m.bbx=m.W/2;break;case"end":m.textpath.style["v-text-align"]="right",m.bbx=-m.W/2;break;default:m.textpath.style["v-text-align"]="center",m.bbx=0}m.textpath.style["v-text-kern"]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c="linear",f=".5 .5";if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c="radial",e&&r&&(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)>.25&&(r=n.sqrt(.25-l(e-.5,2))*(2*(r>.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var v=t._parseDots(a);if(!v)return null;if(e=e.shape||e.node,v.length){e.removeChild(s),s.on=!0,s.method="none",s.color=v[0].color,s.color2=v[v.length-1].color;for(var x=[],y=0,m=v.length;y<m;y++)v[y].offset&&x.push(v[y].offset+p+v[y].color);s.colors=x.length?x.join():"0% "+s.color,"radial"==c?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=f,s.angle=0):(s.type="gradient",s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&&(r.bottom=this),this.prev=r.top,r.top&&(r.top.next=this),r.top=this,this.next=null},M=t.el;E.prototype=M,M.constructor=E,M.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d,a;i&&(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf("-"),c=!r(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||u||"image"==this.type)if(o.matrix="1 0 0 1",o.offset="0 0",h=s.split(),u&&h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;l.coordorigin=v*-b+p+x*-b,C(this,1,1,v,x,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&&(this._.transform=a,t._extractTransform(this,a)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&&(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([["t",t,e]])),this)},M.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&&(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==e&&(e=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,e,n,a]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&&(this.node.style.display="none"),this},M.show=function(){return!this.removed&&(this.node.style.display=d),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),t.eve.unbind("raphael.*.*."+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&t.is(r,"string")){if(r==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;l<f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],"function")?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&t.is(r,"array")){for(o={},l=0,f=r.length;l<f;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&&(p={},p[r]=i),null==i&&t.is(r,"object")&&(p=r);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&&p[e](d)&&t.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),A(this,p)}return this},M.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&&(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+".Blur(pixelradius="+(+e||1.5)+")",r.margin=t.format("-{0}px 0 0 -{0}px",a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=N("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,A(i,n),e.canvas&&e.canvas.appendChild(r);var a=N("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=r,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=N("shape"),l=N("path"),h=N("textpath");i=i||0,n=n||0,s=s||"",l.v=t.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,e),c={fill:"#000",stroke:"none",font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=N("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&&(e+="px"),r==+r&&(r+="px"),i.width=e,i.height=r,i.clip="rect(0 "+e+" "+r+" 0)",this._viewBox&&t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve("raphael.setViewBox",this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&&(h=l/n,u=o/i,i*h<o&&(e-=(o-i*h)/2/h),n*u<l&&(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform("...")}),this};var N;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),N=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){N=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error("VML container not found.");var l=new t._Paper,h=l.canvas=t._g.doc.createElement("div"),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&&(a+="px"),i==+i&&(i+="px"),l.coordsize=1e3*b+p+1e3*b,l.coordorigin="0 0",l.span=t._g.doc.createElement("span"),l.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",h.appendChild(l.span),u.cssText=t.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+"px",u.top=o+"px",u.position="absolute"):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]="function"==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in M)M[e](z)&&!L[e](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&&(t.exports=n))}])});

/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "t0fz":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("KkFq");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("4468212a", content, true, {"shadowMode":false,"sourceMap":false});

/***/ }),

/***/ "tNLN":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("0qmw");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$getPrototypeOf || function _getPrototypeOf(o) {
    return o.__proto__;
  };

  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "tRu9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/n6Q");

/***/ }),

/***/ "u0PK":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("UKM+");
var cof = __webpack_require__("ydD5");
var MATCH = __webpack_require__("kkCw")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "uDYd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("Ds5P");
var aFunction = __webpack_require__("XSOZ");
var toObject = __webpack_require__("FryR");
var fails = __webpack_require__("zgIt");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("NNrz")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "ulTY":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "uqUo":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var fails = __webpack_require__("S82l");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var $iterCreate = __webpack_require__("94VQ");
var setToStringTag = __webpack_require__("e6n0");
var getPrototypeOf = __webpack_require__("PzxK");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "vgs7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("n12u");
var es6_object_assign_default = /*#__PURE__*/__webpack_require__.n(es6_object_assign);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Z60a");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("j/rp");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("C9uT");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("T/v0");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("tNLN");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("Oy1H");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.umd.js
var vue_property_decorator_umd = __webpack_require__("EOM2");
var vue_property_decorator_umd_default = /*#__PURE__*/__webpack_require__.n(vue_property_decorator_umd);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("uDYd");
var es6_array_sort_default = /*#__PURE__*/__webpack_require__.n(es6_array_sort);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("NM/j");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("beEN");
var es6_array_from_default = /*#__PURE__*/__webpack_require__.n(es6_array_from);

// CONCATENATED MODULE: ./src/utils/uuid.ts
/* harmony default export */ var uuid = (function () {
  var i;
  var random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    } // tslint-disable-next-line


    uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }

  return uuid;
});
// EXTERNAL MODULE: ./node_modules/raphael/raphael.min.js
var raphael_min = __webpack_require__("s6bQ");
var raphael_min_default = /*#__PURE__*/__webpack_require__.n(raphael_min);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("mJx5");
var es6_regexp_split_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_split);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("MfeA");
var es6_regexp_match_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_match);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("VjuZ");
var es6_regexp_replace_default = /*#__PURE__*/__webpack_require__.n(es6_regexp_replace);

// CONCATENATED MODULE: ./src/lib/raphael.export.js





/* eslint-disable */

/**
 * Raphael.Export https://github.com/ElbertF/Raphael.Export
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
/* harmony default export */ var raphael_export = (function (R) {
  /**
  * Escapes string for XML interpolation
  * @param value string or number value to escape
  * @returns string escaped
  */
  function escapeXML(s) {
    if (typeof s === "number") {
      return s.toString();
    }

    var replace = {
      "<": "lt",
      ">": "gt",
      '"': "quot",
      "'": "apos"
    };

    for (var entity in replace) {
      s = s.replace(new RegExp(entity, "g"), "&" + replace[entity] + ";");
    }

    return s;
  }
  /**
  * Generic map function
  * @param iterable the array or object to be mapped
  * @param callback the callback function(element, key)
  * @returns array
  */


  function map(iterable, callback) {
    var mapped = [],
        undef = "undefined",
        i; // use an index iteration if we're dealing with an array

    if (typeof iterable.unshift != "undefined") {
      var l = iterable.length;

      for (i = 0; i < l; i++) {
        if (typeof_default()(iterable[i]) != undef) {
          var value = callback.call(this, iterable[i], i);

          if (value !== null) {
            mapped.push(value);
          }
        }
      }
    } else {
      for (i in iterable) {
        if (iterable.hasOwnProperty(i)) {
          var value = callback.call(this, iterable[i], i);

          if (value !== null) {
            mapped.push(value);
          }
        }
      }
    }

    return mapped;
  }
  /**
  * Generic reduce function
  * @param iterable array or object to be reduced
  * @param callback the callback function(initial, element, i)
  * @param initial the initial value
  * @return the reduced value
  */


  function reduce(iterable, callback, initial) {
    for (var i in iterable) {
      if (iterable.hasOwnProperty(i)) {
        initial = callback.call(this, initial, iterable[i], i);
      }
    }

    return initial;
  }
  /**
  * Utility method for creating a tag
  * @param name the tag name, e.g., 'text'
  * @param attrs the attribute string, e.g., name1="val1" name2="val2"
  * or attribute map, e.g., { name1 : 'val1', name2 : 'val2' }
  * @param content the content string inside the tag
  * @returns string of the tag
  */


  function tag(name, attrs, matrix, content) {
    if (typeof content === "undefined" || content === null) {
      content = "";
    }

    if (typeof_default()(attrs) === "object") {
      attrs = map(attrs, function (element, name) {
        switch (name) {
          case "transform":
            return;

          case "fill":
            if (element.match(/^hsb/)) {
              var hsb = element.replace(/^hsb\(|\)$/g, "").split(",");

              if (hsb.length === 3) {
                element = R.hsb2rgb(hsb[0], hsb[1], hsb[2]).toString();
              }
            }

        }

        return name + '="' + escapeXML(element) + '"';
      }).join(" ");
    }

    return "<" + name + (matrix ? ' transform="matrix(' + matrix.toString().replace(/^matrix\(|\)$/g, "") + ')" ' : " ") + attrs + ">" + content + "</" + name + ">";
  }
  /**
  * @return object the style object
  */


  function extractStyle(node) {
    return {
      font: {
        family: typeof node.attrs.font === "undefined" ? null : node.attrs.font.replace(/^.?"(\w+)".$/, "$1"),
        size: typeof node.attrs["font-size"] === "undefined" ? null : parseInt(node.attrs["font-size"]),
        style: typeof node.attrs["font-style"] === "undefined" ? null : node.attrs["font-style"],
        weight: typeof node.attrs["font-weight"] === "undefined" ? null : node.attrs["font-weight"]
      },
      anchor: typeof node.attrs["text-anchor"] === "undefined" ? null : node.attrs["text-anchor"]
    };
  }
  /**
  * @param style object from style()
  * @return string
  */


  function styleToString(style) {
    // TODO figure out what is 'normal'
    // Tyler: it refers to the default inherited from CSS. Order of terms here:
    // 		  http://www.w3.org/TR/SVG/text.html#FontProperty
    var norm = "normal",
        textAnchor = "text-anchor: " + (style.anchor || "middle") + "; ",
        font = style.font; // return 'font: normal normal normal 10px/normal ' + style.font.family + ( style.font.size === null ? '' : '; font-size: ' + style.font.size + 'px' );

    return textAnchor + ["font:", font.style || norm, // font-style (e.g. italic)
    norm, // font-variant
    font.weight || norm, // font-weight (e.g. bold)
    (font.size ? font.size + "px" : "10px") + "/normal", // font-size/IGNORED line-height!
    font.family].join(" ");
  }
  /**
  * repairs the hex color which missed the '#'
  * @param any string
  * @return hexvalue of rgb
  */


  function convertToHexColor(value) {
    if (/^[0-9A-F]{6}$/i.test(value)) {
      value = "#" + value;
    }

    return value;
  }
  /**
  * Computes tspan dy using font size. This formula was empircally determined
  * using a best-fit line. Works well in both VML and SVG browsers.
  * @param fontSize number
  * @return number
  */


  function computeTSpanDy(fontSize, line, lines) {
    if (fontSize === null) {
      fontSize = 10;
    } //return fontSize * 4.5 / 13


    return fontSize * 4.5 / 13 * (line - 0.2 - lines / 2) * 3.5;
  }

  var serializer = {
    text: function text(node) {
      var style = extractStyle(node),
          tags = new Array(),
          textLines = node.attrs.text.toString().split("\n"),
          totalLines = textLines.length;
      map(textLines, function (text, line) {
        var attrs = reduce(node.attrs, function (initial, value, name) {
          if (name !== "text" && name !== "w" && name !== "h") {
            if (name === "font-size") {
              value = parseInt(value) + "px";
            }

            if (name === "stroke") {
              value = convertToHexColor(value);
            }

            initial[name] = escapeXML(value.toString());
          }

          return initial;
        }, {
          style: styleToString(style) + ";"
        });
        /**
        * if text node has a class set, apply it to the attrs object
        */

        if (node.node.className.baseVal != "") {
          attrs.class = node.node.className.baseVal;
        }

        tags.push(tag("text", attrs, node.matrix, tag("tspan", {
          dy: computeTSpanDy(style.font.size, line + 1, totalLines)
        }, null, text.replace(/&/g, "&amp;"))));
      });
      return tags;
    },
    path: function path(node) {
      var initial = node.matrix.a === 1 && node.matrix.d === 1 ? {} : {
        transform: node.matrix.toString()
      };
      return tag("path", reduce(node.attrs, function (initial, value, name) {
        if (name === "path") {
          name = "d";
        }

        if (name === "stroke") {
          value = convertToHexColor(value);
        }

        initial[name] = value.toString();
        return initial;
      }, {}), node.matrix);
    } // Other serializers should go here

  };

  R.fn.toSVG = function () {
    var paper = this,
        restore = {
      svg: R.svg,
      vml: R.vml
    },
        svg = '<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + paper.width + '" version="1.1" height="' + paper.height + '">';
    R.svg = true;
    R.vml = false;

    for (var node = paper.bottom; node != null; node = node.next) {
      if (node.node.style.display === "none") {
        continue;
      }

      var attrs = ""; // Use serializer

      if (typeof serializer[node.type] === "function") {
        svg += serializer[node.type](node);
        continue;
      }

      switch (node.type) {
        case "image":
          attrs += ' preserveAspectRatio="none"';
          break;
      }

      for (i in node.attrs) {
        var name = i;
        var value = "";

        switch (i) {
          case "r":
            // see https://github.com/ElbertF/Raphael.Export/issues/40
            if (node.type != "rect") {
              break;
            }
            /**
            * set 'rx' and 'ry' to 'r'
            */


            value = node.attrs.r;
            node.attrs.rx = value;
            node.attrs.ry = value;
            /**
            * skip adding the 'r' attribute
            */

            continue;

          case "src":
            name = "xlink:href";
            break;

          case "transform":
            name = "";
            break;

          case "fill":
            //skip if there is any gradient
            if (node.attrs.gradient) {
              continue;
            }

            break;

          case "gradient":
            //radial gradient
            var id = node.id;
            var gradient = node.attrs.gradient;
            var fx = 0.5,
                fy = 0.5;
            gradient = String(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {
              type = "radial";

              if (_fx && _fy) {
                fx = parseFloat(_fx);
                fy = parseFloat(_fy);
                var dir = (fy > 0.5) * 2 - 1;
                Math.pow(fx - 0.5, 2) + Math.pow(fy - 0.5, 2) > 0.25 && (fy = Math.sqrt(0.25 - Math.pow(fx - 0.5, 2)) * dir + 0.5) && fy != 0.5 && (fy = fy.toFixed(5) - 1e-5 * dir);
              }

              return "";
            });
            gradient = gradient.split(/\s*\-\s*/);

            if (node.attrs.gradient.match(/^r/g)) {
              var dots = R._parseDots(gradient);

              if (!dots) {
                continue;
              }

              svg += "<defs>";
              svg += '	    <radialGradient id="radialgradient' + id + '" fx="' + fx + '" fy="' + fy + '" >';

              for (var di = 0; di < dots.length; di++) {
                var offset = di / (dots.length - 1) * 100 + "%"; //if dot has an offset

                if (dots[di].offset) {
                  offset = dots[di].offset;
                }

                svg += '<stop stop-color="' + dots[di].color + '" offset="' + offset + '"/>';
              }

              svg += "    </radialGradient>";
              svg += "</defs>";
              name = "fill";
              value = "url(#radialgradient" + id + ")";
            } else {
              //linear gradient
              //assuming gradient is validated already!!
              var angle = gradient.shift();
              angle = parseFloat(angle) * -1;

              if (isNaN(angle)) {
                continue;
              }

              var dots = R._parseDots(gradient);

              if (!dots) {
                continue;
              }

              var vector = [0, 0, Math.cos(R.rad(angle)), Math.sin(R.rad(angle))],
                  max = 1 / (Math.max(Math.abs(vector[2]), Math.abs(vector[3])) || 1);
              vector[2] *= max;
              vector[3] *= max;

              if (vector[2] < 0) {
                vector[0] = -vector[2];
                vector[2] = 0;
              }

              if (vector[3] < 0) {
                vector[1] = -vector[3];
                vector[3] = 0;
              }

              svg += "<defs>";
              svg += '	    <linearGradient id="lineargradient' + id + '" x1="' + vector[0] + '" y1="' + vector[1] + '" x2="' + vector[2] + '" y2="' + vector[3] + '">';

              for (var di = 0; di < dots.length; di++) {
                var offset = di / (dots.length - 1) * 100 + "%"; //if dot has an offset

                if (dots[di].offset) {
                  offset = dots[di].offset;
                }

                svg += '<stop stop-color="' + dots[di].color + '" offset="' + offset + '"/>';
              }

              svg += "    </linearGradient>";
              svg += "</defs>";
              name = "fill";
              value = "url(#lineargradient" + id + ")";
            }

            break;

          case "stroke":
            if (value) {
              value = convertToHexColor(value);
            } else {
              value = convertToHexColor(node.attrs[i].toString());
            }

            break;
        }

        if (name) {
          if (value) {
            attrs += " " + name + '="' + escapeXML(value) + '"';
          } else {
            attrs += " " + name + '="' + escapeXML(node.attrs[i].toString()) + '"';
          }
        }
      }
      /**
      * if node has a class set, append it to the attrs string
      */


      if (node.node.className.baseVal != "") {
        attrs += " " + 'class="' + node.node.className.baseVal + '"';
      }

      svg += "<" + node.type + ' transform="matrix(' + node.matrix.toString().replace(/^matrix\(|\)$/g, "") + ')"' + attrs + "></" + node.type + ">";
    }

    svg += "</svg>";
    R.svg = restore.svg;
    R.vml = restore.vml;
    return svg;
  };
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.fill.js
var es6_array_fill = __webpack_require__("No4x");
var es6_array_fill_default = /*#__PURE__*/__webpack_require__.n(es6_array_fill);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("EuXz");
var es6_function_name_default = /*#__PURE__*/__webpack_require__.n(es6_function_name);

// CONCATENATED MODULE: ./src/lib/rgbcolor.js


/* eslint-disable */

/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
function RGBColor(color_string) {
  this.ok = false; // strip any leading #

  if (color_string.charAt(0) == "#") {
    // remove # if any
    color_string = color_string.substr(1, 6);
  }

  color_string = color_string.replace(/ /g, "");
  color_string = color_string.toLowerCase(); // before getting into regexps, try simple matches
  // and overwrite the input

  var simple_colors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dodgerblue: "1e90ff",
    feldspar: "d19275",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslateblue: "8470ff",
    lightslategray: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    violetred: "d02090",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };

  for (var key in simple_colors) {
    if (color_string == key) {
      color_string = simple_colors[key];
    }
  } // emd of simple type-in colors
  // array of color definition objects


  var color_defs = [{
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
    process: function process(bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
    }
  }, {
    re: /^(\w{2})(\w{2})(\w{2})$/,
    example: ["#00ff00", "336699"],
    process: function process(bits) {
      return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
    }
  }, {
    re: /^(\w{1})(\w{1})(\w{1})$/,
    example: ["#fb0", "f0f"],
    process: function process(bits) {
      return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
    }
  }]; // search through the definitions to find a match

  for (var i = 0; i < color_defs.length; i++) {
    var re = color_defs[i].re;
    var processor = color_defs[i].process;
    var bits = re.exec(color_string);

    if (bits) {
      channels = processor(bits);
      this.r = channels[0];
      this.g = channels[1];
      this.b = channels[2];
      this.ok = true;
    }
  } // validate/cleanup values


  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
  this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
  this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b; // some getters

  this.toRGB = function () {
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  };

  this.toHex = function () {
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);

    if (r.length == 1) {
      r = "0" + r;
    }

    if (g.length == 1) {
      g = "0" + g;
    }

    if (b.length == 1) {
      b = "0" + b;
    }

    return "#" + r + g + b;
  }; // help


  this.getHelpXML = function () {
    var examples = new Array(); // add regexps

    for (var i = 0; i < color_defs.length; i++) {
      var example = color_defs[i].example;

      for (var j = 0; j < example.length; j++) {
        examples[examples.length] = example[j];
      }
    } // add type-in colors


    for (var sc in simple_colors) {
      examples[examples.length] = sc;
    }

    var xml = document.createElement("ul");
    xml.setAttribute("id", "rgbcolor-examples");

    for (var i = 0; i < examples.length; i++) {
      try {
        var list_item = document.createElement("li");
        var list_color = new RGBColor(examples[i]);
        var example_div = document.createElement("div");
        example_div.style.cssText = "margin: 3px; " + "border: 1px solid black; " + "background:" + list_color.toHex() + "; " + "color:" + list_color.toHex();
        example_div.appendChild(document.createTextNode("test"));
        var list_item_value = document.createTextNode(" " + examples[i] + " -> " + list_color.toRGB() + " -> " + list_color.toHex());
        list_item.appendChild(example_div);
        list_item.appendChild(list_item_value);
        xml.appendChild(list_item);
      } catch (e) {}
    }

    return xml;
  };
}
// CONCATENATED MODULE: ./src/lib/StackBlur.js
/* eslint-disable */

/*

StackBlur - a fast almost Gaussian Blur For Canvas

Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo

In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de

Or support me on flattr:
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

function premultiplyAlpha(imageData) {
  var pixels = imageData.data;
  var size = imageData.width * imageData.height * 4;

  for (var i = 0; i < size; i += 4) {
    var a = pixels[i + 3] / 255;
    pixels[i] *= a;
    pixels[i + 1] *= a;
    pixels[i + 2] *= a;
  }
}

function unpremultiplyAlpha(imageData) {
  var pixels = imageData.data;
  var size = imageData.width * imageData.height * 4;

  for (var i = 0; i < size; i += 4) {
    var a = pixels[i + 3];

    if (a != 0) {
      a = 255 / a;
      pixels[i] *= a;
      pixels[i + 1] *= a;
      pixels[i + 2] *= a;
    }
  }
}

function stackBlurImage(imageID, canvasID, radius, blurAlphaChannel) {
  var img = document.getElementById(imageID);
  var w = img.naturalWidth;
  var h = img.naturalHeight;
  var canvas = document.getElementById(canvasID);
  canvas.style.width = w + "px";
  canvas.style.height = h + "px";
  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);

  if (isNaN(radius) || radius < 1) {
    return;
  }

  if (blurAlphaChannel) {
    stackBlurCanvasRGBA(canvasID, 0, 0, w, h, radius);
  } else {
    stackBlurCanvasRGB(canvasID, 0, 0, w, h, radius);
  }
}

function stackBlurCanvasRGBA(id, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var canvas = document.getElementById(id);
  var context = canvas.getContext("2d");
  var imageData;

  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      // NOTE: this part is supposedly only needed if you want to work with local files
      // so it might be okay to remove the whole try/catch block and just use
      // imageData = context.getImageData( top_x, top_y, width, height );
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch (e) {
        alert("Cannot access local image");
        throw new Error("unable to access local image data: " + e);
        return;
      }
    }
  } catch (e) {
    alert("Cannot access image");
    throw new Error("unable to access image data: " + e);
  }

  premultiplyAlpha(imageData);
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
  var div = radius + radius + 1;
  var w4 = width << 2;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i == radiusPlus1) {
      var stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi] = r_sum * mul_sum >> shg_sum;
      pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
      pixels[yi + 2] = b_sum * mul_sum >> shg_sum;
      pixels[yi + 3] = a_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      a_in_sum += stackIn.a = pixels[p + 3];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    a_sum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      a_in_sum += pa;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = r_sum * mul_sum >> shg_sum;
      pixels[p + 1] = g_sum * mul_sum >> shg_sum;
      pixels[p + 2] = b_sum * mul_sum >> shg_sum;
      pixels[p + 3] = a_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p + 3];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      a_out_sum += pa = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      a_in_sum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  unpremultiplyAlpha(imageData);
  context.putImageData(imageData, top_x, top_y);
}

function stackBlurCanvasRGB(id, top_x, top_y, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var canvas = document.getElementById(id);
  var context = canvas.getContext("2d");
  var imageData;

  try {
    try {
      imageData = context.getImageData(top_x, top_y, width, height);
    } catch (e) {
      // NOTE: this part is supposedly only needed if you want to work with local files
      // so it might be okay to remove the whole try/catch block and just use
      // imageData = context.getImageData( top_x, top_y, width, height );
      try {
        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
        imageData = context.getImageData(top_x, top_y, width, height);
      } catch (e) {
        alert("Cannot access local image");
        throw new Error("unable to access local image data: " + e);
        return;
      }
    }
  } catch (e) {
    alert("Cannot access image");
    throw new Error("unable to access image data: " + e);
  }

  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, r_out_sum, g_out_sum, b_out_sum, r_in_sum, g_in_sum, b_in_sum, pr, pg, pb, rbs;
  var div = radius + radius + 1;
  var w4 = width << 2;
  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i == radiusPlus1) {
      var stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mul_sum = mul_table[radius];
  var shg_sum = shg_table[radius];

  for (y = 0; y < height; y++) {
    r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi] = r_sum * mul_sum >> shg_sum;
      pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
      pixels[yi + 2] = b_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p];
      g_in_sum += stackIn.g = pixels[p + 1];
      b_in_sum += stackIn.b = pixels[p + 2];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
    yi = x << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi]);
    g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
    b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg;
    b_sum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
      b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg;
      b_in_sum += pb;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = r_sum * mul_sum >> shg_sum;
      pixels[p + 1] = g_sum * mul_sum >> shg_sum;
      pixels[p + 2] = b_sum * mul_sum >> shg_sum;
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p];
      g_sum += g_in_sum += stackIn.g = pixels[p + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg = stackOut.g;
      b_out_sum += pb = stackOut.b;
      r_in_sum -= pr;
      g_in_sum -= pg;
      b_in_sum -= pb;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  context.putImageData(imageData, top_x, top_y);
}

function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}

var stackBlur = {
  image: stackBlurImage,
  canvasRGBA: stackBlurCanvasRGBA,
  canvasRGB: stackBlurCanvasRGB
};
/* harmony default export */ var StackBlur = (stackBlur);
// CONCATENATED MODULE: ./src/lib/canvg.js






/* eslint-disable */

/*
 * canvg.js - Javascript SVG parser and renderer on Canvas
 * MIT Licensed
 * Gabe Lerner (gabelerner@gmail.com)
 * http://code.google.com/p/canvg/
 *
 * Requires: rgbcolor.js - http://www.phpied.com/rgb-color-parser-in-javascript/
 */



function factory(RGBColor, stackBlur) {
  // canvg(target, s)
  // empty parameters: replace all 'svg' elements on page with 'canvas' elements
  // target: canvas element or the id of a canvas element
  // s: svg string, url to svg file, or xml document
  // opts: optional hash of options
  //		 ignoreMouse: true => ignore mouse events
  //		 ignoreAnimation: true => ignore animations
  //		 ignoreDimensions: true => does not try to resize canvas
  //		 ignoreClear: true => does not clear canvas
  //		 offsetX: int => draws at a x offset
  //		 offsetY: int => draws at a y offset
  //		 scaleWidth: int => scales horizontally to width
  //		 scaleHeight: int => scales vertically to height
  //		 renderCallback: function => will call the function after the first render is completed
  //		 forceRedraw: function => will call the function on every frame, if it returns true, will redraw
  var canvg = function canvg(target, s, opts) {
    // no parameters
    if (target == null && s == null && opts == null) {
      var svgTags = document.querySelectorAll("svg");

      for (var i = 0; i < svgTags.length; i++) {
        var svgTag = svgTags[i];
        var c = document.createElement("canvas");
        c.width = svgTag.clientWidth;
        c.height = svgTag.clientHeight;
        svgTag.parentNode.insertBefore(c, svgTag);
        svgTag.parentNode.removeChild(svgTag);
        var div = document.createElement("div");
        div.appendChild(svgTag);
        canvg(c, div.innerHTML);
      }

      return;
    }

    if (typeof target == "string") {
      target = document.getElementById(target);
    } // store class on canvas


    if (target.svg != null) {
      target.svg.stop();
    }

    var svg = build(opts || {}); // on i.e. 8 for flash canvas, we can't assign the property so check for it

    if (!(target.childNodes.length == 1 && target.childNodes[0].nodeName == "OBJECT")) {
      target.svg = svg;
    }

    var ctx = target.getContext("2d");

    if (typeof s.documentElement != "undefined") {
      // load from xml doc
      svg.loadXmlDoc(ctx, s);
    } else if (s.substr(0, 1) == "<") {
      // load from xml string
      svg.loadXml(ctx, s);
    } else {
      // load from url
      svg.load(ctx, s);
    }
  }; // see https://developer.mozilla.org/en-US/docs/Web/API/Element.matches


  var matchesSelector;

  if (typeof Element.prototype.matches != "undefined") {
    matchesSelector = function matchesSelector(node, selector) {
      return node.matches(selector);
    };
  } else if (typeof Element.prototype.webkitMatchesSelector != "undefined") {
    matchesSelector = function matchesSelector(node, selector) {
      return node.webkitMatchesSelector(selector);
    };
  } else if (typeof Element.prototype.mozMatchesSelector != "undefined") {
    matchesSelector = function matchesSelector(node, selector) {
      return node.mozMatchesSelector(selector);
    };
  } else if (typeof Element.prototype.msMatchesSelector != "undefined") {
    matchesSelector = function matchesSelector(node, selector) {
      return node.msMatchesSelector(selector);
    };
  } else if (typeof Element.prototype.oMatchesSelector != "undefined") {
    matchesSelector = function matchesSelector(node, selector) {
      return node.oMatchesSelector(selector);
    };
  } else {
    // requires Sizzle: https://github.com/jquery/sizzle/wiki/Sizzle-Documentation
    // or jQuery: http://jquery.com/download/
    // or Zepto: http://zeptojs.com/#
    // without it, this is a ReferenceError
    if (typeof jQuery === "function" || typeof Zepto === "function") {
      matchesSelector = function matchesSelector(node, selector) {
        return $(node).is(selector);
      };
    }

    if (typeof matchesSelector === "undefined") {
      matchesSelector = Sizzle.matchesSelector;
    }
  } // slightly modified version of https://github.com/keeganstreet/specificity/blob/master/specificity.js


  var attributeRegex = /(\[[^\]]+\])/g;
  var idRegex = /(#[^\s\+>~\.\[:]+)/g;
  var classRegex = /(\.[^\s\+>~\.\[:]+)/g;
  var pseudoElementRegex = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi;
  var pseudoClassWithBracketsRegex = /(:[\w-]+\([^\)]*\))/gi;
  var pseudoClassRegex = /(:[^\s\+>~\.\[:]+)/g;
  var elementRegex = /([^\s\+>~\.\[:]+)/g;

  function getSelectorSpecificity(selector) {
    var typeCount = [0, 0, 0];

    var findMatch = function findMatch(regex, type) {
      var matches = selector.match(regex);

      if (matches == null) {
        return;
      }

      typeCount[type] += matches.length;
      selector = selector.replace(regex, " ");
    };

    selector = selector.replace(/:not\(([^\)]*)\)/g, "     $1 ");
    selector = selector.replace(/{[\s\S]*/gm, " ");
    findMatch(attributeRegex, 1);
    findMatch(idRegex, 0);
    findMatch(classRegex, 1);
    findMatch(pseudoElementRegex, 2);
    findMatch(pseudoClassWithBracketsRegex, 1);
    findMatch(pseudoClassRegex, 1);
    selector = selector.replace(/[\*\s\+>~]/g, " ");
    selector = selector.replace(/[#\.]/g, " ");
    findMatch(elementRegex, 2);
    return typeCount.join("");
  }

  function build(opts) {
    var svg = {
      opts: opts
    };
    svg.FRAMERATE = 30;
    svg.MAX_VIRTUAL_PIXELS = 30000;

    svg.log = function (msg) {};

    if (svg.opts.log == true && typeof console != "undefined") {
      svg.log = function (msg) {
        console.log(msg);
      };
    } // globals


    svg.init = function (ctx) {
      var uniqueId = 0;

      svg.UniqueId = function () {
        uniqueId++;
        return "canvg" + uniqueId;
      };

      svg.Definitions = {};
      svg.Styles = {};
      svg.StylesSpecificity = {};
      svg.Animations = [];
      svg.Images = [];
      svg.ctx = ctx;
      svg.ViewPort = new function () {
        this.viewPorts = [];

        this.Clear = function () {
          this.viewPorts = [];
        };

        this.SetCurrent = function (width, height) {
          this.viewPorts.push({
            width: width,
            height: height
          });
        };

        this.RemoveCurrent = function () {
          this.viewPorts.pop();
        };

        this.Current = function () {
          return this.viewPorts[this.viewPorts.length - 1];
        };

        this.width = function () {
          return this.Current().width;
        };

        this.height = function () {
          return this.Current().height;
        };

        this.ComputeSize = function (d) {
          if (d != null && typeof d == "number") {
            return d;
          }

          if (d == "x") {
            return this.width();
          }

          if (d == "y") {
            return this.height();
          }

          return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
        };
      }();
    };

    svg.init(); // images loaded

    svg.ImagesLoaded = function () {
      for (var i = 0; i < svg.Images.length; i++) {
        if (!svg.Images[i].loaded) {
          return false;
        }
      }

      return true;
    }; // trim


    svg.trim = function (s) {
      return s.replace(/^\s+|\s+$/g, "");
    }; // compress spaces


    svg.compressSpaces = function (s) {
      return s.replace(/[\s\r\t\n]+/gm, " ");
    }; // ajax


    svg.ajax = function (url) {
      var AJAX;

      if (window.XMLHttpRequest) {
        AJAX = new XMLHttpRequest();
      } else {
        AJAX = new ActiveXObject("Microsoft.XMLHTTP");
      }

      if (AJAX) {
        AJAX.open("GET", url, false);
        AJAX.send(null);
        return AJAX.responseText;
      }

      return null;
    }; // parse xml


    svg.parseXml = function (xml) {
      if (typeof Windows != "undefined" && typeof Windows.Data != "undefined" && typeof Windows.Data.Xml != "undefined") {
        var xmlDoc = new Windows.Data.Xml.Dom.XmlDocument();
        var settings = new Windows.Data.Xml.Dom.XmlLoadSettings();
        settings.prohibitDtd = false;
        xmlDoc.loadXml(xml, settings);
        return xmlDoc;
      } else if (window.DOMParser) {
        try {
          var parser = new DOMParser();
          return parser.parseFromString(xml, "image/svg+xml");
        } catch (e) {
          parser = new DOMParser();
          return parser.parseFromString(xml, "text/xml");
        }
      } else {
        xml = xml.replace(/<!DOCTYPE svg[^>]*>/, "");
        var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(xml);
        return xmlDoc;
      }
    };

    svg.Property = function (name, value) {
      this.name = name;
      this.value = value;
    };

    svg.Property.prototype.getValue = function () {
      return this.value;
    };

    svg.Property.prototype.hasValue = function () {
      return this.value != null && this.value !== "";
    }; // return the numerical value of the property


    svg.Property.prototype.numValue = function () {
      if (!this.hasValue()) {
        return 0;
      }

      var n = parseFloat(this.value);

      if ((this.value + "").match(/%$/)) {
        n = n / 100.0;
      }

      return n;
    };

    svg.Property.prototype.valueOrDefault = function (def) {
      if (this.hasValue()) {
        return this.value;
      }

      return def;
    };

    svg.Property.prototype.numValueOrDefault = function (def) {
      if (this.hasValue()) {
        return this.numValue();
      }

      return def;
    }; // color extensions
    // augment the current color value with the opacity


    svg.Property.prototype.addOpacity = function (opacityProp) {
      var newValue = this.value;

      if (opacityProp.value != null && opacityProp.value != "" && typeof this.value == "string") {
        // can only add opacity to colors, not patterns
        var color = new RGBColor(this.value);

        if (color.ok) {
          newValue = "rgba(" + color.r + ", " + color.g + ", " + color.b + ", " + opacityProp.numValue() + ")";
        }
      }

      return new svg.Property(this.name, newValue);
    }; // definition extensions
    // get the definition from the definitions table


    svg.Property.prototype.getDefinition = function () {
      var name = this.value.match(/#([^\)'"]+)/);

      if (name) {
        name = name[1];
      }

      if (!name) {
        name = this.value;
      }

      return svg.Definitions[name];
    };

    svg.Property.prototype.isUrlDefinition = function () {
      return this.value.indexOf("url(") == 0;
    };

    svg.Property.prototype.getFillStyleDefinition = function (e, opacityProp) {
      var def = this.getDefinition(); // gradient

      if (def != null && def.createGradient) {
        return def.createGradient(svg.ctx, e, opacityProp);
      } // pattern


      if (def != null && def.createPattern) {
        if (def.getHrefAttribute().hasValue()) {
          var pt = def.attribute("patternTransform");
          def = def.getHrefAttribute().getDefinition();

          if (pt.hasValue()) {
            def.attribute("patternTransform", true).value = pt.value;
          }
        }

        return def.createPattern(svg.ctx, e);
      }

      return null;
    }; // length extensions


    svg.Property.prototype.getDPI = function (viewPort) {
      return 96.0; // TODO: compute?
    };

    svg.Property.prototype.getEM = function (viewPort) {
      var em = 12;
      var fontSize = new svg.Property("fontSize", svg.Font.Parse(svg.ctx.font).fontSize);

      if (fontSize.hasValue()) {
        em = fontSize.toPixels(viewPort);
      }

      return em;
    };

    svg.Property.prototype.getUnits = function () {
      var s = this.value + "";
      return s.replace(/[0-9\.\-]/g, "");
    }; // get the length as pixels


    svg.Property.prototype.toPixels = function (viewPort, processPercent) {
      if (!this.hasValue()) {
        return 0;
      }

      var s = this.value + "";

      if (s.match(/em$/)) {
        return this.numValue() * this.getEM(viewPort);
      }

      if (s.match(/ex$/)) {
        return this.numValue() * this.getEM(viewPort) / 2.0;
      }

      if (s.match(/px$/)) {
        return this.numValue();
      }

      if (s.match(/pt$/)) {
        return this.numValue() * this.getDPI(viewPort) * (1.0 / 72.0);
      }

      if (s.match(/pc$/)) {
        return this.numValue() * 15;
      }

      if (s.match(/cm$/)) {
        return this.numValue() * this.getDPI(viewPort) / 2.54;
      }

      if (s.match(/mm$/)) {
        return this.numValue() * this.getDPI(viewPort) / 25.4;
      }

      if (s.match(/in$/)) {
        return this.numValue() * this.getDPI(viewPort);
      }

      if (s.match(/%$/)) {
        return this.numValue() * svg.ViewPort.ComputeSize(viewPort);
      }

      var n = this.numValue();

      if (processPercent && n < 1.0) {
        return n * svg.ViewPort.ComputeSize(viewPort);
      }

      return n;
    }; // time extensions
    // get the time as milliseconds


    svg.Property.prototype.toMilliseconds = function () {
      if (!this.hasValue()) {
        return 0;
      }

      var s = this.value + "";

      if (s.match(/s$/)) {
        return this.numValue() * 1000;
      }

      if (s.match(/ms$/)) {
        return this.numValue();
      }

      return this.numValue();
    }; // angle extensions
    // get the angle as radians


    svg.Property.prototype.toRadians = function () {
      if (!this.hasValue()) {
        return 0;
      }

      var s = this.value + "";

      if (s.match(/deg$/)) {
        return this.numValue() * (Math.PI / 180.0);
      }

      if (s.match(/grad$/)) {
        return this.numValue() * (Math.PI / 200.0);
      }

      if (s.match(/rad$/)) {
        return this.numValue();
      }

      return this.numValue() * (Math.PI / 180.0);
    }; // text extensions
    // get the text baseline


    var textBaselineMapping = {
      baseline: "alphabetic",
      "before-edge": "top",
      "text-before-edge": "top",
      middle: "middle",
      central: "middle",
      "after-edge": "bottom",
      "text-after-edge": "bottom",
      ideographic: "ideographic",
      alphabetic: "alphabetic",
      hanging: "hanging",
      mathematical: "alphabetic"
    };

    svg.Property.prototype.toTextBaseline = function () {
      if (!this.hasValue()) {
        return null;
      }

      return textBaselineMapping[this.value];
    }; // fonts


    svg.Font = new function () {
      this.Styles = "normal|italic|oblique|inherit";
      this.Variants = "normal|small-caps|inherit";
      this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";

      this.CreateFont = function (fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
        var f = inherit != null ? this.Parse(inherit) : this.CreateFont("", "", "", "", "", svg.ctx.font);
        return {
          fontFamily: fontFamily || f.fontFamily,
          fontSize: fontSize || f.fontSize,
          fontStyle: fontStyle || f.fontStyle,
          fontWeight: fontWeight || f.fontWeight,
          fontVariant: fontVariant || f.fontVariant,
          toString: function toString() {
            return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ");
          }
        };
      };

      var that = this;

      this.Parse = function (s) {
        var f = {};
        var d = svg.trim(svg.compressSpaces(s || "")).split(" ");
        var set = {
          fontSize: false,
          fontStyle: false,
          fontWeight: false,
          fontVariant: false
        };
        var ff = "";

        for (var i = 0; i < d.length; i++) {
          if (!set.fontStyle && that.Styles.indexOf(d[i]) != -1) {
            if (d[i] != "inherit") {
              f.fontStyle = d[i];
            }

            set.fontStyle = true;
          } else if (!set.fontVariant && that.Variants.indexOf(d[i]) != -1) {
            if (d[i] != "inherit") {
              f.fontVariant = d[i];
            }

            set.fontStyle = set.fontVariant = true;
          } else if (!set.fontWeight && that.Weights.indexOf(d[i]) != -1) {
            if (d[i] != "inherit") {
              f.fontWeight = d[i];
            }

            set.fontStyle = set.fontVariant = set.fontWeight = true;
          } else if (!set.fontSize) {
            if (d[i] != "inherit") {
              f.fontSize = d[i].split("/")[0];
            }

            set.fontStyle = set.fontVariant = set.fontWeight = set.fontSize = true;
          } else {
            if (d[i] != "inherit") {
              ff += d[i];
            }
          }
        }

        if (ff != "") {
          f.fontFamily = ff;
        }

        return f;
      };
    }(); // points and paths

    svg.ToNumberArray = function (s) {
      var a = svg.trim(svg.compressSpaces((s || "").replace(/,/g, " "))).split(" ");

      for (var i = 0; i < a.length; i++) {
        a[i] = parseFloat(a[i]);
      }

      return a;
    };

    svg.Point = function (x, y) {
      this.x = x;
      this.y = y;
    };

    svg.Point.prototype.angleTo = function (p) {
      return Math.atan2(p.y - this.y, p.x - this.x);
    };

    svg.Point.prototype.applyTransform = function (v) {
      var xp = this.x * v[0] + this.y * v[2] + v[4];
      var yp = this.x * v[1] + this.y * v[3] + v[5];
      this.x = xp;
      this.y = yp;
    };

    svg.CreatePoint = function (s) {
      var a = svg.ToNumberArray(s);
      return new svg.Point(a[0], a[1]);
    };

    svg.CreatePath = function (s) {
      var a = svg.ToNumberArray(s);
      var path = [];

      for (var i = 0; i < a.length; i += 2) {
        path.push(new svg.Point(a[i], a[i + 1]));
      }

      return path;
    }; // bounding box


    svg.BoundingBox = function (x1, y1, x2, y2) {
      // pass in initial points if you want
      this.x1 = Number.NaN;
      this.y1 = Number.NaN;
      this.x2 = Number.NaN;
      this.y2 = Number.NaN;

      this.x = function () {
        return this.x1;
      };

      this.y = function () {
        return this.y1;
      };

      this.width = function () {
        return this.x2 - this.x1;
      };

      this.height = function () {
        return this.y2 - this.y1;
      };

      this.addPoint = function (x, y) {
        if (x != null) {
          if (isNaN(this.x1) || isNaN(this.x2)) {
            this.x1 = x;
            this.x2 = x;
          }

          if (x < this.x1) {
            this.x1 = x;
          }

          if (x > this.x2) {
            this.x2 = x;
          }
        }

        if (y != null) {
          if (isNaN(this.y1) || isNaN(this.y2)) {
            this.y1 = y;
            this.y2 = y;
          }

          if (y < this.y1) {
            this.y1 = y;
          }

          if (y > this.y2) {
            this.y2 = y;
          }
        }
      };

      this.addX = function (x) {
        this.addPoint(x, null);
      };

      this.addY = function (y) {
        this.addPoint(null, y);
      };

      this.addBoundingBox = function (bb) {
        this.addPoint(bb.x1, bb.y1);
        this.addPoint(bb.x2, bb.y2);
      };

      this.addQuadraticCurve = function (p0x, p0y, p1x, p1y, p2x, p2y) {
        var cp1x = p0x + 2 / 3 * (p1x - p0x); // CP1 = QP0 + 2/3 *(QP1-QP0)

        var cp1y = p0y + 2 / 3 * (p1y - p0y); // CP1 = QP0 + 2/3 *(QP1-QP0)

        var cp2x = cp1x + 1 / 3 * (p2x - p0x); // CP2 = CP1 + 1/3 *(QP2-QP0)

        var cp2y = cp1y + 1 / 3 * (p2y - p0y); // CP2 = CP1 + 1/3 *(QP2-QP0)

        this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
      };

      this.addBezierCurve = function (p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
        // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
        var p0 = [p0x, p0y],
            p1 = [p1x, p1y],
            p2 = [p2x, p2y],
            p3 = [p3x, p3y];
        this.addPoint(p0[0], p0[1]);
        this.addPoint(p3[0], p3[1]);

        for (i = 0; i <= 1; i++) {
          var f = function f(t) {
            return Math.pow(1 - t, 3) * p0[i] + 3 * Math.pow(1 - t, 2) * t * p1[i] + 3 * (1 - t) * Math.pow(t, 2) * p2[i] + Math.pow(t, 3) * p3[i];
          };

          var b = 6 * p0[i] - 12 * p1[i] + 6 * p2[i];
          var a = -3 * p0[i] + 9 * p1[i] - 9 * p2[i] + 3 * p3[i];
          var c = 3 * p1[i] - 3 * p0[i];

          if (a == 0) {
            if (b == 0) {
              continue;
            }

            var t = -c / b;

            if (0 < t && t < 1) {
              if (i == 0) {
                this.addX(f(t));
              }

              if (i == 1) {
                this.addY(f(t));
              }
            }

            continue;
          }

          var b2ac = Math.pow(b, 2) - 4 * c * a;

          if (b2ac < 0) {
            continue;
          }

          var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);

          if (0 < t1 && t1 < 1) {
            if (i == 0) {
              this.addX(f(t1));
            }

            if (i == 1) {
              this.addY(f(t1));
            }
          }

          var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);

          if (0 < t2 && t2 < 1) {
            if (i == 0) {
              this.addX(f(t2));
            }

            if (i == 1) {
              this.addY(f(t2));
            }
          }
        }
      };

      this.isPointInBox = function (x, y) {
        return this.x1 <= x && x <= this.x2 && this.y1 <= y && y <= this.y2;
      };

      this.addPoint(x1, y1);
      this.addPoint(x2, y2);
    }; // transforms


    svg.Transform = function (v) {
      var that = this;
      this.Type = {}; // translate

      this.Type.translate = function (s) {
        this.p = svg.CreatePoint(s);

        this.apply = function (ctx) {
          ctx.translate(this.p.x || 0.0, this.p.y || 0.0);
        };

        this.unapply = function (ctx) {
          ctx.translate(-1.0 * this.p.x || 0.0, -1.0 * this.p.y || 0.0);
        };

        this.applyToPoint = function (p) {
          p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
        };
      }; // rotate


      this.Type.rotate = function (s) {
        var a = svg.ToNumberArray(s);
        this.angle = new svg.Property("angle", a[0]);
        this.cx = a[1] || 0;
        this.cy = a[2] || 0;

        this.apply = function (ctx) {
          ctx.translate(this.cx, this.cy);
          ctx.rotate(this.angle.toRadians());
          ctx.translate(-this.cx, -this.cy);
        };

        this.unapply = function (ctx) {
          ctx.translate(this.cx, this.cy);
          ctx.rotate(-1.0 * this.angle.toRadians());
          ctx.translate(-this.cx, -this.cy);
        };

        this.applyToPoint = function (p) {
          var a = this.angle.toRadians();
          p.applyTransform([1, 0, 0, 1, this.p.x || 0.0, this.p.y || 0.0]);
          p.applyTransform([Math.cos(a), Math.sin(a), -Math.sin(a), Math.cos(a), 0, 0]);
          p.applyTransform([1, 0, 0, 1, -this.p.x || 0.0, -this.p.y || 0.0]);
        };
      };

      this.Type.scale = function (s) {
        this.p = svg.CreatePoint(s);

        this.apply = function (ctx) {
          ctx.scale(this.p.x || 1.0, this.p.y || this.p.x || 1.0);
        };

        this.unapply = function (ctx) {
          ctx.scale(1.0 / this.p.x || 1.0, 1.0 / this.p.y || this.p.x || 1.0);
        };

        this.applyToPoint = function (p) {
          p.applyTransform([this.p.x || 0.0, 0, 0, this.p.y || 0.0, 0, 0]);
        };
      };

      this.Type.matrix = function (s) {
        this.m = svg.ToNumberArray(s);

        this.apply = function (ctx) {
          ctx.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
        };

        this.unapply = function (ctx) {
          var a = this.m[0];
          var b = this.m[2];
          var c = this.m[4];
          var d = this.m[1];
          var e = this.m[3];
          var f = this.m[5];
          var g = 0.0;
          var h = 0.0;
          var i = 1.0;
          var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g));
          ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c * h - b * i), det * (a * i - c * g), det * (b * f - c * e), det * (c * d - a * f));
        };

        this.applyToPoint = function (p) {
          p.applyTransform(this.m);
        };
      };

      this.Type.SkewBase = function (s) {
        this.base = that.Type.matrix;
        this.base(s);
        this.angle = new svg.Property("angle", s);
      };

      this.Type.SkewBase.prototype = new this.Type.matrix();

      this.Type.skewX = function (s) {
        this.base = that.Type.SkewBase;
        this.base(s);
        this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0];
      };

      this.Type.skewX.prototype = new this.Type.SkewBase();

      this.Type.skewY = function (s) {
        this.base = that.Type.SkewBase;
        this.base(s);
        this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0];
      };

      this.Type.skewY.prototype = new this.Type.SkewBase();
      this.transforms = [];

      this.apply = function (ctx) {
        for (var i = 0; i < this.transforms.length; i++) {
          this.transforms[i].apply(ctx);
        }
      };

      this.unapply = function (ctx) {
        for (var i = this.transforms.length - 1; i >= 0; i--) {
          this.transforms[i].unapply(ctx);
        }
      };

      this.applyToPoint = function (p) {
        for (var i = 0; i < this.transforms.length; i++) {
          this.transforms[i].applyToPoint(p);
        }
      };

      var data = svg.trim(svg.compressSpaces(v)).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);

      for (var i = 0; i < data.length; i++) {
        var type = svg.trim(data[i].split("(")[0]);
        var s = data[i].split("(")[1].replace(")", "");
        var transformType = this.Type[type];

        if (typeof transformType != "undefined") {
          var transform = new transformType(s);
          transform.type = type;
          this.transforms.push(transform);
        }
      }
    }; // aspect ratio


    svg.AspectRatio = function (ctx, aspectRatio, width, desiredWidth, height, desiredHeight, minX, minY, refX, refY) {
      // aspect ratio - http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
      aspectRatio = svg.compressSpaces(aspectRatio);
      aspectRatio = aspectRatio.replace(/^defer\s/, ""); // ignore defer

      var align = aspectRatio.split(" ")[0] || "xMidYMid";
      var meetOrSlice = aspectRatio.split(" ")[1] || "meet"; // calculate scale

      var scaleX = width / desiredWidth;
      var scaleY = height / desiredHeight;
      var scaleMin = Math.min(scaleX, scaleY);
      var scaleMax = Math.max(scaleX, scaleY);

      if (meetOrSlice == "meet") {
        desiredWidth *= scaleMin;
        desiredHeight *= scaleMin;
      }

      if (meetOrSlice == "slice") {
        desiredWidth *= scaleMax;
        desiredHeight *= scaleMax;
      }

      refX = new svg.Property("refX", refX);
      refY = new svg.Property("refY", refY);

      if (refX.hasValue() && refY.hasValue()) {
        ctx.translate(-scaleMin * refX.toPixels("x"), -scaleMin * refY.toPixels("y"));
      } else {
        // align
        if (align.match(/^xMid/) && (meetOrSlice == "meet" && scaleMin == scaleY || meetOrSlice == "slice" && scaleMax == scaleY)) {
          ctx.translate(width / 2.0 - desiredWidth / 2.0, 0);
        }

        if (align.match(/YMid$/) && (meetOrSlice == "meet" && scaleMin == scaleX || meetOrSlice == "slice" && scaleMax == scaleX)) {
          ctx.translate(0, height / 2.0 - desiredHeight / 2.0);
        }

        if (align.match(/^xMax/) && (meetOrSlice == "meet" && scaleMin == scaleY || meetOrSlice == "slice" && scaleMax == scaleY)) {
          ctx.translate(width - desiredWidth, 0);
        }

        if (align.match(/YMax$/) && (meetOrSlice == "meet" && scaleMin == scaleX || meetOrSlice == "slice" && scaleMax == scaleX)) {
          ctx.translate(0, height - desiredHeight);
        }
      } // scale


      if (align == "none") {
        ctx.scale(scaleX, scaleY);
      } else if (meetOrSlice == "meet") {
        ctx.scale(scaleMin, scaleMin);
      } else if (meetOrSlice == "slice") {
        ctx.scale(scaleMax, scaleMax);
      } // translate


      ctx.translate(minX == null ? 0 : -minX, minY == null ? 0 : -minY);
    }; // elements


    svg.Element = {};
    svg.EmptyProperty = new svg.Property("EMPTY", "");

    svg.Element.ElementBase = function (node) {
      this.attributes = {};
      this.styles = {};
      this.stylesSpecificity = {};
      this.children = []; // get or create attribute

      this.attribute = function (name, createIfNotExists) {
        var a = this.attributes[name];

        if (a != null) {
          return a;
        }

        if (createIfNotExists == true) {
          a = new svg.Property(name, "");
          this.attributes[name] = a;
        }

        return a || svg.EmptyProperty;
      };

      this.getHrefAttribute = function () {
        for (var a in this.attributes) {
          if (a == "href" || a.match(/:href$/)) {
            return this.attributes[a];
          }
        }

        return svg.EmptyProperty;
      }; // get or create style, crawls up node tree


      this.style = function (name, createIfNotExists, skipAncestors) {
        var s = this.styles[name];

        if (s != null) {
          return s;
        }

        var a = this.attribute(name);

        if (a != null && a.hasValue()) {
          this.styles[name] = a; // move up to me to cache

          return a;
        }

        if (skipAncestors != true) {
          var p = this.parent;

          if (p != null) {
            var ps = p.style(name);

            if (ps != null && ps.hasValue()) {
              return ps;
            }
          }
        }

        if (createIfNotExists == true) {
          s = new svg.Property(name, "");
          this.styles[name] = s;
        }

        return s || svg.EmptyProperty;
      }; // base render


      this.render = function (ctx) {
        // don't render display=none
        if (this.style("display").value == "none") {
          return;
        } // don't render visibility=hidden


        if (this.style("visibility").value == "hidden") {
          return;
        }

        ctx.save();

        if (this.style("mask").hasValue()) {
          // mask
          var mask = this.style("mask").getDefinition();

          if (mask != null) {
            mask.apply(ctx, this);
          }
        } else if (this.style("filter").hasValue()) {
          // filter
          var filter = this.style("filter").getDefinition();

          if (filter != null) {
            filter.apply(ctx, this);
          }
        } else {
          this.setContext(ctx);
          this.renderChildren(ctx);
          this.clearContext(ctx);
        }

        ctx.restore();
      }; // base set context


      this.setContext = function (ctx) {// OVERRIDE ME!
      }; // base clear context


      this.clearContext = function (ctx) {// OVERRIDE ME!
      }; // base render children


      this.renderChildren = function (ctx) {
        for (var i = 0; i < this.children.length; i++) {
          this.children[i].render(ctx);
        }
      };

      this.addChild = function (childNode, create) {
        var child = childNode;

        if (create) {
          child = svg.CreateElement(childNode);
        }

        child.parent = this;

        if (child.type != "title") {
          this.children.push(child);
        }
      };

      this.addStylesFromStyleDefinition = function () {
        // add styles
        for (var selector in svg.Styles) {
          if (selector[0] != "@" && matchesSelector(node, selector)) {
            var styles = svg.Styles[selector];
            var specificity = svg.StylesSpecificity[selector];

            if (styles != null) {
              for (var name in styles) {
                var existingSpecificity = this.stylesSpecificity[name];

                if (typeof existingSpecificity == "undefined") {
                  existingSpecificity = "000";
                }

                if (specificity > existingSpecificity) {
                  this.styles[name] = styles[name];
                  this.stylesSpecificity[name] = specificity;
                }
              }
            }
          }
        }
      }; // Microsoft Edge fix


      var allUppercase = new RegExp("^[A-Z-]+$");

      var normalizeAttributeName = function normalizeAttributeName(name) {
        if (allUppercase.test(name)) {
          return name.toLowerCase();
        }

        return name;
      };

      if (node != null && node.nodeType == 1) {
        //ELEMENT_NODE
        // add attributes
        for (var i = 0; i < node.attributes.length; i++) {
          var attribute = node.attributes[i];
          var nodeName = normalizeAttributeName(attribute.nodeName);
          this.attributes[nodeName] = new svg.Property(nodeName, attribute.value);
        }

        this.addStylesFromStyleDefinition(); // add inline styles

        if (this.attribute("style").hasValue()) {
          var styles = this.attribute("style").value.split(";");

          for (var i = 0; i < styles.length; i++) {
            if (svg.trim(styles[i]) != "") {
              var style = styles[i].split(":");
              var name = svg.trim(style[0]);
              var value = svg.trim(style[1]);
              this.styles[name] = new svg.Property(name, value);
            }
          }
        } // add id


        if (this.attribute("id").hasValue()) {
          if (svg.Definitions[this.attribute("id").value] == null) {
            svg.Definitions[this.attribute("id").value] = this;
          }
        } // add children


        for (var i = 0; i < node.childNodes.length; i++) {
          var childNode = node.childNodes[i];

          if (childNode.nodeType == 1) {
            this.addChild(childNode, true);
          } //ELEMENT_NODE


          if (this.captureTextNodes && (childNode.nodeType == 3 || childNode.nodeType == 4)) {
            var text = childNode.value || childNode.text || childNode.textContent || "";

            if (svg.compressSpaces(text) != "") {
              this.addChild(new svg.Element.tspan(childNode), false); // TEXT_NODE
            }
          }
        }
      }
    };

    svg.Element.RenderedElementBase = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.setContext = function (ctx) {
        // fill
        if (this.style("fill").isUrlDefinition()) {
          var fs = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));

          if (fs != null) {
            ctx.fillStyle = fs;
          }
        } else if (this.style("fill").hasValue()) {
          var fillStyle = this.style("fill");

          if (fillStyle.value == "currentColor") {
            fillStyle.value = this.style("color").value;
          }

          if (fillStyle.value != "inherit") {
            ctx.fillStyle = fillStyle.value == "none" ? "rgba(0,0,0,0)" : fillStyle.value;
          }
        }

        if (this.style("fill-opacity").hasValue()) {
          var fillStyle = new svg.Property("fill", ctx.fillStyle);
          fillStyle = fillStyle.addOpacity(this.style("fill-opacity"));
          ctx.fillStyle = fillStyle.value;
        } // stroke


        if (this.style("stroke").isUrlDefinition()) {
          var fs = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));

          if (fs != null) {
            ctx.strokeStyle = fs;
          }
        } else if (this.style("stroke").hasValue()) {
          var strokeStyle = this.style("stroke");

          if (strokeStyle.value == "currentColor") {
            strokeStyle.value = this.style("color").value;
          }

          if (strokeStyle.value != "inherit") {
            ctx.strokeStyle = strokeStyle.value == "none" ? "rgba(0,0,0,0)" : strokeStyle.value;
          }
        }

        if (this.style("stroke-opacity").hasValue()) {
          var strokeStyle = new svg.Property("stroke", ctx.strokeStyle);
          strokeStyle = strokeStyle.addOpacity(this.style("stroke-opacity"));
          ctx.strokeStyle = strokeStyle.value;
        }

        if (this.style("stroke-width").hasValue()) {
          var newLineWidth = this.style("stroke-width").toPixels();
          ctx.lineWidth = newLineWidth == 0 ? 0.001 : newLineWidth; // browsers don't respect 0
        }

        if (this.style("stroke-linecap").hasValue()) {
          ctx.lineCap = this.style("stroke-linecap").value;
        }

        if (this.style("stroke-linejoin").hasValue()) {
          ctx.lineJoin = this.style("stroke-linejoin").value;
        }

        if (this.style("stroke-miterlimit").hasValue()) {
          ctx.miterLimit = this.style("stroke-miterlimit").value;
        }

        if (this.style("stroke-dasharray").hasValue() && this.style("stroke-dasharray").value != "none") {
          var gaps = svg.ToNumberArray(this.style("stroke-dasharray").value);

          if (typeof ctx.setLineDash != "undefined") {
            ctx.setLineDash(gaps);
          } else if (typeof ctx.webkitLineDash != "undefined") {
            ctx.webkitLineDash = gaps;
          } else if (typeof ctx.mozDash != "undefined" && !(gaps.length == 1 && gaps[0] == 0)) {
            ctx.mozDash = gaps;
          }

          var offset = this.style("stroke-dashoffset").numValueOrDefault(1);

          if (typeof ctx.lineDashOffset != "undefined") {
            ctx.lineDashOffset = offset;
          } else if (typeof ctx.webkitLineDashOffset != "undefined") {
            ctx.webkitLineDashOffset = offset;
          } else if (typeof ctx.mozDashOffset != "undefined") {
            ctx.mozDashOffset = offset;
          }
        } // font


        if (typeof ctx.font != "undefined") {
          ctx.font = svg.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString();
        } // transform


        if (this.style("transform", false, true).hasValue()) {
          var transform = new svg.Transform(this.style("transform", false, true).value);
          transform.apply(ctx);
        } // clip


        if (this.style("clip-path", false, true).hasValue()) {
          var clip = this.style("clip-path", false, true).getDefinition();

          if (clip != null) {
            clip.apply(ctx);
          }
        } // opacity


        if (this.style("opacity").hasValue()) {
          ctx.globalAlpha = this.style("opacity").numValue();
        }
      };
    };

    svg.Element.RenderedElementBase.prototype = new svg.Element.ElementBase();

    svg.Element.PathElementBase = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);

      this.path = function (ctx) {
        if (ctx != null) {
          ctx.beginPath();
        }

        return new svg.BoundingBox();
      };

      this.renderChildren = function (ctx) {
        this.path(ctx);
        svg.Mouse.checkPath(this, ctx);

        if (ctx.fillStyle != "") {
          if (this.style("fill-rule").valueOrDefault("inherit") != "inherit") {
            ctx.fill(this.style("fill-rule").value);
          } else {
            ctx.fill();
          }
        }

        if (ctx.strokeStyle != "") {
          ctx.stroke();
        }

        var markers = this.getMarkers();

        if (markers != null) {
          if (this.style("marker-start").isUrlDefinition()) {
            var marker = this.style("marker-start").getDefinition();
            marker.render(ctx, markers[0][0], markers[0][1]);
          }

          if (this.style("marker-mid").isUrlDefinition()) {
            var marker = this.style("marker-mid").getDefinition();

            for (var i = 1; i < markers.length - 1; i++) {
              marker.render(ctx, markers[i][0], markers[i][1]);
            }
          }

          if (this.style("marker-end").isUrlDefinition()) {
            var marker = this.style("marker-end").getDefinition();
            marker.render(ctx, markers[markers.length - 1][0], markers[markers.length - 1][1]);
          }
        }
      };

      this.getBoundingBox = function () {
        return this.path();
      };

      this.getMarkers = function () {
        return null;
      };
    };

    svg.Element.PathElementBase.prototype = new svg.Element.RenderedElementBase(); // svg element

    svg.Element.svg = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseClearContext = this.clearContext;

      this.clearContext = function (ctx) {
        this.baseClearContext(ctx);
        svg.ViewPort.RemoveCurrent();
      };

      this.baseSetContext = this.setContext;

      this.setContext = function (ctx) {
        // initial values and defaults
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4;

        if (typeof ctx.font != "undefined" && typeof window.getComputedStyle != "undefined") {
          ctx.font = window.getComputedStyle(ctx.canvas).getPropertyValue("font");
        }

        this.baseSetContext(ctx); // create new view port

        if (!this.attribute("x").hasValue()) {
          this.attribute("x", true).value = 0;
        }

        if (!this.attribute("y").hasValue()) {
          this.attribute("y", true).value = 0;
        }

        ctx.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
        var width = svg.ViewPort.width();
        var height = svg.ViewPort.height();

        if (!this.attribute("width").hasValue()) {
          this.attribute("width", true).value = "100%";
        }

        if (!this.attribute("height").hasValue()) {
          this.attribute("height", true).value = "100%";
        }

        if (typeof this.root == "undefined") {
          width = this.attribute("width").toPixels("x");
          height = this.attribute("height").toPixels("y");
          var x = 0;
          var y = 0;

          if (this.attribute("refX").hasValue() && this.attribute("refY").hasValue()) {
            x = -this.attribute("refX").toPixels("x");
            y = -this.attribute("refY").toPixels("y");
          }

          if (this.attribute("overflow").valueOrDefault("hidden") != "visible") {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(width, y);
            ctx.lineTo(width, height);
            ctx.lineTo(x, height);
            ctx.closePath();
            ctx.clip();
          }
        }

        svg.ViewPort.SetCurrent(width, height); // viewbox

        if (this.attribute("viewBox").hasValue()) {
          var viewBox = svg.ToNumberArray(this.attribute("viewBox").value);
          var minX = viewBox[0];
          var minY = viewBox[1];
          width = viewBox[2];
          height = viewBox[3];
          svg.AspectRatio(ctx, this.attribute("preserveAspectRatio").value, svg.ViewPort.width(), width, svg.ViewPort.height(), height, minX, minY, this.attribute("refX").value, this.attribute("refY").value);
          svg.ViewPort.RemoveCurrent();
          svg.ViewPort.SetCurrent(viewBox[2], viewBox[3]);
        }
      };
    };

    svg.Element.svg.prototype = new svg.Element.RenderedElementBase(); // rect element

    svg.Element.rect = function (node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);

      this.path = function (ctx) {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");
        var rx = this.attribute("rx").toPixels("x");
        var ry = this.attribute("ry").toPixels("y");

        if (this.attribute("rx").hasValue() && !this.attribute("ry").hasValue()) {
          ry = rx;
        }

        if (this.attribute("ry").hasValue() && !this.attribute("rx").hasValue()) {
          rx = ry;
        }

        rx = Math.min(rx, width / 2.0);
        ry = Math.min(ry, height / 2.0);

        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(x + rx, y);
          ctx.lineTo(x + width - rx, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
          ctx.lineTo(x + width, y + height - ry);
          ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
          ctx.lineTo(x + rx, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
          ctx.lineTo(x, y + ry);
          ctx.quadraticCurveTo(x, y, x + rx, y);
          ctx.closePath();
        }

        return new svg.BoundingBox(x, y, x + width, y + height);
      };
    };

    svg.Element.rect.prototype = new svg.Element.PathElementBase(); // circle element

    svg.Element.circle = function (node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);

      this.path = function (ctx) {
        var cx = this.attribute("cx").toPixels("x");
        var cy = this.attribute("cy").toPixels("y");
        var r = this.attribute("r").toPixels();

        if (ctx != null) {
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2, true);
          ctx.closePath();
        }

        return new svg.BoundingBox(cx - r, cy - r, cx + r, cy + r);
      };
    };

    svg.Element.circle.prototype = new svg.Element.PathElementBase(); // ellipse element

    svg.Element.ellipse = function (node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);

      this.path = function (ctx) {
        var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
        var rx = this.attribute("rx").toPixels("x");
        var ry = this.attribute("ry").toPixels("y");
        var cx = this.attribute("cx").toPixels("x");
        var cy = this.attribute("cy").toPixels("y");

        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(cx, cy - ry);
          ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
          ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
          ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
          ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
          ctx.closePath();
        }

        return new svg.BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
      };
    };

    svg.Element.ellipse.prototype = new svg.Element.PathElementBase(); // line element

    svg.Element.line = function (node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);

      this.getPoints = function () {
        return [new svg.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new svg.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))];
      };

      this.path = function (ctx) {
        var points = this.getPoints();

        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          ctx.lineTo(points[1].x, points[1].y);
        }

        return new svg.BoundingBox(points[0].x, points[0].y, points[1].x, points[1].y);
      };

      this.getMarkers = function () {
        var points = this.getPoints();
        var a = points[0].angleTo(points[1]);
        return [[points[0], a], [points[1], a]];
      };
    };

    svg.Element.line.prototype = new svg.Element.PathElementBase(); // polyline element

    svg.Element.polyline = function (node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      this.points = svg.CreatePath(this.attribute("points").value);

      this.path = function (ctx) {
        var bb = new svg.BoundingBox(this.points[0].x, this.points[0].y);

        if (ctx != null) {
          ctx.beginPath();
          ctx.moveTo(this.points[0].x, this.points[0].y);
        }

        for (var i = 1; i < this.points.length; i++) {
          bb.addPoint(this.points[i].x, this.points[i].y);

          if (ctx != null) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
          }
        }

        return bb;
      };

      this.getMarkers = function () {
        var markers = [];

        for (var i = 0; i < this.points.length - 1; i++) {
          markers.push([this.points[i], this.points[i].angleTo(this.points[i + 1])]);
        }

        if (markers.length > 0) {
          markers.push([this.points[this.points.length - 1], markers[markers.length - 1][1]]);
        }

        return markers;
      };
    };

    svg.Element.polyline.prototype = new svg.Element.PathElementBase(); // polygon element

    svg.Element.polygon = function (node) {
      this.base = svg.Element.polyline;
      this.base(node);
      this.basePath = this.path;

      this.path = function (ctx) {
        var bb = this.basePath(ctx);

        if (ctx != null) {
          ctx.lineTo(this.points[0].x, this.points[0].y);
          ctx.closePath();
        }

        return bb;
      };
    };

    svg.Element.polygon.prototype = new svg.Element.polyline(); // path element

    svg.Element.path = function (node) {
      this.base = svg.Element.PathElementBase;
      this.base(node);
      var d = this.attribute("d").value; // TODO: convert to real lexer based on http://www.w3.org/TR/SVG11/paths.html#PathDataBNF

      d = d.replace(/,/gm, " "); // get rid of all commas
      // As the end of a match can also be the start of the next match, we need to run this replace twice.

      for (var i = 0; i < 2; i++) {
        d = d.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
      } // suffix commands with spaces


      d = d.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"); // prefix commands with spaces

      d = d.replace(/([0-9])([+\-])/gm, "$1 $2"); // separate digits on +- signs
      // Again, we need to run this twice to find all occurances

      for (var i = 0; i < 2; i++) {
        d = d.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
      } // separate digits when they start with a comma


      d = d.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "); // shorthand elliptical arc path syntax

      d = svg.compressSpaces(d); // compress multiple spaces

      d = svg.trim(d);
      this.PathParser = new function (d) {
        this.tokens = d.split(" ");

        this.reset = function () {
          this.i = -1;
          this.command = "";
          this.previousCommand = "";
          this.start = new svg.Point(0, 0);
          this.control = new svg.Point(0, 0);
          this.current = new svg.Point(0, 0);
          this.points = [];
          this.angles = [];
        };

        this.isEnd = function () {
          return this.i >= this.tokens.length - 1;
        };

        this.isCommandOrEnd = function () {
          if (this.isEnd()) {
            return true;
          }

          return this.tokens[this.i + 1].match(/^[A-Za-z]$/) != null;
        };

        this.isRelativeCommand = function () {
          switch (this.command) {
            case "m":
            case "l":
            case "h":
            case "v":
            case "c":
            case "s":
            case "q":
            case "t":
            case "a":
            case "z":
              return true;
              break;
          }

          return false;
        };

        this.getToken = function () {
          this.i++;
          return this.tokens[this.i];
        };

        this.getScalar = function () {
          return parseFloat(this.getToken());
        };

        this.nextCommand = function () {
          this.previousCommand = this.command;
          this.command = this.getToken();
        };

        this.getPoint = function () {
          var p = new svg.Point(this.getScalar(), this.getScalar());
          return this.makeAbsolute(p);
        };

        this.getAsControlPoint = function () {
          var p = this.getPoint();
          this.control = p;
          return p;
        };

        this.getAsCurrentPoint = function () {
          var p = this.getPoint();
          this.current = p;
          return p;
        };

        this.getReflectedControlPoint = function () {
          if (this.previousCommand.toLowerCase() != "c" && this.previousCommand.toLowerCase() != "s" && this.previousCommand.toLowerCase() != "q" && this.previousCommand.toLowerCase() != "t") {
            return this.current;
          } // reflect point


          var p = new svg.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
          return p;
        };

        this.makeAbsolute = function (p) {
          if (this.isRelativeCommand()) {
            p.x += this.current.x;
            p.y += this.current.y;
          }

          return p;
        };

        this.addMarker = function (p, from, priorTo) {
          // if the last angle isn't filled in because we didn't have this point yet ...
          if (priorTo != null && this.angles.length > 0 && this.angles[this.angles.length - 1] == null) {
            this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(priorTo);
          }

          this.addMarkerAngle(p, from == null ? null : from.angleTo(p));
        };

        this.addMarkerAngle = function (p, a) {
          this.points.push(p);
          this.angles.push(a);
        };

        this.getMarkerPoints = function () {
          return this.points;
        };

        this.getMarkerAngles = function () {
          for (var i = 0; i < this.angles.length; i++) {
            if (this.angles[i] == null) {
              for (var j = i + 1; j < this.angles.length; j++) {
                if (this.angles[j] != null) {
                  this.angles[i] = this.angles[j];
                  break;
                }
              }
            }
          }

          return this.angles;
        };
      }(d);

      this.path = function (ctx) {
        var pp = this.PathParser;
        pp.reset();
        var bb = new svg.BoundingBox();

        if (ctx != null) {
          ctx.beginPath();
        }

        while (!pp.isEnd()) {
          pp.nextCommand();

          switch (pp.command) {
            case "M":
            case "m":
              var p = pp.getAsCurrentPoint();
              pp.addMarker(p);
              bb.addPoint(p.x, p.y);

              if (ctx != null) {
                ctx.moveTo(p.x, p.y);
              }

              pp.start = pp.current;

              while (!pp.isCommandOrEnd()) {
                var p = pp.getAsCurrentPoint();
                pp.addMarker(p, pp.start);
                bb.addPoint(p.x, p.y);

                if (ctx != null) {
                  ctx.lineTo(p.x, p.y);
                }
              }

              break;

            case "L":
            case "l":
              while (!pp.isCommandOrEnd()) {
                var c = pp.current;
                var p = pp.getAsCurrentPoint();
                pp.addMarker(p, c);
                bb.addPoint(p.x, p.y);

                if (ctx != null) {
                  ctx.lineTo(p.x, p.y);
                }
              }

              break;

            case "H":
            case "h":
              while (!pp.isCommandOrEnd()) {
                var newP = new svg.Point((pp.isRelativeCommand() ? pp.current.x : 0) + pp.getScalar(), pp.current.y);
                pp.addMarker(newP, pp.current);
                pp.current = newP;
                bb.addPoint(pp.current.x, pp.current.y);

                if (ctx != null) {
                  ctx.lineTo(pp.current.x, pp.current.y);
                }
              }

              break;

            case "V":
            case "v":
              while (!pp.isCommandOrEnd()) {
                var newP = new svg.Point(pp.current.x, (pp.isRelativeCommand() ? pp.current.y : 0) + pp.getScalar());
                pp.addMarker(newP, pp.current);
                pp.current = newP;
                bb.addPoint(pp.current.x, pp.current.y);

                if (ctx != null) {
                  ctx.lineTo(pp.current.x, pp.current.y);
                }
              }

              break;

            case "C":
            case "c":
              while (!pp.isCommandOrEnd()) {
                var curr = pp.current;
                var p1 = pp.getPoint();
                var cntrl = pp.getAsControlPoint();
                var cp = pp.getAsCurrentPoint();
                pp.addMarker(cp, cntrl, p1);
                bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);

                if (ctx != null) {
                  ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                }
              }

              break;

            case "S":
            case "s":
              while (!pp.isCommandOrEnd()) {
                var curr = pp.current;
                var p1 = pp.getReflectedControlPoint();
                var cntrl = pp.getAsControlPoint();
                var cp = pp.getAsCurrentPoint();
                pp.addMarker(cp, cntrl, p1);
                bb.addBezierCurve(curr.x, curr.y, p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);

                if (ctx != null) {
                  ctx.bezierCurveTo(p1.x, p1.y, cntrl.x, cntrl.y, cp.x, cp.y);
                }
              }

              break;

            case "Q":
            case "q":
              while (!pp.isCommandOrEnd()) {
                var curr = pp.current;
                var cntrl = pp.getAsControlPoint();
                var cp = pp.getAsCurrentPoint();
                pp.addMarker(cp, cntrl, cntrl);
                bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);

                if (ctx != null) {
                  ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                }
              }

              break;

            case "T":
            case "t":
              while (!pp.isCommandOrEnd()) {
                var curr = pp.current;
                var cntrl = pp.getReflectedControlPoint();
                pp.control = cntrl;
                var cp = pp.getAsCurrentPoint();
                pp.addMarker(cp, cntrl, cntrl);
                bb.addQuadraticCurve(curr.x, curr.y, cntrl.x, cntrl.y, cp.x, cp.y);

                if (ctx != null) {
                  ctx.quadraticCurveTo(cntrl.x, cntrl.y, cp.x, cp.y);
                }
              }

              break;

            case "A":
            case "a":
              while (!pp.isCommandOrEnd()) {
                var curr = pp.current;
                var rx = pp.getScalar();
                var ry = pp.getScalar();
                var xAxisRotation = pp.getScalar() * (Math.PI / 180.0);
                var largeArcFlag = pp.getScalar();
                var sweepFlag = pp.getScalar();
                var cp = pp.getAsCurrentPoint(); // Conversion from endpoint to center parameterization
                // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
                // x1', y1'

                var currp = new svg.Point(Math.cos(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.sin(xAxisRotation) * (curr.y - cp.y) / 2.0, -Math.sin(xAxisRotation) * (curr.x - cp.x) / 2.0 + Math.cos(xAxisRotation) * (curr.y - cp.y) / 2.0); // adjust radii

                var l = Math.pow(currp.x, 2) / Math.pow(rx, 2) + Math.pow(currp.y, 2) / Math.pow(ry, 2);

                if (l > 1) {
                  rx *= Math.sqrt(l);
                  ry *= Math.sqrt(l);
                } // cx', cy'


                var s = (largeArcFlag == sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rx, 2) * Math.pow(ry, 2) - Math.pow(rx, 2) * Math.pow(currp.y, 2) - Math.pow(ry, 2) * Math.pow(currp.x, 2)) / (Math.pow(rx, 2) * Math.pow(currp.y, 2) + Math.pow(ry, 2) * Math.pow(currp.x, 2)));

                if (isNaN(s)) {
                  s = 0;
                }

                var cpp = new svg.Point(s * rx * currp.y / ry, s * -ry * currp.x / rx); // cx, cy

                var centp = new svg.Point((curr.x + cp.x) / 2.0 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (curr.y + cp.y) / 2.0 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y); // vector magnitude

                var m = function m(v) {
                  return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
                }; // ratio between two vectors


                var r = function r(u, v) {
                  return (u[0] * v[0] + u[1] * v[1]) / (m(u) * m(v));
                }; // angle between two vectors


                var a = function a(u, v) {
                  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(r(u, v));
                }; // initial angle


                var a1 = a([1, 0], [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry]); // angle delta

                var u = [(currp.x - cpp.x) / rx, (currp.y - cpp.y) / ry];
                var v = [(-currp.x - cpp.x) / rx, (-currp.y - cpp.y) / ry];
                var ad = a(u, v);

                if (r(u, v) <= -1) {
                  ad = Math.PI;
                }

                if (r(u, v) >= 1) {
                  ad = 0;
                } // for markers


                var dir = 1 - sweepFlag ? 1.0 : -1.0;
                var ah = a1 + dir * (ad / 2.0);
                var halfWay = new svg.Point(centp.x + rx * Math.cos(ah), centp.y + ry * Math.sin(ah));
                pp.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
                pp.addMarkerAngle(cp, ah - dir * Math.PI);
                bb.addPoint(cp.x, cp.y); // TODO: this is too naive, make it better

                if (ctx != null) {
                  var r = rx > ry ? rx : ry;
                  var sx = rx > ry ? 1 : rx / ry;
                  var sy = rx > ry ? ry / rx : 1;
                  ctx.translate(centp.x, centp.y);
                  ctx.rotate(xAxisRotation);
                  ctx.scale(sx, sy);
                  ctx.arc(0, 0, r, a1, a1 + ad, 1 - sweepFlag);
                  ctx.scale(1 / sx, 1 / sy);
                  ctx.rotate(-xAxisRotation);
                  ctx.translate(-centp.x, -centp.y);
                }
              }

              break;

            case "Z":
            case "z":
              if (ctx != null) {
                ctx.closePath();
              }

              pp.current = pp.start;
          }
        }

        return bb;
      };

      this.getMarkers = function () {
        var points = this.PathParser.getMarkerPoints();
        var angles = this.PathParser.getMarkerAngles();
        var markers = [];

        for (var i = 0; i < points.length; i++) {
          markers.push([points[i], angles[i]]);
        }

        return markers;
      };
    };

    svg.Element.path.prototype = new svg.Element.PathElementBase(); // pattern element

    svg.Element.pattern = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.createPattern = function (ctx, element) {
        var width = this.attribute("width").toPixels("x", true);
        var height = this.attribute("height").toPixels("y", true); // render me using a temporary svg element

        var tempSvg = new svg.Element.svg();
        tempSvg.attributes.viewBox = new svg.Property("viewBox", this.attribute("viewBox").value);
        tempSvg.attributes.width = new svg.Property("width", width + "px");
        tempSvg.attributes.height = new svg.Property("height", height + "px");
        tempSvg.attributes.transform = new svg.Property("transform", this.attribute("patternTransform").value);
        tempSvg.children = this.children;
        var c = document.createElement("canvas");
        c.width = width;
        c.height = height;
        var cctx = c.getContext("2d");

        if (this.attribute("x").hasValue() && this.attribute("y").hasValue()) {
          cctx.translate(this.attribute("x").toPixels("x", true), this.attribute("y").toPixels("y", true));
        } // render 3x3 grid so when we transform there's no white space on edges


        for (var x = -1; x <= 1; x++) {
          for (var y = -1; y <= 1; y++) {
            cctx.save();
            tempSvg.attributes.x = new svg.Property("x", x * c.width);
            tempSvg.attributes.y = new svg.Property("y", y * c.height);
            tempSvg.render(cctx);
            cctx.restore();
          }
        }

        var pattern = ctx.createPattern(c, "repeat");
        return pattern;
      };
    };

    svg.Element.pattern.prototype = new svg.Element.ElementBase(); // marker element

    svg.Element.marker = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.baseRender = this.render;

      this.render = function (ctx, point, angle) {
        ctx.translate(point.x, point.y);

        if (this.attribute("orient").valueOrDefault("auto") == "auto") {
          ctx.rotate(angle);
        }

        if (this.attribute("markerUnits").valueOrDefault("strokeWidth") == "strokeWidth") {
          ctx.scale(ctx.lineWidth, ctx.lineWidth);
        }

        ctx.save(); // render me using a temporary svg element

        var tempSvg = new svg.Element.svg();
        tempSvg.attributes.viewBox = new svg.Property("viewBox", this.attribute("viewBox").value);
        tempSvg.attributes.refX = new svg.Property("refX", this.attribute("refX").value);
        tempSvg.attributes.refY = new svg.Property("refY", this.attribute("refY").value);
        tempSvg.attributes.width = new svg.Property("width", this.attribute("markerWidth").value);
        tempSvg.attributes.height = new svg.Property("height", this.attribute("markerHeight").value);
        tempSvg.attributes.fill = new svg.Property("fill", this.attribute("fill").valueOrDefault("black"));
        tempSvg.attributes.stroke = new svg.Property("stroke", this.attribute("stroke").valueOrDefault("none"));
        tempSvg.children = this.children;
        tempSvg.render(ctx);
        ctx.restore();

        if (this.attribute("markerUnits").valueOrDefault("strokeWidth") == "strokeWidth") {
          ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
        }

        if (this.attribute("orient").valueOrDefault("auto") == "auto") {
          ctx.rotate(-angle);
        }

        ctx.translate(-point.x, -point.y);
      };
    };

    svg.Element.marker.prototype = new svg.Element.ElementBase(); // definitions element

    svg.Element.defs = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.render = function (ctx) {// NOOP
      };
    };

    svg.Element.defs.prototype = new svg.Element.ElementBase(); // base for gradients

    svg.Element.GradientBase = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.stops = [];

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];

        if (child.type == "stop") {
          this.stops.push(child);
        }
      }

      this.getGradient = function () {// OVERRIDE ME!
      };

      this.gradientUnits = function () {
        return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox");
      };

      this.attributesToInherit = ["gradientUnits"];

      this.inheritStopContainer = function (stopsContainer) {
        for (var i = 0; i < this.attributesToInherit.length; i++) {
          var attributeToInherit = this.attributesToInherit[i];

          if (!this.attribute(attributeToInherit).hasValue() && stopsContainer.attribute(attributeToInherit).hasValue()) {
            this.attribute(attributeToInherit, true).value = stopsContainer.attribute(attributeToInherit).value;
          }
        }
      };

      this.createGradient = function (ctx, element, parentOpacityProp) {
        var stopsContainer = this;

        if (this.getHrefAttribute().hasValue()) {
          stopsContainer = this.getHrefAttribute().getDefinition();
          this.inheritStopContainer(stopsContainer);
        }

        var addParentOpacity = function addParentOpacity(color) {
          if (parentOpacityProp.hasValue()) {
            var p = new svg.Property("color", color);
            return p.addOpacity(parentOpacityProp).value;
          }

          return color;
        };

        var g = this.getGradient(ctx, element);

        if (g == null) {
          return addParentOpacity(stopsContainer.stops[stopsContainer.stops.length - 1].color);
        }

        for (var i = 0; i < stopsContainer.stops.length; i++) {
          g.addColorStop(stopsContainer.stops[i].offset, addParentOpacity(stopsContainer.stops[i].color));
        }

        if (this.attribute("gradientTransform").hasValue()) {
          // render as transformed pattern on temporary canvas
          var rootView = svg.ViewPort.viewPorts[0];
          var rect = new svg.Element.rect();
          rect.attributes.x = new svg.Property("x", -svg.MAX_VIRTUAL_PIXELS / 3.0);
          rect.attributes.y = new svg.Property("y", -svg.MAX_VIRTUAL_PIXELS / 3.0);
          rect.attributes.width = new svg.Property("width", svg.MAX_VIRTUAL_PIXELS);
          rect.attributes.height = new svg.Property("height", svg.MAX_VIRTUAL_PIXELS);
          var group = new svg.Element.g();
          group.attributes.transform = new svg.Property("transform", this.attribute("gradientTransform").value);
          group.children = [rect];
          var tempSvg = new svg.Element.svg();
          tempSvg.attributes.x = new svg.Property("x", 0);
          tempSvg.attributes.y = new svg.Property("y", 0);
          tempSvg.attributes.width = new svg.Property("width", rootView.width);
          tempSvg.attributes.height = new svg.Property("height", rootView.height);
          tempSvg.children = [group];
          var c = document.createElement("canvas");
          c.width = rootView.width;
          c.height = rootView.height;
          var tempCtx = c.getContext("2d");
          tempCtx.fillStyle = g;
          tempSvg.render(tempCtx);
          return tempCtx.createPattern(c, "no-repeat");
        }

        return g;
      };
    };

    svg.Element.GradientBase.prototype = new svg.Element.ElementBase(); // linear gradient element

    svg.Element.linearGradient = function (node) {
      this.base = svg.Element.GradientBase;
      this.base(node);
      this.attributesToInherit.push("x1");
      this.attributesToInherit.push("y1");
      this.attributesToInherit.push("x2");
      this.attributesToInherit.push("y2");

      this.getGradient = function (ctx, element) {
        var bb = this.gradientUnits() == "objectBoundingBox" ? element.getBoundingBox() : null;

        if (!this.attribute("x1").hasValue() && !this.attribute("y1").hasValue() && !this.attribute("x2").hasValue() && !this.attribute("y2").hasValue()) {
          this.attribute("x1", true).value = 0;
          this.attribute("y1", true).value = 0;
          this.attribute("x2", true).value = 1;
          this.attribute("y2", true).value = 0;
        }

        var x1 = this.gradientUnits() == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x");
        var y1 = this.gradientUnits() == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y");
        var x2 = this.gradientUnits() == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x");
        var y2 = this.gradientUnits() == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");

        if (x1 == x2 && y1 == y2) {
          return null;
        }

        return ctx.createLinearGradient(x1, y1, x2, y2);
      };
    };

    svg.Element.linearGradient.prototype = new svg.Element.GradientBase(); // radial gradient element

    svg.Element.radialGradient = function (node) {
      this.base = svg.Element.GradientBase;
      this.base(node);
      this.attributesToInherit.push("cx");
      this.attributesToInherit.push("cy");
      this.attributesToInherit.push("r");
      this.attributesToInherit.push("fx");
      this.attributesToInherit.push("fy");

      this.getGradient = function (ctx, element) {
        var bb = element.getBoundingBox();

        if (!this.attribute("cx").hasValue()) {
          this.attribute("cx", true).value = "50%";
        }

        if (!this.attribute("cy").hasValue()) {
          this.attribute("cy", true).value = "50%";
        }

        if (!this.attribute("r").hasValue()) {
          this.attribute("r", true).value = "50%";
        }

        var cx = this.gradientUnits() == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x");
        var cy = this.gradientUnits() == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y");
        var fx = cx;
        var fy = cy;

        if (this.attribute("fx").hasValue()) {
          fx = this.gradientUnits() == "objectBoundingBox" ? bb.x() + bb.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x");
        }

        if (this.attribute("fy").hasValue()) {
          fy = this.gradientUnits() == "objectBoundingBox" ? bb.y() + bb.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y");
        }

        var r = this.gradientUnits() == "objectBoundingBox" ? (bb.width() + bb.height()) / 2.0 * this.attribute("r").numValue() : this.attribute("r").toPixels();
        return ctx.createRadialGradient(fx, fy, 0, cx, cy, r);
      };
    };

    svg.Element.radialGradient.prototype = new svg.Element.GradientBase(); // gradient stop element

    svg.Element.stop = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.offset = this.attribute("offset").numValue();

      if (this.offset < 0) {
        this.offset = 0;
      }

      if (this.offset > 1) {
        this.offset = 1;
      }

      var stopColor = this.style("stop-color", true);

      if (stopColor.value === "") {
        stopColor.value = "#000";
      }

      if (this.style("stop-opacity").hasValue()) {
        stopColor = stopColor.addOpacity(this.style("stop-opacity"));
      }

      this.color = stopColor.value;
    };

    svg.Element.stop.prototype = new svg.Element.ElementBase(); // animation base element

    svg.Element.AnimateBase = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      svg.Animations.push(this);
      this.duration = 0.0;
      this.begin = this.attribute("begin").toMilliseconds();
      this.maxDuration = this.begin + this.attribute("dur").toMilliseconds();

      this.getProperty = function () {
        var attributeType = this.attribute("attributeType").value;
        var attributeName = this.attribute("attributeName").value;

        if (attributeType == "CSS") {
          return this.parent.style(attributeName, true);
        }

        return this.parent.attribute(attributeName, true);
      };

      this.initialValue = null;
      this.initialUnits = "";
      this.removed = false;

      this.calcValue = function () {
        // OVERRIDE ME!
        return "";
      };

      this.update = function (delta) {
        // set initial value
        if (this.initialValue == null) {
          this.initialValue = this.getProperty().value;
          this.initialUnits = this.getProperty().getUnits();
        } // if we're past the end time


        if (this.duration > this.maxDuration) {
          // loop for indefinitely repeating animations
          if (this.attribute("repeatCount").value == "indefinite" || this.attribute("repeatDur").value == "indefinite") {
            this.duration = 0.0;
          } else if (this.attribute("fill").valueOrDefault("remove") == "freeze" && !this.frozen) {
            this.frozen = true;
            this.parent.animationFrozen = true;
            this.parent.animationFrozenValue = this.getProperty().value;
          } else if (this.attribute("fill").valueOrDefault("remove") == "remove" && !this.removed) {
            this.removed = true;
            this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue;
            return true;
          }

          return false;
        }

        this.duration = this.duration + delta; // if we're past the begin time

        var updated = false;

        if (this.begin < this.duration) {
          var newValue = this.calcValue(); // tween

          if (this.attribute("type").hasValue()) {
            // for transform, etc.
            var type = this.attribute("type").value;
            newValue = type + "(" + newValue + ")";
          }

          this.getProperty().value = newValue;
          updated = true;
        }

        return updated;
      };

      this.from = this.attribute("from");
      this.to = this.attribute("to");
      this.values = this.attribute("values");

      if (this.values.hasValue()) {
        this.values.value = this.values.value.split(";");
      } // fraction of duration we've covered


      this.progress = function () {
        var ret = {
          progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
        };

        if (this.values.hasValue()) {
          var p = ret.progress * (this.values.value.length - 1);
          var lb = Math.floor(p),
              ub = Math.ceil(p);
          ret.from = new svg.Property("from", parseFloat(this.values.value[lb]));
          ret.to = new svg.Property("to", parseFloat(this.values.value[ub]));
          ret.progress = (p - lb) / (ub - lb);
        } else {
          ret.from = this.from;
          ret.to = this.to;
        }

        return ret;
      };
    };

    svg.Element.AnimateBase.prototype = new svg.Element.ElementBase(); // animate element

    svg.Element.animate = function (node) {
      this.base = svg.Element.AnimateBase;
      this.base(node);

      this.calcValue = function () {
        var p = this.progress(); // tween value linearly

        var newValue = p.from.numValue() + (p.to.numValue() - p.from.numValue()) * p.progress;
        return newValue + this.initialUnits;
      };
    };

    svg.Element.animate.prototype = new svg.Element.AnimateBase(); // animate color element

    svg.Element.animateColor = function (node) {
      this.base = svg.Element.AnimateBase;
      this.base(node);

      this.calcValue = function () {
        var p = this.progress();
        var from = new RGBColor(p.from.value);
        var to = new RGBColor(p.to.value);

        if (from.ok && to.ok) {
          // tween color linearly
          var r = from.r + (to.r - from.r) * p.progress;
          var g = from.g + (to.g - from.g) * p.progress;
          var b = from.b + (to.b - from.b) * p.progress;
          return "rgb(" + parseInt(r, 10) + "," + parseInt(g, 10) + "," + parseInt(b, 10) + ")";
        }

        return this.attribute("from").value;
      };
    };

    svg.Element.animateColor.prototype = new svg.Element.AnimateBase(); // animate transform element

    svg.Element.animateTransform = function (node) {
      this.base = svg.Element.AnimateBase;
      this.base(node);

      this.calcValue = function () {
        var p = this.progress(); // tween value linearly

        var from = svg.ToNumberArray(p.from.value);
        var to = svg.ToNumberArray(p.to.value);
        var newValue = "";

        for (var i = 0; i < from.length; i++) {
          newValue += from[i] + (to[i] - from[i]) * p.progress + " ";
        }

        return newValue;
      };
    };

    svg.Element.animateTransform.prototype = new svg.Element.animate(); // font element

    svg.Element.font = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.horizAdvX = this.attribute("horiz-adv-x").numValue();
      this.isRTL = false;
      this.isArabic = false;
      this.fontFace = null;
      this.missingGlyph = null;
      this.glyphs = [];

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];

        if (child.type == "font-face") {
          this.fontFace = child;

          if (child.style("font-family").hasValue()) {
            svg.Definitions[child.style("font-family").value] = this;
          }
        } else if (child.type == "missing-glyph") {
          this.missingGlyph = child;
        } else if (child.type == "glyph") {
          if (child.arabicForm != "") {
            this.isRTL = true;
            this.isArabic = true;

            if (typeof this.glyphs[child.unicode] == "undefined") {
              this.glyphs[child.unicode] = [];
            }

            this.glyphs[child.unicode][child.arabicForm] = child;
          } else {
            this.glyphs[child.unicode] = child;
          }
        }
      }
    };

    svg.Element.font.prototype = new svg.Element.ElementBase(); // font-face element

    svg.Element.fontface = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.ascent = this.attribute("ascent").value;
      this.descent = this.attribute("descent").value;
      this.unitsPerEm = this.attribute("units-per-em").numValue();
    };

    svg.Element.fontface.prototype = new svg.Element.ElementBase(); // missing-glyph element

    svg.Element.missingglyph = function (node) {
      this.base = svg.Element.path;
      this.base(node);
      this.horizAdvX = 0;
    };

    svg.Element.missingglyph.prototype = new svg.Element.path(); // glyph element

    svg.Element.glyph = function (node) {
      this.base = svg.Element.path;
      this.base(node);
      this.horizAdvX = this.attribute("horiz-adv-x").numValue();
      this.unicode = this.attribute("unicode").value;
      this.arabicForm = this.attribute("arabic-form").value;
    };

    svg.Element.glyph.prototype = new svg.Element.path(); // text element

    svg.Element.text = function (node) {
      this.captureTextNodes = true;
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseSetContext = this.setContext;

      this.setContext = function (ctx) {
        this.baseSetContext(ctx);
        var textBaseline = this.style("dominant-baseline").toTextBaseline();

        if (textBaseline == null) {
          textBaseline = this.style("alignment-baseline").toTextBaseline();
        }

        if (textBaseline != null) {
          ctx.textBaseline = textBaseline;
        }
      };

      this.getBoundingBox = function () {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var fontSize = this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
        return new svg.BoundingBox(x, y - fontSize, x + Math.floor(fontSize * 2.0 / 3.0) * this.children[0].getText().length, y);
      };

      this.renderChildren = function (ctx) {
        this.x = this.attribute("x").toPixels("x");
        this.y = this.attribute("y").toPixels("y");

        if (this.attribute("dx").hasValue()) {
          this.x += this.attribute("dx").toPixels("x");
        }

        if (this.attribute("dy").hasValue()) {
          this.y += this.attribute("dy").toPixels("y");
        }

        this.x += this.getAnchorDelta(ctx, this, 0);

        for (var i = 0; i < this.children.length; i++) {
          this.renderChild(ctx, this, this, i);
        }
      };

      this.getAnchorDelta = function (ctx, parent, startI) {
        var textAnchor = this.style("text-anchor").valueOrDefault("start");

        if (textAnchor != "start") {
          var width = 0;

          for (var i = startI; i < parent.children.length; i++) {
            var child = parent.children[i];

            if (i > startI && child.attribute("x").hasValue()) {
              break;
            } // new group


            width += child.measureTextRecursive(ctx);
          }

          return -1 * (textAnchor == "end" ? width : width / 2.0);
        }

        return 0;
      };

      this.renderChild = function (ctx, textParent, parent, i) {
        var child = parent.children[i];

        if (child.attribute("x").hasValue()) {
          child.x = child.attribute("x").toPixels("x") + textParent.getAnchorDelta(ctx, parent, i);

          if (child.attribute("dx").hasValue()) {
            child.x += child.attribute("dx").toPixels("x");
          }
        } else {
          if (child.attribute("dx").hasValue()) {
            textParent.x += child.attribute("dx").toPixels("x");
          }

          child.x = textParent.x;
        }

        textParent.x = child.x + child.measureText(ctx);

        if (child.attribute("y").hasValue()) {
          child.y = child.attribute("y").toPixels("y");

          if (child.attribute("dy").hasValue()) {
            child.y += child.attribute("dy").toPixels("y");
          }
        } else {
          if (child.attribute("dy").hasValue()) {
            textParent.y += child.attribute("dy").toPixels("y");
          }

          child.y = textParent.y;
        }

        textParent.y = child.y;
        child.render(ctx);

        for (var i = 0; i < child.children.length; i++) {
          textParent.renderChild(ctx, textParent, child, i);
        }
      };
    };

    svg.Element.text.prototype = new svg.Element.RenderedElementBase(); // text base

    svg.Element.TextElementBase = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);

      this.getGlyph = function (font, text, i) {
        var c = text[i];
        var glyph = null;

        if (font.isArabic) {
          var arabicForm = "isolated";

          if ((i == 0 || text[i - 1] == " ") && i < text.length - 2 && text[i + 1] != " ") {
            arabicForm = "terminal";
          }

          if (i > 0 && text[i - 1] != " " && i < text.length - 2 && text[i + 1] != " ") {
            arabicForm = "medial";
          }

          if (i > 0 && text[i - 1] != " " && (i == text.length - 1 || text[i + 1] == " ")) {
            arabicForm = "initial";
          }

          if (typeof font.glyphs[c] != "undefined") {
            glyph = font.glyphs[c][arabicForm];

            if (glyph == null && font.glyphs[c].type == "glyph") {
              glyph = font.glyphs[c];
            }
          }
        } else {
          glyph = font.glyphs[c];
        }

        if (glyph == null) {
          glyph = font.missingGlyph;
        }

        return glyph;
      };

      this.renderChildren = function (ctx) {
        var customFont = this.parent.style("font-family").getDefinition();

        if (customFont != null) {
          var fontSize = this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
          var fontStyle = this.parent.style("font-style").valueOrDefault(svg.Font.Parse(svg.ctx.font).fontStyle);
          var text = this.getText();

          if (customFont.isRTL) {
            text = text.split("").reverse().join("");
          }

          var dx = svg.ToNumberArray(this.parent.attribute("dx").value);

          for (var i = 0; i < text.length; i++) {
            var glyph = this.getGlyph(customFont, text, i);
            var scale = fontSize / customFont.fontFace.unitsPerEm;
            ctx.translate(this.x, this.y);
            ctx.scale(scale, -scale);
            var lw = ctx.lineWidth;
            ctx.lineWidth = ctx.lineWidth * customFont.fontFace.unitsPerEm / fontSize;

            if (fontStyle == "italic") {
              ctx.transform(1, 0, 0.4, 1, 0, 0);
            }

            glyph.render(ctx);

            if (fontStyle == "italic") {
              ctx.transform(1, 0, -0.4, 1, 0, 0);
            }

            ctx.lineWidth = lw;
            ctx.scale(1 / scale, -1 / scale);
            ctx.translate(-this.x, -this.y);
            this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / customFont.fontFace.unitsPerEm;

            if (typeof dx[i] != "undefined" && !isNaN(dx[i])) {
              this.x += dx[i];
            }
          }

          return;
        }

        if (ctx.fillStyle != "") {
          ctx.fillText(svg.compressSpaces(this.getText()), this.x, this.y);
        }

        if (ctx.strokeStyle != "") {
          ctx.strokeText(svg.compressSpaces(this.getText()), this.x, this.y);
        }
      };

      this.getText = function () {// OVERRIDE ME
      };

      this.measureTextRecursive = function (ctx) {
        var width = this.measureText(ctx);

        for (var i = 0; i < this.children.length; i++) {
          width += this.children[i].measureTextRecursive(ctx);
        }

        return width;
      };

      this.measureText = function (ctx) {
        var customFont = this.parent.style("font-family").getDefinition();

        if (customFont != null) {
          var fontSize = this.parent.style("font-size").numValueOrDefault(svg.Font.Parse(svg.ctx.font).fontSize);
          var measure = 0;
          var text = this.getText();

          if (customFont.isRTL) {
            text = text.split("").reverse().join("");
          }

          var dx = svg.ToNumberArray(this.parent.attribute("dx").value);

          for (var i = 0; i < text.length; i++) {
            var glyph = this.getGlyph(customFont, text, i);
            measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;

            if (typeof dx[i] != "undefined" && !isNaN(dx[i])) {
              measure += dx[i];
            }
          }

          return measure;
        }

        var textToMeasure = svg.compressSpaces(this.getText());

        if (!ctx.measureText) {
          return textToMeasure.length * 10;
        }

        ctx.save();
        this.setContext(ctx);
        var width = ctx.measureText(textToMeasure).width;
        ctx.restore();
        return width;
      };
    };

    svg.Element.TextElementBase.prototype = new svg.Element.RenderedElementBase(); // tspan

    svg.Element.tspan = function (node) {
      this.captureTextNodes = true;
      this.base = svg.Element.TextElementBase;
      this.base(node);
      this.text = svg.compressSpaces(node.value || node.text || node.textContent || "");

      this.getText = function () {
        // if this node has children, then they own the text
        if (this.children.length > 0) {
          return "";
        }

        return this.text;
      };
    };

    svg.Element.tspan.prototype = new svg.Element.TextElementBase(); // tref

    svg.Element.tref = function (node) {
      this.base = svg.Element.TextElementBase;
      this.base(node);

      this.getText = function () {
        var element = this.getHrefAttribute().getDefinition();

        if (element != null) {
          return element.children[0].getText();
        }
      };
    };

    svg.Element.tref.prototype = new svg.Element.TextElementBase(); // a element

    svg.Element.a = function (node) {
      this.base = svg.Element.TextElementBase;
      this.base(node);
      this.hasText = node.childNodes.length > 0;

      for (var i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType != 3) {
          this.hasText = false;
        }
      } // this might contain text


      this.text = this.hasText ? node.childNodes[0].value : "";

      this.getText = function () {
        return this.text;
      };

      this.baseRenderChildren = this.renderChildren;

      this.renderChildren = function (ctx) {
        if (this.hasText) {
          // render as text element
          this.baseRenderChildren(ctx);
          var fontSize = new svg.Property("fontSize", svg.Font.Parse(svg.ctx.font).fontSize);
          svg.Mouse.checkBoundingBox(this, new svg.BoundingBox(this.x, this.y - fontSize.toPixels("y"), this.x + this.measureText(ctx), this.y));
        } else if (this.children.length > 0) {
          // render as temporary group
          var g = new svg.Element.g();
          g.children = this.children;
          g.parent = this;
          g.render(ctx);
        }
      };

      this.onclick = function () {
        window.open(this.getHrefAttribute().value);
      };

      this.onmousemove = function () {
        svg.ctx.canvas.style.cursor = "pointer";
      };
    };

    svg.Element.a.prototype = new svg.Element.TextElementBase(); // image element

    svg.Element.image = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      var href = this.getHrefAttribute().value;

      if (href == "") {
        return;
      }

      var isSvg = href.match(/\.svg$/);
      svg.Images.push(this);
      this.loaded = false;

      if (!isSvg) {
        this.img = document.createElement("img");

        if (svg.opts.useCORS == true) {
          this.img.crossOrigin = "Anonymous";
        }

        var self = this;

        this.img.onload = function () {
          self.loaded = true;
        };

        this.img.onerror = function () {
          svg.log('ERROR: image "' + href + '" not found');
          self.loaded = true;
        };

        this.img.src = href;
      } else {
        this.img = svg.ajax(href);
        this.loaded = true;
      }

      this.renderChildren = function (ctx) {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");

        if (width == 0 || height == 0) {
          return;
        }

        ctx.save();

        if (isSvg) {
          ctx.drawSvg(this.img, x, y, width, height);
        } else {
          ctx.translate(x, y);
          svg.AspectRatio(ctx, this.attribute("preserveAspectRatio").value, width, this.img.width, height, this.img.height, 0, 0);
          ctx.drawImage(this.img, 0, 0);
        }

        ctx.restore();
      };

      this.getBoundingBox = function () {
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");
        return new svg.BoundingBox(x, y, x + width, y + height);
      };
    };

    svg.Element.image.prototype = new svg.Element.RenderedElementBase(); // group element

    svg.Element.g = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);

      this.getBoundingBox = function () {
        var bb = new svg.BoundingBox();

        for (var i = 0; i < this.children.length; i++) {
          bb.addBoundingBox(this.children[i].getBoundingBox());
        }

        return bb;
      };
    };

    svg.Element.g.prototype = new svg.Element.RenderedElementBase(); // symbol element

    svg.Element.symbol = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);

      this.render = function (ctx) {// NO RENDER
      };
    };

    svg.Element.symbol.prototype = new svg.Element.RenderedElementBase(); // style element

    svg.Element.style = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node); // text, or spaces then CDATA

      var css = "";

      for (var i = 0; i < node.childNodes.length; i++) {
        css += node.childNodes[i].data;
      }

      css = css.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""); // remove comments

      css = svg.compressSpaces(css); // replace whitespace

      var cssDefs = css.split("}");

      for (var i = 0; i < cssDefs.length; i++) {
        if (svg.trim(cssDefs[i]) != "") {
          var cssDef = cssDefs[i].split("{");
          var cssClasses = cssDef[0].split(",");
          var cssProps = cssDef[1].split(";");

          for (var j = 0; j < cssClasses.length; j++) {
            var cssClass = svg.trim(cssClasses[j]);

            if (cssClass != "") {
              var props = svg.Styles[cssClass] || {};

              for (var k = 0; k < cssProps.length; k++) {
                var prop = cssProps[k].indexOf(":");
                var name = cssProps[k].substr(0, prop);
                var value = cssProps[k].substr(prop + 1, cssProps[k].length - prop);

                if (name != null && value != null) {
                  props[svg.trim(name)] = new svg.Property(svg.trim(name), svg.trim(value));
                }
              }

              svg.Styles[cssClass] = props;
              svg.StylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);

              if (cssClass == "@font-face") {
                var fontFamily = props["font-family"].value.replace(/"/g, "");
                var srcs = props.src.value.split(",");

                for (var s = 0; s < srcs.length; s++) {
                  if (srcs[s].indexOf('format("svg")') > 0) {
                    var urlStart = srcs[s].indexOf("url");
                    var urlEnd = srcs[s].indexOf(")", urlStart);
                    var url = srcs[s].substr(urlStart + 5, urlEnd - urlStart - 6);
                    var doc = svg.parseXml(svg.ajax(url));
                    var fonts = doc.getElementsByTagName("font");

                    for (var f = 0; f < fonts.length; f++) {
                      var font = svg.CreateElement(fonts[f]);
                      svg.Definitions[fontFamily] = font;
                    }
                  }
                }
              }
            }
          }
        }
      }
    };

    svg.Element.style.prototype = new svg.Element.ElementBase(); // use element

    svg.Element.use = function (node) {
      this.base = svg.Element.RenderedElementBase;
      this.base(node);
      this.baseSetContext = this.setContext;

      this.setContext = function (ctx) {
        this.baseSetContext(ctx);

        if (this.attribute("x").hasValue()) {
          ctx.translate(this.attribute("x").toPixels("x"), 0);
        }

        if (this.attribute("y").hasValue()) {
          ctx.translate(0, this.attribute("y").toPixels("y"));
        }
      };

      var element = this.getHrefAttribute().getDefinition();

      this.path = function (ctx) {
        if (element != null) {
          element.path(ctx);
        }
      };

      this.getBoundingBox = function () {
        if (element != null) {
          return element.getBoundingBox();
        }
      };

      this.renderChildren = function (ctx) {
        if (element != null) {
          var tempSvg = element;

          if (element.type == "symbol") {
            // render me using a temporary svg element in symbol cases (http://www.w3.org/TR/SVG/struct.html#UseElement)
            tempSvg = new svg.Element.svg();
            tempSvg.type = "svg";
            tempSvg.attributes.viewBox = new svg.Property("viewBox", element.attribute("viewBox").value);
            tempSvg.attributes.preserveAspectRatio = new svg.Property("preserveAspectRatio", element.attribute("preserveAspectRatio").value);
            tempSvg.attributes.overflow = new svg.Property("overflow", element.attribute("overflow").value);
            tempSvg.children = element.children;
          }

          if (tempSvg.type == "svg") {
            // if symbol or svg, inherit width/height from me
            if (this.attribute("width").hasValue()) {
              tempSvg.attributes.width = new svg.Property("width", this.attribute("width").value);
            }

            if (this.attribute("height").hasValue()) {
              tempSvg.attributes.height = new svg.Property("height", this.attribute("height").value);
            }
          }

          var oldParent = tempSvg.parent;
          tempSvg.parent = null;
          tempSvg.render(ctx);
          tempSvg.parent = oldParent;
        }
      };
    };

    svg.Element.use.prototype = new svg.Element.RenderedElementBase(); // mask element

    svg.Element.mask = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.apply = function (ctx, element) {
        // render as temp svg
        var x = this.attribute("x").toPixels("x");
        var y = this.attribute("y").toPixels("y");
        var width = this.attribute("width").toPixels("x");
        var height = this.attribute("height").toPixels("y");

        if (width == 0 && height == 0) {
          var bb = new svg.BoundingBox();

          for (var i = 0; i < this.children.length; i++) {
            bb.addBoundingBox(this.children[i].getBoundingBox());
          }

          var x = Math.floor(bb.x1);
          var y = Math.floor(bb.y1);
          var width = Math.floor(bb.width());
          var height = Math.floor(bb.height());
        } // temporarily remove mask to avoid recursion


        var mask = element.attribute("mask").value;
        element.attribute("mask").value = "";
        var cMask = document.createElement("canvas");
        cMask.width = x + width;
        cMask.height = y + height;
        var maskCtx = cMask.getContext("2d");
        this.renderChildren(maskCtx);
        var c = document.createElement("canvas");
        c.width = x + width;
        c.height = y + height;
        var tempCtx = c.getContext("2d");
        element.render(tempCtx);
        tempCtx.globalCompositeOperation = "destination-in";
        tempCtx.fillStyle = maskCtx.createPattern(cMask, "no-repeat");
        tempCtx.fillRect(0, 0, x + width, y + height);
        ctx.fillStyle = tempCtx.createPattern(c, "no-repeat");
        ctx.fillRect(0, 0, x + width, y + height); // reassign mask

        element.attribute("mask").value = mask;
      };

      this.render = function (ctx) {// NO RENDER
      };
    };

    svg.Element.mask.prototype = new svg.Element.ElementBase(); // clip element

    svg.Element.clipPath = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.apply = function (ctx) {
        var oldBeginPath = CanvasRenderingContext2D.prototype.beginPath;

        CanvasRenderingContext2D.prototype.beginPath = function () {};

        var oldClosePath = CanvasRenderingContext2D.prototype.closePath;

        CanvasRenderingContext2D.prototype.closePath = function () {};

        oldBeginPath.call(ctx);

        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];

          if (typeof child.path != "undefined") {
            var transform = null;

            if (child.style("transform", false, true).hasValue()) {
              transform = new svg.Transform(child.style("transform", false, true).value);
              transform.apply(ctx);
            }

            child.path(ctx);
            CanvasRenderingContext2D.prototype.closePath = oldClosePath;

            if (transform) {
              transform.unapply(ctx);
            }
          }
        }

        oldClosePath.call(ctx);
        ctx.clip();
        CanvasRenderingContext2D.prototype.beginPath = oldBeginPath;
        CanvasRenderingContext2D.prototype.closePath = oldClosePath;
      };

      this.render = function (ctx) {// NO RENDER
      };
    };

    svg.Element.clipPath.prototype = new svg.Element.ElementBase(); // filters

    svg.Element.filter = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.apply = function (ctx, element) {
        // render as temp svg
        var bb = element.getBoundingBox();
        var x = Math.floor(bb.x1);
        var y = Math.floor(bb.y1);
        var width = Math.floor(bb.width());
        var height = Math.floor(bb.height()); // temporarily remove filter to avoid recursion

        var filter = element.style("filter").value;
        element.style("filter").value = "";
        var px = 0,
            py = 0;

        for (var i = 0; i < this.children.length; i++) {
          var efd = this.children[i].extraFilterDistance || 0;
          px = Math.max(px, efd);
          py = Math.max(py, efd);
        }

        var c = document.createElement("canvas");
        c.width = width + 2 * px;
        c.height = height + 2 * py;
        var tempCtx = c.getContext("2d");
        tempCtx.translate(-x + px, -y + py);
        element.render(tempCtx); // apply filters

        for (var i = 0; i < this.children.length; i++) {
          if (typeof this.children[i].apply == "function") {
            this.children[i].apply(tempCtx, 0, 0, width + 2 * px, height + 2 * py);
          }
        } // render on me


        ctx.drawImage(c, 0, 0, width + 2 * px, height + 2 * py, x - px, y - py, width + 2 * px, height + 2 * py); // reassign filter

        element.style("filter", true).value = filter;
      };

      this.render = function (ctx) {// NO RENDER
      };
    };

    svg.Element.filter.prototype = new svg.Element.ElementBase();

    svg.Element.feMorphology = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.apply = function (ctx, x, y, width, height) {// TODO: implement
      };
    };

    svg.Element.feMorphology.prototype = new svg.Element.ElementBase();

    svg.Element.feComposite = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);

      this.apply = function (ctx, x, y, width, height) {// TODO: implement
      };
    };

    svg.Element.feComposite.prototype = new svg.Element.ElementBase();

    svg.Element.feColorMatrix = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      var matrix = svg.ToNumberArray(this.attribute("values").value);

      switch (this.attribute("type").valueOrDefault("matrix")) {
        // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
        case "saturate":
          var s = matrix[0];
          matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          break;

        case "hueRotate":
          var a = matrix[0] * Math.PI / 180.0;

          var c = function c(m1, m2, m3) {
            return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
          };

          matrix = [c(0.213, 0.787, -0.213), c(0.715, -0.715, -0.715), c(0.072, -0.072, 0.928), 0, 0, c(0.213, -0.213, 0.143), c(0.715, 0.285, 0.14), c(0.072, -0.072, -0.283), 0, 0, c(0.213, -0.213, -0.787), c(0.715, -0.715, 0.715), c(0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
          break;

        case "luminanceToAlpha":
          matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
          break;
      }

      function imGet(img, x, y, width, height, rgba) {
        return img[y * width * 4 + x * 4 + rgba];
      }

      function imSet(img, x, y, width, height, rgba, val) {
        img[y * width * 4 + x * 4 + rgba] = val;
      }

      function m(i, v) {
        var mi = matrix[i];
        return mi * (mi < 0 ? v - 255 : v);
      }

      this.apply = function (ctx, x, y, width, height) {
        // assuming x==0 && y==0 for now
        var srcData = ctx.getImageData(0, 0, width, height);

        for (var y = 0; y < height; y++) {
          for (var x = 0; x < width; x++) {
            var r = imGet(srcData.data, x, y, width, height, 0);
            var g = imGet(srcData.data, x, y, width, height, 1);
            var b = imGet(srcData.data, x, y, width, height, 2);
            var a = imGet(srcData.data, x, y, width, height, 3);
            imSet(srcData.data, x, y, width, height, 0, m(0, r) + m(1, g) + m(2, b) + m(3, a) + m(4, 1));
            imSet(srcData.data, x, y, width, height, 1, m(5, r) + m(6, g) + m(7, b) + m(8, a) + m(9, 1));
            imSet(srcData.data, x, y, width, height, 2, m(10, r) + m(11, g) + m(12, b) + m(13, a) + m(14, 1));
            imSet(srcData.data, x, y, width, height, 3, m(15, r) + m(16, g) + m(17, b) + m(18, a) + m(19, 1));
          }
        }

        ctx.clearRect(0, 0, width, height);
        ctx.putImageData(srcData, 0, 0);
      };
    };

    svg.Element.feColorMatrix.prototype = new svg.Element.ElementBase();

    svg.Element.feGaussianBlur = function (node) {
      this.base = svg.Element.ElementBase;
      this.base(node);
      this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue());
      this.extraFilterDistance = this.blurRadius;

      this.apply = function (ctx, x, y, width, height) {
        if (typeof stackBlur.canvasRGBA == "undefined") {
          svg.log("ERROR: StackBlur.js must be included for blur to work");
          return;
        } // StackBlur requires canvas be on document


        ctx.canvas.id = svg.UniqueId();
        ctx.canvas.style.display = "none";
        document.body.appendChild(ctx.canvas);
        stackBlur.canvasRGBA(ctx.canvas.id, x, y, width, height, this.blurRadius);
        document.body.removeChild(ctx.canvas);
      };
    };

    svg.Element.feGaussianBlur.prototype = new svg.Element.ElementBase(); // title element, do nothing

    svg.Element.title = function (node) {};

    svg.Element.title.prototype = new svg.Element.ElementBase(); // desc element, do nothing

    svg.Element.desc = function (node) {};

    svg.Element.desc.prototype = new svg.Element.ElementBase();

    svg.Element.MISSING = function (node) {
      svg.log("ERROR: Element '" + node.nodeName + "' not yet implemented.");
    };

    svg.Element.MISSING.prototype = new svg.Element.ElementBase(); // element factory

    svg.CreateElement = function (node) {
      var className = node.nodeName.replace(/^[^:]+:/, ""); // remove namespace

      className = className.replace(/\-/g, ""); // remove dashes

      var e = null;

      if (typeof svg.Element[className] != "undefined") {
        e = new svg.Element[className](node);
      } else {
        e = new svg.Element.MISSING(node);
      }

      e.type = node.nodeName;
      return e;
    }; // load from url


    svg.load = function (ctx, url) {
      svg.loadXml(ctx, svg.ajax(url));
    }; // load from xml


    svg.loadXml = function (ctx, xml) {
      svg.loadXmlDoc(ctx, svg.parseXml(xml));
    };

    svg.loadXmlDoc = function (ctx, dom) {
      svg.init(ctx);

      var mapXY = function mapXY(p) {
        var e = ctx.canvas;

        while (e) {
          p.x -= e.offsetLeft;
          p.y -= e.offsetTop;
          e = e.offsetParent;
        }

        if (window.scrollX) {
          p.x += window.scrollX;
        }

        if (window.scrollY) {
          p.y += window.scrollY;
        }

        return p;
      }; // bind mouse


      if (svg.opts.ignoreMouse != true) {
        ctx.canvas.onclick = function (e) {
          var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
          svg.Mouse.onclick(p.x, p.y);
        };

        ctx.canvas.onmousemove = function (e) {
          var p = mapXY(new svg.Point(e != null ? e.clientX : event.clientX, e != null ? e.clientY : event.clientY));
          svg.Mouse.onmousemove(p.x, p.y);
        };
      }

      var e = svg.CreateElement(dom.documentElement);
      e.root = true;
      e.addStylesFromStyleDefinition(); // render loop

      var isFirstRender = true;

      var draw = function draw() {
        svg.ViewPort.Clear();

        if (ctx.canvas.parentNode) {
          svg.ViewPort.SetCurrent(ctx.canvas.parentNode.clientWidth, ctx.canvas.parentNode.clientHeight);
        }

        if (svg.opts.ignoreDimensions != true) {
          // set canvas size
          if (e.style("width").hasValue()) {
            ctx.canvas.width = e.style("width").toPixels("x");
            ctx.canvas.style.width = ctx.canvas.width + "px";
          }

          if (e.style("height").hasValue()) {
            ctx.canvas.height = e.style("height").toPixels("y");
            ctx.canvas.style.height = ctx.canvas.height + "px";
          }
        }

        var cWidth = ctx.canvas.clientWidth || ctx.canvas.width;
        var cHeight = ctx.canvas.clientHeight || ctx.canvas.height;

        if (svg.opts.ignoreDimensions == true && e.style("width").hasValue() && e.style("height").hasValue()) {
          cWidth = e.style("width").toPixels("x");
          cHeight = e.style("height").toPixels("y");
        }

        svg.ViewPort.SetCurrent(cWidth, cHeight);

        if (svg.opts.offsetX != null) {
          e.attribute("x", true).value = svg.opts.offsetX;
        }

        if (svg.opts.offsetY != null) {
          e.attribute("y", true).value = svg.opts.offsetY;
        }

        if (svg.opts.scaleWidth != null || svg.opts.scaleHeight != null) {
          var xRatio = null,
              yRatio = null,
              viewBox = svg.ToNumberArray(e.attribute("viewBox").value);

          if (svg.opts.scaleWidth != null) {
            if (e.attribute("width").hasValue()) {
              xRatio = e.attribute("width").toPixels("x") / svg.opts.scaleWidth;
            } else if (!isNaN(viewBox[2])) {
              xRatio = viewBox[2] / svg.opts.scaleWidth;
            }
          }

          if (svg.opts.scaleHeight != null) {
            if (e.attribute("height").hasValue()) {
              yRatio = e.attribute("height").toPixels("y") / svg.opts.scaleHeight;
            } else if (!isNaN(viewBox[3])) {
              yRatio = viewBox[3] / svg.opts.scaleHeight;
            }
          }

          if (xRatio == null) {
            xRatio = yRatio;
          }

          if (yRatio == null) {
            yRatio = xRatio;
          }

          e.attribute("width", true).value = svg.opts.scaleWidth;
          e.attribute("height", true).value = svg.opts.scaleHeight;
          e.style("transform", true, true).value += " scale(" + 1.0 / xRatio + "," + 1.0 / yRatio + ")";
        } // clear and render


        if (svg.opts.ignoreClear != true) {
          ctx.clearRect(0, 0, cWidth, cHeight);
        }

        e.render(ctx);

        if (isFirstRender) {
          isFirstRender = false;

          if (typeof svg.opts.renderCallback == "function") {
            svg.opts.renderCallback(dom);
          }
        }
      };

      var waitingForImages = true;

      if (svg.ImagesLoaded()) {
        waitingForImages = false;
        draw();
      }

      svg.intervalID = setInterval(function () {
        var needUpdate = false;

        if (waitingForImages && svg.ImagesLoaded()) {
          waitingForImages = false;
          needUpdate = true;
        } // need update from mouse events?


        if (svg.opts.ignoreMouse != true) {
          needUpdate = needUpdate | svg.Mouse.hasEvents();
        } // need update from animations?


        if (svg.opts.ignoreAnimation != true) {
          for (var i = 0; i < svg.Animations.length; i++) {
            needUpdate = needUpdate | svg.Animations[i].update(1000 / svg.FRAMERATE);
          }
        } // need update from redraw?


        if (typeof svg.opts.forceRedraw == "function") {
          if (svg.opts.forceRedraw() == true) {
            needUpdate = true;
          }
        } // render if needed


        if (needUpdate) {
          draw();
          svg.Mouse.runEvents(); // run and clear our events
        }
      }, 1000 / svg.FRAMERATE);
    };

    svg.stop = function () {
      if (svg.intervalID) {
        clearInterval(svg.intervalID);
      }
    };

    svg.Mouse = new function () {
      this.events = [];

      this.hasEvents = function () {
        return this.events.length != 0;
      };

      this.onclick = function (x, y) {
        this.events.push({
          type: "onclick",
          x: x,
          y: y,
          run: function run(e) {
            if (e.onclick) {
              e.onclick();
            }
          }
        });
      };

      this.onmousemove = function (x, y) {
        this.events.push({
          type: "onmousemove",
          x: x,
          y: y,
          run: function run(e) {
            if (e.onmousemove) {
              e.onmousemove();
            }
          }
        });
      };

      this.eventElements = [];

      this.checkPath = function (element, ctx) {
        for (var i = 0; i < this.events.length; i++) {
          var e = this.events[i];

          if (ctx.isPointInPath && ctx.isPointInPath(e.x, e.y)) {
            this.eventElements[i] = element;
          }
        }
      };

      this.checkBoundingBox = function (element, bb) {
        for (var i = 0; i < this.events.length; i++) {
          var e = this.events[i];

          if (bb.isPointInBox(e.x, e.y)) {
            this.eventElements[i] = element;
          }
        }
      };

      this.runEvents = function () {
        svg.ctx.canvas.style.cursor = "";

        for (var i = 0; i < this.events.length; i++) {
          var e = this.events[i];
          var element = this.eventElements[i];

          while (element) {
            e.run(element);
            element = element.parent;
          }
        } // done running, clear


        this.events = [];
        this.eventElements = [];
      };
    }();
    return svg;
  }

  if (typeof CanvasRenderingContext2D != "undefined") {
    CanvasRenderingContext2D.prototype.drawSvg = function (s, dx, dy, dw, dh, opts) {
      var cOpts = {
        ignoreMouse: true,
        ignoreAnimation: true,
        ignoreDimensions: true,
        ignoreClear: true,
        offsetX: dx,
        offsetY: dy,
        scaleWidth: dw,
        scaleHeight: dh
      };

      for (var prop in opts) {
        if (opts.hasOwnProperty(prop)) {
          cOpts[prop] = opts[prop];
        }
      }

      canvg(this.canvas, s, cOpts);
    };
  }

  return canvg;
}

/* harmony default export */ var canvg = (factory(RGBColor, StackBlur));
// CONCATENATED MODULE: ./src/utils/draw.ts





/// <reference path="../../lib/main.d.ts" />




raphael_export(raphael_min_default.a);

var draw_Draw =
/*#__PURE__*/
function () {
  function Draw(el, _ref) {
    var color = _ref.color;

    classCallCheck_default()(this, Draw);

    this.current = null;
    this.drawTool = 'pen';
    this.history = [];
    this.eraserOffset = {
      x: 0,
      y: 0
    };
    this._isStart = false;
    this._historyPointer = 0;

    if (!el) {
      throw TypeError('el is required and must be HTMLElement');
    }

    var _el$getBoundingClient = el.getBoundingClientRect(),
        width = _el$getBoundingClient.width,
        height = _el$getBoundingClient.height;

    var drawBoard = raphael_min_default()(el, width, height);
    this.drawBoard = drawBoard;
    this.id = "draw-".concat(uuid());
    this.paths = drawBoard && drawBoard.set() || [];
    this._el = el;
    this.drawColor = color;
  } // 绘画


  createClass_default()(Draw, [{
    key: "startDraw",
    value: function startDraw(x, y, color) {
      var offset = this._getOffset();

      var top = offset.top,
          left = offset.left;
      var drawTool = this.drawTool;
      this._offset = offset;
      this._isStart = true;

      switch (drawTool) {
        case 'pen':
          this.createPath(x - left, y - top, color);
          break;

        case 'eraser':
          this.createEraser(x - left, y - top, color);
          break;

        default:
          break;
      }
    }
  }, {
    key: "drawing",
    value: function drawing(x, y) {
      if (!this._isStart || !this._offset) {
        return;
      }

      var _this$_offset = this._offset,
          top = _this$_offset.top,
          left = _this$_offset.left;
      var drawTool = this.drawTool;

      switch (drawTool) {
        case 'pen':
          this.drawPath(x - left, y - top);
          break;

        case 'eraser':
          this.drawEraser(x - left, y - top);
          break;

        default:
          break;
      }
    }
  }, {
    key: "endDraw",
    value: function endDraw(x, y) {
      if (!this._isStart || !this._offset) {
        return;
      }

      this._isStart = false;
      var _this$_offset2 = this._offset,
          top = _this$_offset2.top,
          left = _this$_offset2.left;

      if (this.drawTool === 'pen') {
        this.endPath(x - left, y - top);
      } else if (this.drawTool === 'eraser') {
        this.endEraser(x - left, y - top);
      }
    } // 绘制轨迹

  }, {
    key: "createPath",
    value: function createPath(x, y) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.drawColor;
      var drawBoard = this.drawBoard;

      if (!drawBoard || !drawBoard.path) {
        throw TypeError('drawBoard instance is not exit');
      }

      if (this.drawTool !== 'pen') {
        return;
      }

      var path = this.path("M".concat(x, ",").concat(y), color);
      this.current = path;
      this.paths.push(path);
      return path;
    }
  }, {
    key: "path",
    value: function path(_path2) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.drawColor;

      if (!_path2) {
        throw TypeError('path is required');
      }

      var drawBoard = this.drawBoard;

      if (!drawBoard || !drawBoard.path) {
        throw TypeError('drawBoard instance is not exit');
      }

      return this.drawBoard.path(_path2).attr({
        stroke: color,
        'stroke-width': 2,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      });
    }
  }, {
    key: "endPath",
    value: function endPath(x, y) {
      var path = this.drawPath(x, y);
      this.pushHistory('path', [path]);
      return path;
    }
  }, {
    key: "drawPath",
    value: function drawPath(x, y) {
      var path = this.current;

      if (!path || !path.attr) {
        throw TypeError('path is not exit');
      }

      path.attr({
        path: "".concat(path.attr('path').toString(), "L").concat(x, ",").concat(y)
      });
      return path;
    } // 绘制橡皮擦

  }, {
    key: "createEraser",
    value: function createEraser(x, y) {
      var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#ff0000';
      var drawBoard = this.drawBoard;

      if (!drawBoard || !drawBoard.rect) {
        throw TypeError('drawBoard instance is not exit');
      }

      if (this.drawTool !== 'eraser') {
        return;
      }

      var eraser = drawBoard.rect(x, y, 0, 0);
      eraser.attr({
        r: 0,
        rx: 0,
        ry: 0,
        stroke: color,
        fill: color,
        'fill-opacity': '0.15',
        'stroke-opacity': '0.5'
      });
      this.current = eraser;
      this.eraserOffset = {
        x: eraser.attr('x'),
        y: eraser.attr('y')
      };
      return eraser;
    }
  }, {
    key: "drawEraser",
    value: function drawEraser(x, y) {
      var eraser = this.current;

      if (!eraser || !eraser.attr) {
        return;
      }

      var _ref2 = this.eraserOffset || {},
          _ref2$x = _ref2.x,
          startX = _ref2$x === void 0 ? 0 : _ref2$x,
          _ref2$y = _ref2.y,
          startY = _ref2$y === void 0 ? 0 : _ref2$y;

      var wantSetOpts = {};

      if (x < startX) {
        wantSetOpts.x = x;
        wantSetOpts.width = startX - x;
      } else {
        wantSetOpts.width = x - startX;
      }

      if (y < startY) {
        wantSetOpts.y = y;
        wantSetOpts.height = startY - y;
      } else {
        wantSetOpts.height = y - startY;
      }

      eraser.attr(wantSetOpts);
      return eraser;
    }
  }, {
    key: "endEraser",
    value: function endEraser(x, y) {
      var eraser = this.current;

      if (!eraser) {
        throw TypeError('eraser is not exit');
      }

      var trashPaths = this._clearSelectPaths(eraser.getBBox(), this.paths);

      if (trashPaths && trashPaths.length) {
        this.pushHistory('eraser', trashPaths);
      }

      eraser.remove();
    }
  }, {
    key: "restore",
    value: function restore(str) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.drawColor;
      var canEdit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var path = this.path(str, color);

      if (!path) {
        return;
      }

      if (canEdit) {
        this.paths.push(path);
        this.pushHistory('path', [path]);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.drawBoard.clear();
      this.paths.clear();
      this.history = [];
      this.current = null;
    } // 获取 paths 的数据

  }, {
    key: "getPathData",
    value: function getPathData() {
      var _path = Array.from(this.paths);

      var result = [];

      if (!_path || !_path.length) {
        return result;
      }

      result = _path.map(function (p) {
        return {
          color: p.attr('stroke'),
          path: p.attr('path').toString()
        };
      });
      return result;
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.drawColor = color;
      return color;
    }
  }, {
    key: "setDrawTool",
    value: function setDrawTool(tool) {
      this.drawTool = tool;
      return tool;
    }
  }, {
    key: "pushHistory",
    value: function pushHistory(type, paths) {
      this._historyPointer = this.history.push({
        type: type,
        paths: paths
      });
      return this.history;
    }
  }, {
    key: "backHistory",
    value: function backHistory() {
      var pointer = --this._historyPointer;
      return this.history[pointer];
    }
  }, {
    key: "forwardHistory",
    value: function forwardHistory() {
      var pointer = ++this._historyPointer;
      return this.history[pointer];
    }
  }, {
    key: "toSVG",
    value: function toSVG() {
      return this.drawBoard.toSVG();
    }
  }, {
    key: "toImage",
    value: function toImage() {
      var canvas = document.createElement('canvas');
      canvg(canvas, this.toSVG());
      return canvas.toDataURL();
    } // 撤销上一步操作

  }, {
    key: "undo",
    value: function undo() {
      var history = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (!this.history.length) {
        return;
      }

      var work = this.backHistory();

      if (!work) {
        return;
      }

      if (work.type === 'path') {
        this._undoPath(work.paths);
      } else if (work.type === 'eraser') {
        this._undoEraser(work.paths);
      }
    }
  }, {
    key: "_undoPath",
    value: function _undoPath(paths) {
      var _this = this;

      paths.forEach(function (path) {
        path && path.hide && path.hide();

        _this.paths.exclude(path);
      });
    }
  }, {
    key: "_undoEraser",
    value: function _undoEraser(paths) {
      var _this2 = this;

      paths.forEach(function (path) {
        path && path.show && path.show();

        _this2.paths.push(path);
      });
    } // 清除橡皮擦选中的轨迹

  }, {
    key: "_clearSelectPaths",
    value: function _clearSelectPaths(eraserBox, paths) {
      var _this3 = this;

      if (!paths || !paths.length) {
        return;
      }

      var _paths = Array.from(paths);

      var trashs = [];

      _paths.forEach(function (path) {
        if (!path) {
          return;
        }

        var pathBox = path.getBBox();

        if (_this3._isAIncludeB(eraserBox, pathBox)) {
          path.hide();
          paths.exclude(path);
          trashs.unshift(path);
        }
      });

      return trashs;
    } // 判断 A 区域和 B 区域是否有交集

  }, {
    key: "_isAIncludeB",
    value: function _isAIncludeB(boxA, boxB) {
      if (!boxA || !boxB) {
        return false;
      }

      var _sort = [boxA.x, boxA.x + boxA.width, boxB.x, boxB.x + boxB.width].sort(function (a, b) {
        return b - a;
      }),
          _sort2 = slicedToArray_default()(_sort, 4),
          maxX = _sort2[0],
          minX = _sort2[3];

      var _sort3 = [boxA.y, boxA.y + boxA.height, boxB.y, boxB.y + boxB.height].sort(function (a, b) {
        return b - a;
      }),
          _sort4 = slicedToArray_default()(_sort3, 4),
          maxY = _sort4[0],
          minY = _sort4[3];

      var width = boxA.width + boxB.width;
      var height = boxA.height + boxB.height;
      return maxX - minX <= width && maxY - minY <= height;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var el = this._el;
      return el.getBoundingClientRect();
    }
  }]);

  return Draw;
}();


// CONCATENATED MODULE: ./src/utils/type.ts


var type_toString = function toString(val) {
  return Object.prototype.toString.call(val);
};

var isTypeFactory = function isTypeFactory(type) {
  return function (val) {
    return type_toString(val).replace(/.*\s(.*)]$/, '$1') === type;
  };
};

var $type = {
  isNumber: function isNumber(val) {
    return type_toString(val).replace(/.*\s(.*)]$/, '$1') === 'Number' && !isNaN(val);
  },
  isFunction: isTypeFactory('Function'),
  isObject: isTypeFactory('Object'),
  isArray: isTypeFactory('Array'),
  isString: isTypeFactory('String'),
  isRegExp: isTypeFactory('RegExp'),
  isNull: isTypeFactory('Null'),
  isUndefined: isTypeFactory('Undefined'),
  isBoolean: isTypeFactory('Boolean'),
  isSymbol: isTypeFactory('Symbol'),
  isDate: isTypeFactory('Date'),
  getType: function getType(val) {
    return type_toString(val).replace(/.*\s(.*)]$/, '$1');
  }
};
/* harmony default export */ var utils_type = ($type);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/jayden/usr/meisha/drawBoard-ts/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/ts-loader?{"transpileOnly":true,"appendTsSuffixTo":[{}],"happyPackMode":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/DrawBoard.vue








/// <reference path="../lib/main.d.ts" />
var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : typeof_default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = this && this.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : typeof_default()(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrawBoard_drawBoard;

var handleMouseUp = function handleMouseUp(event) {
  var x = event.pageX,
      y = event.pageY;
  DrawBoard_drawBoard.endDraw(x, y);
  window.removeEventListener('mouseup', handleMouseUp);
};

var DrawBoard_MsDrawBoard =
/*#__PURE__*/
function (_Vue) {
  function MsDrawBoard() {
    var _this;

    classCallCheck_default()(this, MsDrawBoard);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(MsDrawBoard).apply(this, arguments)); // data

    _this.isShowAllTool = false;
    _this.currentDrawTool = 'pen';
    _this.currentColor = '#21242C';
    _this.id = 'ms-draw-board';
    return _this;
  } // mounted


  createClass_default()(MsDrawBoard, [{
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      this.currentColor = this.defaultColor;
      setTimeout(function () {
        _this2.init();
      });
    }
  }, {
    key: "init",
    value: function init() {
      var el = document.getElementById(this.id);

      if (!el) {
        throw TypeError('el is required and must be HTMLElement');
      }

      var opts = {
        color: this.currentColor
      };
      DrawBoard_drawBoard = new draw_Draw(el, opts);
      this.restoreAllPath();
      this.$emit('init', DrawBoard_drawBoard);
    }
  }, {
    key: "restoreAllPath",
    value: function restoreAllPath() {
      DrawBoard_drawBoard.clear();
      var restorePath = this.restorePath;
      var restoreDisablePath = this.restoreDisablePath.map(function (path) {
        return Object.assign({}, path, {
          editDisabled: true
        });
      });

      if (utils_type.isArray(restorePath) && restorePath.length) {
        this.restore(restorePath);
      }

      if (utils_type.isArray(restoreDisablePath) && restoreDisablePath.length) {
        this.restore(restoreDisablePath);
      }
    }
  }, {
    key: "restore",
    value: function restore(list) {
      list.forEach(function (item) {
        DrawBoard_drawBoard.restore(item.path, item.color, !item.editDisabled);
      });
    }
  }, {
    key: "startDraw",
    value: function startDraw(event) {
      if (this.readonly) return;
      var x = event.pageX,
          y = event.pageY;
      setTimeout(function () {
        DrawBoard_drawBoard.startDraw(x, y);
      });
      window.addEventListener('mouseup', handleMouseUp);
    }
  }, {
    key: "painting",
    value: function painting(event) {
      var _this3 = this;

      if (this.readonly) return;
      var x = event.pageX,
          y = event.pageY;
      setTimeout(function () {
        DrawBoard_drawBoard.drawing(x, y);

        _this3.$emit('change');
      });
    }
  }, {
    key: "usePen",
    value: function usePen() {
      this.currentDrawTool = DrawBoard_drawBoard.setDrawTool('pen');
    }
  }, {
    key: "useEraser",
    value: function useEraser() {
      this.currentDrawTool = DrawBoard_drawBoard.setDrawTool('eraser');
    }
  }, {
    key: "selectColor",
    value: function selectColor(color) {
      this.usePen();
      this.currentColor = DrawBoard_drawBoard.setColor(color);
    }
  }, {
    key: "toggleShowAllTool",
    value: function toggleShowAllTool() {
      this.isShowAllTool = !this.isShowAllTool;
    }
  }, {
    key: "undo",
    value: function undo() {
      DrawBoard_drawBoard.undo();
      this.$emit('undo');
    }
  }, {
    key: "save",
    value: function save() {
      this.$emit('update:isBtnLoading', true);
      var image = DrawBoard_drawBoard.toImage();
      var paths = DrawBoard_drawBoard.getPathData();
      this.$emit('save', image, paths);
    }
  }, {
    key: "onRestorePathChanged",
    value: function onRestorePathChanged(val, oldVal) {
      if (!DrawBoard_drawBoard) return;

      if (val && val !== oldVal && utils_type.isArray(val)) {
        this.restore(val);
      }
    }
  }, {
    key: "onRestoreDisablePathChanged",
    value: function onRestoreDisablePathChanged(val, oldVal) {
      if (!DrawBoard_drawBoard) return;

      if (val && val !== oldVal && utils_type.isArray(val)) {
        var restoreDisablePath = val.map(function (path) {
          return Object.assign({}, path, {
            editDisabled: true
          });
        });
        this.restore(restoreDisablePath);
      }
    }
  }, {
    key: "onIfRunClearChanged",
    value: function onIfRunClearChanged(val) {
      if (val) {
        DrawBoard_drawBoard.clear();
        this.$emit('clear');
      }
    }
  }]);

  inherits_default()(MsDrawBoard, _Vue);

  return MsDrawBoard;
}(vue_property_decorator_umd["Vue"]);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: 'fff'
}), __metadata("design:type", String)], DrawBoard_MsDrawBoard.prototype, "background", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Array)], DrawBoard_MsDrawBoard.prototype, "restoreDisablePath", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Array)], DrawBoard_MsDrawBoard.prototype, "restorePath", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: '#21242C'
}), __metadata("design:type", String)], DrawBoard_MsDrawBoard.prototype, "defaultColor", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: false
}), __metadata("design:type", Boolean)], DrawBoard_MsDrawBoard.prototype, "readonly", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: false
}), __metadata("design:type", Boolean)], DrawBoard_MsDrawBoard.prototype, "ifRunClear", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: false
}), __metadata("design:type", Boolean)], DrawBoard_MsDrawBoard.prototype, "isBtnLoading", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: false
}), __metadata("design:type", Boolean)], DrawBoard_MsDrawBoard.prototype, "isBtnDisabled", void 0);

__decorate([Object(vue_property_decorator_umd["Prop"])({
  default: function _default() {
    return ['#01A995', '#E84D39', '#74CF70', '#FFBE26', '#CA337C', '#7853AB', '#11ACCD', '#20A0FF', '#21242C'];
  }
}), __metadata("design:type", Array)], DrawBoard_MsDrawBoard.prototype, "penColors", void 0);

__decorate([Object(vue_property_decorator_umd["Watch"])('restorePath'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], DrawBoard_MsDrawBoard.prototype, "onRestorePathChanged", null);

__decorate([Object(vue_property_decorator_umd["Watch"])('restoreDisablePath'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], DrawBoard_MsDrawBoard.prototype, "onRestoreDisablePathChanged", null);

__decorate([Object(vue_property_decorator_umd["Watch"])('ifRunClear'), __metadata("design:type", Function), __metadata("design:paramtypes", [Boolean]), __metadata("design:returntype", void 0)], DrawBoard_MsDrawBoard.prototype, "onIfRunClearChanged", null);

DrawBoard_MsDrawBoard = __decorate([vue_property_decorator_umd["Component"]], DrawBoard_MsDrawBoard);
/* harmony default export */ var DrawBoard = (DrawBoard_MsDrawBoard);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2332bbf2","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/DrawBoard.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"drawContainer",staticClass:"ms-draw",style:({'background': _vm.background})},[(!_vm.readonly)?_c('div',{staticClass:"ms-draw__control__container"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowAllTool),expression:"isShowAllTool"}],staticClass:"ms-draw__control__content"},[_c('div',{staticClass:"ms-draw__control__button is-back",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.undo($event)}}},[_c('img',{attrs:{"src":__webpack_require__("PHYF")}})]),_c('div',{staticClass:"ms-draw__control__button is-eraser",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.useEraser($event)}}},[_c('svg',{attrs:{"width":"20px","height":"19px","viewBox":"0 0 20 19","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("brush tool_icon_eraser_pre")]),_c('desc',[_vm._v("Created with Sketch.")]),_c('defs',[_c('polygon',{attrs:{"id":"path-1","points":"0.00206896552 0.0153977007 0.00206896552 18.9657658 19.9747437 18.9657658 19.9747437 0.0153977007 0.00206896552 0.0153977007"}})]),_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(-1264.000000, -532.000000)"}},[_c('g',{attrs:{"id":"brush-tool_icon_eraser_pre","transform":"translate(1264.000000, 532.000000)"}},[_c('mask',{attrs:{"id":"mask-2","fill":"white"}},[_c('use',{attrs:{"xlink:href":"#path-1"}})]),_c('g'),_c('path',{attrs:{"d":"M19.5666897,6.89378198 L12.8122414,0.39341982 C12.2800345,-0.121565766 11.428069,-0.10818018 10.9120345,0.420156757 L0.378517241,11.1419081 C-0.137517241,11.670245 -0.124206897,12.5162072 0.408,13.0285225 L6.56572414,18.9550505 L9.58417241,18.9657658 L19.5963103,8.78025946 C20.1123448,8.25205946 20.0988621,7.4060973 19.5666897,6.89378198 Z M11.1861379,16.9003459 C10.8797241,17.2232775 10.3851034,17.252582 10.0761034,16.9643982 L2.9587931,10.2826973 C2.65234483,9.99718378 2.64965517,9.50078739 2.95610345,9.18066306 C3.12,9.0071982 3.33768966,8.91907928 3.55548276,8.91907928 C3.74082759,8.91907928 3.92093103,8.98313153 4.06344828,9.11661081 L11.1807586,15.7982775 C11.4872069,16.0864613 11.4898966,16.5801874 11.1861379,16.9003459 Z","fill":_vm.currentDrawTool === 'pen' ? '#8492A6' : '#475669',"mask":"url(#mask-2)"}})])])])])]),_vm._l((_vm.penColors),function(color,index){return _c('div',{key:("color-" + index),staticClass:"ms-draw__control__button is-color",style:({backgroundColor: color}),on:{"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.selectColor(color)}}},[_c('svg',{attrs:{"focusable":"false","width":"10","height":"10","viewBox":"0 0 10 10"}},[(_vm.currentDrawTool === 'pen' && _vm.currentColor === color)?_c('path',{attrs:{"fill":"#fff","d":"M10,3.8C10,4,9.9,4.2,9.8,4.3L5.1,8.9L4.3,9.8C4.2,9.9,4,10,3.8,10S3.5,9.9,3.4,9.8L2.5,8.9L0.2,6.6C0.1,6.5,0,6.3,0,6.2s0.1-0.3,0.2-0.4l0.9-0.9c0.1-0.1,0.3-0.2,0.4-0.2s0.3,0.1,0.4,0.2l1.9,1.9l4.2-4.2c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0,0.3,0.1,0.4,0.2l0.9,0.9C9.9,3.5,10,3.7,10,3.8z"}}):_vm._e()])])})],2),_c('div',{staticClass:"ms-draw__control__button is-toggle",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.toggleShowAllTool($event)}}},[(_vm.currentDrawTool === 'pen')?_c('svg',{attrs:{"width":"34px","height":"34px","viewBox":"0 0 34 34","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("pencil_colour_blues")]),_c('desc',[_vm._v("Created with Sketch.")]),_c('defs'),_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Artboard-2","transform":"translate(-211.000000, -441.000000)"}},[_c('g',{attrs:{"id":"pencil_colour_blues","transform":"translate(212.000000, 442.000000)"}},[_c('circle',{attrs:{"id":"Oval-2-Copy","stroke":"#475669","stroke-width":"1.5","cx":"16","cy":"16","r":"16"}}),_c('polygon',{attrs:{"id":"Clip-2","transform":"translate(16.260772, 12.261435) rotate(-10.000000) translate(-16.260772, -12.261435) ","points":"8.26682949 4.26667526 8.26682949 20.2561946 24.2547153 20.2561946 24.2547153 4.26667526"}}),_c('path',{attrs:{"d":"M20.9975584,9.77426917 C23.0907584,7.55869774 23.4608341,7.83565277 20.7941674,5.1689861 C18.6641947,3.03901337 18.9638882,3.46828686 16.6812882,5.45920114 L20.9975584,9.77426917 Z","id":"Fill-1","fill":"#475669","transform":"translate(19.681324, 6.765668) rotate(-10.000000) translate(-19.681324, -6.765668) "}}),_c('path',{attrs:{"d":"M17.2449942,7.06830603 C17.0313656,7.27064889 16.8093942,7.48827746 16.575137,7.72367746 C16.5308227,7.76876318 10.1033275,14.3885632 10.1033275,14.3885632 C10.1033275,14.3885632 9.42845448,16.4833727 8.07870844,20.6729917 C12.0951211,19.3278171 14.1033275,18.6552298 14.1033275,18.6552298 C14.1033275,18.6552298 20.8678799,12.1571632 20.9199942,12.1044775 C21.1532513,11.869106 21.370337,11.6458775 21.5732227,11.4328203 L17.2449942,7.06830603 Z","id":"Fill-3","fill":"#475669","transform":"translate(14.825966, 13.870649) rotate(-10.000000) translate(-14.825966, -13.870649) "}}),_c('path',{attrs:{"d":"M10.2257584,20.3588009 C10.7934462,26.0157306 15.736196,22.3231267 18.4686311,21.8712516 C21.8425774,21.3132869 19.0254264,25.5277216 26.2257584,24.0381012","id":"Path-13","stroke":_vm.currentColor,"transform":"translate(18.225758, 22.358801) rotate(-10.000000) translate(-18.225758, -22.358801) "}}),_c('path',{attrs:{"d":"M10,15 C10,15 10.6666667,15.1666667 12,15.5 L12.5,17 L14.5,17 L15,18.5 L15,19 L9,22 C9.66666667,17.3333333 10,15 10,15 Z","id":"Path-2","fill":_vm.currentColor}}),_c('polyline',{attrs:{"id":"Path-11","stroke":"#FFFFFF","transform":"translate(12.500000, 17.458378) rotate(-10.000000) translate(-12.500000, -17.458378) ","points":"9.90010071 14.9268279 11.9442587 15.2872681 12.4927724 17.4993677 14.4623879 17.846664 15.0998993 19.9899277"}})])])])]):_c('svg',{attrs:{"width":"34px","height":"34px","viewBox":"0 0 34 34","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("Group")]),_c('desc',[_vm._v("Created with Sketch.")]),_c('defs'),_c('g',{attrs:{"id":"学生端","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"Artboard-2","transform":"translate(-539.000000, -439.000000)"}},[_c('g',{attrs:{"id":"Group","transform":"translate(540.000000, 440.000000)"}},[_c('circle',{attrs:{"id":"Oval-2-Copy-9","stroke":"#475669","stroke-width":"1.5","cx":"16","cy":"16","r":"16"}}),_c('polygon',{attrs:{"id":"Clip-2","points":"7.00206897 6.0153977 7.00206897 24.9657658 26.9747437 24.9657658 26.9747437 6.0153977 7.00206897 6.0153977"}}),_c('path',{attrs:{"d":"M25.5666853,13.8783843 L18.812237,7.37802212 C18.2800301,6.86303653 17.4280646,6.87642212 16.9120301,7.40475906 L6.37851291,18.1265104 C5.86247842,18.6548473 5.87578877,19.5008095 6.40799566,20.0131248 L12.5657198,25.9396527 L15.5841681,25.9503681 L25.596306,15.7648618 C26.1123405,15.2366618 26.0988577,14.3906996 25.5666853,13.8783843 Z M17.1861336,23.8849482 C16.8797198,24.2078798 16.3850991,24.2371843 16.0760991,23.9490005 L8.95878877,17.2672996 C8.65234049,16.9817861 8.64965084,16.4853897 8.95609911,16.1652654 C9.11999566,15.9918005 9.33768532,15.9036816 9.55547842,15.9036816 C9.74082325,15.9036816 9.9209267,15.9677338 10.0634439,16.1012131 L17.1807543,22.7828798 C17.4872026,23.0710636 17.4898922,23.5647897 17.1861336,23.8849482 Z","fill":"#475669"}})])])])])])]):_vm._e(),_c('div',{ref:"drawBoardContainer",staticClass:"ms-draw__core",attrs:{"id":_vm.id},on:{"mousedown":_vm.startDraw,"mousemove":_vm.painting}}),(!_vm.readonly)?_c('button',{staticClass:"ms-draw__save-button",attrs:{"type":"primary","disabled":_vm.isBtnDisabled,"loading":_vm.isBtnLoading},on:{"click":_vm.save}},[_vm._v("Save")]):_vm._e()])}
var staticRenderFns = []

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/DrawBoard.vue
function injectStyle (context) {
  __webpack_require__("t0fz")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2332bbf2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = normalizeComponent(
  DrawBoard,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_DrawBoard = (Component.exports);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_DrawBoard);


/***/ }),

/***/ "wC1N":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("ydD5");
var TAG = __webpack_require__("kkCw")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "xGkn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("4mcu");
var step = __webpack_require__("EGZi");
var Iterators = __webpack_require__("/bQp");
var toIObject = __webpack_require__("TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("vIB/")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "xZa+":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("bUqO") && !__webpack_require__("zgIt")(function () {
  return Object.defineProperty(__webpack_require__("jhxf")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "xah7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BwfY");

/***/ }),

/***/ "xgqT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fxRn");

/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "ydD5":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "zCYm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("FryR");
var toAbsoluteIndex = __webpack_require__("zo/l");
var toLength = __webpack_require__("BbyF");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "zgIt":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "zo/l":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("oeih");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ })

/******/ })["default"];
//# sourceMappingURL=msDrawBoard.common.js.map