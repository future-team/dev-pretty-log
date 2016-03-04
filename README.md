# devLog(前端项目的本地及线上日志模块，封装了alert和console的功能)

## 主要功能介绍
-  一个模块封装alert和console
-  对前端本地开发的日志记录添加样式，打印信息的形式更加直观
-  自动检测线上环境，去除所有的打印信息及alert
-  增加线上日志调试接口，重现所有开发日志，方便处理项目上线后出现的问题


## 使用
- bower install devLog --save
- npm install devLog --save-dev
- git clone https://github.com/mtuan-f4/devLog.git

``` javascript

	import devLog from 'devLog'
	devLog.alert({a:1});
	devLog.log('hello','world');
	devLog.debug('hello world');
	devLog.warn('warning');
	devLog.error('warning');
	devLog.dir('warning');
	
```

## 命令

``` bash
	#测试	
	npm run test	
	#打包	
	npm run build	
	#例子演示	
	npm run demo	
```


