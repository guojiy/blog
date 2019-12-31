const path = require('path');
const merge = require('webpack-merge');
const {argv} = require('yargs');
const { mode ="development" } = argv;
const envConfig = require(`./config/webpack.${mode}`);

const baseConfig = {
    entry: {
        app: path.resolve(__dirname, './src/client/index.tsx')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {

        }
    }
}

module.exports = merge(baseConfig, envConfig);