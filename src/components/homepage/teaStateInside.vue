<template>
    <div class="tsI-container">
        <div class="tsI-head">
            <img class="tsI-head-bgimg" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="" />
            <img class="tsI-head-logo" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
        </div>
        <div class="tsI-main">
            <div class="tsI-main-head">
                <span>这份小确信，您想要么？</span>
                <hr style="height:1px;border:none;border-top:1px solid #555555; width: 400px;" />
                <span style="font-size:5px;color:#626262;">来源：杭式下午茶 发布时间：xxxx</span>
            </div>
            <div class="tsI-main-body">
                <div class="tsI-main-body-left">
                    <progressive-img class="tsI-main-body-left-img" src="http://pa74otoy6.bkt.clouddn.com/teaStateInside1.png" alt="" />
                    <progressive-img class="tsI-main-body-left-img" src="http://pa74otoy6.bkt.clouddn.com/teaStateInside2.png" alt="" />
                    <progressive-img class="tsI-main-body-left-img" src="http://pa74otoy6.bkt.clouddn.com/teaStateInside3.png" alt="" />
                </div>
                <div class="tsI-main-body-right">
                    <span>最近还好吗？</span>
                    <span>"还好吧。"</span>
                    <span>也许</span>
                    <span>忙碌中</span>
                    <span>你忽视了很多小确幸</span>
                    <span>如果你用心体会</span>
                    <span>你会发现许多小确幸</span>
                    <br>
                    <span>匆匆出门</span>
                    <span>正好赶上一班车</span>
                    <span>是小确幸</span>
                    <br>
                    <span>高温之时</span>
                    <span>吃一个甜筒</span>
                    <span>是小确幸</span>
                    <br>
                    <span>遭遇坏事</span>
                    <span>朋友及时的安慰</span>
                    <span>是小确幸</span>
                    <br>
                    <span>而今天</span>
                    <span>小TEA也有一份“小确幸”</span>
                    <span>想邀请各位一起分享</span>
                    <br>
                    <span>夏日昼长</span>
                    <span>工作之余</span>
                    <span>尝一口曲奇</span>
                    <span>品一杯清茶</span>
                    <span>补充体力</span>
                    <span>恢复能量</span>
                    <span>这是你我的小确幸</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tsI-container{
    height: 900px;
}
.tsI-head{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 200px;
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
    margin-top: 50px;
}
.tsI-main-head{
    text-align: center;
}
.tsI-main-body{
    //height: 600px;
    //width: 600px;
    //margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //background-color: blue;
    margin-top: 10px;
}
.tsI-main-body-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    //background-color: red;
}
.tsI-main-body-left-img{
    height: 200px;
    width: 250px;
    margin-top: 15px;
}
.tsI-main-body-right{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 20px;
}
.tsI-main-body-right span{
    font-size: 5px;
    //text-align: center;
}
</style>
