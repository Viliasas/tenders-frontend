// Import dependencies
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    return {
        watch: env.watch === 'true',
        mode: env.mode,
        entry: {
            ['app']: './app/app.module.js',
            ['app.shell']: './styles/app-shell.scss',
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'public/assets'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {loader: 'css-loader'},
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer'),
                                    ];
                                },
                            },
                        },
                        {loader: 'sass-loader'},
                    ],
                },
            ]
        },
        devtool: 'source-map',
        plugins: [
            new FriendlyErrorsWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
    };
}
