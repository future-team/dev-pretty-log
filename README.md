## dev-pretty-log(前端项目的本地及线上调试日志模块)

#### 主要功能特点介绍

-  封装alert和console
-  对前端本地开发的日志添加样式，打印信息的形式更加直观
-  自动检测线上环境，去除所有的打印信息及alert
-  增加日志调试开关接口。重现开发日志，便于处理项目线上问题

### 注意点
> 默认仅对localhost和127.0.0.1的url地址可见日志

#### 安装

- npm install dev-pretty-log --save-dev
- git clone https://github.com/future-team/dev-pretty-log

### 使用
>html:script标签引入

```
	<script src="path to dev-pretty-log/dist/dev-pretty-log.min.js"></script>
	<script>
	    devLog.open();//线上开启log功能,本地默认开启
	    devLog.log('hello world');
	    devLog.warn('it's a warning);
	    devLog.close();//关闭log功能
	</script>

```
>JS:ECMAScript6 语法

``` javascript

	import devLog from 'dev-pretty-log'
	devLog.alarm({a:1});//自动将对象转换成字符串,同时在窗口和控制台打印
	devLog.log('hello','world');
	devLog.debug('hello world');
	devLog.warn('warning');
	devLog.error('warning');
	devLog.dir('warning');
	devLog.open()//手动开启日志(默认本地开发不需手动开启)
	devLog.close()//手动关闭日志
	
```

### 命令

``` bash	

	npm run build	#打包	
	npm run demo 	#查看demo方式 cd examples && open index.html
	
```



