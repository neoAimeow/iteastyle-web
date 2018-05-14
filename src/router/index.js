import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/components/homepage/index.vue'
import CompanyProfile from '@/components/homepage/CompanyProfile.vue'
import ProductDisplay from '@/components/homepage/ProductDisplay.vue'
import ClassicCase from '@/components/homepage/ClassicCase.vue'
import TeaState from '@/components/homepage/TeaState.vue'
import ContactUs from '@/components/homepage/ContactUs.vue'
import DisplayInsidePage from '@/components/homepage/DisplayInsidePage.vue'
import CaseInsidePage1 from '@/components/homepage/CaseInsidePage1.vue'
import CaseInsidePage2 from '@/components/homepage/CaseInsidePage2.vue'
import StateInsidePage from '@/components/homepage/StateInsidePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    },
    {
      path: '/homepage/display-insidepage',
      name: '/display-insidepage',
      component: DisplayInsidePage
    },
    {
      path: '/homepage/case-insidepage1',
      name: '/case-insidepage1',
      component: CaseInsidePage1
    },
    {
      path: '/homepage/case-insidepage2',
      name: '/case-insidepage2',
      component: CaseInsidePage2
    },
    {
      path: '/homepage/state-insidepage',
      name: '/state-insidepage',
      component: StateInsidePage
    }
  ]
})
