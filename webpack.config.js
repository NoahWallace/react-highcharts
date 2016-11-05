const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'react-highcharts.js',
        libraryTarget: 'commonjs'
    },
    externals: {
        'react': 'React',
        'highcharts': 'Highcharts',
        'react-dom': 'ReactDOM'
    },
    resolve:{
        extensions: ['', '.js', '.jsx'],
        alias:{
            'react': 'React'
        }
    },
    module: {
        noparse: ['react', 'highcharts'],
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: []
};
