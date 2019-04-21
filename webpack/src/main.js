// main.js 项目的JS入口文件  

// 1、导入JQuery 
// improt * from  * 是ES6中导入入模块的方式
// 由于ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'

$(function(){
    // 每次都要重新输入 就是麻烦 修改颜色 
    $("li:odd").css("backgroundColor","red")
    $("li:even").css("backgroundColor",function(){
        return "#"+"Dfff00"
    })
})

// webpack 能做什么事情
// 1 、webpack 能够处理 JS 文件的互相依赖关系：理想状态一个项目只有一个main.js 但是不推荐
// 2、webpack 能够处理Js的兼容的问题，把高级的浏览器不识别的语法转化为低级的浏览器能够执行的

// 运行的命令格式 ：webpack  要打包的文件的路径  -o  输出文件的路径

