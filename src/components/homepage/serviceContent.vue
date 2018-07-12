<template>
    <div class="sc-container">
      <div class="sc-head">
        <img style="width:100%;position: absolute;z-index: -1;"  src="http://pa74otoy6.bkt.clouddn.com/service-title-bkground.png" alt="background">
        <div class="head-name-top">
          <span class="E-name">TEA BREAK</span>
          <span class="E-name">WITH IMAGINATIVE AND HEALTHY</span>
          <div class="head-name-bottom">
            <span class="C-name">创意茶歇</span>
            <img src="" alt="logo">
            <span class="C-name">健康时尚</span>
          </div>
        </div>
      </div>

      
      <!-- <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
        <el-tab-pane label="茶歇服务" name="first">茶歇服务</el-tab-pane>
        <el-tab-pane label="茶艺表演" name="second">茶艺表演</el-tab-pane>
        <el-tab-pane label="DIY活动" name="third">DIY活动</el-tab-pane>
        <el-tab-pane label="茶文化讲座" name="fourth">茶文化讲座</el-tab-pane>
        <el-tab-pane label="杭州伴手礼" name="fifth">杭州伴手礼</el-tab-pane>
      </el-tabs>  -->
       
    </div>
</template>

<script>
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
    }
  };
</script>

<!--<script>
export default {
  data() {
    return {
      items:{}
    }
  },
  created: function() {
    var that = this;
     this.$ajax.get('/getCaseTypes', {

    })
    .then(function (response) {
      console.log(response);
      that.items = response.data.model;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script> -->
<style scoped>
.head-name-top{ 
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.head-name-bottom{
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

</style>
