<template>
  <div id="app">
    <div class="home-container">
      <el-row type="flex" justify="center" >
        <el-col style="max-height:55px;min-width:211px;text-align:right;" 
         :span="8" >
        <img src="./assets/logo.png" alt="">
        </el-col>
        <el-col :push="1"
          :span="14">
          <el-menu active-text-color="#81b316" default-active="首页" class="el-menu-demo" :router="true" mode="horizontal">
          <el-menu-item :index="data.title" v-for="(data,key) in menus" :key="key" :label="key" :route="data.path">
            {{data.title}}
          </el-menu-item>
        </el-menu>
        </el-col>
      </el-row>
      <div>
        <router-view></router-view>
      </div>
      <div class="home-bottom">
        <div class="bottom-top">
          <ul class="bottom-top-left" v-for="(data,key) in bottommenus" :key="key" :label="key">
            <li class="bottom-top-left-list" v-for="(menu,index) in data" :style="menu.style" :key="index">
               <router-link :to="menu.path"><span>{{menu.title}}</span></router-link>
              </li>
          </ul>
          <div class="bottom-top-right">
            <p style="font-size: 12px;">全国订购电话</p>
            <p style="font-size:27px;">400 688 6888</p>
            <button style="height: 30px; width:90px; background-color:#81b316; color:white;">在线客服</button>
            <div class="bottom-top-right-footer"></div>
          </div>
        </div>
        <hr style="height: 1px;background-color: black;">
        <div class="bottom-footer">
          <div class="bottom-footer-left">
            <p style="font-size: 12px;">联系我们</p>
            <p style="margin-left: 10px;">|</p>
            <p style="font-size: 12px;margin-left: 10px;">使用条款</p>
            <p style="margin-left: 10px;">|</p>
            <p style="font-size: 12px;margin-left: 10px;">法律声明</p>
          </div>
          <ul class="bottom-footer-right">
              <li class="bottom-footer-right-list">Company</li>
              <li class="bottom-footer-right-list">|</li>
              <li class="bottom-footer-right-list">Product</li>
              <li class="bottom-footer-right-list">|</li>
              <li class="bottom-footer-right-list">Service</li>
              <li class="bottom-footer-right-list">|</li>
              <li class="bottom-footer-right-list">Classic case</li>
              <li class="bottom-footer-right-list">|</li>
              <li class="bottom-footer-right-list">News</li>
              <li class="bottom-footer-right-list">|</li>
              <li class="bottom-footer-right-list">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menus from './common/menus'
import homebottommenus from './common/homebottommenus'
export default {
  name: 'App',
  data () {
    return {
      menus: [],
      homebottommenus: []
    }
  },
  created () {
    this.menus = menus
    this.bottommenus = homebottommenus
  }
}
</script>

<style lang="scss">
  a {
    text-decoration: none;
    }
  ul{
    list-style: none;
  }
  html,
  body,
  #app {
    margin: 0;
    min-width: 950px;
  }
/*页面无法使用百分比来设定分部占比*/
  .home-container{
    width: 100%;
    height: 100%;
  }
  .home-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // background-color: red;
    width: 100%;
  }
  .head-left{
    margin-left: 50px;
    height: 55px;
    width: 211px;
  }
  .head-right{
    margin-right: 50px;
  }

  .home-bottom{
    //background-color: turquoise;
    height: 190px;
    width: 100%;
  }
  .bottom-top{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom-top-left{
    //background-color: red;
    font-size: 12px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 10px;
  }
  .bottom-top-left-list{
    margin-top: 10px;
  }
  .bottom-top-right{
    margin-left: 50px;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
  .bottom-footer{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom-footer-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom-footer-right{
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom-footer-right-list{
    margin-left: 10px;
    font-size: 12px;
  }
</style>
