<template>
    <div class="cu-container">
        <progressive-img class="cu-bgimg" src="http://pa74otoy6.bkt.clouddn.com/contactus-background.png" />
        <div class="cu-main">
            <div class="cu-main-title">
                <span>CONTACT US</span>
                <img src="http://pa74otoy6.bkt.clouddn.com/plus.png" alt="">
                <span>联系我们</span>
                <span style="margin-top:20px;">杭式下午茶 创意茶歇 健康食尚</span>
            </div>
            <div class="cu-main-content">
                <span>杭州执贝科技有限公司</span>
                <span>地址：杭州民和路525号三宏国际8楼</span>
                <span>电话：(86)0571-83731743</span>
                <span>手机：159-0663-1121(滕)</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;158-5823-2263(李)</span>
                <span>邮箱：iteastyle@126.com</span>
                <span>网址：www.iteastyle.com</span>
            </div>
            <div class="cu-foot">
            <el-amap class="cu-foot-left" vid="amapDemo"></el-amap>
            <div class="cu-foot-right">
                <progressive-img class="cu-foot-right-img" src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="" />
                <progressive-img class="cu-foot-right-img" src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="" />
            </div>
        </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted: function() {
     this.$ajax.post('/contactUsData', {
       
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>



<style lang="scss">
.cu-container {
  height: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cu-bgimg {
  width: 100%;
  min-width: 1440px;
  height: 700px;
  position: absolute;
  z-index: -1;
}
.cu-main {
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cu-main-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
}
.cu-main-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}
.cu-foot {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 230px;
  margin-top: 40px;
  margin-left: 100px;
}
.cu-foot-left {
  border: 8px solid #9dc135;
  margin-top: 10px;
  width: 400px;
}
.cu-foot-right {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cu-foot-right-img {
  border: 8px solid #9dc135;
  margin-top: 10px;
  height: 100px;
  width: 100px;
}
</style>
