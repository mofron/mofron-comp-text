require("mofron-event-click");
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @file   Text.js
 * @brief  Text Component for mofron
 * @author simpart
 */
mofron.comp.Text = function (_mofron$Component) {
    _inherits(_class, _mofron$Component);

    /**
     * initialize text component
     *
     * @param prm : (string) text contents
     * @param opt : (object) component option
     */
    function _class(prm, opt) {
        _classCallCheck(this, _class);

        try {
            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, prm));

            _this.name('Text');

            /* font theme */
            _this.m_font = null;

            /* set option */
            if (null !== opt) {
                _this.option(opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
        return _this;
    }

    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */


    _createClass(_class, [{
        key: 'initDomConts',
        value: function initDomConts(prm) {
            try {
                if ('string' != typeof prm) {
                    throw new Error('invalid parameter');
                }

                /* init vdom contents */
                var text = new mofron.util.Dom('div', this);
                text.text(prm);
                this.vdom().addChild(text);
                this.target(text);

                /* set font theme */
                var fnt = this.theme().getFont(0);
                if (null !== fnt) {
                    this.setFontTheme(fnt);
                }
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text contents setter/getter
         *
         * @param val : (string) text contents
         * @return (string) text contents
         */

    }, {
        key: 'text',
        value: function text(val) {
            try {
                var _val = val === undefined ? null : val;
                if (null === _val) {
                    return this.target().text();
                }
                if ('string' !== typeof _val) {
                    throw new Error('invalid parameter');
                }
                this.target().text(_val);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text size setter / getter
         *
         * @param val : (number) font pixel size (option)
         * @return (number) font size
         */

    }, {
        key: 'size',
        value: function size(val) {
            try {
                if (undefined === val) {
                    /* getter */
                    return this.style('font-size');
                }

                if (null === val) {
                    this.style('font-size', null);
                    return;
                }
                /* setter */
                if ('number' != typeof val) {
                    throw new Error('invalid parameter');
                }
                this.style('font-size', val + 'px');
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set link text
         *
         * @param url : (string) link url
         * @param tab : (bool) new tab flag
         */

    }, {
        key: 'setLink',
        value: function setLink(url, tab) {
            try {
                var _tab = tab === undefined ? false : tab;
                var click = null;

                if (false === _tab) {
                    click = new mofron.event.Click(function () {
                        window.location.href = url;
                    });
                } else {
                    click = new mofron.event.Click(function () {
                        window.open(url, '_blank');
                    });
                }

                this.style('cursor', 'pointer');
                this.addEvent(click);
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * text color setter/getter
         * 
         * @param clr : (mofron.util.Color) color object
         * @return (string) color (no-parameter)
         */

    }, {
        key: 'color',
        value: function color(clr) {
            try {
                var _clr = clr === undefined ? null : clr;
                if (null === _clr) {
                    return mofron.func.getColorObj(this.style('color'));
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

        /**
         * text font setter/getter
         * 
         * @param fnt : (mofron.util.Font) font object
         * @return (string) font
         */

    }, {
        key: 'font',
        value: function font(fnt) {
            try {
                var _fnt = fnt === undefined ? null : fnt;
                if (null === _fnt) {
                    /* getter */
                    return this.m_font;
                }
                /* setter */
                if ('object' !== (typeof _fnt === 'undefined' ? 'undefined' : _typeof(_fnt))) {
                    throw new Error('invalid parameter');
                }
                this.style('font-family', _fnt.getStyle());
                this.m_font = _fnt;
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }

        /**
         * set font theme to class name
         * 
         * @param fnt : (object) font object
         */

    }, {
        key: 'setFontTheme',
        value: function setFontTheme(fnt) {
            try {
                var _fnt = fnt === undefined ? null : fnt;
                if ('object' !== (typeof _fnt === 'undefined' ? 'undefined' : _typeof(_fnt))) {
                    throw new Error('invalid parameter');
                }
                this.m_font = _fnt;
                this.target().addClass(fnt.getThemeClass());
            } catch (e) {
                console.error(e.stack);
                throw e;
            }
        }
    }]);

    return _class;
}(mofron.Component);

/***/ })
/******/ ]);
