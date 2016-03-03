'use strict';

var logger = function logger(args) {
    debugger;
    //this exp is for getting code variable name
    var LoggerEXP = /logger\.\w*\((.*)\)/;
    var argString = arguments.callee.caller.toString().match(LoggerEXP);
    debugger;
    console.log(argString);
};
var hello = 'hello';
var test = function test() {
    logger(arguments);
};
test(hello);