<template>
  <div id="app">
    <div class="home-container">
      <div class="home-head">
        <div class="home-head-left"><img src="*" alt="公司logo"></div>
        <div class="home-head-right">
          <router-link class="home-head-right-list" :index="data.title" v-for="(data,key) in menus" :key="key" :label="key" :to="data.path">
            {{data.title}}
          </router-link>
        </div>
      </div>
      <div><router-view></router-view></div>
      <div class="home-bottom">
        <div class="home-btm-top">
          <ul class="home-btm-top-left" v-for="(data,key) in btmmenus" :key="key" :aria-label="key">
            <li class="home-btm-top-left-list" v-for="(menu,index) in data" :key="index">
              <router-link :to="menu.path" :style="menu.style">{{menu.title}}</router-link>
            </li>
          </ul>
          <div class="home-btm-top-right">
            <p>全国订购电话</p>
            <p>400 688 6888</p>
          </div>
        </div>
        <hr/>
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
  data(){
    return{
    menus: [],
    btmmenus: []
  }
  },
  created(){
    this.menus = menus
    this.btmmenus = btmmenus
  }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
html,
body,
#app{
  margin:0;
}
.home-head{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 1000px;
  margin-top: 20px;
}
.home-head-left{
  background-color: red;
}
.home-head-right{
  display: flex;
  flex-direction: row;
}
.home-head-right-list{
  margin-left: 20px;
}
.home-btm-top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20px;
}
.home-btm-top-left{
  margin-right: 40px;
}
.home-btm-top-right{
  margin-left: 100px;
}
.home-btm-foot{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.home-btm-foot-left{
  display: flex;
  justify-content: center;
}
.home-btm-foot-right{
  display: flex;
  justify-content: center;
}
</style>
