const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: 'dist',
        filename: 'react-highcharts-ts.js',
        libraryTarget: 'commonjs'
    },
    exclude: /node_modules/,
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'highcharts': 'Highcharts',

    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.tsx', '.ts'],
    },
    module: {
        noparse: ['react', 'highcharts'],
        loaders: [{
            test: /\.ts(x?)$/,
            loaders: ['babel-loader','ts-loader'],

        }],
        preLoaders:[{
            test: /\.jsx?$/,
            loader:'source-map'
        }]
    },
    plugins: [
        new cleanWebpackPlugin(['dist'])
    ]
};
