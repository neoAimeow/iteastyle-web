<template>
  <div class="cu-container">
    <div class="cu-head">
      <img src="../../assets/Small-Logo.png" alt="">
      <p>杭式下午茶 创意茶歇 健康食尚</p>
      <pre>
         杭州*********<br>
         地址:**********************<br>
         电话: (86)0571-********<br>
         手机:159********<br>
             158********
         邮箱:******@126.com<br>
         网址:www.iteastyle.com
      </pre>
    </div>
    <div class="cu-bottom">
      <div class="cu-bottom-left">

      </div>
      <div class="cu-bottom-right">
        <img src="*" alt="二维码">
        <img src="*" alt="二维码" style="margin-top: 20px;">
      </div>
    </div>
  </div>
</template>

<style lang="scss">


.cu-head{
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  margin: 0 auto;
}

.cu-bottom{
  display: flex;
  flex-direction: row;
  width: 700px;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  //background-color: blue;
  height: 300px;
}

.cu-bottom-left{
  background-color: red;
  width: 500px;
  height: 200px;
}

.cu-bottom-right{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
