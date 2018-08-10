// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import VueProgressiveImage from 'vue-progressive-image'
import VueAMap from 'vue-amap';
import VueSilentbox from 'vue-silentbox'

Vue.config.productionTip = false
Vue.use(ELEMENT)
Vue.use(VueProgressiveImage)
Vue.use(VueAMap)
Vue.use(VueSilentbox)
Vue.use(require('vue-moment'))

let request = axios.create({
  baseURL: 'https://iteastyle-api.aimeow.com/service/',
  timeout: 1000
});

Vue.prototype.$ajax = request

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
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
