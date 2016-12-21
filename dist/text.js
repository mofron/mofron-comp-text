/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file   Text.js
	 * @brief  Base UI of Text
	 * @author simpart
	 */

	mofron.parts.Text = function (_mofron$parts$Base) {
	    _inherits(_class, _mofron$parts$Base);

	    function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                if ('string' != typeof prm) {
	                    throw new Error('invalid parameter');
	                }

	                var text = new mofron.util.Vdom('div');
	                text.setText(prm);
	                vd.addChild(text);
	                this.size(15);
	                this.setTheme();
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'text',
	        value: function text(val) {
	            try {
	                var _val = val === undefined ? null : val;
	                if (null === _val) {
	                    return this.getTarget().getText();
	                }
	                if ('string' !== typeof _val) {
	                    throw new Error('invalid parameter');
	                }
	                this.getTarget().setText(_val);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'size',
	        value: function size(val) {
	            try {
	                if ('number' != typeof val) {
	                    throw new Error('invalid parameter');
	                }
	                var _val = val === undefined ? null : val;
	                var txt = this.getTarget();
	                if (null === _val) {
	                    return txt.getStyle('font-size');
	                }
	                txt.setStyle('font-size', val + 'px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'align',
	        value: function align(tp) {
	            try {
	                //var style = new mofron.other.Styles(this, ' .text-conts');
	                //style.style('text-align', tp);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setLink',
	        value: function setLink(url, tab) {
	            try {
	                var _tab = tab === undefined ? false : tab;
	                this.style('cursor', 'pointer');
	                var click = new mofron.event.Click();
	                if (false === _tab) {
	                    click = new mofron.event.Click(function () {
	                        window.location.href = url;
	                    });
	                } else {
	                    click = new mofron.event.Click(function () {
	                        window.open(url, '_blank');
	                    });
	                }
	                this.addEvent(click);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'color',
	        value: function color(clr) {
	            try {
	                var _clr = clr === undefined ? null : clr;
	                if (null === _clr) {
	                    return this.getStyleTgt().getStyle('color');
	                }
	                if ('object' !== (typeof _clr === 'undefined' ? 'undefined' : _typeof(_clr))) {
	                    throw new Error('invalid parameter');
	                }
	                this.style('color', _clr.getStyle());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'font',
	        value: function font(fnt) {
	            try {
	                var _fnt = fnt === undefined ? null : fnt;
	                if (null === _fnt) {
	                    return this.getStyleTgt().getStyle('font-family');
	                }
	                if ('object' !== (typeof _fnt === 'undefined' ? 'undefined' : _typeof(_fnt))) {
	                    throw new Error('invalid parameter');
	                }
	                this.style('font-family', _fnt.getFontFamily());
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'setTheme',
	        value: function setTheme(idx) {
	            try {
	                var _idx = idx === undefined ? 0 : idx;
	                this.getTarget().addClname('mofron-theme-font' + _idx);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.Base);

/***/ }
/******/ ]);