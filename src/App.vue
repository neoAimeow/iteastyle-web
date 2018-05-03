<template>
  <div id="app">
    <div class="home-container">
      <div class="home-head">
        <div class="head-left">杭式下午茶</div>
        <ul class="head-middle">
          <li class="head-middle-list">首页</li>
          <li class="head-middle-list">公司故事</li>
          <li class="head-middle-list">产品展示</li>
          <li class="head-middle-list">服务内容</li>
          <li class="head-middle-list">经典案例</li>
          <li class="head-middle-list">茶式动态</li>
          <li class="head-middle-list">联系我们</li>
        </ul>
        <div class="head-right">微信</div>
      </div>
      <div class="home-center">
        <router-view>
        <div class="center-top"></div>
        <div class="center-middle"></div>
        <div class="center-footer"></div>
        </router-view>
      </div>
      <div class="home-bottom">
        <div class="bottom-top">
          <div class="bottom-top-left">
            <ul>
              <li><b>公司故事</b></li>
              <li>公司简介</li>
              <li>联系我们</li>
              <li>在线预约</li>
            </ul>
            <ul>
              <li><b>产品展示</b></li>
              <li>茶饮茶点</li>
              <li>百态效果</li>
            </ul>
            <ul>
              <li><b>服务内容</b></li>
              <li>茶歇服务</li>
              <li>茶艺表演</li>
              <li>DIY活动</li>
              <li>茶文化讲座</li>
              <li>杭州伴手礼</li>
            </ul>
            <ul>
              <li><b>经典案例</b></li>
              <li>茶歇服务</li>
              <li>茶艺表演</li>
              <li>茶文化讲座</li>
              <li>DIY活动</li>
              <li>私茗定制</li>
            </ul>
            <ul>
              <li><b>茶式动态</b></li>
              <li>新闻动态</li>
            </ul>
            <ul>
              <li><b>关注我们</b></li>
              <li>微博</li>
              <li>微信</li>
            </ul>
          </div>
          <div class="bottom-top-right">
            <p style="font-size: 12px;">全国订购电话</p>
            <p style="font-size:27px;margin-top: -10px;">400 688 6888</p>
            <button style="margin-top: -20px;height: 30px;">在线客服</button>
            <div class="bottom-top-right-footer"></div>
          </div>
        </div>
        <hr style="height: 1px;background-color: black;">
        <div class="bottom-footer">
          <div class="bottom-footer-left">
            <p style="font-size: 12px;">联系我们</p>
            <hr style="width: 1px;height: 10px; background-color: black;margin-top: 16px;margin-left: 10px;">
            <p style="font-size: 12px;margin-left: 10px;">使用条款</p>
            <hr style="width: 1px;height: 10px; background-color: black;margin-top: 16px;margin-left: 10px;">
            <p style="font-size: 12px;margin-left: 10px;">法律声明</p>
          </div>
          <ul class="bottom-footer-right">
              <li class="bottom-footer-right-list">Company</li>
              <hr style="width: 1px;height: 10px; background-color: black;margin-top: 3px;margin-left: 10px;">
              <li class="bottom-footer-right-list">Product</li>
              <hr style="width: 1px;height: 10px; background-color: black;margin-top: 3px;margin-left: 10px;">
              <li class="bottom-footer-right-list">Service</li>
              <hr style="width: 1px;height: 10px; background-color: black;margin-top: 3px;margin-left: 10px;">
              <li class="bottom-footer-right-list">Classic case</li>
              <hr style="width: 1px;height: 10px; background-color: black;margin-top: 3px;margin-left: 10px;">
              <li class="bottom-footer-right-list">News</li>
              <hr style="width: 1px;height: 10px; background-color: black;margin-top: 3px;margin-left: 10px;">
              <li class="bottom-footer-right-list">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  ul{
    list-style: none;
  }
  html,
  body,
  #app {
    height: 100%;
    width: 100%;
  }
/*页面无法使用百分比来设定分部占比*/
  .home-container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .home-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: red;
    width: 100%;
  }
  .head-left{
    margin-left: 50px;
  }
  .head-middle{
    display: flex;
    flex-direction: row;
  }
  .head-middle-list{
    margin-left: 20px;
    color: rgb(34, 33, 33);
    font-size: 12px;
  }
  .head-right{
    margin-right: 50px;
  }
  .home-center{
    display: flex;
    flex-direction: column;
    height: 650px;
    width: 100%;
    background-color: yellow;
  }
  .home-bottom{
    background-color: turquoise;
    height: 190px;
    width: 100%;
  }
  .bottom-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .bottom-top-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 12px;
    margin-left: 300px;
  }
  .bottom-top-right{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: tomato;
    margin-right: 300px;
  }
  .bottom-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .bottom-footer-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 337px;
  }
  .bottom-footer-right{
    margin-right: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bottom-footer-right-list{
    margin-left: 10px;
    font-size: 12px;
  }
</style>
