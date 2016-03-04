/**
 * Created by slashhuang on 16/3/3.
 */

'use strict';

exports.__esModule = true;

exports['default'] = function () {
    //默认不打印,仅仅在本地调试的时候有日志出现
    var applyDevConsole = false;
    var Env = '';
    var HostExp = /127\.0\.01|localhost/ig;
    if (window && window.location) {
        Env = location.hostname;
        applyDevConsole = !!HostExp.test(Env);
    }
    return applyDevConsole;
};

;
module.exports = exports['default'];