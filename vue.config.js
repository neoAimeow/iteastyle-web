// vue.config.js
var CompressionWebpackPlugin = require('compression-webpack-plugin')


module.exports = {
    configureWebpack: {
        plugins: [
            new CompressionWebpackPlugin({
                asset: '[path].gz[query]',
                algorithm: 'gzip',
                test: new RegExp(
                    '\\.(' +
                    ['js', 'css'].join('|') +
                    ')$'
                ),
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    }
}