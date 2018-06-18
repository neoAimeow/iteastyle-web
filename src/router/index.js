import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/components/homepage/index.vue'
import CompanyStory from '@/components/homepage/companyStory.vue'
import ProductDisplay from '@/components/homepage/productDisplay.vue'
import ClassicCase from '@/components/homepage/classicCase.vue'
import TeaState from '@/components/homepage/teaState.vue'
import ContactUs from '@/components/homepage/contactUs.vue'

import ProductInside from '@/components/homepage/productInside.vue'
import TeaStateInside from '@/components/homepage/teaStateInside.vue'
import ClassicCaseInside1 from '@/components/homepage/classicCaseInside1.vue'
import ClassicCaseInside2 from '@/components/homepage/classicCaseInside2.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: HomeIndex
    },
    {
      path: '/homepage/companyStory',
      name: 'companyStory',
      component: CompanyStory
    },
    {
      path: '/homepage/productDisplay',
      name: 'productDisplay',
      component: ProductDisplay
    },
    {
      path: '/homepage/classicCase',
      name: 'classicCase',
      component: ClassicCase
    },
    {
      path: '/homepage/teaState',
      name: 'teaState',
      component: TeaState
    },
    {
      path: '/homepage/contactUs',
      name: 'contactUs',
      component: ContactUs
    },
    {
      path: '/homepage/productInside',
      name: 'productInside',
      component: ProductInside
    },
    {
      path: '/homepage/teaStateInside',
      name: 'teaStateInside',
      component: TeaStateInside
    },
    { 
      path: '/homepage/classicCaseInside1',
      name: 'classicCaseInside1',
      component: ClassicCaseInside1},
    {
      path: '/homepage/classicCaseInside2',
      name: 'classicCaseInside2',
      component: ClassicCaseInside2
    }
  ]
})
