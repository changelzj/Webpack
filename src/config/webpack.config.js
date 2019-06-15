const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin  } = require('clean-webpack-plugin');

/**
 * entry:入口，从哪里开始
 * output.publicPath：强制设置为index.html提供资源的路径
 * devServer.contentBase：server默认服务于根路径下的index.html，该属性设置指向哪个目录下的index
 * 
 * entry:定义一个入口，一个页面
 * entry[] 定义一个入口，将数组内页面合并
 * entry:{page1:[], page2:''} 定义多组chunk，module.exports.output.filename要进行区分
 */
module.exports = {
    mode: "development",
    //entry:'./src/js/entry.js',
    //entry: ['./src/js/entry.js','./src/js/a.js'], 
    entry:{
        main:'./src/js/entry.js',
        a:'./src/js/a.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve('./dest/')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {limit:8192}
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase:'dest/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
            inject: 'head',
            title: "Webpack App",
            date: new Date(),
            excludeChunks: ['a'] // 排除chunk
        }),
        new HtmlWebpackPlugin({
            template: "src/a.html",
            filename: "a.html",
            inject: 'head',
            excludeChunks: ['main']
        }),
        new CleanWebpackPlugin()
    ]
};


