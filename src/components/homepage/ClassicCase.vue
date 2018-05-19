<template>
  <div class="cc-container">


    <router-link to="/homepage/case-insidepage1">
    <div style="width:200px;height:450px;">
      
      <div style="width:200px;height:300px;background-img:url(../../assets/tea-case-images.png);">
    
        <img src="../../assets/teacase-light-logo.png" style="width:40%;z-index:1;">
      </div>
      
      <div calss="case-foot" style="width:200px;height:150px;display:flex;align-items:center;justify-content:center;background-color:yellow;">
        <img src="../../assets/case-tea-dessert.png" style="width:50%">
      </div>

    </div>      
    </router-link>
    {{cases}}

    
  </div>






    <!--<router-link to="/homepage/case-insidepage1">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403898400&di=dadaeaf28bc0df9132c5953a4a8c70c3&imgtype=0&src=http%3A%2F%2Fgb.cri.cn%2Fmmsource%2Fimages%2F2007%2F04%2F11%2Fwc070411032.jpg" alt="">
    </router-link>
    <router-link to="/homepage/case-insidepage1">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403898400&di=dadaeaf28bc0df9132c5953a4a8c70c3&imgtype=0&src=http%3A%2F%2Fgb.cri.cn%2Fmmsource%2Fimages%2F2007%2F04%2F11%2Fwc070411032.jpg" alt="">
    </router-link>
    <router-link to="/homepage/case-insidepage1">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403898400&di=dadaeaf28bc0df9132c5953a4a8c70c3&imgtype=0&src=http%3A%2F%2Fgb.cri.cn%2Fmmsource%2Fimages%2F2007%2F04%2F11%2Fwc070411032.jpg" alt="">
    </router-link>
    <router-link to="/homepage/case-insidepage1">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403898400&di=dadaeaf28bc0df9132c5953a4a8c70c3&imgtype=0&src=http%3A%2F%2Fgb.cri.cn%2Fmmsource%2Fimages%2F2007%2F04%2F11%2Fwc070411032.jpg" alt="">
    </router-link>
    <router-link to="/homepage/case-insidepage1">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403898400&di=dadaeaf28bc0df9132c5953a4a8c70c3&imgtype=0&src=http%3A%2F%2Fgb.cri.cn%2Fmmsource%2Fimages%2F2007%2F04%2F11%2Fwc070411032.jpg" alt="">
    </router-link>-->
  
</template>

<script>
  import {
    casesGQL
  } from '@/graphql/Case';

  export default {
  
    apollo: {
      cases: {
        query() {
          return casesGQL;
        }
      },
    },
    data() {
      return {
        cases: {},
      }
    },
  }
</script>
<style lang="scss">
.cc-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1200px;
  margin-top: 30px;
  margin: 0 auto;
}
//.cc-container img{
  //width: 200px;
  //height: 400px;
//}
.case-foot{

}
</style>
