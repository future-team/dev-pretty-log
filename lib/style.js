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
var blue = 'color:#07a';
var yellowRed = 'color:#AB3006';
exports['default'] = {
    warn: padding + bg + red,
    debug: padding + bg + blue,
    log: padding + bg + white,
    dir: padding + bg + green,
    alert: padding + bg + yellowRed
};
module.exports = exports['default'];