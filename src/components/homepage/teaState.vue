<template>
    <div class="ts-container">
        <progressive-img class="ts-bgimg" src="http://pa74otoy6.bkt.clouddn.com/tea-news-background.png" alt="" />
        <div class="ts-main">
            <router-link to="./teaStateInside" class="ts-main-center">
                <progressive-img class="ts-main-center-left-img" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
                <div class="ts-main-center-right">
                    <span>这跟小确幸，您想要么？</span>
                    <span>转眼夏至</span>
                </div>
                <div class="ts-main-center-conner"><progressive-img src="" alt="" /></div>
            </router-link>
            <router-link to="./teaStateInside" class="ts-main-center">
                <progressive-img class="ts-main-center-left-img" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
                <div class="ts-main-center-right">
                    <span>这跟小确幸，您想要么？</span>
                    <span>转眼夏至</span>
                </div>
                <div class="ts-main-center-conner"><progressive-img src="" alt="" /></div>
            </router-link>
            <router-link to="./teaStateInside" class="ts-main-center">
                <progressive-img class="ts-main-center-left-img" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
                <div class="ts-main-center-right">
                    <span>这跟小确幸，您想要么？</span>
                    <span>转眼夏至</span>
                </div>
                <div class="ts-main-center-conner"><progressive-img src="" alt="" /></div>
            </router-link>
            <router-link to="./teaStateInside" class="ts-main-center">
                <progressive-img class="ts-main-center-left-img" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
                <div class="ts-main-center-right">
                    <span>这跟小确幸，您想要么？</span>
                    <span>转眼夏至</span>
                </div>
                <div class="ts-main-center-conner"><progressive-img src="" alt="" /></div>
            </router-link>
        </div>
    </div>
</template>


<style lang="scss">
.ts-container{
    height: 1000px;
    width: 100%;
}
.ts-bgimg{
    height: 1000px;
    width: 100%;
    position: absolute;
    z-index: -1;
}
.ts-main{
    height: 600px;
    width: 600px;
    margin-left: 35%;
    margin-top: -800px;//这块的设置存疑
    position: absolute;
    //background-color: red;
}
.ts-main-center{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
}
.ts-main-center-left-img{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    //margin-right: -50px;
    //position: absolute;
}
.ts-main-center-right{
    height: 100px;
    background-color: rgba(32, 11, 32, 0.5);
    position: absolute;
    z-index: -1;
    width: 500px;
    margin-left: 50px;
}
.ts-main-center-right span{
    margin-left: 80px;
    color: white;
}
.ts-main-center-conner{
    background-color: greenyellow;
    height: 25px;
    width: 25px;
    margin-top: 75px;
    margin-left: 425px;
}
</style>
