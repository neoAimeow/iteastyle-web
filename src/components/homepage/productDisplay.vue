<template>
    <div class="productDisplay">

    <div class="pd-title">
        <img class="pd-title-bakcground" src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E6%A0%87%E9%A2%98%E8%83%8C%E6%99%AF%E5%9B%BE.png" alt="">
        <div class="pd-title-logo"><img src="http://pa74otoy6.bkt.clouddn.com/%E6%A0%87%E9%A2%98%E5%9B%BE%E4%B8%8A%E7%9A%84logo.png"></div>
    </div>
    <div class="pd-ct">
        <div class="tr-left"></div>
        <div class="pd">
            <div class="pd-top">
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg"></div><span>抹茶费南雪</span></div></router-link>
            </div>
            <div class="pd-bottom">
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg"></div><span>抹茶费南雪</span></div></router-link>
                <router-link to="/homepage/productInside"><div class="product-name"><div class="pd-picture-border"><img src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg"></div><span>抹茶费南雪</span></div></router-link>
            </div>
        </div>
        <div class="tr-right"></div>          
    </div>


    
</div>
</template>
<style>
    .productDisplay{
        margin:0;
        padding:0;
        margin-bottom: 30px;
        


    }
    .pd-title{
        
        height:230px;

    }
    .pd-title-background{
        height:230px;
        position:absolute;
        z-index: -1;
    }
    .pd-title-logo{
        text-align: center;
        
        
    }
    .pd-ct{
        margin:0 auto;
        width:1000px;
        height: 500px;
        /*background-color: red;*/
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
        margin-top:40px;
    }
    .tr-left{
        width: 0px;
        height:0px;
        border-top:solid 50px transparent;
        border-right:solid 30px green;
        border-bottom:solid 50px transparent;
        border-left:solid 30px transparent;
    }   
   .tr-right{
        width: 0px;
        height:0px;
        border-top:solid 50px transparent ;
        border-right:solid 30px transparent;
        border-bottom:solid 50px transparent;
        border-left:solid 30px green ;
    }

    .pd-top,.pd-bottom{
        display:flex;
        flex-direction: row;
    }
    .pd-picture-border{
        border:1px solid #aeaeae;
        margin-bottom:15px;
        display: flex;
        align-items: center;
        justify-content: center;


    } 
    .pd img{
        width:270px;
        padding:5px;
        
    }
    .product-name{
        text-align: center;
        margin:15px;
        color:#626262;
    }
    
</style>