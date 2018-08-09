import Vue from 'vue'
import Router from 'vue-router'

const homeIndex = r => require.ensure([], () => r(require('@/components/homepage/index.vue')), 'homeIndex');
const companyStory = r => require.ensure([], () => r(require('@/components/homepage/companyStory.vue')), 'companyStory');
const productDisplay = r => require.ensure([], () => r(require('@/components/homepage/productDisplay.vue')), 'productDisplay');
const serviceContent = r => require.ensure([], () => r(require('@/components/homepage/serviceContent.vue')), 'serviceContent');
const teaState = r => require.ensure([], () => r(require('@/components/homepage/teaState.vue')), 'teaState');
const contactUs = r => require.ensure([], () => r(require('@/components/homepage/contactUs.vue')), 'contactUs');
const teaStateInside = r => require.ensure([], () => r(require('@/components/homepage/teaStateInside.vue')), 'teaStateInside');
const teaDessert = r => require.ensure([], () => r(require('@/components/display/teaDessert.vue')), 'teaDessert');

Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/',
            name: 'homeIndex',
            component: homeIndex,
            meta: {
                title: '杭式下午茶-首页'
            }
        },
        {
            path: '/homepage/companyStory',
            name: 'companyStory',
            component: companyStory,
            meta: {
                title: '杭式下午茶-公司故事'
            }
        },
        {
            path: '/homepage/productDisplay',
            name: 'productDisplay',
            component: productDisplay,
            meta: {
                title: '杭式下午茶-产品展示'
            }
        },
        {
            path: '/homepage/serviceContent',
            name: 'serviceContent',
            component: serviceContent,
            meta: {
                title: '杭式下午茶-服务内容'
            }
        },
        {
            path: '/homepage/teaState',
            name: 'teaState',
            component: teaState,

            meta: {
                title: '杭式下午茶-茶式动态'
            }
        },
        {
            path: '/homepage/contactUs',
            name: 'contactUs',
            component: contactUs,

            meta: {
                title: '杭式下午茶-联系我们'
            }
        },
        {
            path: '/homepage/teaStateInside',
            name: 'teaStateInside',
            component: teaStateInside,

            meta: {
                title: '杭式下午茶-茶式动态'
            }
        },
        {
            path: '/display/teaDessert',
            name: 'teaDessert',
            component: teaDessert,

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
