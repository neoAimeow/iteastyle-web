<template>
    <div class="ps-container">
        <div class="ps-main">
            <div class="ps-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ps-content-img">
                <div class="ps-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ps-content-logo">
                    <div class="ps-content-name">
                        <span style="color:#9dc135;">IBM茶艺表演</span>
                        <span style=" color: rgb(228, 227, 227);">TEA PERFORMANCE</span>
                    </div>
                </div>
            </div>
            <div class="ps-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ps-content-img">
                <div class="ps-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ps-content-logo">
                    <div class="ps-content-name">
                        <span style="color:#9dc135;">IBM茶艺表演</span>
                        <span style=" color: rgb(228, 227, 227);">TEA PERFORMANCE</span>
                    </div>
                </div>
            </div>
            <div class="ps-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ps-content-img">
                <div class="ps-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ps-content-logo">
                    <div class="ps-content-name">
                        <span style="color:#9dc135;">IBM茶艺表演</span>
                        <span style=" color: rgb(228, 227, 227);">TEA PERFORMANCE</span>
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
.ps-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:2px solid #9dc135;
}
.ps-main{
    width: 900px;
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.ps-content{
    width: 270px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0px 0px  5px 2px #aaa;
}
.ps-content-img{
    width: 270px;
    height: 200px;
}
.ps-content-title{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 270px;
    margin-bottom: 10px;
}
.ps-content-logo{
    width: 50px;
    height: 50px;
}
.ps-content-name{
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>

