import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/components/homepage/index.vue'
import Company from '@/components/homepage/company.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-index',
      component: HomeIndex
    },
    {
      path: '/homepage/company',
      name: 'company',
      component: Company
    }
  ]
})
