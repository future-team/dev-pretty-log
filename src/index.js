/**
 * devLog 0.0.1
 * Copyright(c) 2016 https://github.com/mtuan-f4  dianping.com
 * MIT Licensed
 */
/**
 * 仅仅在开发环境下打印日志，上线后自动根据域名去除所有日志打印功能
 * 共有以下6个api供外界调用,使用方式和原先的alert和console基本相同
 * log/warn/error/dir/alarm/debug
 * 同时增加close和open方法可以手动开关日志调试功能
 *
 */

import env from './env';
import * as styleArrayObj from './style';
import  {
    loggerConsole,
    hasOwn,
    extendProto,
} from './util.js';

var logProto ={
    /**
     * 打印日志，并标注颜色
     * @method log
     * @param args
     */
    log:function(args){
        var finalArgs=styleArrayObj['log'].concat([].slice.call(arguments));
        loggerConsole.apply(null,finalArgs)
    },
    /**
     * 打印debug信息
     * @param args  你所想要打印的变量
     */
    debug:function(args){
        var finalArgs=styleArrayObj['debug'].concat([].slice.call(arguments));
        loggerConsole.apply(null,finalArgs)
    },
    /**
     * 打印警告信息，并标注颜色
     * @method warn
     * @param args
     */
    warn:function(args){
        var finalArgs=styleArrayObj['warn'].concat([].slice.call(arguments));
        loggerConsole.apply(null,finalArgs)
    },
    /**
     * 打印错误信息，并标注颜色
     * @method error
     * @param args
     */
    error:function(args){
        var finalArgs=styleArrayObj['error'].concat([].slice.call(arguments));
        loggerConsole.apply(null,finalArgs)
    },
    /**
     * 打印类对象信息，并标注颜色
     * @method dir
     * @param arguments
     */
    dir:function(){
        var finalArgs=styleArrayObj['dir'].concat([].slice.call(arguments));
        loggerConsole.apply(null,finalArgs)
    },
    /**
     * 将相关参数字符串化，并在窗口alarm和打印console
     * @method alarm
     * @param msg
     */
    alarm:function(msg){
        let transString=(function(){
            switch (typeof msg){
                case 'object':
                    return JSON.stringify(msg);
                default:
                    return msg||'';
            }
        }());
        var finalArgs=styleArrayObj['alarm'].concat([].slice.call(arguments));
        loggerConsole.apply(null,finalArgs);
        alert(transString);
    },
    open:function(bool){
        localStorage.setItem('__onLine__','onLine');
        if(bool) location.reload();
    },
    close:function(bool){
        localStorage.setItem('__onLine__','offLine');
        if(bool) location.reload();
    }
};
var factory =function(){
    var loggerFactory=function(){};
    extendProto(loggerFactory.prototype,logProto,env());
    var devLog =  new loggerFactory();
    devLog.__proto__.open = logProto.open;
    devLog.__proto__.close = logProto.close;
    //增加开关，api隐藏在prototype的原型里
    return devLog
};
if(window){
    window['devLog'] = factory();
}else{
    console.warn('devLog is a FE tool,better use it in FE development rather than node ENV')
}
export default factory();

