<template>
<div class="classicCase">

<div v-for="(item,key) in items" :key="key" >
    <router-link to="/homepage/classicCaseInside1">
    <div class="case" >
        <div class="case-picture">
            <img class="picture" :src="item.imageUrl">
            <img class="picture-logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
        </div>
        <div class="case-name">
            <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png">
            <div class="title">
                <span class="C-title">{{item.nameC}}</span>
                <span class="E-title">{{item.nameE}}</span>
            </div>
        </div>
    </div>
    </router-link>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            items:[
                    {
                        "nameC":"茶点茶饮",
                        "nameE":"TEA DESSERT",
                        "imageUrl":"http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg"
                    },
                    {
                        "nameC":"茶文化讲座",
                        "nameE":"TEA CULTURE SEMINAR",
                        "imageUrl":"http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg"
                    },
                    {
                        "nameC":"DIY活动",
                        "nameE":"DIY ACTIVITES",
                        "imageUrl":"http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg"
                    },
                    {
                        "nameC":"私茗定制",
                        "nameE":"PRIVATE TEA CUSTOMISATION",
                        "imageUrl":"http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg"
                    },
                    {
                        "nameC":"茶艺表演",
                        "nameE":"TEA PERFORMANCE",
                        "imageUrl":"http://pa74otoy6.bkt.clouddn.com/%E7%BB%8F%E5%85%B8%E6%A1%88%E4%BE%8B%E7%BD%91%E7%BB%9C%E5%9B%BE.jpeg"
                    }
                ]
        }
    }
}
</script>


<style scoped>
a{
    color:black;
}
    .classicCase{
        display: flex;
        flex-direction: row;
        justify-content: center;      
    }
    .case{
        width:250px;
        height:600px;
        
       
    }
    .case-picture{
        width:250px;
        height:400px;
        display: flex;
        justify-content: center; 

    }
    .picture{
        width:250px;
        height:400px;
        position:absolute;
        z-index: -1;
   
    }
    .picture-logo{
        padding-top:280px;
        width:80px;
        height:80px;
    }
    
    .case-name{
        width:250px;
        height:200px;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .logo{
        width:40px;
        height:auto;
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