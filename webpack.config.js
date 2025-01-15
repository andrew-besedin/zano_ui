const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            name: 'zano_ui',
            type: 'umd'
        },
        globalObject: 'this',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.module\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                            },
                            sourceMap: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'next': 'next',
    },
};
