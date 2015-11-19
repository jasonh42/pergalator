var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/build/',
        publicPath: '/',
        filename: 'build.js'
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
        new BrowserSyncPlugin(
          // BrowserSync options
          {
            // browse to http://localhost:3001/ during development
            host: 'localhost',
            port: 3001,
            // proxy the express server
            // (which should be serving on http://localhost:3000/)
            // through BrowserSync
            proxy: 'http://localhost:3000/'
          },
          // plugin options
          {
            // sinc we are not using Webpack Dev Server let browsersync reload page
            reload: true
          }
        )
    ],
    babel: {
        presets: ['es2015']
    }
};
