<template>
    <div class="productinside">
    <div class="introduction-title">
        <img class="title-background" src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E5%92%8C%E6%A1%88%E4%BE%8B%E5%86%85%E9%A1%B5%E6%A0%87%E9%A2%98%E8%83%8C%E6%99%AF%E5%9B%BE.png" alt="">
        <img src="http://pa74otoy6.bkt.clouddn.com/%E6%A0%87%E9%A2%98%E5%9B%BE%E4%B8%8A%E7%9A%84logo.png">
    </div>

    <div class="pd-picture">
        <img class="pd-img" src="http://pa74otoy6.bkt.clouddn.com/product-inside-picture1.png" alt="">
        <div class="pd-name">
            <div class="title">
                <img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="" class="logo">
                <span>茶饮茶点</span>
            </div>
            <span>抹茶费南雪</span>
        </div>
        <img class="pd-img" src="http://pa74otoy6.bkt.clouddn.com/product-inside-picture2.png" alt="">
    </div>

    <div class="pd-introduction">
        <span>抹茶费南雪是一种小糕点<br>就爱这一抹绿啊<br>高油高糖什么的就是好吃<br>抹茶控溺爱的小宠物～</span>
    </div>

</div>
</template>
<style scoped>
    .productinside{
        margin:0;
        padding:0;

    }
    .introduction-title{
        height:220px;
        display: flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 80px;
    }
    .title-background{
        height:220px;
        position:absolute;
        z-index: -1;
    }
    .pd-picture{
        width:1020px;
        display:flex;
        flex-direction: row;
        margin:0 auto;
        margin-bottom: 20px;
        

    }
    .pd-name{
        width:340px;
        height:220px;
        background-color:#9dc135;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
