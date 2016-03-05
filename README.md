## dev-pretty-log(前端项目的本地及线上调试日志模块)

#### 主要功能介绍

-  封装alert和console
-  对前端本地开发的日志记录添加样式，打印信息的形式更加直观
-  自动检测线上环境，去除所有的打印信息及alert
-  增加线上日志调试接口。重现开发日志，便于处理项目线上问题

### 注意点
> 默认仅对localhost和127.0.0.1的url地址可见日志

#### 安装

- bower install dev-pretty-log --save
- npm install dev-pretty-log --save-dev
- git clone https://github.com/mtuan-f4/dev-pretty-log.git

### 使用
>html:script标签引入

```
	<script src="path to dev-pretty-log/dist/dev-pretty-log.min.js"></script>
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
	devLog.open()//开启日志
	devLog.open(true)//自动刷新日志
	devLog.close()//关闭日志
	devLog.close(true)//关闭日志并自动刷新
	
```

### 命令

``` bash	

	npm run build	#打包	
	npm run demo	#例子演示	
	
```



