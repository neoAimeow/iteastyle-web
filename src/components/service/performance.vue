<template>
    <div class="ps-container">
        <div class="ps-main">
            <div class="ps-perform">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ps-perform-img">
                <div class="ps-perform-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ps-perform-logo">
                    <div class="ps-perform-name">
                        <span style="color:#9dc135;">IBM茶艺表演</span>
                        <span style=" color: rgb(228, 227, 227);">TEA PERFORMANCE</span>
                    </div>
                </div>
            </div>
            <div class="ps-perform">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ps-perform-img">
                <div class="ps-perform-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ps-perform-logo">
                    <div class="ps-perform-name">
                        <span style="color:#9dc135;">IBM茶艺表演</span>
                        <span style=" color: rgb(228, 227, 227);">TEA PERFORMANCE</span>
                    </div>
                </div>
            </div>
            <div class="ps-perform">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="ps-perform-img">
                <div class="ps-perform-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="ps-perform-logo">
                    <div class="ps-perform-name">
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
    margin-top: 40px;
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
}
.ps-perform{
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.ps-perform-img{
    width: 270px;
    height: 200px;
}
.ps-perform-title{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 270px;
}
.ps-perform-logo{
    width: 50px;
    height: 50px;
}
.ps-perform-name{
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>

