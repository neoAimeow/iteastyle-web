<template>
    <div class="index-container">
        <div class="index-head">
            <el-carousel :height="screenWidth/3+'px'">
                <el-carousel-item v-for="(item,key) in items" :key="key">
                    <progressive-img :src="item" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="index-main">
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/index-TeaBreak.png" />
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/index-TeaCeremony.png" />
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/index-TeaArt.png" />
        </div>
        <div class="index-foot">
            <div class="index-foot-left">
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img1.png" />
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img2.png"  />
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img3.png"  />
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img4.png"  />
            </div>
            <img class="index-foot-right" src="http://pa74otoy6.bkt.clouddn.com/index-foot-right.png" />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "http://pa74otoy6.bkt.clouddn.com/AfternoonTea.jpeg",
        "http://pa74otoy6.bkt.clouddn.com/AfternoonTea.jpeg",
        "http://pa74otoy6.bkt.clouddn.com/AfternoonTea.jpeg"
      ],
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
  }
};
</script>


<style lang="scss">
.index-head {
  margin-top: 20px;
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
  height: 80px;
  width: 180px;
}
</style>
