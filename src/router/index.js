import Vue from 'vue'
import Router from 'vue-router'

import HomeIndex from '@/components/homepage/index.vue'
import CompanyStory from '@/components/homepage/companyStory.vue'
import ProductDisplay from '@/components/homepage/productDisplay.vue'
import ServiceContent from '@/components/homepage/serviceContent.vue'
import TeaState from '@/components/homepage/teaState.vue'
import ContactUs from '@/components/homepage/contactUs.vue'

import TeaStateInside from '@/components/homepage/teaStateInside.vue'
import TeaDessert from '@/components/display/teaDessert.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      component: HomeIndex,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/homepage/companyStory',
      name: 'companyStory',
      component: CompanyStory,
      meta: {
        title: '公司故事'
      }
    },
    {
      path: '/homepage/productDisplay',
      name: 'productDisplay',
      component: ProductDisplay,
      meta: {
        title: '产品展示'
      }
    },
    {
      path: '/homepage/serviceContent',
      name: 'serviceContent',
      component: ServiceContent,
      meta: {
        title: '服务内容'
      }
    },
    {
      path: '/homepage/teaState',
      name: 'teaState',
      component: TeaState,
      meta: {
        title: '茶式动态'
      }
    },
    {
      path: '/homepage/contactUs',
      name: 'contactUs',
      component: ContactUs,
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/homepage/teaStateInside',
      name: 'teaStateInside',
      component: TeaStateInside,
      meta: {
        title: '茶式动态'
      }
    },
    {
      path: '/display/teaDessert',
      name: 'teaDessert',
      component: TeaDessert,
      meta: {
        title: '产品展示'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
