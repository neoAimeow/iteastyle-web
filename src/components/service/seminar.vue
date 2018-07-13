<template>
    <div class="ss-container">
        <div class="ss-main">
            <div class="ss-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ss-content-img">
                <div class="ss-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ss-content-logo">
                    <div class="ss-content-name">
                        <span style="color:#9dc135;">商贸界别组活动</span>
                        <span style=" color: rgb(228, 227, 227);">TEA CULTURE SEMINAR</span>
                    </div>
                </div>
            </div>
            <div class="ss-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ss-content-img">
                <div class="ss-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ss-content-logo">
                    <div class="ss-content-name">
                        <span style="color:#9dc135;">品茗西湖</span>
                        <span style=" color: rgb(228, 227, 227);">TEA CULTURE SEMINAR</span>
                    </div>
                </div>
            </div>
            <div class="ss-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ss-content-img">
                <div class="ss-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ss-content-logo">
                    <div class="ss-content-name">
                        <span style="color:#9dc135;">辉瑞制药</span>
                        <span style=" color: rgb(228, 227, 227);">TEA CULTURE SEMINAR</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.ss-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:2px solid #9dc135;
}
.ss-main{
    width: 900px;
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.ss-content{
    width: 270px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0px 0px  5px 2px #aaa;
}
.ss-content-img{
    width: 270px;
    height: 200px;
}
.ss-content-title{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 270px;
    margin-bottom: 10px;
}
.ss-content-logo{
    width: 50px;
    height: 50px;
}
.ss-content-name{
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>

