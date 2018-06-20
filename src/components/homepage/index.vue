<template>
    <div class="index-container">
        <div class="index-head">
            <el-carousel>
                <el-carousel-item v-for="(item,key) in items" :key="key">
                    <progressive-img :src="item" alt="" class="index-head-img" />
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="index-main">
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/index-TeaBreak.png" />
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/index-TeaCeremony.png" />
            <progressive-img class="index-main-img" src="http://pa74otoy6.bkt.clouddn.com/index-TeaArt.png" />
        </div>
        <div class="index-foot">
            <div class="index-foot-left">
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img1.png" alt="" />
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img2.png" alt="" />
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img3.png" alt="" />
                <img class="index-foot-img" src="http://pa74otoy6.bkt.clouddn.com/index-foot-img4.png" alt="" />
            </div>
            <img class="index-foot-right" src="http://pa74otoy6.bkt.clouddn.com/index-foot-right.png" alt="" />
        </div>
    </div>
</template>

<script>

export default {
    data(){
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
    background-color: #9dc135;
    height: 100px;
}
.index-foot-img{
    height: 100px;
    width: 180px;
}
.index-foot-left{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.index-foot-right{
    margin-left: 50px;
    height: 100px;
    width: 250px;
}
</style>
