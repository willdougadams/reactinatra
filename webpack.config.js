const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: [
        './public/index'
    ],
    context: path.resolve(__dirname),
    mode: "development",
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ },
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
        ]
    },
    resolve: {
        extensions: ['.js','.scss', '.tsx', '.ts']
    },
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/',
        hot: true
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    externals: {
        "React": "react",
        "ReactDOM": "react-dom"
    }
}
