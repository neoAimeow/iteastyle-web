<template>
  <div id="app">
    <div class="home-container">
      <div class="home-head">
        <div class="home-head-left">
          <img class="home-head-left-img" src="http://pa74otoy6.bkt.clouddn.com/logo.png" alt="公司logo">
        </div>
        <el-menu class="el-menu-demo" active-text-color="#81b316" default-active="首页" :router="true" mode="horizontal" >
          <el-menu-item :index="data.title" v-for="(data,key) in menus" :key="key" :label="key" :route="data.path">
              {{data.title}}
          </el-menu-item>
        </el-menu>
      </div>
      <div class="home-main"><router-view></router-view></div>
      <div class="home-bottom">
        <div class="home-btm-top">
          <div class="home-btm-top-left" >
            <ul v-for="(data,key) in btmmenus" :key="key" :aria-label="key">
              <li v-for="(menu,index) in data" :key="index">
                <router-link class="home-btm-top-left-list" :to="menu.path" :style="menu.style">{{menu.title}}</router-link>
              </li>
            </ul>
          </div>
          <div class="home-btm-top-right">
            <p style="font-size:12px;">全国订购电话</p>
            <p style="font-size:27px;">400 688 6888</p>
          </div>
        </div>
        <div style="height:0.5px;background-color:#aeaeae;margin-top:40px;"></div>
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
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
html,
body,
#app{
  margin:0;
  min-width: 1000px;
}
.home-head{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
}
.home-head-left{
  height: 60px;
}
.home-head-left-img{
  height: 60px;
}
.home-btm-top{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: 20px;
  margin-top: 50px;
}
.home-btm-top-left{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.home-btm-top-left-list{
  color: #aeaeae;
  margin-left: 40px;
  font-size: 15px;
}
.home-btm-top-right{
  margin-left: 100px;
  color: #626262;

}
.home-btm-foot{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  margin-top: 20px;
}
.home-btm-foot-left{
  display: flex;
  justify-content: center;
  font-size: 15px;
}
.home-btm-foot-right{
  display: flex;
  justify-content: center;
  font-size: 15px;
}
.home-btm-foot-left li{
  margin-left: 10px;
  color: #626262;
}
.home-btm-foot-right li{
  margin-right: 10px;
  color: #626262;
}
</style>
