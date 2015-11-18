module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./build",
        publicPath: "/build/",
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: "html" },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ["style", "css", "sass"] }
        ]
    }
};