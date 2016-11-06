const cleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: 'dist',
        filename: 'react-highcharts.js',
        libraryTarget: 'commonjs'
    },
    exclude: /node_modules/,
    externals: {
        'react': {
            amd: 'react',
            commonjs: 'react',
            commonjs2: 'react',
            root: 'React'
        },
        'react-dom': {
            amd: 'react-dom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            root: 'ReactDOM'
        },
        'highcharts': 'Highcharts',

    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.tsx', '.ts'],
        alias: {
            'react': 'React'
        }
    },
    module: {
        noparse: ['react', 'highcharts'],
        loaders: [{
            test: /.tsx?$/,
            loader: 'babel',

        }]
    },
    plugins: [
        new cleanWebpackPlugin(['dist'])
    ]
};
