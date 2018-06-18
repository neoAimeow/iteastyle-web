<template>
    <div class="classicCase">
    
    <router-link to="/homepage/classicCaseInside1">
    <div class="case">       
        <div class="case-picture">
            <img class="picture" src="http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg">
            <div class="picture-logo"> <img src="http://pa74otoy6.bkt.clouddn.com/title-logo.png"></div>
        </div>
        <div class="case-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
            <div class="title">
                <span class="C-title">茶点茶饮</span>
                <span class="E-title">TEA DESSERT</span>
            </div>
        </div>
    </div>
    </router-link>

    <router-link to="/homepage/classicCaseInside1">
    <div class="case">       
        <div class="case-picture">
            <img class="picture" src="http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg">
            <div class="picture-logo"> <img src="http://pa74otoy6.bkt.clouddn.com/title-logo.png"></div>
        </div>
        <div class="case-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
            <div class="title">
                <span class="C-title">茶文化讲座</span>
                <span class="E-title">TEA CULTURE SEMINAR</span>
            </div>
        </div>        
    </div>
    </router-link>

    <router-link to="/homepage/classicCaseInside1">
    <div class="case">       
        <div class="case-picture">
            <img class="picture" src="http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg">
            <div class="picture-logo"> <img src="http://pa74otoy6.bkt.clouddn.com/title-logo.png"></div>
        </div>
        <div class="case-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
            <div class="title">
                <span class="C-title">DIY活动</span>
                <span class="E-title">DIY ACTIVITES</span>
            </div>
        </div>       
    </div>
    </router-link>

    <router-link to="/homepage/classicCaseInside1">
    <div class="case">       
        <div class="case-picture">
            <img class="picture" src="http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg">
            <div class="picture-logo"> <img src="http://pa74otoy6.bkt.clouddn.com/title-logo.png"></div>
        </div>
        <div class="case-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
            <div class="title">
                <span class="C-title">私茗定制</span>
                <span class="E-title">PRIVATE TEA CUSTOMISATION</span>
            </div>
        </div>        
    </div>
    </router-link>

    <router-link to="/homepage/classicCaseInside1">
    <div class="case">
        <div class="case-picture">
            <img class="picture" src="http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg">
            <div class="picture-logo"> <img src="http://pa74otoy6.bkt.clouddn.com/title-logo.png"></div>
        </div>
        <div class="case-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
            <div class="title">
                <span class="C-title">茶艺表演</span>
                <span class="E-title">TEA PERFORMANCE</span>
            </div>
        </div>
    </div>
    </router-link>
    
</div>
</template>
<style>
    .classicCase{
        margin:0;
        padding:0;
        display: flex;
        flex-direction: row;
    }
    .case{
        width:320px;
        height:840px;
    }
    .case-picture{
        width:320px;
        height:560px;
    }
    .picture{
        width:320px;
        height:560px;
        position:absolute;
        z-index: -1;
   
    }
    .picture-logo{
        padding-top:300px;
        text-align: center;
    }
    
    .case-name{
        width:320px;
        height:280px;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        
    }
    .logo{
        width:40px;
        height:40px;
    }
    .title{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        height:40px;
    }
    .C-title{
        font-size: 20px;
   
    }
    .E-title{
        font-size:10px;
        line-height: 0.8;
    }
</style>