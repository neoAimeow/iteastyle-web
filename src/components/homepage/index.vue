<template>
<div>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in items" :key="item">
      <progressive-img :src="item" alt="" style="width:100%;" />
    </el-carousel-item>
  </el-carousel>
  <div class="service">
    <img src="../../assets/Tea-break-service.png" alt="">
    <img src="../../assets/Tea-gift-service.png" alt="">
    <img src="../../assets/Tea-art-service.png" alt="">
  </div>
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
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
