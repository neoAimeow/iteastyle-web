<template>
    <div class="tsI-container">
        <div class="td-head">
            <img style="width:100%;" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="">
            <div class="td-head-logo">
                <img style="width:100px;height:100px;" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png" alt="">
            </div>
        </div>
        <div>
            <div class="tsI-main-head">
                <span>{{title}}</span>
                <hr style="height:0.2px;border:none;border-top:1px solid #a7a7a7; width: 800px;" />
                <span style="font-size:5px;color:#626262;">发布时间：{{ gmtModified | moment("YYYY-MM-DD") }}</span>
            </div>
            <div class="tsI-main-body">
                <div class="tsI-main-body-content">
                    <span v-html="content"></span>
                </div>
            </div>
        </div>
        <!--<div class="tsI-other-article">-->
            <!--<router-link to="./"><span>上一篇：</span></router-link>-->
            <!--<router-link style="margin-top:10px;" to="./"><span>下一篇：</span></router-link>-->
        <!--</div>-->
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            content:'',
            gmtModified: ''
        }
    },
created: function() {
    console.log(this.$route.query.id);
    var that = this;
     this.$ajax.get('/getPostById', {
        params:{
            postId:this.$route.query.id
        }
    })
    .then(function (response) {
      console.log(response);
      that.content = response.data.model.content;
      that.title = response.data.model.title;
      that.gmtModified = response.data.model.gmtModified
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style lang="scss" scoped>
.tsI-other-article a:hover{
    color: #9dc135;
}
.tsI-container{
    //height: 900px;
    border-bottom:2px solid #9dc135;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.td-head{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.td-head-logo{
    position: absolute;
    z-index: 1;
}

.tsI-main-head{
    margin-top: 50px;
    text-align: center;
}
.tsI-main-body{
    //height: 600px;
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-color: blue;
    margin-top: 10px;
    margin-bottom: 40px;
}
.tsI-main-body-content{
    width: 700px;
    font-size: 10px;
    letter-spacing:3px;
}
.tsI-other-article{
    width: 800px;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}
</style>
