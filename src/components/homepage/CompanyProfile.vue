<template>
  <div class="story-container">
    <div class="story">
      <div class="story-title">
        <img src="../../assets/Our-story.png" alt="">
        <div>杭式下午茶</div>
      </div>
      <div class="story-content">
        <p>下午茶是餐饮方式之一，用餐时间介乎午餐和晚餐之间，可以追溯到英国17世纪时期，绵延至今，渐变成现代人休闲习惯。
          由于下午茶并不是每天的正餐，所以不是每天都会有下午茶。近代的下午茶发展自英国维多利亚时代的英式下午茶(afternoon tea)，
          一边吃着西式糕点一边喝茶。其在中国逐渐流行，随着各地餐饮文化的融合，悄然在世界各地发展起来。</p>
        <p>17世纪时，英国上流社会的早餐都很丰盛，午餐较为简便，而社交晚餐则一直到晚上八时左右才开始，
          人们便习惯在下午四时左右吃些点心、喝杯茶。其中有一位很懂得享受生活的女伯爵名叫安娜玛丽亚，
          每天下午她都会差遣女仆为她准备一壶红茶和点心，她觉得这种感觉真好，便邀请友人共享。很快，
          下午茶便在英国上流社会流行起来。</p>
      </div>
      <!--<el-button type="success" style="margin-bottom: 35px;margin-top:10px;background-color:#9bc248;border-color:#9bc248">立即预约>></el-button>-->
    </div>
    <div class="video">
      <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                  >
      </video-player>
    </div>
  </div>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://vjs.zencdn.net/v/oceans.mp4"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
    
    }
  }
</script>

<style lang="scss">
p{
  text-indent: 1.5em;
}
.story-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:url("../../assets/cp-background.png");
  background-repeat:no-repeat;
  background-position:center;
  background-color: #2f1b23;
}

.story{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 35px;
  margin-bottom: 50px;
  background-color: rgba(17,14,30,0.5);
}

.story-title{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  margin-top: 35px;
  color:white;
}

.story-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  color:white;
  margin-bottom: 30px;
}
.video{
  //background-color: red;
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}
</style>
