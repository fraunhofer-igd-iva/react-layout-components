const path = require('path');
const packagejson = require('./package.json');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'lib'),
        library: packagejson.name,
        libraryTarget: 'umd'
    },
    externals: {
        bootstrap: 'bootstrap',
        react: 'react',
        "react-dom": 'react-dom',
        reactstrap: 'reactstrap'
    }
};