const path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    target: 'node',
    entry: {
        app: './src/server/app.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}