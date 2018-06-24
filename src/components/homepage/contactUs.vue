<template>
    <div class="cu-container">
        <progressive-img class="cu-bgimg" :src="info.contactUsBackgroundImage" />
        <div class="cu-main">
            <div class="cu-main-title">
                <span>CONTACT US</span>
                <img src="http://pa74otoy6.bkt.clouddn.com/plus.png" alt="">
                <span>联系我们</span>
                <span style="margin-top:20px;">{{info.contactUsTitle}}</span>
            </div>
            <div class="cu-main-content">
                <span>{{info.companyName}}</span>
                <span>地址：{{info.companyAddress}}</span>
                <span>电话：{{info.telephoneNumber}}</span>
                <span>手机：{{info.phoneNumber}}</span>
                <span>邮箱：{{info.mailAddress}}</span>
                <span>网址：{{info.siteAddress}}</span>
            </div>
            <div class="cu-foot">
            <el-amap class="cu-foot-left" vid="amapDemo" :zoom="zoom" :center="center">
              <el-amap-marker :position="center"></el-amap-marker>
            </el-amap>
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
      info:{},
      center: [0,0],
      zoom:14
    }
  },
  mounted: function() {
    var that = this;
     this.$ajax.get('/contactUsData', {

    })
    .then(function (response) {
      console.log(response.data);
      that.info = response.data.model;
      that.center = [response.data.model.longitude , response.data.model.latitude]
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
