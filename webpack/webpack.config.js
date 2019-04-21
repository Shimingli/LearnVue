const path = require("path")

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
    mode: 'development'
    //这是正式
    // mode: 'production'

}

// 当我们在控制台直接输入 webpack命令执行的时候，webpack做了几个步骤
// 1、没有使用webpack 指定入口和出口
// 2、webpack 就会去项目中的根目录中，找一个webpack.config.js 的配置文件
// 3、当找到了这个配置文件后，webpack就回去执行这个配置文件，解析执行完配置文件后，就得到了配置文件，导出配置对象
// 4、当webpack拿到配置对象了，就拿到了配置文件中入口和出口，然后进行打包和构建

