<template>
<div class="pd-container">
    <div class="pd-head">
        <img src="http://pa74otoy6.bkt.clouddn.com/pd-title-background.png" alt="" class="pd-head-bg">
        <img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="" class="pd-head-logo">
    </div>
    <div style="background-color:red;" class="pd-main" v-for="(item , key) in items" :key="key">

        <div class="pd-title">
            <hr style="width:260px;height:2px;border:none;border-top:2px solid #9dc135;" />
            <div class="pd-title-name">
                <span style="letter-spacing:10px;">{{item.caseType.typeName}}</span>
                <span style="font-size:10px;">{{item.caseType.typeNameEn}}</span>
            </div>
            <hr style="width:260px;height:2px;border:none;border-top:2px solid #9dc135;" />
        </div>
        <div class="pd-content">
            <div class="pd-content-img" v-for="(cell , inKey) in item.cases" :key="inKey">
                    <silentbox-group>
                        <silentbox-item v-for="(image,imageKey) in cell.imageArr" :key="imageKey" :src="image">
                            <img v-if="imageKey==0" style="width: 270px;height: 200px;" :src="cell.imageArr[0]" alt="">
                        </silentbox-item>
                    </silentbox-group>
                <div class="pd-content-img-title"><span>{{cell.title}}</span></div>
            </div>
        </div>
        <div class="pd-more">
            <router-link to="../display/teaDessert"><span>MORE</span></router-link>
        </div>
    </div>

</div>
</template>

<script>
 export default {
    data() {
        return {
            items:[]
        }
 },
created: function() {
    this.request();
  },
  methods: {

      request() {
              var that = this;
            this.$ajax.get('/getCasesHomeData', {
            })
            .then(function (response) {
                console.log(response);
                that.items = response.data.model;
            })
            .catch(function (response) {
            console.log(response);
            });
      }
  }
}
</script>

<style lang="scss">
.pd-more a:link{
    color: #9dc135;
}
.pd-more a:visited{
    color: #9dc135;
}
.pd-container{
    width: 100%;
}
.pd-head{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.pd-head-bg{
    width: 100%;
    height: 160px;
    min-width: 1300px;
}
.pd-head-logo{
    width: 80px;
    height: 80px;
    position: absolute;
    z-index: 1;
}
.pd-main{
    width: 900px;
    //background: red;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pd-title{
    width: 720px;
    //background: yellow;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.pd-title-name{
    width: 200px;
    color: #9dc135;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pd-content{
    width: 900px;
    //background: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
    margin-top: 40px;
}
.pd-content-img{
    margin-top: 40px;
    width: 270px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.pd-content-img-title{
    position: relative;
    background-color: rgba(180, 218, 44, 0.5);
    width: 270px;
    color: white;
    line-height: 35px;
    bottom: 50px;
    text-align: center;
}
.pd-more{
    width: 10%;
    margin-top: 40px;
    border: solid 1px #9dc135;
    border-radius: 15px;
    text-align: center;
    color: #9dc135;
}
</style>
