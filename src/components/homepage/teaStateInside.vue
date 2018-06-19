<template>
    <div class="tsI-container">
        <div class="tsI-head">
            <progressive-img class="tsI-head-bgimg" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="" />
            <progressive-img class="tsI-head-logo" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
        </div>
        <div class="tsI-main">
            <div class="tsI-main-head">
                <span>这份小确信，您想要么？</span>
                <hr style="height:1px;border:none;border-top:1px solid #555555; width: 400px;" />
                <span style="font-size:5px;">来源：杭式下午茶 发布时间：xxxx</span>
            </div>
            <div class="tsI-main-body">
                <div class="tsI-main-body-left">
                    <progressive-img class="tsI-main-body-left-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
                    <progressive-img class="tsI-main-body-left-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
                    <progressive-img class="tsI-main-body-left-img" src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%B1%95%E7%A4%BA%E7%BD%91%E7%BB%9C%E5%9B%BE.jpg" alt="" />
                </div>
                <div class="tsI-main-body-right">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tsI-container{
    height: 800px;
    width: 100%;
}
.tsI-head{
    height: 200px;
    width: 100%;
}
.tsI-head-bgimg{
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: -1;
}
.tsI-head-logo{
    height: 100px;
    width: 100px;
    margin-left: 50%;
    margin-top: -10%;
}
.tsI-main-head{
    width: 30%;
    margin: 0 auto;
    text-align: center;
}
.tsI-main-body{
    height: 500px;
    width: 600px;
    margin: 0 auto;
}
.tsI-main-body-left{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    //background-color: red;
}
.tsI-main-body-left-img{
    height: 160px;
    width: 250px;
    margin-top: 5px;
}
</style>
