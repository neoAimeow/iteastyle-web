<template>
  <div class="sip-container">
      <div class="sip-head">
          <img src="../../assets/teacase-light-logo.png" alt="">
      </div>
      <div class="sip-body">
          <div class="sip-body-title">
              <p >这份小确幸，您想要吗？</p>
              <div style="height:0.5px;background-color:#f0f0f0;"></div>
          </div>
          <div class="sip-body-content">
              <div class="sip-content-left">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403081675&di=bbeb0307f841222baa9d02a29474d5bd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F45%2F116%2F2167%2F140938800.jpg" alt="" style="width: 230px;height: 200px;">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403081675&di=bbeb0307f841222baa9d02a29474d5bd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F45%2F116%2F2167%2F140938800.jpg" alt="" style="width: 230px;height: 200px;">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403081675&di=bbeb0307f841222baa9d02a29474d5bd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F45%2F116%2F2167%2F140938800.jpg" alt="" style="width: 230px;height: 200px;">
              </div>
              <div class="sip-content-right">

              </div>
          </div>
      </div>
  </div>
</template>

<style lang="scss">
.sip-head{
    background:url(../../assets/DT-background.png);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;

}
.sip-body{
    width: 800px;
    margin: 0 auto;
}
.sip-body-title{
    text-align: center;
    margin-top:30px;
}
.sip-body-content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.sip-content-left{
    width: 230px;
}
.sip-content-right{
    width: 230px;
    background-color: red;
}
</style>
