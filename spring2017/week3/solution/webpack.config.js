const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = function (env) {
    let config = {
        entry: {app: "./src/main.ts", polyfills: "./src/polyfills.ts"},
        devtool: 'source-map',
        output: {
            path: path.resolve('dist'),
            filename: '[name].[hash].js',
            chunkFilename: '[id].[hash].chunk.js',
            publicPath: '/',
            sourceMapFilename: '[name].[chunkhash].bundle.map',
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: 'node_modules',
                    use: [{loader: 'awesome-typescript-loader'}, {loader: 'angular2-template-loader'}]
                },
                { 
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: /\.async\.(html|css)$/
                },
                /* Async loading. */
                {
                    test: /\.async\.(html|css)$/,
                    loaders: ['file?name=[name].[hash].[ext]', 'extract']
                },
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            ]
        },
        plugins: [
            //new webpack.NoEmitOnErrorsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app', 'polyfills']
                //minChunks: module => /node_modules/.test(module.resource)
            }),
            new webpack.ContextReplacementPlugin(
                // The (\\|\/) piece accounts for path separators in *nix and Windows
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                path.resolve('src'), // location of your src
                {} // a map of your routes
            ),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devServer: {
            contentBase: './dist',
            stats: 'minimal'
        }
        
    };
    if (env === 'production') {
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                mangle: { screw_ie8: true },
                compress: { screw_ie8: true},
                mangle: {
                    keep_fnames: true
                },
                output:{
                    comments: false
                }
            })
    }
    return config;
}
