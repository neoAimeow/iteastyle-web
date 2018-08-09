import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'homeIndex',
            component: resolve => require(['@/components/homepage/index.vue'], resolve),
            meta: {
                title: '杭式下午茶-首页'
            }
        },
        {
            path: '/homepage/companyStory',
            name: 'companyStory',
            component: resolve => require(['@/components/homepage/companyStory.vue'], resolve),
            meta: {
                title: '杭式下午茶-公司故事'
            }
        },
        {
            path: '/homepage/productDisplay',
            name: 'productDisplay',
            component: resolve => require(['@/components/homepage/productDisplay.vue'], resolve),
            meta: {
                title: '杭式下午茶-产品展示'
            }
        },
        {
            path: '/homepage/serviceContent',
            name: 'serviceContent',
            component: resolve => require(['@/components/homepage/serviceContent.vue'], resolve),
            meta: {
                title: '杭式下午茶-服务内容'
            }
        },
        {
            path: '/homepage/teaState',
            name: 'teaState',
            component: resolve => require(['@/components/homepage/teaState.vue'], resolve),

            meta: {
                title: '杭式下午茶-茶式动态'
            }
        },
        {
            path: '/homepage/contactUs',
            name: 'contactUs',
            component: resolve => require(['@/components/homepage/contactUs.vue'], resolve),

            meta: {
                title: '杭式下午茶-联系我们'
            }
        },
        {
            path: '/homepage/teaStateInside',
            name: 'teaStateInside',
            component: resolve => require(['@/components/homepage/teaStateInside.vue'], resolve),

            meta: {
                title: '杭式下午茶-茶式动态'
            }
        },
        {
            path: '/display/teaDessert',
            name: 'teaDessert',
            component: resolve => require(['@/components/display/teaDessert.vue'], resolve),

            meta: {
                title: '杭式下午茶-产品展示'
            }
        }
    ]
})
export default router

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
