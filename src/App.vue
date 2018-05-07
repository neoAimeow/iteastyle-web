<template>
  <div id="app">
    <div class="home-container">
      <div class="home-head">
        <div class="head-left">杭式下午茶</div>
        <ul class="head-middle">
          <li class="head-middle-list" v-for="(data,key) in menus" :key="key" :label="key">
            <router-link :to="data.path">{{data.title}}</router-link>
          </li>
        </ul>
        <div class="head-right">微信</div>
      </div>
      <div class="home-center">
        <router-view>
        <div class="center-top"></div>
        <div class="center-middle"></div>
        <div class="center-footer"></div>
        </router-view>
      </div>
      <div class="home-bottom">
        <div class="bottom-top">
          <ul class="bottom-top-left" v-for="(data,key) in bottommenus" :key="key" :lable="key">
            <li v-for="(menu,index) in data" :key="index"><span>{{menu.title}}</span></li>
          </ul>
          <div class="bottom-top-right">
            <p style="font-size: 12px;">全国订购电话</p>
            <p style="font-size:27px;margin-top: -10px;">400 688 6888</p>
            <button style="margin-top: -20px;height: 30px;">在线客服</button>
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

<style lang="scss" scoped>
  ul{
    list-style: none;
  }
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }
/*页面无法使用百分比来设定分部占比*/
  .home-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .home-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: red;
    width: 100%;
  }
  .head-left{
    margin-left: 50px;
  }
  .head-middle{
    display: flex;
    flex-direction: row;
  }
  .head-middle-list{
    margin-left: 20px;
    color: rgb(34, 33, 33);
    font-size: 12px;
  }
  .head-right{
    margin-right: 50px;
  }
  .home-center{
    display: flex;
    flex-direction: column;
    height: 650px;
    width: 100%;
    background-color: yellow;
  }
  .home-bottom{
    background-color: turquoise;
    height: 190px;
    width: 100%;
  }
  .bottom-top{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom-top-left{
    background-color: red;
    font-size: 12px;
  }
  .bottom-top-right{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: tomato;
    margin-left: 50px;
  }
  .bottom-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .bottom-footer-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 337px;
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
