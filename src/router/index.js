import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'

import SiteIndex from '@components/site-manager/index'
import CompanyStory from '@components/site-manager/CompanyStory'
import ProductDisplay from '@components/site-manager/ProductDisplay'
import ServiceContent from '@components/site-manager/ServiceContent'
import ClassicCase from '@components/site-manager/ClassicCase'
import TeaStatus from '@components/site-manager/TeaStatus'
import ContactUs from '@components/site-manager/ContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'site-manager/site-index',
      name: 'site-index',
      component: SiteIndex
    },
    {
      path: '/site-manager/company-story',
      name: 'company-story',
      component: CompanyStory
    },
    {
      path: '/site-manager/product-display',
      name: 'product-display',
      component: ProductDisplay
    },
    {
      path: '/site-manager/service-content',
      name: 'service-content',
      component: ServiceContent
    },
    {
      path: '/site-manager/classic-case',
      name: 'classic-case',
      component: ClassicCase
    },
    {
      path: '/site-manager/tea-status',
      name: 'tea-status',
      component: TeaStatus
    },
    {
      path: '/site-manager/contact-us',
      name: 'contact-us',
      component: ContactUs
    }
  ]
})
