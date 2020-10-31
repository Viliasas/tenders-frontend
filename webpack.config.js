// Import dependencies
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = (env) => {
    return {
        watch: env.watch === 'true',
        mode: env.mode,
        entry: './app/app.module.js',
        output: {
            filename: 'app.bundle.js',
            path: path.resolve(__dirname, 'public/js'),
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
                    loader: 'html',
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
            ]
        },
        devtool: 'inline-source-map',
        plugins: [
            new FriendlyErrorsWebpackPlugin(),
        ],
    };
}
