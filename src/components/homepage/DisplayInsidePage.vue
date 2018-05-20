<template>
  <div class="dip-container"><!--class空-->
    <div class="dip-head">
      <img src="../../assets/state-logo.png" style="height:50%;" alt="">
    </div>
  
  <div class="dip-body">
    <silentbox-group >
        <silentbox-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526213964024&di=2e8d3ef5ac093490282d1b4a874d9ede&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D6e35c1315843fbf2d121ae63d906afec%2F37d12f2eb9389b50e7ab046b8e35e5dde7116eb7.jpg" description="抹茶费南雪">
            <img class="dip-body-img" src="../../assets/tea-case-images.png" alt="">
    </silentbox-item>
    </silentbox-group>

    <div class="dip-body-title">
      <img src="../../assets/case-title.png" style="width:50%;height:auto;">
      <span style="color:white;margin-top:10px">抹茶费南雪</span>
    </div>

    <silentbox-group >
        <silentbox-item src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526213964024&di=2e8d3ef5ac093490282d1b4a874d9ede&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D6e35c1315843fbf2d121ae63d906afec%2F37d12f2eb9389b50e7ab046b8e35e5dde7116eb7.jpg" description="抹茶费南雪">
            <img class="dip-body-img" src="../../assets/tea-case-images.png" alt="">
    </silentbox-item>
    </silentbox-group>

  </div>

  <div class="dip-foot">
    <span>抹茶费南雪是一种小糕点</span>
    <span>就爱这一抹绿啊</span>
    <span>高油高糖什么的就是好吃</span>
    <span>抹茶控溺爱的小宠物～</span>
  </div>

  </div>
</template>

<style lang="scss">

.dip-container{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.dip-head{
  background:url(../../assets/state-background.png) no-repeat center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
  margin-bottom:60px;
}

.dip-body{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 800px;
  margin: 0 auto;
  margin-bottom: 30px;
}

.dip-body-title{
  width: 240px;
  height: 150px;
  background-color:#9bc248;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.dip-body-img{
  width: 240px;
  height: 150px;
}

.dip-foot{
  width:720px;
  height:150px;
  border:solid 1px #f0f0f0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center; 
  margin-bottom: 60px;
  font-size:14px;
  line-height:25px;
}
</style>
