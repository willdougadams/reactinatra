const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        landing: './src/web/landing/index',
        signup: './src/web/signup/index'
    },
    output: {
        path: path.join(__dirname, './public/js'),
        filename: '[name].js'
    },
    context: path.resolve(__dirname),
    mode: 'development',
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader', exclude: /node_modules/ },
            { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.js','.scss', '.tsx', '.ts', '.png', '.svg']
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    externals: {
        'React': 'react',
        'ReactDOM': 'react-dom'
    }
}
