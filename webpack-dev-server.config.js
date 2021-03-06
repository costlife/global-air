var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    // 入口文件
    entry: {
        'global-air': [
            'webpack/hot/dev-server',
            'webpack/hot/only-dev-server',
            './src/entry/index'
        ],
    },
    // 产出路径
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    devServer: {
        proxy: {
          '/flight': {
            target: 'http://192.168.4.79',
            secure: false
          }
        }
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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html'
        }),
    ]
};