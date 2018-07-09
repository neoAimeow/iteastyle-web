<template>
    <div class="ts-container">
        <div class="ts-head">
            <img style="width:100%;" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="">
            <div class="ts-title">
                <div class="ts-title-en">
                    <span>TEA BREAK</span>
                    <span>INFORMATION</span>
                </div>
                <div class="ts-title-logo">
                    <img style="width:60px;height:60px;" src="http://pa74otoy6.bkt.clouddn.com/150.png" alt="">
                    <span style="letter-spacing:10px;margin-left:30px;">茶式动态</span>
                </div>
            </div>
        </div>
        
        <div class="ts-main">
            <img style="width:300px;height:200px;" src="http://pa74otoy6.bkt.clouddn.com/state-portrait.png" alt="">
            <div class="ts-main-content">
                <div class="ts-main-content-title">
                    <span style="color:#9dc135;">这份小确幸，你想要么？</span>
                    <span style="font-size:10px;">xxxx年xx月xx日</span>
                </div>
                <div class="ts-main-content-center">
                    <span>转眼夏至 这一年已经过去一半 正值夏天 闷热、阵雨、烈日似乎是个不太好的季节。。。</span>
                </div>
                <div class="ts-main-content-more">
                    <router-link to="./teaStateInside"><span>MORE</span></router-link>
                </div>
            </div>
        </div>
        <div class="ts-main">
            <img style="width:300px;height:200px;" src="http://pa74otoy6.bkt.clouddn.com/state-portrait.png" alt="">
            <div class="ts-main-content">
                <div class="ts-main-content-title">
                    <span style="color:#9dc135;">这份小确幸，你想要么？</span>
                    <span style="font-size:10px;">xxxx年xx月xx日</span>
                </div>
                <div class="ts-main-content-center">
                    <span>转眼夏至 这一年已经过去一半 正值夏天 闷热、阵雨、烈日似乎是个不太好的季节。。。</span>
                </div>
                <div class="ts-main-content-more">
                    <router-link to="./teaStateInside"><span>MORE</span></router-link>
                </div>
            </div>
        </div>
        <div class="ts-main">
            <img style="width:300px;height:200px;" src="http://pa74otoy6.bkt.clouddn.com/state-portrait.png" alt="">
            <div class="ts-main-content">
                <div class="ts-main-content-title">
                    <span style="color:#9dc135;">这份小确幸，你想要么？</span>
                    <span style="font-size:10px;">xxxx年xx月xx日</span>
                </div>
                <div class="ts-main-content-center">
                    <span>转眼夏至 这一年已经过去一半 正值夏天 闷热、阵雨、烈日似乎是个不太好的季节。。。</span>
                </div>
                <div class="ts-main-content-more">
                    <router-link to="./teaStateInside"><span>MORE</span></router-link>
                </div>
            </div>
        </div>
        <div class="ts-main">
            <img style="width:300px;height:200px;" src="http://pa74otoy6.bkt.clouddn.com/state-portrait.png" alt="">
            <div class="ts-main-content">
                <div class="ts-main-content-title">
                    <span style="color:#9dc135;">这份小确幸，你想要么？</span>
                    <span style="font-size:10px;">xxxx年xx月xx日</span>
                </div>
                <div class="ts-main-content-center">
                    <span>转眼夏至 这一年已经过去一半 正值夏天 闷热、阵雨、烈日似乎是个不太好的季节。。。</span>
                </div>
                <div class="ts-main-content-more">
                    <router-link to="./teaStateInside"><span>MORE</span></router-link>
                </div>
            </div>
        </div>
        <div class="ts-main">
            <img style="width:300px;height:200px;" src="http://pa74otoy6.bkt.clouddn.com/state-portrait.png" alt="">
            <div class="ts-main-content">
                <div class="ts-main-content-title">
                    <span style="color:#9dc135;">这份小确幸，你想要么？</span>
                    <span style="font-size:10px;">xxxx年xx月xx日</span>
                </div>
                <div class="ts-main-content-center">
                    <span>转眼夏至 这一年已经过去一半 正值夏天 闷热、阵雨、烈日似乎是个不太好的季节。。。</span>
                </div>
                <div class="ts-main-content-more">
                    <router-link to="./teaStateInside"><span>MORE</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<!--<script>
export default {
  data() {
    return {
        items: [],
        backgroundImageUrl:'',
        currentPage:1,
        totalCount:0,
        pageSize:4
    };
  },
  created: function() {
    this.request();
  },
    methods: {
        currentPageChanged(val) {
          this.currentPage = val;
              this.request();
        console.log(`当前页: ${val}`);
      },
      request() {
           var that = this;
            this.$ajax.get('/getPosts', {
                params: {
                    page:this.currentPage,
                    pageSize:this.pageSize
                }
            })
        .then(function (response) {
        console.log(response.data);
        that.items = response.data.model.posts;
        that.backgroundImageUrl = response.data.model.postBackgroundImage;
        that.totalCount = response.data.model.totalCount
        })
        .catch(function (response) {
        console.log(response);
        });
    }
    }
}
</script> -->

<style lang="scss">
.ts-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ts-head{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ts-title{
    position: absolute;
    z-index: 1;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ts-title-en{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 35px;
}
.ts-title-logo{
    margin-top: 20px;
    font-size: 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 270px;
}
.ts-main{
    margin-top: 40px;
    margin-bottom: 40px;
    min-width: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.ts-main-content{
    margin-left: 20px;
    min-width: 500px;
}
.ts-main-content-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
.ts-main-content-center{
    margin-top: 20px;
    margin-left: 15px;
}
.ts-main-content-more{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: solid 1px #9dc135;
    border-radius: 3px;
    text-align: center;
    color: #9dc135;
    width: 15%;
    height: 25px;
    font-size: 10px;
}
</style>
