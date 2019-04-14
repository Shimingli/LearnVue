* **欢迎关注我的公众号**
![公众号](https://upload-images.jianshu.io/upload_images/5363507-0a0cf2e5fd8f843d.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* **学习的内容如下**


* **开始**

* ** nrm的使用**
npm 安装一些包会出现问题，很可能问题的原因是我们的网络。npm 的包的安装源有挺多，默认是 npm，如果在国内，我们可以把安装源切换成 taobao ，这样安装的速度会快很多。
```
# 先用 npm 安装 nrm 小工具
npm install nrm --global

# 安装后查看现在的 npm 的安装源
nrm ls

# 切换使用 taobao 作为 npm 的安装源
nrm use taobao

# 查看当前安装源用的是什么
nrm ls
```
注意有时候你使用 taobao 作为安装源也可能会遇到一些问题，这时候可以暂时再把安装源再切换成原来的 npm 。

![image.png](https://upload-images.jianshu.io/upload_images/5363507-d41175a240a8d748.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### webpack
* **网页中静态资源**
* JS 
  * .js  .jsx  .coffee .ts(TypeScript  C#)

*  CSS
   *  .css  .less .sass(基本上没有人用了)  .scss
*   Images 
    * .jpe   .png  .gif  .bmp  .svg 
*  字体文件
    * .svg .ttf   .eot  .woff  .woff2
*  （Fonts） 模板文件
     * .ejs   .jade  .vue(在weppack中定义组件的方式，推荐使用)

* **网页中静态资源多了的问题？**
* 1、加载速度慢，因为我们要发起很多的二次请求；
* 2、要处理赋复杂的依赖关系
* **如何解决问题？**
* 1、合并、压缩、精灵图、图片的Base64编码（url直接指向Base64）
* 2、使用requireJS、也可以使用webpack可以解决依赖关系
* **什么是webpack？**
* webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。基于Node.js 开发出来的前端工具

[webpack](https://www.webpackjs.com/concepts/)

  ![image.png](https://upload-images.jianshu.io/upload_images/5363507-c2469a49ed3553e5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

* **完美的解决方法**
* 1、基于Gulp，基于 task 任务的
* 2、使用webpack，是基于整个项目进行构建的
   *  webpack自动化构建工具，可以完美的实现资源的合并、打包、压缩、混淆等诸多功能 