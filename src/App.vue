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
        <div class="btm-top">
          <ul class="btm-top-left" v-for="(data,key) in btmmenus" :key="key" :aria-label="key">
            <li class="btm-top-left-list" v-for="(menu,index) in data" :key="index">
              <router-link :to="menu.path" :style="menu.style">{{menu.title}}</router-link>
            </li>
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
  color: #81b316;
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
</style>
