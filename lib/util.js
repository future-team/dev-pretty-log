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