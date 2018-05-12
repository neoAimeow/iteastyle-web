<template>
  <div class="pd-container">
    <div class="head">
    <img src="../../assets/Small-Logo.png" alt="">
    </div>
    <div class="body">
      <router-link to="./DisplayInsidePage.vue" class="body-img">
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
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.head{
  background-color: #81b316;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
}
.body{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
}
.body-img{
  text-align: center;
}
</style>
