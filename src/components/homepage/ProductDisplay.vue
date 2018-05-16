<template>
  <div class="pd-container">
    <div class="head">
    <img src="../../assets/Small-Logo2.png">
    </div>
    <div class="body">
      <img src="../../assets/left.jpeg">
      <div class="pd-picture">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <p style="margin-top:3px;font-size:20px;margin-left:65px">抹茶费南雪</p>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <p style="margin-top:3px;font-size:20px;margin-left:65px">抹茶费南雪</p>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <p style="margin-top:3px;font-size:20px;margin-left:65px">抹茶费南雪</p>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <p style="margin-top:3px;font-size:20px;margin-left:65px">抹茶费南雪</p>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <p style="margin-top:3px;font-size:20px;margin-left:65px">抹茶费南雪</p>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <p style="margin-top:3px;font-size:20px;margin-left:65px">抹茶费南雪</p>
        </div>
      </div>
      <img src="../../assets/right.jpeg">
      <!--<router-link to="/homepage/display-insidepage" class="body-img">
        <img src="../../assets/Tea-break-service.png" alt="">
        <p>好吃的</p>
      </router-link>
      <a href="*" class="body-img">
        <img src="../../assets/Tea-break-service.png" alt="">
        <p>好吃的</p>
      </a>
      <a href="*" class="body-img">
        <img src="../../assets/Tea-break-service.png" alt="">
        <p>好吃的</p>
      </a>
      <a href="*" class="body-img">
        <img src="../../assets/Tea-break-service.png" alt="">
        <p>好吃的</p>
      </a>
      <a href="*" class="body-img">
        <img src="../../assets/Tea-break-service.png" alt="">
        <p>好吃的</p>
      </a>
      <a href="*" class="body-img">
        <img src="../../assets/Tea-break-service.png" alt="">
        <p>好吃的</p>
      </a>-->
    </div>
  </div>
</template>

<style lang="scss">
.head{
  background:url(../../assets/Small-Logo-background.png);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.body{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:80%;
  height:630px;
  margin: 0 auto;
  //background-color:black;
}
//.body-img{
  //text-align: center;
//}

.pd-picture{
  //background:blue;
  width:900px;
  height:500px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
.pd{
  width:250px;
  height:200px;
  //background-color:orange;
  margin-top:25px;
}
.picture{
  width:250px;
  height:165px;
  border:solid 1px #aeaeae;
}

.img-style{
width:95%;
margin-top:5px;
margin-left:5px;
}

.picture-name{
  width:250px;
  height:50px;
  background-color:blueviolet;
}
</style>
