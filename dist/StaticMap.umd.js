(function webpackUniversalModuleDefinition(root, factory) {
	if (typeof exports === 'object' && typeof module === 'object') { module.exports = factory(); } else if (typeof define === 'function' && define.amd) { define([], factory); } else if (typeof exports === 'object') { exports.StaticMap = factory(); } else { root.StaticMap = factory(); }
}((typeof self !== 'undefined' ? self : this), () =>
/** *** */ (function (modules) { // webpackBootstrap
		/** *** */ 	// The module cache
		/** *** */ 	const installedModules = {};
		/** *** */
		/** *** */ 	// The require function
		/** *** */ 	function __webpack_require__(moduleId) {
			/** *** */
			/** *** */ 		// Check if module is in cache
			/** *** */ 		if (installedModules[moduleId]) {
				/** *** */ 			return installedModules[moduleId].exports;
				/** *** */ 		}
			/** *** */ 		// Create a new module (and put it into the cache)
			/** *** */ 		const module = installedModules[moduleId] = {
				/** *** */ 			i: moduleId,
				/** *** */ 			l: false,
				/** *** */ 			exports: {},
				/** *** */ 		};
			/** *** */
			/** *** */ 		// Execute the module function
			/** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/** *** */
			/** *** */ 		// Flag the module as loaded
			/** *** */ 		module.l = true;
			/** *** */
			/** *** */ 		// Return the exports of the module
			/** *** */ 		return module.exports;
			/** *** */ 	}
		/** *** */
		/** *** */
		/** *** */ 	// expose the modules object (__webpack_modules__)
		/** *** */ 	__webpack_require__.m = modules;
		/** *** */
		/** *** */ 	// expose the module cache
		/** *** */ 	__webpack_require__.c = installedModules;
		/** *** */
		/** *** */ 	// define getter function for harmony exports
		/** *** */ 	__webpack_require__.d = function (exports, name, getter) {
			/** *** */ 		if (!__webpack_require__.o(exports, name)) {
				/** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
				/** *** */ 		}
			/** *** */ 	};
		/** *** */
		/** *** */ 	// define __esModule on exports
		/** *** */ 	__webpack_require__.r = function (exports) {
			/** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/** *** */ 		}
			/** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
			/** *** */ 	};
		/** *** */
		/** *** */ 	// create a fake namespace object
		/** *** */ 	// mode & 1: value is a module id, require it
		/** *** */ 	// mode & 2: merge all properties of value into the ns
		/** *** */ 	// mode & 4: return value when already ns object
		/** *** */ 	// mode & 8|1: behave like require
		/** *** */ 	__webpack_require__.t = function (value, mode) {
			/** *** */ 		if (mode & 1) value = __webpack_require__(value);
			/** *** */ 		if (mode & 8) return value;
			/** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
			/** *** */ 		const ns = Object.create(null);
			/** *** */ 		__webpack_require__.r(ns);
			/** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
			/** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
			/** *** */ 		return ns;
			/** *** */ 	};
		/** *** */
		/** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
		/** *** */ 	__webpack_require__.n = function (module) {
			/** *** */ 		const getter = module && module.__esModule ?
			/** *** */ 			function getDefault() { return module.default; } :
			/** *** */ 			function getModuleExports() { return module; };
			/** *** */ 		__webpack_require__.d(getter, 'a', getter);
			/** *** */ 		return getter;
			/** *** */ 	};
		/** *** */
		/** *** */ 	// Object.prototype.hasOwnProperty.call
		/** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
		/** *** */
		/** *** */ 	// __webpack_public_path__
		/** *** */ 	__webpack_require__.p = '';
		/** *** */
		/** *** */
		/** *** */ 	// Load entry module and return exports
		/** *** */ 	return __webpack_require__(__webpack_require__.s = 'fb15');
		/** *** */ }({

		/** */ '01f9':
		/** */ (function (module, exports, __webpack_require__) {
			const LIBRARY = __webpack_require__('2d00');
			const $export = __webpack_require__('5ca1');
			const redefine = __webpack_require__('2aba');
			const hide = __webpack_require__('32e9');
			const Iterators = __webpack_require__('84f2');
			const $iterCreate = __webpack_require__('41a0');
			const setToStringTag = __webpack_require__('7f20');
			const getPrototypeOf = __webpack_require__('38fd');
			const ITERATOR = __webpack_require__('2b4c')('iterator');
			const BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
			const FF_ITERATOR = '@@iterator';
			const KEYS = 'keys';
			const VALUES = 'values';

			const returnThis = function () { return this; };

			module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
				$iterCreate(Constructor, NAME, next);
				const getMethod = function (kind) {
					if (!BUGGY && kind in proto) return proto[kind];
					switch (kind) {
					case KEYS: return function keys() { return new Constructor(this, kind); };
					case VALUES: return function values() { return new Constructor(this, kind); };
					} return function entries() { return new Constructor(this, kind); };
				};
				const TAG = `${NAME} Iterator`;
				const DEF_VALUES = DEFAULT == VALUES;
				let VALUES_BUG = false;
				var proto = Base.prototype;
				const $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
				let $default = $native || getMethod(DEFAULT);
				const $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
				const $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
				let methods,
					key,
					IteratorPrototype;
				// Fix native
				if ($anyNative) {
					IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
					if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
						// Set @@toStringTag to native iterators
						setToStringTag(IteratorPrototype, TAG, true);
						// fix for some old engines
						if (!LIBRARY && typeof IteratorPrototype[ITERATOR] !== 'function') hide(IteratorPrototype, ITERATOR, returnThis);
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
						entries: $entries,
					};
					if (FORCED) {
						for (key in methods) {
							if (!(key in proto)) redefine(proto, key, methods[key]);
						}
					} else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
				}
				return methods;
			};
			/** */ }),

		/** */ '0bfb':
		/** */ (function (module, exports, __webpack_require__) {
			// 21.2.5.3 get RegExp.prototype.flags
			const anObject = __webpack_require__('cb7c');
			module.exports = function () {
				const that = anObject(this);
				let result = '';
				if (that.global) result += 'g';
				if (that.ignoreCase) result += 'i';
				if (that.multiline) result += 'm';
				if (that.unicode) result += 'u';
				if (that.sticky) result += 'y';
				return result;
			};
			/** */ }),

		/** */ '0d58':
		/** */ (function (module, exports, __webpack_require__) {
			// 19.1.2.14 / 15.2.3.14 Object.keys(O)
			const $keys = __webpack_require__('ce10');
			const enumBugKeys = __webpack_require__('e11e');

			module.exports = Object.keys || function keys(O) {
				return $keys(O, enumBugKeys);
			};
			/** */ }),

		/** */ '11e9':
		/** */ (function (module, exports, __webpack_require__) {
			const pIE = __webpack_require__('52a7');
			const createDesc = __webpack_require__('4630');
			const toIObject = __webpack_require__('6821');
			const toPrimitive = __webpack_require__('6a99');
			const has = __webpack_require__('69a8');
			const IE8_DOM_DEFINE = __webpack_require__('c69a');
			const gOPD = Object.getOwnPropertyDescriptor;

			exports.f = __webpack_require__('9e1e') ? gOPD : function getOwnPropertyDescriptor(O, P) {
				O = toIObject(O);
				P = toPrimitive(P, true);
				if (IE8_DOM_DEFINE) {
					try {
						return gOPD(O, P);
					} catch (e) { /* empty */ }
				}
				if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
			};
			/** */ }),

		/** */ 1495(module, exports, __webpack_require__) {
			const dP = __webpack_require__('86cc');
			const anObject = __webpack_require__('cb7c');
			const getKeys = __webpack_require__('0d58');

			module.exports = __webpack_require__('9e1e') ? Object.defineProperties : function defineProperties(O, Properties) {
				anObject(O);
				const keys = getKeys(Properties);
				const length = keys.length;
				let i = 0;
				let P;
				while (length > i) dP.f(O, P = keys[i++], Properties[P]);
				return O;
			};
			/** */ },

		/** */ '1eb2':
		/** */ (function (module, exports, __webpack_require__) {
			// This file is imported into lib/wc client bundles.

			if (typeof window !== 'undefined') {
				let i;
				if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
				}
			}
			/** */ }),

		/** */ '214f':
		/** */ (function (module, exports, __webpack_require__) {
			const hide = __webpack_require__('32e9');
			const redefine = __webpack_require__('2aba');
			const fails = __webpack_require__('79e5');
			const defined = __webpack_require__('be13');
			const wks = __webpack_require__('2b4c');

			module.exports = function (KEY, length, exec) {
				const SYMBOL = wks(KEY);
				const fns = exec(defined, SYMBOL, ''[KEY]);
				const strfn = fns[0];
				const rxfn = fns[1];
				if (fails(() => {
					const O = {};
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
						: function (string) { return rxfn.call(string, this); });
				}
			};
			/** */ }),

		/** */ '230e':
		/** */ (function (module, exports, __webpack_require__) {
			const isObject = __webpack_require__('d3f4');
			const document = __webpack_require__('7726').document;
			// typeof document.createElement is 'object' in old IE
			const is = isObject(document) && isObject(document.createElement);
			module.exports = function (it) {
				return is ? document.createElement(it) : {};
			};
			/** */ }),

		/** */ '2aba':
		/** */ (function (module, exports, __webpack_require__) {
			const global = __webpack_require__('7726');
			const hide = __webpack_require__('32e9');
			const has = __webpack_require__('69a8');
			const SRC = __webpack_require__('ca5a')('src');
			const TO_STRING = 'toString';
			const $toString = Function[TO_STRING];
			const TPL = (`${$toString}`).split(TO_STRING);

			__webpack_require__('8378').inspectSource = function (it) {
				return $toString.call(it);
			};

			(module.exports = function (O, key, val, safe) {
				const isFunction = typeof val === 'function';
				if (isFunction) has(val, 'name') || hide(val, 'name', key);
				if (O[key] === val) return;
				if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? `${O[key]}` : TPL.join(String(key)));
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
				return typeof this === 'function' && this[SRC] || $toString.call(this);
			});
			/** */ }),

		/** */ '2aeb':
		/** */ (function (module, exports, __webpack_require__) {
			// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
			const anObject = __webpack_require__('cb7c');
			const dPs = __webpack_require__('1495');
			const enumBugKeys = __webpack_require__('e11e');
			const IE_PROTO = __webpack_require__('613b')('IE_PROTO');
			const Empty = function () { /* empty */ };
			const PROTOTYPE = 'prototype';

			// Create object with fake `null` prototype: use iframe Object with cleared prototype
			var createDict = function () {
				// Thrash, waste and sodomy: IE GC bug
				const iframe = __webpack_require__('230e')('iframe');
				let i = enumBugKeys.length;
				const lt = '<';
				const gt = '>';
				let iframeDocument;
				iframe.style.display = 'none';
				__webpack_require__('fab2').appendChild(iframe);
				iframe.src = 'javascript:'; // eslint-disable-line no-script-url
				// createDict = iframe.contentWindow.Object;
				// html.removeChild(iframe);
				iframeDocument = iframe.contentWindow.document;
				iframeDocument.open();
				iframeDocument.write(`${lt}script${gt}document.F=Object${lt}/script${gt}`);
				iframeDocument.close();
				createDict = iframeDocument.F;
				while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
				return createDict();
			};

			module.exports = Object.create || function create(O, Properties) {
				let result;
				if (O !== null) {
					Empty[PROTOTYPE] = anObject(O);
					result = new Empty();
					Empty[PROTOTYPE] = null;
					// add "__proto__" for Object.getPrototypeOf polyfill
					result[IE_PROTO] = O;
				} else result = createDict();
				return Properties === undefined ? result : dPs(result, Properties);
			};
			/** */ }),

		/** */ '2b4c':
		/** */ (function (module, exports, __webpack_require__) {
			const store = __webpack_require__('5537')('wks');
			const uid = __webpack_require__('ca5a');
			const Symbol = __webpack_require__('7726').Symbol;
			const USE_SYMBOL = typeof Symbol === 'function';

			const $exports = module.exports = function (name) {
				return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)(`Symbol.${name}`));
			};

			$exports.store = store;
			/** */ }),

		/** */ '2d00':
		/** */ (function (module, exports) {
			module.exports = false;
			/** */ }),

		/** */ '2d95':
		/** */ (function (module, exports) {
			const toString = {}.toString;

			module.exports = function (it) {
				return toString.call(it).slice(8, -1);
			};
			/** */ }),

		/** */ '32e9':
		/** */ (function (module, exports, __webpack_require__) {
			const dP = __webpack_require__('86cc');
			const createDesc = __webpack_require__('4630');
			module.exports = __webpack_require__('9e1e') ? function (object, key, value) {
				return dP.f(object, key, createDesc(1, value));
			} : function (object, key, value) {
				object[key] = value;
				return object;
			};
			/** */ }),

		/** */ 3846(module, exports, __webpack_require__) {
			// 21.2.5.3 get RegExp.prototype.flags()
			if (__webpack_require__('9e1e') && /./g.flags != 'g') {
				__webpack_require__('86cc').f(RegExp.prototype, 'flags', {
					configurable: true,
					get: __webpack_require__('0bfb'),
				});
			}
			/** */ },

		/** */ '38fd':
		/** */ (function (module, exports, __webpack_require__) {
			// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
			const has = __webpack_require__('69a8');
			const toObject = __webpack_require__('4bf8');
			const IE_PROTO = __webpack_require__('613b')('IE_PROTO');
			const ObjectProto = Object.prototype;

			module.exports = Object.getPrototypeOf || function (O) {
				O = toObject(O);
				if (has(O, IE_PROTO)) return O[IE_PROTO];
				if (typeof O.constructor === 'function' && O instanceof O.constructor) {
					return O.constructor.prototype;
				} return O instanceof Object ? ObjectProto : null;
			};
			/** */ }),

		/** */ '41a0':
		/** */ (function (module, exports, __webpack_require__) {
			const create = __webpack_require__('2aeb');
			const descriptor = __webpack_require__('4630');
			const setToStringTag = __webpack_require__('7f20');
			const IteratorPrototype = {};

			// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
			__webpack_require__('32e9')(IteratorPrototype, __webpack_require__('2b4c')('iterator'), function () { return this; });

			module.exports = function (Constructor, NAME, next) {
				Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
				setToStringTag(Constructor, `${NAME} Iterator`);
			};
			/** */ }),

		/** */ '456d':
		/** */ (function (module, exports, __webpack_require__) {
			// 19.1.2.14 Object.keys(O)
			const toObject = __webpack_require__('4bf8');
			const $keys = __webpack_require__('0d58');

			__webpack_require__('5eda')('keys', () => function keys(it) {
				return $keys(toObject(it));
			});
			/** */ }),

		/** */ 4588(module, exports) {
			// 7.1.4 ToInteger
			const ceil = Math.ceil;
			const floor = Math.floor;
			module.exports = function (it) {
				return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
			};
			/** */ },

		/** */ 4630(module, exports) {
			module.exports = function (bitmap, value) {
				return {
					enumerable: !(bitmap & 1),
					configurable: !(bitmap & 2),
					writable: !(bitmap & 4),
					value,
				};
			};
			/** */ },

		/** */ '4bf8':
		/** */ (function (module, exports, __webpack_require__) {
			// 7.1.13 ToObject(argument)
			const defined = __webpack_require__('be13');
			module.exports = function (it) {
				return Object(defined(it));
			};
			/** */ }),

		/** */ '52a7':
		/** */ (function (module, exports) {
			exports.f = {}.propertyIsEnumerable;
			/** */ }),

		/** */ 5537(module, exports, __webpack_require__) {
			const core = __webpack_require__('8378');
			const global = __webpack_require__('7726');
			const SHARED = '__core-js_shared__';
			const store = global[SHARED] || (global[SHARED] = {});

			(module.exports = function (key, value) {
				return store[key] || (store[key] = value !== undefined ? value : {});
			})('versions', []).push({
				version: core.version,
				mode: __webpack_require__('2d00') ? 'pure' : 'global',
				copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
			});
			/** */ },

		/** */ '5ca1':
		/** */ (function (module, exports, __webpack_require__) {
			const global = __webpack_require__('7726');
			const core = __webpack_require__('8378');
			const hide = __webpack_require__('32e9');
			const redefine = __webpack_require__('2aba');
			const ctx = __webpack_require__('9b43');
			const PROTOTYPE = 'prototype';

			var $export = function (type, name, source) {
				const IS_FORCED = type & $export.F;
				const IS_GLOBAL = type & $export.G;
				const IS_STATIC = type & $export.S;
				const IS_PROTO = type & $export.P;
				const IS_BIND = type & $export.B;
				const target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
				const exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
				const expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
				let key,
					own,
					out,
					exp;
				if (IS_GLOBAL) source = name;
				for (key in source) {
					// contains in native
					own = !IS_FORCED && target && target[key] !== undefined;
					// export native or passed
					out = (own ? target : source)[key];
					// bind timers to global for call from export context
					exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out === 'function' ? ctx(Function.call, out) : out;
					// extend global
					if (target) redefine(target, key, out, type & $export.U);
					// export
					if (exports[key] != out) hide(exports, key, exp);
					if (IS_PROTO && expProto[key] != out) expProto[key] = out;
				}
			};
			global.core = core;
			// type bitmap
			$export.F = 1; // forced
			$export.G = 2; // global
			$export.S = 4; // static
			$export.P = 8; // proto
			$export.B = 16; // bind
			$export.W = 32; // wrap
			$export.U = 64; // safe
			$export.R = 128; // real proto method for `library`
			module.exports = $export;
			/** */ }),

		/** */ '5dbc':
		/** */ (function (module, exports, __webpack_require__) {
			const isObject = __webpack_require__('d3f4');
			const setPrototypeOf = __webpack_require__('8b97').set;
			module.exports = function (that, target, C) {
				const S = target.constructor;
				let P;
				if (S !== C && typeof S === 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
					setPrototypeOf(that, P);
				} return that;
			};
			/** */ }),

		/** */ '5eda':
		/** */ (function (module, exports, __webpack_require__) {
			// most Object methods by ES6 should accept primitives
			const $export = __webpack_require__('5ca1');
			const core = __webpack_require__('8378');
			const fails = __webpack_require__('79e5');
			module.exports = function (KEY, exec) {
				const fn = (core.Object || {})[KEY] || Object[KEY];
				const exp = {};
				exp[KEY] = exec(fn);
				$export($export.S + $export.F * fails(() => { fn(1); }), 'Object', exp);
			};
			/** */ }),

		/** */ '613b':
		/** */ (function (module, exports, __webpack_require__) {
			const shared = __webpack_require__('5537')('keys');
			const uid = __webpack_require__('ca5a');
			module.exports = function (key) {
				return shared[key] || (shared[key] = uid(key));
			};
			/** */ }),

		/** */ '626a':
		/** */ (function (module, exports, __webpack_require__) {
			// fallback for non-array-like ES3 and non-enumerable old V8 strings
			const cof = __webpack_require__('2d95');
			// eslint-disable-next-line no-prototype-builtins
			module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
				return cof(it) == 'String' ? it.split('') : Object(it);
			};
			/** */ }),

		/** */ 6821(module, exports, __webpack_require__) {
			// to indexed object, toObject with fallback for non-array-like ES3 strings
			const IObject = __webpack_require__('626a');
			const defined = __webpack_require__('be13');
			module.exports = function (it) {
				return IObject(defined(it));
			};
			/** */ },

		/** */ '69a8':
		/** */ (function (module, exports) {
			const hasOwnProperty = {}.hasOwnProperty;
			module.exports = function (it, key) {
				return hasOwnProperty.call(it, key);
			};
			/** */ }),

		/** */ '6a99':
		/** */ (function (module, exports, __webpack_require__) {
			// 7.1.1 ToPrimitive(input [, PreferredType])
			const isObject = __webpack_require__('d3f4');
			// instead of the ES6 spec version, we didn't implement @@toPrimitive case
			// and the second argument - flag - preferred type is a string
			module.exports = function (it, S) {
				if (!isObject(it)) return it;
				let fn,
					val;
				if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
				if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
				if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
				throw TypeError("Can't convert object to primitive value");
			};
			/** */ }),

		/** */ '6b54':
		/** */ (function (module, exports, __webpack_require__) {
			__webpack_require__('3846');
			const anObject = __webpack_require__('cb7c');
			const $flags = __webpack_require__('0bfb');
			const DESCRIPTORS = __webpack_require__('9e1e');
			const TO_STRING = 'toString';
			const $toString = /./[TO_STRING];

			const define = function (fn) {
				__webpack_require__('2aba')(RegExp.prototype, TO_STRING, fn, true);
			};

			// 21.2.5.14 RegExp.prototype.toString()
			if (__webpack_require__('79e5')(() => $toString.call({ source: 'a', flags: 'b' }) != '/a/b')) {
				define(function toString() {
					const R = anObject(this);
					return '/'.concat(
						R.source, '/',
						'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined,
					);
				});
				// FF44- RegExp#toString has a wrong name
			} else if ($toString.name != TO_STRING) {
				define(function toString() {
					return $toString.call(this);
				});
			}
			/** */ }),

		/** */ 7726(module, exports) {
			// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
			const global = module.exports = typeof window !== 'undefined' && window.Math == Math
				? window : typeof self !== 'undefined' && self.Math == Math ? self
				// eslint-disable-next-line no-new-func
					: Function('return this')();
			if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
			/** */ },

		/** */ '77f1':
		/** */ (function (module, exports, __webpack_require__) {
			const toInteger = __webpack_require__('4588');
			const max = Math.max;
			const min = Math.min;
			module.exports = function (index, length) {
				index = toInteger(index);
				return index < 0 ? max(index + length, 0) : min(index, length);
			};
			/** */ }),

		/** */ '79e5':
		/** */ (function (module, exports) {
			module.exports = function (exec) {
				try {
					return !!exec();
				} catch (e) {
					return true;
				}
			};
			/** */ }),

		/** */ '7f20':
		/** */ (function (module, exports, __webpack_require__) {
			const def = __webpack_require__('86cc').f;
			const has = __webpack_require__('69a8');
			const TAG = __webpack_require__('2b4c')('toStringTag');

			module.exports = function (it, tag, stat) {
				if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
			};
			/** */ }),

		/** */ 8378(module, exports) {
			const core = module.exports = { version: '2.5.7' };
			if (typeof __e === 'number') __e = core; // eslint-disable-line no-undef
			/** */ },

		/** */ '84f2':
		/** */ (function (module, exports) {
			module.exports = {};
			/** */ }),

		/** */ '86cc':
		/** */ (function (module, exports, __webpack_require__) {
			const anObject = __webpack_require__('cb7c');
			const IE8_DOM_DEFINE = __webpack_require__('c69a');
			const toPrimitive = __webpack_require__('6a99');
			const dP = Object.defineProperty;

			exports.f = __webpack_require__('9e1e') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
				anObject(O);
				P = toPrimitive(P, true);
				anObject(Attributes);
				if (IE8_DOM_DEFINE) {
					try {
						return dP(O, P, Attributes);
					} catch (e) { /* empty */ }
				}
				if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
				if ('value' in Attributes) O[P] = Attributes.value;
				return O;
			};
			/** */ }),

		/** */ '8b97':
		/** */ (function (module, exports, __webpack_require__) {
			// Works with __proto__ only. Old v8 can't work with null proto objects.
			/* eslint-disable no-proto */
			const isObject = __webpack_require__('d3f4');
			const anObject = __webpack_require__('cb7c');
			const check = function (O, proto) {
				anObject(O);
				if (!isObject(proto) && proto !== null) throw TypeError(`${proto}: can't set as prototype!`);
			};
			module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
					(function (test, buggy, set) {
						try {
							set = __webpack_require__('9b43')(Function.call, __webpack_require__('11e9').f(Object.prototype, '__proto__').set, 2);
							set(test, []);
							buggy = !(test instanceof Array);
						} catch (e) { buggy = true; }
						return function setPrototypeOf(O, proto) {
							check(O, proto);
							if (buggy) O.__proto__ = proto;
							else set(O, proto);
							return O;
						};
					}({}, false)) : undefined),
				check,
			};
			/** */ }),

		/** */ 9093(module, exports, __webpack_require__) {
			// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
			const $keys = __webpack_require__('ce10');
			const hiddenKeys = __webpack_require__('e11e').concat('length', 'prototype');

			exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
				return $keys(O, hiddenKeys);
			};
			/** */ },

		/** */ '9b43':
		/** */ (function (module, exports, __webpack_require__) {
			// optional / simple context binding
			const aFunction = __webpack_require__('d8e8');
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
			/** */ }),

		/** */ '9c6c':
		/** */ (function (module, exports, __webpack_require__) {
			// 22.1.3.31 Array.prototype[@@unscopables]
			const UNSCOPABLES = __webpack_require__('2b4c')('unscopables');
			const ArrayProto = Array.prototype;
			if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__('32e9')(ArrayProto, UNSCOPABLES, {});
			module.exports = function (key) {
				ArrayProto[UNSCOPABLES][key] = true;
			};
			/** */ }),

		/** */ '9def':
		/** */ (function (module, exports, __webpack_require__) {
			// 7.1.15 ToLength
			const toInteger = __webpack_require__('4588');
			const min = Math.min;
			module.exports = function (it) {
				return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
			};
			/** */ }),

		/** */ '9e1e':
		/** */ (function (module, exports, __webpack_require__) {
			// Thank's IE8 for his funny defineProperty
			module.exports = !__webpack_require__('79e5')(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
			/** */ }),

		/** */ a481(module, exports, __webpack_require__) {
			// @@replace logic
			__webpack_require__('214f')('replace', 2, (defined, REPLACE, $replace) =>
			// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
				[function replace(searchValue, replaceValue) {
					const O = defined(this);
					const fn = searchValue == undefined ? undefined : searchValue[REPLACE];
					return fn !== undefined
						? fn.call(searchValue, O, replaceValue)
						: $replace.call(String(O), searchValue, replaceValue);
				}, $replace]);
			/** */ },

		/** */ aa77(module, exports, __webpack_require__) {
			const $export = __webpack_require__('5ca1');
			const defined = __webpack_require__('be13');
			const fails = __webpack_require__('79e5');
			const spaces = __webpack_require__('fdef');
			const space = `[${spaces}]`;
			const non = '\u200b\u0085';
			const ltrim = RegExp(`^${space}${space}*`);
			const rtrim = RegExp(`${space + space}*$`);

			const exporter = function (KEY, exec, ALIAS) {
				const exp = {};
				const FORCE = fails(() => !!spaces[KEY]() || non[KEY]() != non);
				const fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
				if (ALIAS) exp[ALIAS] = fn;
				$export($export.P + $export.F * FORCE, 'String', exp);
			};

			// 1 -> String#trimLeft
			// 2 -> String#trimRight
			// 3 -> String#trim
			var trim = exporter.trim = function (string, TYPE) {
				string = String(defined(string));
				if (TYPE & 1) string = string.replace(ltrim, '');
				if (TYPE & 2) string = string.replace(rtrim, '');
				return string;
			};

			module.exports = exporter;
			/** */ },

		/** */ ac6a(module, exports, __webpack_require__) {
			const $iterators = __webpack_require__('cadf');
			const getKeys = __webpack_require__('0d58');
			const redefine = __webpack_require__('2aba');
			const global = __webpack_require__('7726');
			const hide = __webpack_require__('32e9');
			const Iterators = __webpack_require__('84f2');
			const wks = __webpack_require__('2b4c');
			const ITERATOR = wks('iterator');
			const TO_STRING_TAG = wks('toStringTag');
			const ArrayValues = Iterators.Array;

			const DOMIterables = {
				CSSRuleList: true, // TODO: Not spec compliant, should be false.
				CSSStyleDeclaration: false,
				CSSValueList: false,
				ClientRectList: false,
				DOMRectList: false,
				DOMStringList: false,
				DOMTokenList: true,
				DataTransferItemList: false,
				FileList: false,
				HTMLAllCollection: false,
				HTMLCollection: false,
				HTMLFormElement: false,
				HTMLSelectElement: false,
				MediaList: true, // TODO: Not spec compliant, should be false.
				MimeTypeArray: false,
				NamedNodeMap: false,
				NodeList: true,
				PaintRequestList: false,
				Plugin: false,
				PluginArray: false,
				SVGLengthList: false,
				SVGNumberList: false,
				SVGPathSegList: false,
				SVGPointList: false,
				SVGStringList: false,
				SVGTransformList: false,
				SourceBufferList: false,
				StyleSheetList: true, // TODO: Not spec compliant, should be false.
				TextTrackCueList: false,
				TextTrackList: false,
				TouchList: false,
			};

			for (let collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
				const NAME = collections[i];
				const explicit = DOMIterables[NAME];
				const Collection = global[NAME];
				const proto = Collection && Collection.prototype;
				var key;
				if (proto) {
					if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
					if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
					Iterators[NAME] = ArrayValues;
					if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
				}
			}
			/** */ },

		/** */ be13(module, exports) {
			// 7.2.1 RequireObjectCoercible(argument)
			module.exports = function (it) {
				if (it == undefined) throw TypeError(`Can't call method on  ${it}`);
				return it;
			};
			/** */ },

		/** */ c366(module, exports, __webpack_require__) {
			// false -> Array#indexOf
			// true  -> Array#includes
			const toIObject = __webpack_require__('6821');
			const toLength = __webpack_require__('9def');
			const toAbsoluteIndex = __webpack_require__('77f1');
			module.exports = function (IS_INCLUDES) {
				return function ($this, el, fromIndex) {
					const O = toIObject($this);
					const length = toLength(O.length);
					let index = toAbsoluteIndex(fromIndex, length);
					let value;
					// Array#includes uses SameValueZero equality algorithm
					// eslint-disable-next-line no-self-compare
					if (IS_INCLUDES && el != el) {
						while (length > index) {
							value = O[index++];
							// eslint-disable-next-line no-self-compare
							if (value != value) return true;
						// Array#indexOf ignores holes, Array#includes - not
						}
					} else {
						for (;length > index; index++) {
							if (IS_INCLUDES || index in O) {
								if (O[index] === el) return IS_INCLUDES || index || 0;
							}
						}
					} return !IS_INCLUDES && -1;
				};
			};
			/** */ },

		/** */ c5f6(module, exports, __webpack_require__) {
			const global = __webpack_require__('7726');
			const has = __webpack_require__('69a8');
			const cof = __webpack_require__('2d95');
			const inheritIfRequired = __webpack_require__('5dbc');
			const toPrimitive = __webpack_require__('6a99');
			const fails = __webpack_require__('79e5');
			const gOPN = __webpack_require__('9093').f;
			const gOPD = __webpack_require__('11e9').f;
			const dP = __webpack_require__('86cc').f;
			const $trim = __webpack_require__('aa77').trim;
			const NUMBER = 'Number';
			let $Number = global[NUMBER];
			const Base = $Number;
			const proto = $Number.prototype;
			// Opera ~12 has broken Object#toString
			const BROKEN_COF = cof(__webpack_require__('2aeb')(proto)) == NUMBER;
			const TRIM = 'trim' in String.prototype;

			// 7.1.3 ToNumber(argument)
			const toNumber = function (argument) {
				let it = toPrimitive(argument, false);
				if (typeof it === 'string' && it.length > 2) {
					it = TRIM ? it.trim() : $trim(it, 3);
					const first = it.charCodeAt(0);
					let third,
						radix,
						maxCode;
					if (first === 43 || first === 45) {
						third = it.charCodeAt(2);
						if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
					} else if (first === 48) {
						switch (it.charCodeAt(1)) {
						case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
						case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
						default: return +it;
						}
						for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
							code = digits.charCodeAt(i);
							// parseInt parses a string to a first unavailable symbol
							// but ToNumber should return NaN if a string contains unavailable symbols
							if (code < 48 || code > maxCode) return NaN;
						} return parseInt(digits, radix);
					}
				} return +it;
			};

			if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
				$Number = function Number(value) {
					const it = arguments.length < 1 ? 0 : value;
					const that = this;
					return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(() => { proto.valueOf.call(that); }) : cof(that) != NUMBER)
						? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
				};
				for (var keys = __webpack_require__('9e1e') ? gOPN(Base) : (
					// ES3:
						'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
					).split(','), j = 0, key; keys.length > j; j++) {
					if (has(Base, key = keys[j]) && !has($Number, key)) {
						dP($Number, key, gOPD(Base, key));
					}
				}
				$Number.prototype = proto;
				proto.constructor = $Number;
				__webpack_require__('2aba')(global, NUMBER, $Number);
			}
			/** */ },

		/** */ c69a(module, exports, __webpack_require__) {
			module.exports = !__webpack_require__('9e1e') && !__webpack_require__('79e5')(() => Object.defineProperty(__webpack_require__('230e')('div'), 'a', { get() { return 7; } }).a != 7);
			/** */ },

		/** */ ca5a(module, exports) {
			let id = 0;
			const px = Math.random();
			module.exports = function (key) {
				return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
			};
			/** */ },

		/** */ cadf(module, exports, __webpack_require__) {
			const addToUnscopables = __webpack_require__('9c6c');
			const step = __webpack_require__('d53b');
			const Iterators = __webpack_require__('84f2');
			const toIObject = __webpack_require__('6821');

			// 22.1.3.4 Array.prototype.entries()
			// 22.1.3.13 Array.prototype.keys()
			// 22.1.3.29 Array.prototype.values()
			// 22.1.3.30 Array.prototype[@@iterator]()
			module.exports = __webpack_require__('01f9')(Array, 'Array', function (iterated, kind) {
				this._t = toIObject(iterated); // target
				this._i = 0; // next index
				this._k = kind; // kind
				// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
			}, function () {
				const O = this._t;
				const kind = this._k;
				const index = this._i++;
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
			/** */ },

		/** */ cb7c(module, exports, __webpack_require__) {
			const isObject = __webpack_require__('d3f4');
			module.exports = function (it) {
				if (!isObject(it)) throw TypeError(`${it} is not an object!`);
				return it;
			};
			/** */ },

		/** */ ce10(module, exports, __webpack_require__) {
			const has = __webpack_require__('69a8');
			const toIObject = __webpack_require__('6821');
			const arrayIndexOf = __webpack_require__('c366')(false);
			const IE_PROTO = __webpack_require__('613b')('IE_PROTO');

			module.exports = function (object, names) {
				const O = toIObject(object);
				let i = 0;
				const result = [];
				let key;
				for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
				// Don't enum bug & hidden keys
				while (names.length > i) {
					if (has(O, key = names[i++])) {
						~arrayIndexOf(result, key) || result.push(key);
					}
				}
				return result;
			};
			/** */ },

		/** */ d3f4(module, exports) {
			module.exports = function (it) {
				return typeof it === 'object' ? it !== null : typeof it === 'function';
			};
			/** */ },

		/** */ d53b(module, exports) {
			module.exports = function (done, value) {
				return { value, done: !!done };
			};
			/** */ },

		/** */ d8e8(module, exports) {
			module.exports = function (it) {
				if (typeof it !== 'function') throw TypeError(`${it} is not a function!`);
				return it;
			};
			/** */ },

		/** */ e11e(module, exports) {
			// IE 8- don't enum bug keys
			module.exports = (
				'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
			).split(',');
			/** */ },

		/** */ fab2(module, exports, __webpack_require__) {
			const document = __webpack_require__('7726').document;
			module.exports = document && document.documentElement;
			/** */ },

		/** */ fb15(module, __webpack_exports__, __webpack_require__) {
			__webpack_require__.r(__webpack_exports__);

			// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
			const setPublicPath = __webpack_require__('1eb2');

			// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static-map.vue?vue&type=template&id=5f546ca9&
			const render = function () { const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('img', { attrs: { src: _vm.mapUrl } }); };
			const staticRenderFns = [];


			// CONCATENATED MODULE: ./src/components/static-map.vue?vue&type=template&id=5f546ca9&

			// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
			const es6_number_constructor = __webpack_require__('c5f6');

			// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
			const es6_regexp_to_string = __webpack_require__('6b54');

			// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
			const es6_regexp_replace = __webpack_require__('a481');

			// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
			const es6_array_iterator = __webpack_require__('cadf');

			// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
			const es6_object_keys = __webpack_require__('456d');

			// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
			const web_dom_iterable = __webpack_require__('ac6a');

			// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/static-map.vue?vue&type=script&lang=js&


			//
			//
			//
			//
			const BASE_URL_MAP = 'https://maps.googleapis.com/maps/api/staticmap?';

			function generateFormatMap() {
				return this.format.toLowerCase();
			}

			function generateMapType() {
				const types = ['roadmap', 'satellite', 'hybrid', 'terrain'];
				const currenType = this.type;

				if (types.indexOf(currenType) > -1) {
					return currenType;
				}

				const upperTypes = types.join(', ').toUpperCase();
				throw Error('Type must be one of the following values '.concat(upperTypes));
			}

			function generateMapUrl() {
				const mapUrl = ''.concat(BASE_URL_MAP, 'center=').concat(this.center, '&zoom=').concat(this.zoom, '&size=').concat(this.sizeMap, '&maptype=')
					.concat(this.mapTypeMap, '&format=')
					.concat(this.formatMap, '&key=')
					.concat(this.googleApiKey, '&scale=')
					.concat(this.scaleMap, '&language=')
					.concat(this.language)
					.concat(this.markersMap)
					.concat(this.pathsMap, '&')
					.concat(this.styleMap);
				this.$emit('get-url', mapUrl);
				return mapUrl;
			}
			/* eslint-disable arrow-parens */


			function generateMarkers() {
				const markers = this.markers.map((marker) => {
					const color = 'color:'.concat(marker.color, '|');
					const size = 'size:'.concat(marker.size, '|');
					const label = 'label:'.concat(marker.label, '|');
					const icon = 'icon:'.concat(marker.icon, '|');
					const latLng = ''.concat(marker.lat, ',').concat(marker.lng);
					let markerUrl = '&markers=';

					if (marker.color) {
						markerUrl += color;
					}

					if (marker.size) {
						markerUrl += size;
					}

					if (marker.label) {
						markerUrl += label;
					}

					if (marker.icon) {
						markerUrl += icon;
					}

					if (marker.lat && marker.lng) {
						markerUrl += latLng;
					}

					return markerUrl;
				});
				return markers.join('');
			}
			/* eslint-disable arrow-parens */


			function generatePaths() {
				const paths = this.paths.map((path) => {
					const color = 'color:'.concat(path.color);
					const weight = 'weight:'.concat(path.weight);
					const geodesic = 'geodesic:'.concat(path.geodesic);
					const fillcolor = 'fillcolor:'.concat(path.fillcolor);
					const latLng = path.locations.map((location) => {
						if (location.startLat && location.endLng) {
							return '|'.concat(location.startLat, ',').concat(location.endLng);
						}

						throw Error('The path object must have startLat and endLng properties');
					});
					const joinLatLng = latLng.join('');
					const pathUrl = '&path='.concat(color, '|').concat(fillcolor, '|').concat(geodesic, '|').concat(weight)
						.concat(joinLatLng);
					return pathUrl;
				});
				return paths.length > 0 ? paths[0] : '';
			}

			function generateScaleMap() {
				const allowedScales = ['1', '2', '4'];

				if (allowedScales.indexOf(this.scale) > -1) {
					return this.scale;
				}

				throw Error('Scale only can have the values '.concat(allowedScales.join(', ')));
			}

			function generateSizeMap() {
				if (this.size.length > 0) {
					const size = this.size;
					return ''.concat(size[0], 'x').concat(size[1]);
				}

				throw Error('Size must have 2 values: WIDTH AND HEIGHT');
			}

			function generateCustomStyles() {
				const result = [];

				if (this.customStyle) {
					let custom = [];

					try {
						custom = JSON.parse(this.customStyle);
					} catch (e) {
						custom = this.customStyle;
					}

					custom.forEach((v) => {
						let style = '';

						if (v.stylers) {
							if (v.stylers.length > 0) {
								style += ''.concat(Object.prototype.hasOwnProperty.call(v, 'featureType') ? 'feature:'.concat(v.featureType) : 'feature:all', '|');
								style += ''.concat(Object.prototype.hasOwnProperty.call(v, 'elementType') ? 'element:'.concat(v.elementType) : 'element:all', '|');
								v.stylers.forEach((val) => {
									const propertyname = Object.keys(val)[0];
									const propertyval = val[propertyname].toString().replace('#', '0x');
									style += ''.concat(propertyname, ':').concat(propertyval, '|');
								});
							}
						}

						result.push('style='.concat(encodeURIComponent(style)));
					});
				}

				return result.join('&');
			}

			/* harmony default export */ const static_mapvue_type_script_lang_js_ = ({
				name: 'static-map',
				computed: {
					formatMap: generateFormatMap,
					mapTypeMap: generateMapType,
					mapUrl: generateMapUrl,
					markersMap: generateMarkers,
					pathsMap: generatePaths,
					scaleMap: generateScaleMap,
					sizeMap: generateSizeMap,
					styleMap: generateCustomStyles,
				},
				props: {
					center: {
						type: String,
						required: true,
					},
					format: {
						type: String,
						default: 'png',
					},
					getUrl: {
						type: Function,
					},
					googleApiKey: {
						type: String,
						required: true,
					},
					language: {
						type: String,
						default: 'en',
					},
					markers: {
						type: Array,
						default: function _default() {
							return [];
						},
					},
					paths: {
						type: Array,
						default: function _default() {
							return [];
						},
					},
					type: {
						type: String,
						default: 'roadmap',
					},
					scale: {
						type: String,
						default: '1',
					},
					size: {
						type: Array,
						default: function _default() {
							return [500, 400];
						},
					},
					customStyle: {
						type: [String, Array],
						default: null,
					},
					zoom: {
						type: Number,
						required: true,
					},
				},
			});
			// CONCATENATED MODULE: ./src/components/static-map.vue?vue&type=script&lang=js&
			/* harmony default export */ const components_static_mapvue_type_script_lang_js_ = (static_mapvue_type_script_lang_js_);
			// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
			/* globals __VUE_SSR_CONTEXT__ */

			// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
			// This module is a runtime utility for cleaner component module output and will
			// be included in the final webpack user bundle.

			function normalizeComponent(
				scriptExports,
				render,
				staticRenderFns,
				functionalTemplate,
				injectStyles,
				scopeId,
				moduleIdentifier, /* server only */
				shadowMode, /* vue-cli only */
			) {
				// Vue.extend constructor export interop
				const options = typeof scriptExports === 'function'
					? scriptExports.options
					: scriptExports;

				// render functions
				if (render) {
					options.render = render;
					options.staticRenderFns = staticRenderFns;
					options._compiled = true;
				}

				// functional template
				if (functionalTemplate) {
					options.functional = true;
				}

				// scopedId
				if (scopeId) {
					options._scopeId = `data-v-${scopeId}`;
				}

				let hook;
				if (moduleIdentifier) { // server build
					hook = function (context) {
						// 2.3 injection
						context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
						// 2.2 with runInNewContext: true
						if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
							context = __VUE_SSR_CONTEXT__;
						}
						// inject component styles
						if (injectStyles) {
							injectStyles.call(this, context);
						}
						// register component module identifier for async chunk inferrence
						if (context && context._registeredComponents) {
							context._registeredComponents.add(moduleIdentifier);
						}
					};
					// used by ssr in case component is cached and beforeCreate
					// never gets called
					options._ssrRegister = hook;
				} else if (injectStyles) {
					hook = shadowMode
						? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
						: injectStyles;
				}

				if (hook) {
					if (options.functional) {
						// for template-only hot-reload because in that case the render fn doesn't
						// go through the normalizer
						options._injectStyles = hook;
						// register for functioal component in vue file
						const originalRender = options.render;
						options.render = function renderWithStyleInjection(h, context) {
							hook.call(context);
							return originalRender(h, context);
						};
					} else {
						// inject component registration as beforeCreate hook
						const existing = options.beforeCreate;
						options.beforeCreate = existing
							? [].concat(existing, hook)
							: [hook];
					}
				}

				return {
					exports: scriptExports,
					options,
				};
			}

			// CONCATENATED MODULE: ./src/components/static-map.vue


			/* normalize component */

			const component = normalizeComponent(
				components_static_mapvue_type_script_lang_js_,
				render,
				staticRenderFns,
				false,
				null,
				null,
				null,

			);

			component.options.__file = 'static-map.vue';
			/* harmony default export */ const static_map = (component.exports);
			// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


			/* harmony default export */ const entry_lib = __webpack_exports__.default = (static_map);
			/** */ },

		/** */ fdef(module, exports) {
			module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
			/** */ },

		/** *** */ })).default));
// # sourceMappingURL=StaticMap.umd.js.map
