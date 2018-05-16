<template>
  <div id="app">
    <div class="home-container">
      <el-row type="flex" justify="center" >
        <el-col style="max-height:55px;text-align:right;" 
         :span="8" >
        <img src="./assets/logo.png" alt="">
        </el-col>
        <el-col :push="1"
          :span="15">
          <el-menu active-text-color="#9bc248" default-active="首页" class="el-menu-demo" :router="true" mode="horizontal">
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
          <div style="display:flex;justify-content:space-between;width:810px;">
          <ul class="bottom-top-left" v-for="(data,key) in bottommenus" :key="key" :label="key">
            <li class="bottom-top-left-list" v-for="(menu,index) in data" :key="index">
               <router-link :to="menu.path" :style="menu.style"><span>{{menu.title}}</span></router-link>
              </li>
          </ul>
          <div class="bottom-top-right">
            <p style="font-size: 12px;">全国订购电话</p>
            <p style="font-size:27px;margin-top:10px">400 688 6888</p>
          </div>
          </div>
        </div>
        <div style="height:0.5px;background-color:#aeaeae;"></div>
        <div class="bottom-footer">
          <div style="display:flex;justify-content:space-between;width:825px;">
          <ul class="bottom-footer-left">
           <li class="bottom-footer-left-list">联系我们</li>
              <li class="bottom-footer-left-list">|</li>
              <li class="bottom-footer-left-list">使用条款</li>
              <li class="bottom-footer-left-list">|</li>
              <li class="bottom-footer-left-list">法律声明</li>
          </ul>
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
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  html,
  body,
  #app {
    margin: 0;
    min-width: 950px;
    font-family:"Lantinghei SC";
    color:#626262;
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
    background-color:#f0f0f0;
    height: 350px;
    width: 100%;
  }
  .bottom-top{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height:250px;
    //background-color:blue;

  }
  .bottom-top-left{
    font-weight: normal;
    font-size: 12px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right:35px;
    margin-top:30px;
    //background-color:red;
  }
  .bottom-top-left-list{
    margin-top: 10px;
    //background-color:yellow;
  }

  .bottom-top-left-list a{
    color:#aeaeae;
  }
  
  .bottom-top-right{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left:50px;
  }
  .bottom-footer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color:#f0f0f0;
    margin-top:30px;
  }
  .bottom-footer-left{
    display: flex;
    flex-direction: row;
    //background-color:red;
    width: 210px;
  }

   .bottom-footer-left-list{
    margin-left: 10px;
    font-size: 12px;
  }
  .bottom-footer-right{
    display: flex;
    flex-direction: row;
    margin-left:80px;
    color:#866450;
    //background-color:red;
    width:430px;
  }
  .bottom-footer-right-list{
    margin-left: 10px;
    font-size: 12px;
  }
</style>
