<template>
    <div id="app">
        <div class="home-container">
            <div class="home-head">
                <div class="home-head-left">
                    <img class="home-head-left-img" src="http://pa74otoy6.bkt.clouddn.com/logo.png" alt="公司logo">
                </div>
                <el-menu class="el-menu-demo" active-text-color="#81b316" background-color="#ffffff" default-active="首页"
                         :router="true" mode="horizontal">
                    <el-menu-item :index="data.title" v-for="(data,key) in menus" :key="key" :label="key"
                                  :route="data.path">
                        {{data.title}}
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="home-main">
                <router-view></router-view>
            </div>
            <div class="home-bottom">
                <div class="home-btm-top">
                    <div class="home-btm-top-left">
                        <ul v-for="(data,key) in btmmenus" :key="key" :aria-label="key" style="margin-top:50px;">
                            <li v-for="(menu,index) in data" :key="index">
                                <router-link class="home-btm-top-left-list" :to="menu.path" :style="menu.style">
                                    {{menu.title}}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="home-btm-top-right">
                        <p>全国订购电话</p>
                        <p style="font-size:27px;">0571 8373 1743</p>
                    </div>
                </div>
                <hr style="height:0.5px;border:none;border-top:1px solid #c7c7c7;margin-top:40px;"/>
                <div class="home-btm-foot">
                    <ul class="home-btm-foot-left">
                        <li>联系我们</li>
                        <li>|</li>
                        <li>使用条款</li>
                        <li>|</li>
                        <li>法律声明</li>
                    </ul>
                    <ul class="home-btm-foot-right">
                        <li>Company</li>
                        <li>|</li>
                        <li>Product</li>
                        <li>|</li>
                        <li>Service</li>
                        <li>|</li>
                        <li>Classic case</li>
                        <li>|</li>
                        <li>News</li>
                        <li>|</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import menus from './common/menus'
    import btmmenus from './common/btmmenus'

    export default {
        name: 'App',
        data() {
            return {
                menus: [],
                btmmenus: []
            }
        },
        created() {
            this.menus = menus
            this.btmmenus = btmmenus
            this._isMobile()
        },
        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                if (flag) {
                    window.location.href = "https://m.iteastyle.com"
                }
            }
        }
    }
</script>

<style lang="scss">
    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    html,
    body,
    #app {
        margin: 0;
        min-width: 1270px;
        font-family: 14px/1.5 Helvetica, Tahoma, Arial, 'Microsoft Yahei', 'Hiragino Sans GB';
    }

    .ql-align-center {
        text-align: center;
    }

    .home-head {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 60px;
    }

    .home-head-left {
        height: 60px;
    }

    .home-head-left-img {
        height: 50px;
        margin-top: 5px;
    }

    .home-bottom {
        background-color: #f0f0f0;
    }

    .home-btm-top {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-right: 20px;
    }

    .home-btm-top-left {
        display: flex;
        flex-direction: row;
        justify-content: center;

    }

    .home-btm-top-left-list {
        color: #c0c0c0;
        margin-left: 40px;
        font-size: 15px;
    }

    .home-btm-top-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #626262;
        margin-left: 80px;
        margin-top: 50px;
    }

    .home-btm-foot {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 50px;
        margin-top: 20px;
        margin-left: 20px;
    }

    .home-btm-foot-left {
        display: flex;
        justify-content: center;
        font-size: 10px;
    }

    .home-btm-foot-right {
        display: flex;
        justify-content: center;
        font-size: 10px;
        margin-left: 210px;
    }

    .home-btm-foot-left li {
        margin-left: 10px;
        color: #626262;
    }

    .home-btm-foot-right li {
        margin-right: 10px;
        color: #626262;
    }
</style>
