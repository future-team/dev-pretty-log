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
var styles = {
    warn: padding + bg + red,
    debug: padding + bg + blue,
    alarm: padding + bg + purple,
    log: padding + bg + white,
    dir: padding + bg + green,
    error: padding + bg + yellowRed
};

exports['default'] = {
    log: ["%c Log", styles['log']],
    debug: ["%c Debug", styles['debug']],
    warn: ["%c Warn", styles['warn']],
    dir: ["%c Dir", styles['dir']],
    error: ["%c Error", styles['error']],
    alarm: ["%c Alert", styles['alarm']]
};
module.exports = exports['default'];