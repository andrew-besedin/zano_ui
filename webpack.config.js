import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export default {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            type: 'module'
        },
        globalObject: 'this',
        publicPath: '/',
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]__[hash:base64:5]',
                                exportLocalsConvention: 'camelCaseOnly',
                            },
                            sourceMap: true,
                            esModule: false,
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.scss$/,
                exclude: /\.module\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom',
        'next': 'next',
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css', 
        }),
    ],
};
