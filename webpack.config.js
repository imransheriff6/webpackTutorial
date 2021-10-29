const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //This property defines where the application starts
    entry: './src/Index.js',

    //This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool:'source-map',
    devServer: {
		historyApiFallback:true
	 },
    //Setup loaders
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: 'file-loader'
            }
        ]
    },

    // Setup plugin to use a HTML file for serving bundled js files
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
