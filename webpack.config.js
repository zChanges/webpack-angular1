var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');//自动生成html包含打包好的bundles.js

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var node_modules_PATH = path.resolve(ROOT_PATH,'node_modules');


var compiler = {
    /*
    *打包入口文件，
    *如果是数据--将多个模块打包成一个文件，存在依赖的话，依赖性最高的放在最后面
    *如果是键值形式的对象，需要打包多个模块采用键值形式
    */
    entry: {
      src: path.resolve(APP_PATH, 'app')
    },
    /*
    *输出的文件名 合并以后的js会命名为bundle.js
    *当是打包多个模块时。输出filename不能是固定名称   可采用[name]:对应entry的键名(name)
    */
    output: {
      path: BUILD_PATH,
      // filename: '[name].js'
      filename:'bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json'],
        alias:{
          'jquery':path.resolve(node_modules_PATH, 'jquery/dist/jquery.min')
        }
    },
    devServer: {
      hot: true,
      inline: true
    },
    /*
    *module.loaders:定义对模块的处理逻辑
    *test:正则，用于匹配要处理的文件
    *loaders:字符串或数组。如果只需要一个模块加载器，就使用string
    *include:字符串或数组，包含的文件夹
    *exclude:字符串或者数组,排除文件
    */
    module: {
      loaders: [
        { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader?stage=0'},
        /*安装babel-loader babel-core babel-preset-es2015*/
        {  test: /\.js$/, exclude: /(node_modules|bower_components)/,include: APP_PATH, loader: 'babel', query:{ presets: ['es2015'] } },//ES6
        {test: /\.ts(x?)$/, loader: 'ts-loader',  exclude: /node_modules/},
      ]
    },
    //添加我们的插件 会在build自动生成一个html文件
    plugins: [
       new HtmlwebpackPlugin({
         title: 'webpack-angular',
         template:'./src/index.html',//自定义模块
         inject:'body'//把js资源加载在body之后
       }),
       new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ]
}


module.exports = compiler