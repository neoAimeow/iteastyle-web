<template>
<div>
  <el-carousel>
    <el-carousel-item v-for="item in items" :key="item">
      <progressive-img :src="item" alt="" style="width:100%;" />
    </el-carousel-item>
  </el-carousel>
  <el-row type="flex" justify="center" style="margin:30px;">
    <img src="../../assets/Tea-break-service.png" alt="" style="height:170px;width:250px;" />
    <img src="../../assets/Tea-gift-service.png" alt="" style="height:170px;width:250px;margin-left:25px;" />
    <img src="../../assets/Tea-art-service.png" alt="" style="height:170px;width:250px;margin-left:25px;" />
  </el-row>
  <div class="dessert">
    <div  style="width:160px" v-for="(dessert,key) in desserts" :key="key">
      <img :src="dessert" alt="" style="height:100px;width:160px;margin-top:5px"/>
    </div>
    <div class="" style="background-color:#9bc248; max-height: 70px;">
      <img src="../../assets/Online-shopping.png" alt="" style="margin-left: 50px; max-height: 70px;" />
    </div>
  </div>
</div>
</template>
<script>
import af1 from '../../assets/AfternoonTea.jpeg';
import af2 from '../../assets/AfternoonTea.jpeg';
import af3 from '../../assets/AfternoonTea.jpeg';

export default {
  data () {
    return {
      items : [
        af1,af2,af3
      ],
      desserts : [
        'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=bff7b854c3fdfc03f175ebeab556ecf1/83025aafa40f4bfb8ce6d0fe034f78f0f7361861.jpg',
        'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=bff7b854c3fdfc03f175ebeab556ecf1/83025aafa40f4bfb8ce6d0fe034f78f0f7361861.jpg',
        'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=bff7b854c3fdfc03f175ebeab556ecf1/83025aafa40f4bfb8ce6d0fe034f78f0f7361861.jpg',
        'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=bff7b854c3fdfc03f175ebeab556ecf1/83025aafa40f4bfb8ce6d0fe034f78f0f7361861.jpg'
      ]
    }
  }
}
</script>

<style lang="scss">
.dessert{ 
  height:100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
  width: 100%;
  background-color: #9bc248;
  margin-top:45px;
}
</style>
