module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    },
    babel: {
        presets: ['es2015']
    }
};