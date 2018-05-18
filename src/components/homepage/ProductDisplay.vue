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
          <div style=" text-align:center;font-size:20px;margin-top:5px;">抹茶费南雪</div>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div style=" text-align:center;font-size:20px;margin-top:5px;">抹茶费南雪</div>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div style=" text-align:center;font-size:20px;margin-top:5px;">抹茶费南雪</div>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div style=" text-align:center;font-size:20px;margin-top:5px;">抹茶费南雪</div>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div style=" text-align:center;font-size:20px;margin-top:5px;">抹茶费南雪</div>
        </div>
        <div class="pd">
          <div class="picture"><img src="../../assets/Tea-break-service.png" class="img-style"></div>
          <div style=" text-align:center;font-size:20px;margin-top:5px;">抹茶费南雪</div>
        </div>
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
  justify-content: space-between;
  width:80%;
  //height:630px;
  margin: 0 auto;
  //background-color:black;
  margin-top: 30px;
  margin-bottom: 30px;
}

.pd-picture{
  //background:blue;
  width:900px;
  //height:500px;
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
  //width:250px;
  //height:165px;
  border:solid 1px #aeaeae;
  text-align: center;
}

.img-style{
width:95%;
//margin-top:5px;
//margin-left:5px;
display: inline-block;
vertical-align: middle;
}

/*好像是多余的
.picture-name{
  width:250px;
  height:50px;
  background-color:blueviolet;
}*/
</style>
