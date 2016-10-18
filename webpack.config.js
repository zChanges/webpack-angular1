// var path = require('path');
// var webpack = require('webpack');
// var HtmlwebpackPlugin = require('html-webpack-plugin');//自动生成html包含打包好的bundles.js
//
// // var ROOT_PATH = path.resolve(__dirname);
// // var APP_PATH = path.resolve(ROOT_PATH, 'app');
// // var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
//
//
// //定义了一些文件夹的路径
// var ROOT_PATH = path.resolve(__dirname);
// var APP_PATH = path.resolve(ROOT_PATH, 'src');
// var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
//
//
// module.exports = {
//   //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
//   entry: {
//     app: path.resolve(APP_PATH, 'index.js')
//   },
//   //输出的文件名 合并以后的js会命名为bundle.js
//   output: {
//     path: BUILD_PATH,
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.scss$/,
//         loaders: ['style', 'css', 'sass'],
//         include: APP_PATH
//       },
//       {
//         test: /\.(png|jpg)$/,
//         loader: 'url?limit=40000'
//       },
//       {  test: /\.js$/, exclude: /(node_modules|bower_components)/,include: APP_PATH, loader: 'babel', query: {presets: ["es2015"]} }//ES6
//     ]
//   },
//   devServer: {
//      historyApiFallback: true,
//      hot: true,
//      inline: true,
//      progress: true,
//   },
//   //添加我们的插件 会自动生成一个html文件
//   plugins: [
//      new HtmlwebpackPlugin({
//        title: 'webpack-angular',
//        template:'./src/index.html',//自定义模块
//        inject:'body'//把js资源加载在body之后
//      })
//   ]
// };

var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');//自动生成html包含打包好的bundles.js

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    /*
    *打包入口文件，
    *如果是数据--将多个模块打包成一个文件，存在依赖的话，依赖性最高的放在最后面
    *如果是键值形式的对象，需要打包多个模块采用键值形式
    */
    entry: {
      src: path.resolve(APP_PATH, 'index.js')
    },
    /*
    *输出的文件名 合并以后的js会命名为bundle.js
    *当是打包多个模块时。输出filename不能是固定名称   可采用[name]:对应entry的键名(name)
    */
    output: {
      path: BUILD_PATH,
      filename: '[name].js'
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
        // {
        //   test: /\.scss$/,
        //   loaders: ['style', 'css', 'sass'],
        //   include: APP_PATH
        // },
        // {
        //   test: /\.(png|jpg)$/,
        //   loader: 'url?limit=40000'
        // },
        { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader?stage=0'},
        /*安装babel-loader babel-core babel-preset-es2015*/
        {  test: /\.js$/, exclude: /(node_modules|bower_components)/,include: APP_PATH, loader: 'babel', query:{ presets: ['es2015'] } }//ES6
      ]
    },
    //添加我们的插件 会在build自动生成一个html文件
    plugins: [
       new HtmlwebpackPlugin({
         title: 'webpack-angular',
         template:'./src/index.html',//自定义模块
         inject:'body'//把js资源加载在body之后
       })
    ]
}


// var webpack = require('webpack');
// var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
//
// var ROOT_PATH = path.resolve(__dirname);
// var APP_PATH = path.resolve(ROOT_PATH, 'src');
// var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
//
// module.exports = {
//     entry: {
//       src: path.resolve(APP_PATH, 'index.js')
//     },
//     output: {
//       path: BUILD_PATH,
//       filename: '[name].js'
//     },
//     module: {
//       loaders: [
//
//         {  test: /\.js$/, exclude: /(node_modules|bower_components)/,include: APP_PATH, loader: 'babel', query:{ presets: ['es2015'] } }
//       ]
//     },
//     plugins: [
//        new HtmlwebpackPlugin({
//          title: 'webpack-angular',
//          template:'./src/index.html',
//          inject:'body'
//        })
//     ]
// }
