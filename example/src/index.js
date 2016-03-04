/**
 * Created by slashhuang on 16/3/3.
 */



import devLog from '../../src/main.js';
devLog.log('1st param','2nd param');
devLog.warn('warn');
devLog.debug('add true to pause programming');
devLog.dir('warn');
devLog.error('error');
devLog.dir('warn','dir',{a:1,b:{c:2}});
devLog.alert('alert a string');
devLog.alert({a:'test',b:{c:'test'}});

