<template>
    <div class="index-container">
        <div class="index-head">
            <el-carousel :height="screenWidth/3+'px'">
                <el-carousel-item v-for="(item1,key) in items.headerImages" :key="key">
                    <progressive-img :src="item1" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="index-main">
          <div v-for="(item2,key) in items.serviceImages" :key="key">
            <progressive-img class="index-main-img" :src="item2" />
          </div>
        </div>
        <div class="index-foot">
            <div class="index-foot-left" v-for="(item3,key) in items.showerImages" :key="key">
                <img class="index-foot-img" :src="item3" />
            </div>
            <div class="index-foot-right">
              <span>杭式下午茶，有初恋的温度</span><br>
              <span style="font-size:12px;word-break:keep-all;white-space:nowrap;">茶为国饮，杭为茶都，一份伴手礼，遥遥西湖情</span><br>
              <div class="index-foot-right-font">
                <div><span style="font-size:30px; border:solid 3px #eaffbd;border-radius:5px;">&#xe6cf;</span></div>
                <div style="margin-left:5px;">ONLINE SHOPPING</div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
      screenWidth: document.body.clientWidth
    };
  },
  components: {},
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  watch: {
    screenWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  created: function() {
    var that = this;
     this.$ajax.get('/homepage', {

    })
    .then(function (response) {
      console.log(response.data);
      that.items = response.data.model;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
};
</script>


<style lang="scss">
@font-face {
  font-family: 'iconfont';  /* project id 718738 */
  src: url('//at.alicdn.com/t/font_718738_jpis7s1zgd.eot');
  src: url('//at.alicdn.com/t/font_718738_jpis7s1zgd.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_718738_jpis7s1zgd.woff') format('woff'),
  url('//at.alicdn.com/t/font_718738_jpis7s1zgd.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_718738_jpis7s1zgd.svg#iconfont') format('svg');
}
span {
  font-family: iconfont;
}
.index-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  height:180px;
  width: 100%;
  //background-color: blue;
}
.index-main-img {
  margin-top: 10px;
  height: 170px;
  width: 250px;
  margin-left: 20px;
}
.index-foot {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #9dc135;
  height: 100px;
  margin-top: 40px;
}
.index-foot-img {
  height: 100px;
  width: 180px;
}
.index-foot-left {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.index-foot-right {
  margin-left: 50px;
  margin-top: 10px;
  height: 90px;
  color: #eaffbd;
}
.index-foot-right-font{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  height: 30px;
  //background-color: red;
}
</style>
