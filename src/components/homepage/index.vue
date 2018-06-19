<template>
    <div class="index-container">
        <div class="index-head">
            <el-carousel>
                <el-carousel-item v-for="item in items" :key="item">
                    <progressive-img src="item" alt="" class="index-head-img" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="index-main">
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg" />
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg" />
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg" />
        </div>
        <div class="index-foot">
            <div class="index-foot-left">
                <progressive-img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
                <progressive-img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
                <progressive-img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
                <progressive-img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
            </div>
            <progressive-img class="index-foot-right" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
        </div>
    </div>
</template>

<script>

export default {
    date(){
        return {
            items:[
                'http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg',
                'http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg',
                'http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg'
            ]
        }
    },
    components: {
        
    }
}
</script>


<style lang="scss">
.index-head{
    margin-top: 20px;
    text-align: center;
    //background-color: red;
}
.index-head-img{
    height: 800px;
    width: 800px;
}
.index-main{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 40px;
    //background-color: blue;
}
.index-main-img{
    height: 180px;
    width: 200px;
    margin-left: 20px;
}
.index-foot{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
    background-color: greenyellow;
}
.index-foot-img{
    height: 120px;
    width: 200px;
}
.index-foot-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.index-foot-right{
    margin-left: 50px;
    height: 100px;
    width: 100px;
    margin-top: 10px;
}
</style>
