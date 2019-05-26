// main.js 项目的JS入口文件  

// 1、导入JQuery 
// improt * from  * 是ES6中导入入模块的方式
// 由于ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'

//在这里导入 css 样式表 
// 注意webpack只能打包js类型的文件，无法处理其他非JS的文件
// 需要手动安装第三方 loader的加载器
import "./css/index.css"
// 处理less的文件 
//安装npm i less-loader -D
//安装npm i less
import "./css/index.less"

//需要loader
//安装npm i sass-loader -D
//安装内部依赖 npm i node-sass -D   最好使用 cnpm i node-sass-D
import "./css/index.scss"

// 1、需要安装 npm i style-loader css-loader -D
// 2、打开 webpack.config.js 这个配置文件，新建module节点，用于配置所有第三方模块的加载器

$(function(){
    // 每次都要重新输入 就是麻烦 修改颜色 
    $("li:odd").css("backgroundColor","yellow")
    $("li:even").css("backgroundColor",function(){
        return "#"+"Dfff00"
    })
})

// webpack 能做什么事情
// 1 、webpack 能够处理 JS 文件的互相依赖关系：理想状态一个项目只有一个main.js 但是不推荐
// 2、webpack 能够处理Js的兼容的问题，把高级的浏览器不识别的语法转化为低级的浏览器能够执行的

// 运行的命令格式 ：webpack  要打包的文件的路径  -o  输出文件的路径



//class是 ES6提供的新的语法，用来实现ES6中面向对象编程
class P{
    static info={name:"25",age:20}
}
//和 java 实现面向对象的方式完全一样 
// var p=new P()

console.log(P.info)


//在webpack中，默认只能处理一部分ES6的新的语法。一些语法是处理不了的
//需要借助第三放的loader把高级语法转为低级的语法


//通过Babel,帮我们将高级的语法转化为低级的语法 
// 1、在webpack中，可以运行如下两套的命令，安装两套包去安装 Babel 
// a、 cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// b、 cnpm i babel-preset-env babel-preset-stage-0 -D

// 2、打开webpack 的配置文件，在module节点下的rules数组中，添加一个新的
//匹配规则
// 把 node_modules 排除外，
 // a、 {test:/\.js$/,use:"bable-loader",exclude:/node_modules/}
 //  b、 在配置babel的loader规则时候，必须把node_modules 目录，通过exclude 排除掉
 // 因为：1、不排除node_modules拍除外的话，会把node_modules中所有的第三方的JS文件
 //都打包编译，这样，会非常的消耗Cpu，打包的速度会非常的慢
//   因为： 2、如果Babel把node—moduls都打包完成了，项目也运行不起来


//    3、在项目的根目录中，新建一个叫做 .babelrc 的Babel的配置文件，这个配置文件
//属于JSON个数，所以在写 .babelrc 配置的时候，必须符合JSON语法规范，不能写注释，字符串必须用双引号

// a、 .bablerc 如下的配置 presets 翻译成语法的意思

// {
//     "presets" : ["env","stage-0"],
//     "plugins" : ["transform-runtime"]
// }



