<template>
    <div class="das-container">
        <div class="das-main">
            <div class="das-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="das-content-img">
                <div class="das-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="das-content-logo">
                    <div class="das-content-name">
                        <span style="color:#9dc135;">彩绘类DIY</span>
                        <span style=" color: rgb(228, 227, 227);">PATTING</span>
                        <span style=" color: rgb(228, 227, 227);">DO IT YOURSELF</span>
                    </div>
                </div>
            </div>
            <div class="das-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="das-content-img">
                <div class="das-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="das-content-logo">
                    <div class="das-content-name">
                        <span style="color:#9dc135;">护理类DIY</span>
                        <span style=" color: rgb(228, 227, 227);">NURSING</span>
                        <span style=" color: rgb(228, 227, 227);">DO IT YOURSELF</span>
                    </div>
                </div>
            </div>
            <div class="das-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="das-content-img">
                <div class="das-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="das-content-logo">
                    <div class="das-content-name">
                        <span style="color:#9dc135;">香薰类DIY</span>
                        <span style=" color: rgb(228, 227, 227);">ARAMIS</span>
                        <span style=" color: rgb(228, 227, 227);">DO IT YOURSELF</span>
                    </div>
                </div>
            </div>
            <div class="das-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="das-content-img">
                <div class="das-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="das-content-logo">
                    <div class="das-content-name">
                        <span style="color:#9dc135;">食品类DIY</span>
                        <span style=" color: rgb(228, 227, 227);">FOOD</span>
                        <span style=" color: rgb(228, 227, 227);">DO IT YOURSELF</span>
                    </div>
                </div>
            </div>
            <div class="das-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="das-content-img">
                <div class="das-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="das-content-logo">
                    <div class="das-content-name">
                        <span style="color:#9dc135;">永生花类DIY</span>
                        <span style=" color: rgb(228, 227, 227);">FLOWER PRESERVATION</span>
                        <span style=" color: rgb(228, 227, 227);">DO IT YOURSELF</span>
                    </div>
                </div>
            </div>
            <div class="das-content">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="" class="das-content-img">
                <div class="das-content-title">
                    <img src="http://pa74otoy6.bkt.clouddn.com/120.png" alt="" class="das-content-logo">
                    <div class="das-content-name">
                        <span style="color:#9dc135;">鲜花绿植类DIY</span>
                        <span style=" color: rgb(228, 227, 227);">GREEN FLOWERS</span>
                        <span style=" color: rgb(228, 227, 227);">DO IT YOURSELF</span>
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
.das-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:2px solid #9dc135;
}
.das-main{
    width: 900px;
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.das-content{
    width: 270px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0px 0px  5px 2px #aaa;
}
.das-content-img{
    width: 270px;
    height: 200px;
}
.das-content-title{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 270px;
    margin-bottom: 10px;
}
.das-content-logo{
    width: 50px;
    height: 50px;
}
.das-content-name{
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>