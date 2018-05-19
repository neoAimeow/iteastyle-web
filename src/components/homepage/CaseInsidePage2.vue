<template>
<div>
  <div class="cip2-head">
      <img src="../../assets/state-logo.png" style="height:50%;" alt="">
  </div>
  <div class="cip2-body">
    <img src="../../assets/tea-case-images.png" alt="">
    <div class="cip2-body-title">
      <img src="../../assets/case-title.png" style="width:50%;height:auto;">
      <span style="color:white;margin-top:10px">英菲尼迪国博车展茶歇</span>
    </div>
    <img src="../../assets/tea-case-images.png" alt="">
    <img src="../../assets/tea-case-images.png" alt="">
    <img src="../../assets/tea-case-images.png" alt="">
    <img src="../../assets/tea-case-images.png" alt="">
  </div>
</div>
</template>

<style lang="scss">
.cip2-head{
    background:url(../../assets/state-background.png) no-repeat center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    margin-bottom:60px;

}
.cip2-body{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 800px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 60px;
}
.cip2-body-title{
width: 240px;
height: 150px;
background-color:#9bc248;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
.cip2-body img{
  width: 240px;
  height: 150px;
}
</style>
