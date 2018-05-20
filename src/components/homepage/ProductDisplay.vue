<template>
  <div class="pd-container">

    <div class="head">
    <img src="../../assets/Small-Logo2.png">
    </div>

    <div class="body">

      <img src="../../assets/left.jpeg">

      <div class="pd-picture">
        
        <router-link to="/homepage/display-insidepage">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div class="picture-name">抹茶费南雪</div>
        </div>
        </router-link>

        <router-link to="/homepage/display-insidepage">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div class="picture-name">抹茶费南雪</div>
        </div>
        </router-link>

        <router-link to="/homepage/display-insidepage">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div class="picture-name">抹茶费南雪</div>
        </div>
        </router-link>

        <router-link to="/homepage/display-insidepage">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div class="picture-name">抹茶费南雪</div>
        </div>
        </router-link>

        <router-link to="/homepage/display-insidepage">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div class="picture-name">抹茶费南雪</div>
        </div>
        </router-link>

        <router-link to="/homepage/display-insidepage">
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div class="picture-name">抹茶费南雪</div>
        </div>
        </router-link>

      </div>
      <img src="../../assets/right.jpeg">
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
  width:80%;
  height:630px;
  margin: 0 auto;
  //background-color:black;
  margin-top: 30px;
  margin-bottom: 30px;
}

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
  display:flex;
  align-items:center;
  justify-content:center; 
}

.img-style{
width:95%;
}

.picture-name{
  //background-color:red;
  text-align:center;
  font-size:20px;
  margin-top:5px;
  color:#626262;
}
</style>
