<template>
    <div class="souvenir-container">
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="background:green;">杭州伴手礼</span>
                <hr style="width:600px;height:1px;border:none;border-top:2px solid #9dc135;" />
                <span style="background:yellow;">TEA SOUVENIR</span>
            </div>
            <div class="souvenir-main-content">
                <div class="souvenir-main-content-introduce">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西湖龙井、九曲红梅、桂花龙井。都是最具杭城特色的茶品。是赠送外地友人的不二选择，也是外来游客的必选物品。</span>
                </div>
                <img class="souvenir-main-content-img" src="http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.souvenir-container{
    width: 100%;
    display: flex;
    justify-content: center;
}
.souvenir-main{
    width: 900px;
    background: red;
}
.souvenir-main-title{
    display: flex;
    flex-direction: column;
    width: 600px;
    background: blue;
}
.souvenir-main-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.souvenir-main-content-introduce{
    width: 500px;
}
.souvenir-main-content-img{
    width: 300px;
    height: 300px;
}
</style>
