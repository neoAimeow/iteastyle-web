<template>
    <div class="da-container">
        <h1>diy活动</h1>
        <div class="da-head">
            <img style="width:100%;" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="">
            <div class="da-head-logo">
                <img style="width:100px;height:100px;" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png" alt="">
            </div>
        </div>

        <div class="da-main">
            <div class="da-main-img">
                <img style="width: 270px;height: 200px;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
                <div class="da-main-title"><span>紫色生日会</span></div>
            </div>
            <div class="da-main-img">
                <img style="width: 270px;height: 200px;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
                <div class="da-main-title"><span>紫色生日会</span></div>
            </div>
            <div class="da-main-img">
                <img style="width: 270px;height: 200px;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
                <div class="da-main-title"><span>紫色生日会</span></div>
            </div>
            <div class="da-main-img">
                <img style="width: 270px;height: 200px;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
                <div class="da-main-title"><span>紫色生日会</span></div>
            </div>
            <div class="da-main-img">
                <img style="width: 270px;height: 200px;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
                <div class="da-main-title"><span>紫色生日会</span></div>
            </div>
            <div class="da-main-img">
                <img style="width: 270px;height: 200px;" src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
                <div class="da-main-title"><span>紫色生日会</span></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.da-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.da-head{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.da-head-logo{
    position: absolute;
    z-index: 1;
}
.da-main{
    margin-bottom: 40px;
    width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.da-main-img{
    margin-top: 40px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.da-main-title{
    position: absolute;
    z-index: 1;
    color: white;
    background-color: rgba(180, 218, 44, 0.5);
    width: 270px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
