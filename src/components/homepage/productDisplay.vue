<template>
<div class="productDisplay">

    <div class="pd-title">
        <img class="pd-title-picture" src="http://pa74otoy6.bkt.clouddn.com/pd-title-background.png" alt="">
        <div class="title-logo"><img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png"></div>
    </div>
    <div class="pd-ct">           
            
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/proudct-picture1.png"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/product-picture2.png"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/product-picture3.png"></div><span>抹茶费南雪</span></div></router-link>           
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/proudct-picture1.png"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/product-picture2.png"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/product-picture3.png"></div><span>抹茶费南雪</span></div></router-link>
                          
    </div>
   <div class="pd-page">
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
   </div>

    
</div>
</template>
<style scoped>
.productDisplay {
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
}

.pd-title {
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-title-picture {
  width: 100%;
  height: 230px;
  position: absolute;
  z-index: -1;
}

.pd-title-logo {
  text-align: center;
}

.pd-ct {
  margin: 0 auto;
  max-width: 1000px;

  /*background-color: red;*/
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.pd-picture-border {
  border: 1px solid #aeaeae;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-ct img {
  width: 265px;
  height: 170px;
  padding: 5px;
}

.product-name {
  text-align: center;
  margin: 15px;
  color: #626262;
}

.pd-page {
  display: flex;
  justify-content: center;
}

</style>