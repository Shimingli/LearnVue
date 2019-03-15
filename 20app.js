// 导入http的内置模块
const http = require("http")
// 创建一个 http服务器
const server = http.createServer()
// 监听 http 服务器的request的请求
server.on('request', function (req, res) {

    const url = req.url

    console.log("我是服务器，我启动了url==="+url)
    if (url === "/getDemo") {
        var scrip = "show()"
        res.end(scrip)
    } else {
        res.end("404")
    }
})
// http://127.0.0.1:3000/getDemo
// 指定端口号并启动服务器监听 感觉好像go语言啊
server.listen(3000, function () {
    console.log("我是服务器，我启动了")
})