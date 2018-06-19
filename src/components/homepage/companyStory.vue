<template>
<div class="company-story">
    <img class="companystory-background" src="http://pa74otoy6.bkt.clouddn.com/%E5%85%AC%E5%8F%B8%E6%95%85%E4%BA%8B%E8%83%8C%E6%99%AF%E5%9B%BE.png" alt="">
    <div class="story">
        <div class="story-title">
            <span class="title-english">OUR STORY</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus.png">
            <span class="titile-chinese">杭式下午茶</span>
       </div>
    <span class="story-ct">&nbsp;&nbsp;&nbsp;&nbsp;杭州执贝科技有限公司旗下品牌【杭式下午茶】是致力于茶歇(Tea Break)一站式的综合服务机构，真正以茶元素为核心，用纯天然的超微茶粉，将茶与饮品、茶与糕点、茶与时尚有机的结合在一起，旨在引领一种健康的生活方式与生活理念！</span>
    <span class="story-ct story-ct1">&nbsp;&nbsp;&nbsp;&nbsp;HangZhou Afternoon Tea is a compositive organization which is devoted to Tea Break one-stop service. It really takes tea elements as the core.  Using pure natural tea powder mixes tea with drinks , cakes  and fashion together . It aims to lead a healthy lifestyle and concept of life.</span>
    </div>

    <video src="" controls></video>

</div>
</template>
<style>
    .company-story{      
        margin:0;
        padding:0;
        color:white;
        height:1000px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        
        
    }
    .companystory-background{
        height:1000px;
        position:absolute;
        z-index: -1;
        margin-left:0px;
        margin-top:0px;

       
    }
    .story{    
        width:1000px;
        margin-top:50px;
        background-color:rgba(17,14,30,0.5)
    }
    
    .story-title{
        text-align:center;
        padding-top:30px;
    }
    span{
        display:block;
    }
    .title-english{
        font-family:'Times New Roman';
        font-size:25px;
    }
    .titile-chinese{
        font-size:18px;
    }
    .story-ct{
        margin-top:20px;
        padding-left:125px;
        padding-right:125px;
    }
    .story-ct1{
        padding-bottom: 40px;
    }
    video{
        
      
        width:1000px;
        height:600px;
        background-color:black;
        margin-top:50px;
        margin-bottom:50px;
    }
</style>