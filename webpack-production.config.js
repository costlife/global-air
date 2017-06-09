var webpack = require('webpack');
// nodejspath 模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack 若需要迁移文件操作，需要加载transfer-webpack-plugin 插件
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var autoprefixer = require('autoprefixer');

const OUTPUT_PATH = "output/opt/intl/frontPage";
const DOMAIN = '/frontPage/static';
module.exports = {
    // 入口文件
    entry: {
        'global-air': [
            './src/entry/index'
        ],
    },
   // 产出路径
    output: {
        publicPath: DOMAIN,
        path: path.resolve(__dirname, `${OUTPUT_PATH}/static`),
        filename: "[name]_[hash].js"
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: [
                "style-loader",
                "css-loader",
                "less-loader"
            ]
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader?limit=10000&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file-loader"
        },  {
            test: /\.(png|jpg|svg)$/,
            use: ['url-loader']
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }]
    },
    // 配置加载后缀名
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            'react': path.resolve(path.join(__dirname, 'node_modules', 'react'))
        }
    },
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
            template: 'src/templates/index.html',
            filename: '../template/index.html',
        }),
        new TransferWebpackPlugin([{
            from: './',
            to: 'static'
        }], path.resolve(__dirname, "src/static"))
    ]
};
