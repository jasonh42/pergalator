var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/',
        filename: 'build.js'
    },
    resolve: {
      alias: {
        'jquery': path.join(__dirname, 'node_modules', 'jquery/dist/jquery.js'),
      }
    },
    devtool: "source-map",
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            //{ test: /\.scss$/, loaders: ["style", "css", "sass"] },
            //forces all sass require statements into the style.css file.
            //the default functionality is to keep all css inside the main js file.
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery"
        }),
    ],
    babel: {
        presets: ['es2015']
    }
};
