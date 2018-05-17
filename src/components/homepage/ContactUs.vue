<template>
  <div class="cu-container">
    <div class="contactus">
      <img src="../../assets/Contact-Us.png" alt="">
      <div>联系我们</div>     
      <span style="margin-top:30px;">杭式下午茶&nbsp;&nbsp;创意茶歇&nbsp;&nbsp;健康食尚</span> 

      <ul style="font-size:13px;margin-top:10px">
        <li style="line-height:25px">杭州执贝科技有限公司</li>
        <li style="line-height:25px">地址&nbsp;:&nbsp;杭州民和路525号三宏国际8楼</li>
        <li style="line-height:25px">电话&nbsp;:&nbsp;(86)0571-83731743</li>
        <li style="line-height:25px"><div style="display:flex;align-items:flex-start ">
          <span>手机&nbsp;:</span>
          <span>&nbsp;159-0663-1121（滕）<br>&nbsp;158-5823-2263（李）</span>
        </div></li>
        <li style="line-height:25px">邮箱&nbsp;:&nbsp;iteastyle@126.com</li>
        <li style="line-height:25px">网址&nbsp;:&nbsp;www.iteastyle.com</li>
      </ul>
    </div>


    <div class="cu-bottom">
      <div class="cu-bottom-left">
        <div class="map"></div>
      </div>
      <div class="cu-bottom-right">
        <div class="bottom-right-imgs"><img src="../../assets/qrCode.png" alt="" style="width:75px;height:75px"></div>
        <div class="bottom-right-imgs"><img src="../../assets/qrCode.png" alt="" style="width:75px;height:75px"></div>
      </div>
    </div>
  
  </div>
</template>

<style lang="scss">


.cu-container{
  background-image:url('../../assets/CU-background.png');
  background-repeat:no-repeat;
  background-position:center;
  background-color: #3a3a2d;
  color:white;
}


.contactus{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-top:80px;
}


.cu-head{
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  margin: 0 auto;
}

.cu-bottom{
  display: flex;
  flex-direction: row;
  width: 650px;
  height: 200px;
  margin: 0 auto;
  //background-color: blue;
  margin-top:30px;
  padding-bottom: 50px;
}

.cu-bottom-left{
  width: 370px;
  height: 200px;
  margin-left:125px;
  background-color:#d2e1b0;
  display:flex;
  justify-content: center;
  align-items: center;
}

.map{
  width:360px;
  height:190px;
  //background-color:black;
  
}
.cu-bottom-right{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  width:100px;
  height:200px;
  //background-color:yellow;
  margin-left:30px;
}

.bottom-right-imgs{
  width:85px;
  height:85px;
  background-color:#d2e1b0;
  display:flex;
  justify-content: center;
  align-items: center;
}
</style>
