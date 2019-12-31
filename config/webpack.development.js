const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, '../dist'),
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'myblog',
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/client/template.html')
        })
    ]
}