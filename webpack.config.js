var webpack = require('webpack')
module.exports = {
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './app/app.js'],
    output:{
        path:__dirname+'/bundle',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
             }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ]
}
