/**
 * logger 0.0.1
 * Copyright(c) 2016 https://github.com/mtuan-f4  dianping.com
 * MIT Licensed
 */
/**
 * 仅仅在开发环境下打印日志，上线后自动消失
 */

/**
 *主要函数功能实现
 *logger.log(var1,var2,"string")======>>>>>var1= (var1 value); var2= (var2 value); "string"
 *logger.dir(var1,var2)======>>>>>> console.dir(var1,var2)
 *logger.warn(var1,var2)======>>>>>console.log('%c warning ', 'background: #ddd; color: red',var1,var2);
 *logger.debug(var1,var2)=====>>>>>> with debug abilities
 */

'use strict';

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _env = require('./env');

var _env2 = _interopRequireDefault(_env);

var _style = require('./style');

var styles = _interopRequireWildcard(_style);

console.log(_env2['default']());

var hasOwn = ({}).hasOwnProperty;
//extend keys in target object
var extendProto = function extendProto(target, extension, isCopyValue) {
    for (var key in extension) {
        if (hasOwn.call(extension, key)) {
            target[key] = isCopyValue ? extension[key] : function () {
                return false;
            };
        }
    }
};

var logProto = {
    log: function log(args) {
        console.log("%c Log", styles['log'], args);
    },
    debug: function debug(args) {
        console.log("%c Debug", styles['debug'], args);
    },
    warn: function warn(args) {
        console.log("%c Warn", styles['warn'], args);
    },
    error: function error(args) {
        console.log("%c Error", styles['error'], args);
    },
    dir: function dir(args) {
        console.log("%c Dir", styles['dir'], args);
    },
    alert: (function (_alert) {
        function alert(_x) {
            return _alert.apply(this, arguments);
        }

        alert.toString = function () {
            return _alert.toString();
        };

        return alert;
    })(function (msg) {
        console.log("%c Alert", styles['alert'], msg);
        alert(msg);
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