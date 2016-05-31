var webpack = require('webpack');
var path = require('path');
var vendors_dir = path.join(__dirname,"/Scripts/vendors");

var config = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            './Scripts/app/app.js'
        ],
        vendors:["es5-sham", "es5-shim", "fetch", "jquery", "bootstrap","react","react-dom","react-router", "redux", "redux-redux", "redux-thunk", "toastr"]
    },
    output: {
        path: 'build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'Scripts/app'),
                loader: 'babel',
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js"),
        new webpack.NoErrorsPlugin()
    ],
    noParse: [
        /[\/\\]node_modules.*/,
    ],
    resolve: {
        alias: {}
    },
    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.noParse.push(new RegExp(path));
    },
};

config.addVendor("es5-sham", vendors_dir + "/es5-shim/es5-sham.js");
config.addVendor("es5-shim", vendors_dir + "/es5-shim/es5-shim.js");
config.addVendor("fetch", vendors_dir + "/whatwg-fetch/fetch.js");
config.addVendor("jquery", vendors_dir + "/jquery/jquery.js");
config.addVendor("bootstrap", vendors_dir + "/bootstrap/bootstrap.js");
config.addVendor("react", vendors_dir + "/react/react.js");
config.addVendor("react-dom", vendors_dir + "/react-dom/react-dom.js");
config.addVendor("react-router", vendors_dir + "/react-router/ReactRouter.js");
config.addVendor("redux", vendors_dir + "/redux/redux.js");
config.addVendor("redux-redux", vendors_dir + "/react-redux/react-redux.js");
config.addVendor("redux-thunk", vendors_dir + "/redux-thunk/redux-thunk.js");
config.addVendor("toastr", vendors_dir + "/toastr/toastr.min.js");

module.exports = config;