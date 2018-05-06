import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import HomeIndex from '@/components/homepage/index.vue'
import CompanyProfile from '@/components/homepage/CompanyProfile.vue'
import ProductDisplay from '@/components/homepage/ProductDisplay.vue'
import ClassicCase from '@/components/homepage/ClassicCase.vue'
import TeaState from '@/components/homepage/TeaState.vue'
import ContactUs from '@/components/homepage/ContactUs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/homepage/home-index',
      name: 'home-index',
      component: HomeIndex
    },
    {
      path: '/homepage/company-profile',
      name: 'company-profile',
      component: CompanyProfile
    },
    {
      path: '/homepage/product-display',
      name: 'product-display',
      component: ProductDisplay
    },
    {
      path: '/homepage/classic-case',
      name: 'classic-case',
      component: ClassicCase
    },
    {
      path: '/homepage/tea-state',
      name: 'tea-state',
      component: TeaState
    },
    {
      path: '/homepage/contact-us',
      name: 'contact-us',
      component: ContactUs
    }
  ]
})
