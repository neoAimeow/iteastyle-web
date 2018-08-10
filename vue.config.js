// vue.config.js
var CompressionWebpackPlugin = require('compression-webpack-plugin')


module.exports = {
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'element-ui': 'ELEMENT',
            'vue-moment': 'vue-moment',
            'axios':'axios'
        },
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