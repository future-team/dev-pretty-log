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

import env from './env';
import * as styles from './style';
var hasOwn ={}.hasOwnProperty;
//extend key/value to target
var extendProto =function(target,extension,isCopyValue){
    for(var key in extension){
      if(hasOwn.call(extension,key)){
          //如果是线上有域名的环境，则每个function都是return false，默认不做动作
          target[key]=isCopyValue?extension[key]:function(){return false};
      }
    }
};

var logProto ={
    /**
     * 打印日志，并标注颜色
     * @method log
     * @param args
     */
    log:function(args){
        console.log("%c Log",styles['log'],args)
    },
    /**
     * debug拥有debug和log的功能
     * @param args  你所想要打印的变量
     * @param bool  是否采用debug模式,在此处打上breakpoint
     */
    debug:function(args,bool){
        if(bool){
            console.log("%c Debugging",styles['debugging'],args);
            debugger;
        }else{
            console.log("%c Debug",styles['debug'],args);
        }
    },
    /**
     * 打印警告信息，并标注颜色
     * @method warn
     * @param args
     */
    warn:function(args){
        console.log("%c Warn",styles['warn'],args);
    },
    /**
     * 打印错误信息，并标注颜色
     * @method error
     * @param args
     */
    error:function(args){
        console.log("%c Error",styles['error'],args)
    },
    /**
     * 打印类对象信息，并标注颜色
     * @method dir
     * @param arguments
     */
    dir:function(){
        console.log("%c Dir",styles['dir'],arguments);
    },
    /**
     * 将相关参数字符串化，并在窗口alert和打印console
     * @method alert
     * @param msg
     */
    alert:function(msg){
        let transString=(function(){
            switch (typeof msg){
                case 'object':
                    return JSON.stringify(msg);
                default:
                    return msg||'';
            }
        }());
        console.log("%c Alert",styles['alert'],transString);
        alert(transString);
    }
};
var factory =function(){
    var loggerFactory=function(){};
    extendProto(loggerFactory.prototype,logProto,env());
    return new loggerFactory();
};
window['devLog'] = factory();
export default factory();

