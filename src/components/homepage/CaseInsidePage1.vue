<template>
  <div>
      <div class="cip1-head">
          <img src="../../assets/state-logo.png" style="height:50%;" alt="">
      </div>
      
      <div class="cip1-body">
        <router-link to="case-insidepage2" class="cip1-link">
          <div>
            <img class="cip1-body-img" src="../../assets/tea-case-images.png" alt="">
            <div class="cip1-body-title"><span style="color:white;font-size: 14px;">绍兴玛莎莉蒂“双十一”活动</span></div>
          </div>
        </router-link>
        <router-link to="case-insidepage2" class="cip1-link">
          <div>
            <img class="cip1-body-img" src="../../assets/tea-case-images.png" alt="">
            <div class="cip1-body-title"><span style="color:white;font-size: 14px;">绍兴玛莎莉蒂“双十一”活动</span></div>
          </div>
        </router-link>
        <router-link to="case-insidepage2" class="cip1-link">
          <div>
            <img class="cip1-body-img" src="../../assets/tea-case-images.png" alt="">
            <div class="cip1-body-title"><span style="color:white;font-size: 14px;">绍兴玛莎莉蒂“双十一”活动</span></div>
          </div>
        </router-link>
        <router-link to="case-insidepage2" class="cip1-link">
          <div>
            <img class="cip1-body-img" src="../../assets/tea-case-images.png" alt="">
            <div class="cip1-body-title"><span style="color:white;font-size: 14px;">绍兴玛莎莉蒂“双十一”活动</span></div>
          </div>
        </router-link>
        <router-link to="case-insidepage2" class="cip1-link">
          <div>
            <img class="cip1-body-img" src="../../assets/tea-case-images.png" alt="">
            <div class="cip1-body-title"><span style="color:white;font-size: 14px;">绍兴玛莎莉蒂“双十一”活动</span></div>
          </div>
        </router-link>
        <router-link to="case-insidepage2" class="cip1-link">
          <div>
            <img class="cip1-body-img" src="../../assets/tea-case-images.png" alt="">
            <div class="cip1-body-title"><span style="color:white;font-size: 14px;">绍兴玛莎莉蒂“双十一”活动</span></div>
          </div>
        </router-link>      
      </div>
      
  </div>
</template>

<style lang="scss">
.cip1-head{
    background:url(../../assets/state-background.png) no-repeat center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    margin-bottom:60px;

}
.cip1-body{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  width: 650px;
  margin: 0 auto;
  padding-bottom: 50px;
  //background-color:red;
}
.cip1-link{
  width: 200px;
  height: 150px;
  margin-bottom: 20px;
}
.cip1-body-img{
  width: 200px;
  height: 150px;
  z-index:-1;
  position:absolute;
}
.cip1-body-title{
  position: relative;
  top: 100px;
  width: 200px;
  height: 40px;
  background-color:rgba(174,203,87, 0.83);
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
