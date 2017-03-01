
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
             {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({use: 'css!sass'})
            }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
    /*    new ExtractTextPlugin('css/style.css', {
            allChunks: true
        })
    */
    new ExtractTextPlugin({
        filename:'css/style.css', disable: false, allChunks: true
    })
    ]
};