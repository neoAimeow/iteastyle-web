<template>
    <div class="service">
        <div class="reservation">
            <div class="r-title">
                <div class="hr"></div>
                <div class="mid-name">
                    <div class="border"></div>
                    <div class="name">
                        <span class="c-title">茶歇预定</span>
                        <span class="e-title">RESERVATION</span>
                    </div>               
                </div>
                <!-- <div class="hr"></div> -->
            </div>

            <div class="way">
                <span class="res-logo">&#xe9e7;</span>
                <span>预定方式</span>
            </div>

            <div class="menu">
            <span class="res-logo">&#xe9e7;</span>
            <span>茶歇菜单</span>
            </div>
            
        </div>
       
    
    
    
    
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 721549 */
  src: url('//at.alicdn.com/t/font_721549_1uk9sekj7xb.eot');
  src: url('//at.alicdn.com/t/font_721549_1uk9sekj7xb.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_721549_1uk9sekj7xb.woff') format('woff'),
  url('//at.alicdn.com/t/font_721549_1uk9sekj7xb.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_721549_1uk9sekj7xb.svg#iconfont') format('svg');
}

.service{
    margin:0;
    padding:0;
}
    
.res-logo{
    font-family:iconfont;
}

.name{
    text-align: center;
    background-color: #fff;
    width:110px;
    color:#9dc135;   
    position: absolute;
    z-index:1;
}

.c-title{
    display:block; 
    font-size: 20px; 
    line-height: 20px;
}

.e-title{
    font-size: 14px;
}

.border{   
    border: 2px solid #9dc135;
    width:160px;
    height:30px;
    background-color:#fff;
    margin-top:20px;   
}

.mid-name{
    width:150px;
    display: block;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.way{
    margin-top:20px;
}

.hr{
    border:0.5px dashed #9dc135;
    width:400px;
    position: absolute;
    z-index: -1;
    margin-top: 10px;

}

.r-title{
    display: flex;
    justify-content: center;
    align-items: center;
    
}

</style>
