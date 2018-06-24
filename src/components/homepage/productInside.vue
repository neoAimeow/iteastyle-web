<template>
    <div class="productinside">
    <div class="introduction-title">
        <progressive-img class="title-background" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="" />
        <img src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png">
    </div>

<div>
    <div class="pd-picture">
        <img  v-for="(img,key) in imgs" :key="key"  class="pd-img" :src="img" alt="">        
    </div>
    
    <div class="pd-name">
    <div class="title">
        <img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="" class="logo">
        <span>茶饮茶点</span>
    </div>
    <span>抹茶费南雪</span>
   </div>
    
    <div class="pd-introduction">
        <span>抹茶费南雪是一种小糕点<br>就爱这一抹绿啊<br>高油高糖什么的就是好吃<br>抹茶控溺爱的小宠物～</span>
    </div>

    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            imgs:[
                    "http://pa74otoy6.bkt.clouddn.com/product-inside-picture1.png",
                    "http://pa74otoy6.bkt.clouddn.com/product-inside-picture2.png",
                    "http://pa74otoy6.bkt.clouddn.com/product-inside-picture1.png",
                    "http://pa74otoy6.bkt.clouddn.com/product-inside-picture2.png",
                    "http://pa74otoy6.bkt.clouddn.com/product-inside-picture1.png"

                  ]
        }
    }
}
</script>

<style scoped>
    .productinside{
        margin:0;
        padding:0;
       

    }
    .introduction-title{
        height:200px;
        display: flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 80px;
    }
    .title-background{
        min-width: 1300px;
        height: 200px;
        width: 100%;
        position: absolute;
        z-index: -1;
    }
    .pd-picture{
        width:1020px;
        height:220px;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        
        margin:0 auto;
        margin-bottom: 20px;
        background: #9dc135;
        position: absolute;
        z-index: -1;
        
        

    }
    .pd-name{
       
        
        font-size: 20px;
        color:white;

    }
    .title{
        width:205px;
        height:50px;
        border:1px dotted white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }
    .title img{
        width:40px;
        height:auto;
    }
    .title span{
        margin-left:5px;
    }
    .pd-img{
        width:340px;
        height:220px;



    }
    .pd-introduction{
        border:1px dotted #f0f0f0;
        width:1020px;

        margin:0 auto;
        
        margin-bottom:85px;
        
        
    }
    .pd-introduction span{
       line-height: 2;
       display:flex;
       justify-content: center;
       margin-top:10px;
       margin-bottom: 10px;
       text-align: center;

    }
    
</style>
