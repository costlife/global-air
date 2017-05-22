var webpack = require('webpack');
// nodejspath 模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var buildPath = path.resolve(__dirname, 'output/webroot');
// webpack 若需要迁移文件操作，需要加载transfer-webpack-plugin 插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    // 入口文件
    entry : {
        pgc_web_v2 : [
            './src/entry/mp-web/index.js'
        ],
        pgc_web_v2_public : [
            './src/entry/mp-web/public.js'
        ]
    },
    // 配置加载后缀名
    resolve: {
        extensions: ["", ".js", ".jsx"],
        alias: {
            'react': path.resolve(path.join(__dirname, 'node_modules', 'react'))
        }
    },
   // 产出路径
    output: {
        publicPath: '//mp.toutiao.com/static/v2/',
        path: buildPath,
        filename: "resource/pgc_web_v2/[name]_[hash].js"
    },
    module: {
        loaders: [{
            test: /\.(css|less)$/,
            loader: 'style!css!postcss!less'
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: ['babel-loader'], // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015', 'stage-1']
            },
            plugins: [
                'transform-class-properties'
            ]
        }, {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.jpg$/,
            loader: "url-loader?limit=100000"
        }, {
            test: /\.svg/,
            loader: "url-loader?limit=100000&minetype=image/svg+xml"
        }]
    },
    postcss: [
        autoprefixer({
            browsers: ['FireFox > 1','Chrome > 1','ie >= 8']
        })
    ],
    plugins: [
        /*
        @Des:生产环境
        */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        // 配置js压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../templates/template/pgc_web_v2/page/index.html',
            template: 'src/templates/index.html',
            chunks: ['pgc_web_v2'],
            hash : true
        }),
        new HtmlWebpackPlugin({
            filename: '../templates/template/pgc_web_v2/page/public.html',
            template: 'src/templates/public.html',
            chunks: ['pgc_web_v2_public'],
            hash : true
        }),
        new HtmlWebpackPlugin({
            filename: '../templates/template/pgc_web_v2/page/ban.html',
            template: 'src/templates/ban.html',
        }),
        new TransferWebpackPlugin([{
            from: './',
            to: 'resource/pgc_web_v2/static'
        }], path.resolve(__dirname, "src/static"))
    ]
};
