const path = require("path")

// 在内存中生成HTML页面插件，只要是插件，就比放到 plugins中去
//作用
//1、自动在内存中根据指定的页面生成一个内存的页面
//2、自动把打包好的bundle.js 追加到页面中去
const htmlplugin = require('html-webpack-plugin')

// webpack 基于node 
// 这个配置文件 就是一个JS文件，通过node中的模块操作，向外暴露了一个配置对象
module.exports = {
    //   需要手动配置入口和出口
    //entry 入口，表示要使用webpack 打包那个文件
    entry: path.join(__dirname, './src/main.js'),
    //  输出文件的配置，到那个目录中去
    output: {
        path: path.join(__dirname, "./dist"),
        //  输出的名称
        filename: "bundle.js"
    },
    //配置环境 这是开发  
    mode: 'development',
    //这是正式
    // mode: 'production'

    //这是dev-server 命令参数的第二种形式，相对来说，比较麻烦  
    devServer: {
        //  --open --port 3001 --contentBase src --hot
        open: true,//自动打开浏览器
        port: 3002,//启动的运行的端口
        contentBase: "src",//指定托管的根目录
        hot: true,//启动热更新
    },
    plugins: [
        //创建在内存中生成html页面的插件
        new htmlplugin({
            //指定模板页面，根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, "./src/index.html"),
            //指定生成的页面的名称
            filename: "index.html"

        })
    ],
    //// 2、打开 webpack.config.js 这个配置文件，新建module节点，用于配置所有第三方模块的加载器
    module: {
        //所有第三方模块的匹配规则
        rules: [
            {
                //正则
                //处理css文件第三方的loader的规则
                test: /\.css$/, use: ["style-loader", "css-loader"]
            },
            {
                //这是配置处理less文件的loader的规则
                test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                //这是配置处理sass文件的loader的规则
                test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"]
            }

        ]
    }




}

// 当我们在控制台直接输入 webpack命令执行的时候，webpack做了几个步骤
// 1、没有使用webpack 指定入口和出口
// 2、webpack 就会去项目中的根目录中，找一个webpack.config.js 的配置文件
// 3、当找到了这个配置文件后，webpack就回去执行这个配置文件，解析执行完配置文件后，就得到了配置文件，导出配置对象
// 4、当webpack拿到配置对象了，就拿到了配置文件中入口和出口，然后进行打包和构建

