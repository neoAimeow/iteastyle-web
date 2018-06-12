<template>
  <div class="home-container">
    <div class="home-head">
      <el-row type="flex" justify="center">
        <el-col :span="12"><img src="*" alt="公司logo"></el-col>
        <el-col :span="12">
          <el-menu active-text-color="#81b316" default-active="首页" class="el-menu-demo" :router="true" mode="horizontal">
            <el-menu-item :index="data.title" v-for="(data,key) in menus" :key="key" :label="key" :route="data.path">
              {{data.title}}
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="home-btm">
      <div class="btm-top">
        <ul class="btm-top-left" v-for="(data,key) in btmmenus" :key="key" :label="key">
          <li v-for="(menu,index) in data" :key="index">
            <router-link :to="menu.path" :style="menu.style">{{menu.title}}</router-link>
          </li>
        </ul>
        <div class="btm-top-right">
          <p style="font-size: 12px;">全国订购电话</p>
          <p style="font-size: 27px; margin-top: 10px;">400 688 6888</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menus from './common/menus'
import btmmenus from './common/btmmenus'
export default {
  name: 'APP',
  data(){
    return{
      menus:[],
      btmmenus:[]
    }
  },
  created(){
    this.menus = menus
    this.btmmenus = btmmenus
  }
}
</script>

<style lang="scss">
html,
body,
.home-container{
  margin: 0;
  min-width: 950px;
  font-family: "Lantinghei SC";
  color: #626262;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
