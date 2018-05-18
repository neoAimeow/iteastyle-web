<template>
  <div class="sip-container">
        <div class="sip-head">
            <img src="../../assets/teacase-light-logo.png" style="width:80px；" alt="">
        </div>

        <div class="sip-body-title">
            <span style="font-size:20px">这份小确幸，您想要吗？</span>
            <div style="height:1px;width:80%;background-color:#aeaeae;margin-top:10px"></div>
            <div style="color:#aeaeae;font-size:12px;margin-top:8px"><span>来源：</span><span>杭式下午茶</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>发布时间：</span><span>2018-9-8</span></div>
        </div>

        <div class="sip-body-content">
            <div class="sip-content-left">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403081675&di=bbeb0307f841222baa9d02a29474d5bd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F45%2F116%2F2167%2F140938800.jpg" alt="" style="width: 230px;height: 200px;">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403081675&di=bbeb0307f841222baa9d02a29474d5bd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F45%2F116%2F2167%2F140938800.jpg" alt="" style="width: 230px;height: 200px;">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526403081675&di=bbeb0307f841222baa9d02a29474d5bd&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F45%2F116%2F2167%2F140938800.jpg" alt="" style="width: 230px;height: 200px;">
            </div>
            <div class="sip-content-right">
                <br>
               <p>最近还好吗</p>
               <p>还好吧</p>
            </div>
        </div>
  </div>
</template>

<style lang="scss">
.sip-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.sip-head{
    background:url(../../assets/DT-background.png) no-repeat center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 100%;
    margin-bottom:60px;

}

.sip-body-title{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    //background-color:red;
    width: 800px;
    height: 80px;
}
.sip-body-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:700px;
    margin-top:10px;
    background-color:black;

}
.sip-content-left{
    width: 300px;
    background-color:yellow;
}
.sip-content-right{
    width: 300px;
    background-color: red;
    font-size:15px;
}
</style>
