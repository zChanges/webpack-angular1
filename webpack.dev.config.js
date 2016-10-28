var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var node_modules_PATH = path.resolve(ROOT_PATH,'node_modules');


var config = {
    entry: {
      src: path.resolve(APP_PATH, 'app')
    },
    output: {
      path: BUILD_PATH,
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
    module: {
      loaders: [
        { test: /\.html$/, exclude: /node_modules/, loader: 'raw-loader?stage=0'},
        /*安装babel-loader babel-core babel-preset-es2015*/
        {  test: /\.js$/, exclude: /(node_modules|bower_components)/,include: APP_PATH, loader: 'babel', query:{ presets: ['es2015'] } },//ES6
        {test: /\.ts(x?)$/, loader: 'ts-loader',  exclude: /node_modules/},
      ]
    },
    plugins: [
       new HtmlwebpackPlugin({
         title: 'webpack-angular',
         template:'./src/index.html',
         inject:'body'
       }),
       new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
           compress: { warnings: false } 
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        //【2】注意这里  这两个地方市用来配置common.js模块单独打包的
        //多个文件应用一个js
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",//和上面配置的入口对应
            filename: "vendor.js"//导出的文件的名称
        })
    ]
}


module.exports = config