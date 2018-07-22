<template>
    <div class="sc-container">
      <div class="sc-head">
        <div class="head-name-top">
          <span>TEA BREAK WITH<br>IMAGINATIVE AND HEALTHY</span>
          <div class="head-name-bottom">
            <span class="C-name">创意茶歇</span>
            <img class="title-logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="logo">
            <span class="C-name" style="margin-left:10px;">健康时尚</span>
          </div>
        </div>

      </div>

      
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">

        <el-tab-pane label="茶歇服务" name="first">
          <TeaBreakService></TeaBreakService>
        </el-tab-pane>

        <el-tab-pane label="茶艺表演" name="second">
          <Performance></Performance>
        </el-tab-pane>

        <el-tab-pane label="DIY活动" name="third">
          <DIYActivites></DIYActivites>
        </el-tab-pane>
        
        <el-tab-pane label="茶文化讲座" name="fourth">
          <Seminar></Seminar>
        </el-tab-pane>

        <el-tab-pane label="杭州伴手礼" name="fifth">
          <Souvenir></Souvenir>
        </el-tab-pane>

      </el-tabs> 
       
    </div>
</template>

<script>
 import TeaBreakService from '../service/teaBreakService.vue';
 import Performance from '../service/performance.vue';
 import DIYActivites from '../service/diyActivites.vue';
 import Seminar from '../service/seminar.vue';
 import Souvenir from '../service/souvenir.vue';

  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
      TeaBreakService,
      Performance,
      DIYActivites,
      Seminar,
      Souvenir
    }
  };
</script>

<style lang="scss" scoped>

.sc-container{
  margin:0;
  padding: 0;
}
.sc-head{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
  background:url("http://pa74otoy6.bkt.clouddn.com/service-title-bkground.png") no-repeat;
  background-size:100% auto ;
  height: 300px;
}
.head-name-top{ 
  z-index: 1;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: center; 
  font-size: 35px;
}

.head-name-bottom{ 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  min-width:500px;
}

.title-logo{
  width:60px;
  height:auto;
  margin:0 20px;
}

.C-name{
  letter-spacing:10px;
}
</style>
