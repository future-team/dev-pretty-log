/**
 * Created by slashhuang on 16/3/3.
 */



import devLog from '../../src/main.js';
devLog.log('log');
devLog.warn('warn');
devLog.debug('add true to pause programming',true);
devLog.debug('without 2nd param to true, programming goes on');
devLog.dir('warn');
devLog.alert('alert a string');
devLog.alert({a:'test',b:{c:'test'}});

