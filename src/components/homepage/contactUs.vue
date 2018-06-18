<template>
    <div class="cu-container">
        <img class="cu-bgimg" src="http://pa74otoy6.bkt.clouddn.com/contactus-background.png" alt="">
        <div class="cu-main">
            <div class="cu-main-title">
                <span>CONTACT US</span>
                <img src="" alt="">
                <span>联系我们</span>
            </div>
            <div class="cu-main-title">
                <span>杭式下午茶 创意茶歇 健康食尚</span>
            </div>
            <div class="cu-main-content">
                <span>杭州执贝科技有限公司</span>
                <span>地址：杭州民和路525号三宏国际8楼</span>
                <span>电话：(86)0571-83731743</span>
                <span>手机：159-0663-1121(滕)</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;158-5823-2263(李)</span>
                <span>邮箱：iteastyle@126.com</span>
                <span>网址：www.iteastyle.com</span>
            </div>
        </div>
        <div class="cu-foot">
            <div class="cu-foot-left"><img src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt=""></div>
            <div class="cu-foot-right">
                <img src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="">
                <img src="http://pa74otoy6.bkt.clouddn.com/contactus-QRcode.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.cu-container{
    height: 1000px;
}
.cu-bgimg{
    height: 1000px;
    width: 100%;
    position: absolute;
    z-index: -1;
}
.cu-main{
    margin-top: 200px;
    margin-left: 700px;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: center;
    position: absolute;
    color: white;
}
.cu-main-title{
    text-align: center;
}
.cu-main-content{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
}
.cu-foot{
    display: flex;
    flex-direction: row;
    position: absolute;
    margin-top: 500px;
    margin-left: 700px;
}
.cu-foot-left{
    margin-top: 10px;
}
.cu-foot-right{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cu-foot-right img{
    margin-top: 10px;
}
</style>
