module.exports = {
    entry: __dirname + '/src/text.js',
    output: {
        path: __dirname + '/dist',
        filename: 'text.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
