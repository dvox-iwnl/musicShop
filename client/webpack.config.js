const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './app.js'),
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        proxy: {
            "/api": {
              target: "http://localhost:3000",
            }
          }
    },
    // 配置webpack打包文件类型
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|woff2?|ttf|svg|jpg|jpeg|png)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].min.[ext]",
                            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new VueLoaderPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}