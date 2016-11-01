# 面向大型浏览器简单前端框架模板

## 环境准备

安装nodejs 当前6.9.1


在命令行设置npm镜像：

```bash
npm config set registry='http://registry.npm.taobao.org/'
```

先安装依赖
在cmd项目目录下执行
```bash
$ yarn
```
如果yarn不行用npm：
```bash
$ npm install
```

想要更好的开发体验，还需安装两个 Chrome 插件：[Redux DevTools](https://chrome.google.com/webstore/detail/lmhkpmbekcpmknklioeibfkpmmfibljd) 和 [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) 。

## 调试

```bash
$ npm run build-dev
```
打开新命令行窗口：
```bash
$ npm start
$ open http://localhost:8989/
```

## 生产环境打包

```bash
$ npm run build
```

## 目录结构

```
.
├── build-conf           # 构建配置
├── /dist/               # 构建输出的文件会在这里
├── /node_modules/       # 第三方类库和工具
├── /client/             # 浏览器端执行的源码
│ ├── /views/            # React components
│ ├── /assets/           # 图片cs等资源文件
│ ├── /controllers/      # 智能组件（业务入口）
│ └── /routes/           # 路由信息
├── common               # 公用代码 比如utils
├── server               # node.js服务端代码
├── .babelrc             # babel配置
├── .eslintrc            # 代码检查配置
├── index-template       # HTML文件模板
└── package.json         # 配置入口文件、依赖和 scripts
```

## 工具特性

热替换和 LiveReload --TODO


支持 css-modules --TODO

运行错误和语法错误的提醒 --TODO


数据 mock 和线上调试 --TODO
## API
ROUTER
 - 英文原版：https://github.com/rackt/react-router/tree/master/docs

 - 中文 http://react-guide.github.io/react-router-cn/

Fetch
 - https://developer.mozilla.org/zh-CN/docs/Web/API/GlobalFetch/fetch

React
 - http://wiki.jikexueyuan.com/project/react/



Nodejs
 - http://nodejs.cn/

## 生命周期
componentWillMount
componentDidMount

## 事件原生js
onClick

## 页面跳转

router.push({ pathname: '/antrm/userInfo', state: { select: '1' } });

pathname 页面路径
state 参数

## License


MIT
