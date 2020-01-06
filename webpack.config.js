const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const {argv} = require('yargs');
const {mode="development", name="index"} = argv;
const staticPath = `static/`
console.log(argv);

const isDev = mode === 'development';
const envConfig = require(`./config/webpack.${mode}`);
const baseConfig = {
    entry: {
        app: path.resolve(__dirname, './src/client/index.tsx')
    },
    output: {
        filename: `${staticPath}/script/[name].js`,
        path: path.resolve(__dirname, './dist'),
        publicPath: isDev ? '/' : './'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|ts|tsx|js)$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                'css-loader',
                // 'postcss-loader',
                'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: isDev ? '[name].[ext]' : '[hash].[ext]',
                        outputPath: isDev ? 'image' :`${staticPath}/image`, //输出路径
                    },
                  },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.js','.tsx', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: isDev ? `index.html` : `view/${name}.html`,
            title: '测试',
            template: path.resolve(__dirname, './src/client/template.html')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: isDev ? '[name].css' : `${staticPath}/css/[name].[hash].css`,
            chunkFilename: isDev ? '[id].css' : `${staticPath}/css/[id].[hash].css`,
        }),
    ]
}
module.exports = merge(baseConfig, envConfig);