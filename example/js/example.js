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

	var _srcIndexJs = __webpack_require__(1);

	var _srcIndexJs2 = _interopRequireDefault(_srcIndexJs);

	_srcIndexJs2['default'].log('1st param', '2nd param');
	_srcIndexJs2['default'].warn({ a: 1, b: { c: 2 } });
	_srcIndexJs2['default'].debug('debugging');
	_srcIndexJs2['default'].error('error');
	_srcIndexJs2['default'].dir('warn', { a: 1, b: { c: 2 } });

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * devLog 0.1.4
	 * Copyright(c) 2016 https://github.com/mtuan-f4
	 * DianPing.com
	 * MIT Licensed
	 */
	/**
	 * 仅仅在开发环境下打印日志，上线后自动根据域名去除所有日志打印功能
	 * 共有以下6个api供外界调用,使用方式和原先的alert和console基本相同
	 * log/warn/error/dir/alarm/debug
	 * 同时增加close和open方法可以手动开关日志调试功能
	 */

	'use strict';

	exports.__esModule = true;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _env = __webpack_require__(2);

	var _env2 = _interopRequireDefault(_env);

	var _style = __webpack_require__(3);

	var styleArrayObj = _interopRequireWildcard(_style);

	var _utilJs = __webpack_require__(4);

	var logProto = {
	    /**
	     * 打印日志，并标注颜色
	     * @method log
	     * @param arguments
	     */
	    log: function log() {
	        var finalArgs = styleArrayObj['log'].concat([].slice.call(arguments));
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    },
	    /**
	     * 打印debug信息
	     * @param arguments
	     */
	    debug: function debug() {
	        var finalArgs = styleArrayObj['debug'].concat([].slice.call(arguments));
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    },
	    /**
	     * 打印警告信息，并标注颜色
	     * @method warn
	     * @param arguments
	     */
	    warn: function warn() {
	        var finalArgs = styleArrayObj['warn'].concat([].slice.call(arguments));
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    },
	    /**
	     * 打印错误信息，并标注颜色
	     * @method error
	     * @param arguments
	     */
	    error: function error(args) {
	        var finalArgs = styleArrayObj['error'].concat([].slice.call(arguments));
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    },
	    /**
	     * 打印类对象信息，并标注颜色
	     * @method dir
	     * @param arguments
	     */
	    dir: function dir() {
	        var finalArgs = styleArrayObj['dir'].concat([].slice.call(arguments));
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    },
	    /**
	     * 将相关参数字符串化，并在窗口alert和打印console
	     * @method alarm
	     * @param msg
	     */
	    alarm: function alarm(msg) {
	        var transString = (function () {
	            switch (typeof msg) {
	                case 'object':
	                    return JSON.stringify(msg);
	                default:
	                    return msg || '';
	            }
	        })();
	        var finalArgs = styleArrayObj['alarm'].concat([].slice.call(arguments));
	        _utilJs.loggerConsole.apply(null, finalArgs);
	        alert(transString);
	    },
	    open: function open() {
	        localStorage.setItem('__onLine__', 'onLine');
	        var finalArgs = styleArrayObj['open'].concat(['refresh page to see logs']);
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    },
	    close: function close() {
	        localStorage.setItem('__onLine__', 'offLine');
	        var finalArgs = styleArrayObj['close'].concat(['refresh page to see logs']);
	        _utilJs.loggerConsole.apply(null, finalArgs);
	    }
	};
	var factory = function factory() {
	    var loggerFactory = function loggerFactory() {};
	    _utilJs.extendProto(loggerFactory.prototype, logProto, _env2['default']());
	    var devLog = new loggerFactory();
	    devLog.__proto__.open = logProto.open;
	    devLog.__proto__.close = logProto.close;
	    //增加开关，api隐藏在prototype的原型里
	    return devLog;
	};
	if (window) {
	    window['devLog'] = factory();
	} else {
	    console.warn('devLog is a FE tool,better use it in FE development rather than node ENV');
	}
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
	        (function () {
	            Env = location.hostname;
	            applyDevConsole = !!HostExp.test(Env);
	            var storage = localStorage.getItem('__onLine__');
	            if (storage) {
	                //线上环境加层localStorage判断,不设置过期时间
	                applyDevConsole = (function () {
	                    switch (storage) {
	                        case 'onLine':
	                            return true;
	                        case 'offLine':
	                            return false;
	                        default:
	                            return false;
	                    }
	                })();
	            }
	        })();
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
	var darkGreen = 'color:#009a61';
	var red = 'color:#cb3837';
	var white = 'color:#ffffff';
	var purple = 'color:#609';
	var blue = 'color:#07a';
	var yellowRed = 'color:#AB3006';
	var black = 'color:#000';
	var styles = {
	    warn: padding + bg + red,
	    debug: padding + bg + blue,
	    alarm: padding + bg + purple,
	    log: padding + bg + white,
	    dir: padding + bg + green,
	    error: padding + bg + yellowRed,
	    close: padding + bg + black,
	    open: padding + bg + darkGreen
	};

	exports['default'] = {
	    log: ["%c Log", styles['log']],
	    debug: ["%c Debug", styles['debug']],
	    warn: ["%c Warn", styles['warn']],
	    dir: ["%c Dir", styles['dir']],
	    error: ["%c Error", styles['error']],
	    alarm: ["%c Alert", styles['alarm']],
	    open: ["%c Open log", styles['open']],
	    close: ["%c Close log", styles['close']]
	};
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/3/4.
	 */

	'use strict';

	exports.__esModule = true;
	var hasOwn = ({}).hasOwnProperty;

	var loggerConsole = function loggerConsole() {
	    var i = -1,
	        l = arguments.length,
	        args = [],
	        fn = 'console.log(args)';
	    while (++i < l) {
	        args.push('args[' + i + ']');
	    };
	    fn = new Function('args', fn.replace(/args/, args.join(',')));
	    fn(arguments);
	};
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

	exports.loggerConsole = loggerConsole;
	exports.hasOwn = hasOwn;
	exports.extendProto = extendProto;

/***/ }
/******/ ])
});
;