
<template>
    <div class="productinside">
    <div class="introduction-title">
        <progressive-img class="title-background" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt=""/>
        <img src="http://pa74otoy6.bkt.clouddn.com/%E6%A0%87%E9%A2%98%E5%9B%BE%E4%B8%8A%E7%9A%84logo.png">
    </div>

    <div class="pd-picture">
        <div class="pd-img" v-for="(img,key) in imgs" :key="key" > 
            <div v-if="key==1" class="pd-name">
                <div class="title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="" class="logo">
                    <span>茶歇服务</span>
                </div>
                <span class="name">英菲尼迪国博车展茶歇</span>    
            </div>
            <img  class="pd-img" :src="img" alt="">  
        </div>
    </div>   
       
</div>
</template>

<script>
export default {
    data() {
        return {
            imgs:[
                    "http://pa74otoy6.bkt.clouddn.com/case-inside2-picture1.png",
                    "http://pa74otoy6.bkt.clouddn.com/case-inside2-picture1.png",
                    "http://pa74otoy6.bkt.clouddn.com/case-inside2-picture1.png",
                    "http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png",
                    "http://pa74otoy6.bkt.clouddn.com/case-inside2-picture1.png",
                    "http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png"
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
    }
    .title-background{
        min-width: 1300px;
        height:200px;
        width: 100%;
        position:absolute;
        z-index: -1;
    }
    .pd-picture{
        display: flex;
        flex-wrap:wrap;
        width:1020px;
        margin: 0 auto;
        margin-bottom: 80px;
        margin-top:80px;  
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
    .title img{
        width:40px;
        height:auto;
    }
    .pd-img{
        width:340px;
        height:220px;
    }
    .name{
        width:200px;
        text-align: center;
    }
</style>
