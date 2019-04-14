// main.js 项目的JS入口文件  

// 1、导入JQuery 
// improt * from  * 是ES6中导入入模块的方式
// 由于ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery'

$(function(){
    $("li:odd").css("backgroundColor","lightblue")
    $("li:even").css("backgroundColor",function(){
        return "#"+"D97634"
    })
})