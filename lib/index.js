/**
 * devLog 0.1.4
 * Copyright(c) 2016 https://github.com/future-team
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

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _style = require('./style');

var styleArrayObj = _interopRequireWildcard(_style);

var _utilJs = require('./util.js');

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