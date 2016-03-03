/**
 * Created by slashhuang on 16/3/3.
 */
const padding = "padding-right:5px;";
const bg = 'background:#FF9E35;';
const green= 'color:#60b044';
const red = 'color:#cb3837';
const white = 'color:#ffffff';
const purple = 'color:#609';
const blue ='color:#07a';
const yellowRed = 'color:#AB3006';
export default {
    warn :padding+bg+red,
    debug :padding+bg+ blue,
    debugging:padding+bg+purple,
    log:padding+bg+white,
    dir:padding+bg+green,
    alert:padding+bg+yellowRed
};
