## webpack

* 模块打包器，除了html外，认为其他元素都是模块

* 安装webpack4: npm install --save-dev webpack@^4

核心概念：  
1. 入口  
2. 输出   
3. 加载器：webpack本身只加载js json模块,加载其他的元素要下载对应的加载器  
4. 插件：实现加载器不能完成的功能  

* 支持的模块化规范：es6  commonjs amd, webpack1.0不支持es6，如果要支持需要babel转换为es5  


* 安装css加载器：npm install --save-dev style-loader（添加到页面） css-loader(加载)
* 安装图片的加载器：npm install --save-dev file-loader url-loader 
* 安装html插件：npm install --save-dev html-webpack-plugin clean-webpack-plugin





