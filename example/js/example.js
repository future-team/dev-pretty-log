(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/3/3.
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _srcMainJs = __webpack_require__(1);

	var _srcMainJs2 = _interopRequireDefault(_srcMainJs);

	_srcMainJs2['default'].log('log');
	_srcMainJs2['default'].warn('warn');
	_srcMainJs2['default'].debug('add true to pause programming', true);
	_srcMainJs2['default'].debug('without 2nd param to true, programming goes on');
	_srcMainJs2['default'].dir('warn');
	_srcMainJs2['default'].alert('alert a string');
	_srcMainJs2['default'].alert({ a: 'test', b: { c: 'test' } });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * devLog 0.0.1
	 * Copyright(c) 2016 https://github.com/mtuan-f4  dianping.com
	 * MIT Licensed
	 */
	/**
	 * 仅仅在开发环境下打印日志，上线后自动根据域名去除所有日志打印功能
	 * 共有一下6个api供外界调用,使用方式和原先的alert和console基本相同
	 * log/warn/error/dir/alert/debug
	 * 备注:devLog.debug(param,bool)如果在第二个参数设置为true,会在程序运行时自动打上breakpoint
	 *
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _env = __webpack_require__(2);

	var _env2 = _interopRequireDefault(_env);

	var _style = __webpack_require__(3);

	var styles = _interopRequireWildcard(_style);

	var hasOwn = ({}).hasOwnProperty;
	//extend key/value to target
	var extendProto = function extendProto(target, extension, isCopyValue) {
	    for (var key in extension) {
	        if (hasOwn.call(extension, key)) {
	            //如果是线上有域名的环境，则每个function都是return false，默认不做动作
	            target[key] = isCopyValue ? extension[key] : function () {
	                return false;
	            };
	        }
	    }
	};

	var logProto = {
	    /**
	     * 打印日志，并标注颜色
	     * @method log
	     * @param args
	     */
	    log: function log(args) {
	        console.log("%c Log", styles['log'], args);
	    },
	    /**
	     * debug拥有debug和log的功能
	     * @param args  你所想要打印的变量
	     * @param bool  是否采用debug模式,在此处打上breakpoint
	     */
	    debug: function debug(args, bool) {
	        if (bool) {
	            console.log("%c Debugging", styles['debugging'], args);
	            debugger;
	        } else {
	            console.log("%c Debug", styles['debug'], args);
	        }
	    },
	    /**
	     * 打印警告信息，并标注颜色
	     * @method warn
	     * @param args
	     */
	    warn: function warn(args) {
	        console.log("%c Warn", styles['warn'], args);
	    },
	    /**
	     * 打印错误信息，并标注颜色
	     * @method error
	     * @param args
	     */
	    error: function error(args) {
	        console.log("%c Error", styles['error'], args);
	    },
	    /**
	     * 打印类对象信息，并标注颜色
	     * @method dir
	     * @param arguments
	     */
	    dir: function dir() {
	        console.log("%c Dir", styles['dir'], arguments);
	    },
	    /**
	     * alert相关信息，并在控制台打印信息,only one argument is allowed
	     * @method alert
	     * @param msg
	     */
	    alert: (function (_alert) {
	        function alert(_x) {
	            return _alert.apply(this, arguments);
	        }

	        alert.toString = function () {
	            return _alert.toString();
	        };

	        return alert;
	    })(function (msg) {
	        var transString = (function () {
	            switch (typeof msg) {
	                case 'object':
	                    return JSON.stringify(msg);
	                default:
	                    return msg || '';
	            }
	        })();
	        console.log("%c Alert", styles['alert'], transString);
	        alert(transString);
	    })
	};
	var factory = function factory() {
	    var loggerFactory = function loggerFactory() {};
	    extendProto(loggerFactory.prototype, logProto, _env2['default']());
	    return new loggerFactory();
	};
	window['devLog'] = factory();
	exports['default'] = factory();
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/3/3.
	 */

	'use strict';

	exports.__esModule = true;

	exports['default'] = function () {
	    //默认不打印,仅仅在本地调试的时候有日志出现
	    var applyDevConsole = false;
	    var Env = '';
	    var HostExp = /127\.0\.0\.1|localhost/ig;
	    if (window && window.location) {
	        Env = location.hostname;
	        applyDevConsole = !!HostExp.test(Env);
	    }
	    return applyDevConsole;
	};

	;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/3/3.
	 */
	'use strict';

	exports.__esModule = true;
	var padding = "padding-right:5px;";
	var bg = 'background:#FF9E35;';
	var green = 'color:#60b044';
	var red = 'color:#cb3837';
	var white = 'color:#ffffff';
	var purple = 'color:#609';
	var blue = 'color:#07a';
	var yellowRed = 'color:#AB3006';
	exports['default'] = {
	    warn: padding + bg + red,
	    debug: padding + bg + blue,
	    debugging: padding + bg + purple,
	    log: padding + bg + white,
	    dir: padding + bg + green,
	    alert: padding + bg + yellowRed
	};
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;