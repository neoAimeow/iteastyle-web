<template>
<div>
  <el-carousel height="1000px">
    <el-carousel-item v-for="item in items" :key="item">
      <progressive-img :src="item" alt="" style="width:100%;" />
    </el-carousel-item>
  </el-carousel>
  <el-row type="flex" class="row-bg" justify="center" style="margin:30px;">
    <img src="../../assets/Tea-break-service.png" alt="" style="height:125px;width:191px;" >
    <img src="../../assets/Tea-gift-service.png" alt="" style="height:125px;width:191px;margin-left:15px;">
    <img src="../../assets/Tea-art-service.png" alt="" style="height:125px;width:191px;margin-left:15px;">
  </el-row>
  <el-row>
    <el-col :span="3" v-for="dessert in dessert" :key="dessert">
      <progressive-img :src="dessert" alt="" style="max-height:55px;min-width:100%"/>
    </el-col>
    <el-col :span="12" style="background-color:#81b316; max-height: 55px;">
      <img src="../../assets/Online-shopping.png" alt="" style="margin-left: 20px; max-height: 55px;">
    </el-col>
  </el-row>
</div>
</template>
<script>
export default {
  data () {
    return {
      items : [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525889999049&di=e15c3b502ad339dc0577cb1451a86b2f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ff555938ac18a8012193a373ba4c.png%402o.png',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525889999046&di=d3de9534ee651859623d517cd594e56b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F018a73555c72670000009c50a19736.jpg%40900w_1l_2o_100sh.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525889999039&di=d7a0e0dc52562b87d183f5da36858e15&imgtype=0&src=http%3A%2F%2Fpic.35pic.com%2Fnormal%2F09%2F33%2F13%2F8498245_112506028322_2.jpg'
      ],
      dessert : [
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
  display: flex;
  flex-direction: row;
}
</style>
