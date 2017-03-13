var path = require('path');
var webpack = require('webpack');
var env = require('yargs').argv.env;
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;//plugin

console.log(env);





// module.exports = config;

module.export = function(env){
    var libraryName = 'sparrow';
    var plugins = [];
    var filename = '';
    if(env === 'production'){
        plugins.push(new uglifyPlugin({minimize: true}));
        //生产环境：sparrow.min.js
        filename = libraryName + '.min.js';
        console.log(filename)
    }else{
        //开发环境：sparrow.js
        filename = libraryName + '.js';
    }

    var config = {
        entry: path.resolve(__dirname, './src/index.js'),
        output: {
            path: path.resolve(__dirname, './lib'),
            filename: filename,
            library: libraryName,
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        devtool: "cheap-source-map"
        ,
        resolve: {
            extensions: ['.js', '.css', 'json']
        },
        module:{
            loaders: [
                {
                    test: /\.js&/,
                    loader: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.js&/,
                    loader: 'eslint',
                    exclude: /node_modules/
                }
            ]
        },
        plugins: plugins

    };

    return config;
}