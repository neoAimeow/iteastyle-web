import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/components/homepage/index.vue'
import CompanyStory from '@/components/homepage/companyStory.vue'
import ProductDisplay from '@/components/homepage/productDisplay.vue'
import ServiceContent from '@/components/homepage/serviceContent.vue'
import TeaState from '@/components/homepage/teaState.vue'
import ContactUs from '@/components/homepage/contactUs.vue'

import ProductInside from '@/components/homepage/productInside.vue'
import TeaStateInside from '@/components/homepage/teaStateInside.vue'


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
      path: '/homepage/serviceContent',
      name: 'serviceContent',
      component: ServiceContent
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
    }
  ]
})
