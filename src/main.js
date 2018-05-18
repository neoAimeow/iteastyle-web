// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueProgressiveImage from 'vue-progressive-image';
import VueVideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import VueSilentbox from 'vue-silentbox'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

Vue.use(VueSilentbox)
Vue.use(VueVideoPlayer, /* {
  options: global default options,
  events: global videojs events
} */)
Vue.use(VueProgressiveImage)
Vue.use(ElementUI)
Vue.config.productionTip = false


const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

// Install the vue plugin
Vue.use(VueApollo)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: { App },
  render: h => h(App)
})

