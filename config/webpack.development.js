const path = require('path');

module.exports = {
    devServer: {
        historyApiFallback: true,
        port: 9000,
        contentBase: path.resolve(__dirname, '../dist'),
        proxy: {
            '/api': 'http://localhost:8080'
        }
    }
}