// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ELEMENT from 'element-ui'
import axios from 'axios'

import VueProgressiveImage from 'vue-progressive-image'
import VueAMap from 'vue-amap';
import VueSilentbox from 'vue-silentbox'
import moment from 'moment'
import qiniu_domain from './common/config.js'

if (process.env.NODE_ENV === 'development') {
    require('element-ui/lib/theme-chalk/index.css')
    Vue.use(moment)
    Vue.use(ELEMENT)
}
Vue.config.productionTip = false
Vue.use(VueProgressiveImage)
Vue.use(VueAMap)
Vue.use(VueSilentbox)

let request = axios.create({
    baseURL: 'https://iteastyle-api.aimeow.com/service/',
    timeout: 5000
});

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

Vue.prototype.$ajax = request
Vue.prototype.$imageDomain = qiniu_domain

/* eslint-disable no-new */
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '4566198fcdceda0404a449781377549e',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    render: h => h(App)
})
