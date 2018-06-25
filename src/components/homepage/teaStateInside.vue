<template>
    <div class="tsI-container">
        <div class="tsI-head">
            <img class="tsI-head-bgimg" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="" />
            <img class="tsI-head-logo" src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" alt="" />
        </div>
        <div class="tsI-main">
            <div class="tsI-main-head">
                <span>{{title}}</span>
                <hr style="height:0.5px;border:none;border-top:1px solid #555555; width: 800px;" />
                <span style="font-size:5px;color:#626262;">来源：     发布时间：   </span>
            </div>
            <div class="tsI-main-body">
                <div class="tsI-main-body-left">
                    <progressive-img />
                </div>
                <div class="tsI-main-body-right">
                    <span>{{content}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title:'',
            content:''
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
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style lang="scss" scoped>
/*.tsI-container{
    //height: 900px;
}*/
.tsI-head{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 200px;
}
.tsI-head-bgimg{
    height: 200px;
    min-width: 1300px;
    width: 100%;
    position: absolute;
    z-index: -1;
}
.tsI-head-logo{
    height: 100px;
    width: 100px;
    margin-top: 50px;
}
.tsI-main-head{
    margin-top: 20px;
    text-align: center;
}
.tsI-main-body{
    //height: 600px;
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    //background-color: blue;
    margin-top: 10px;
}
.tsI-main-body-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    //background-color: red;
}
.tsI-main-body-left-img{
    height: 200px;
    width: 250px;
    margin-top: 15px;
}
.tsI-main-body-right{
    display: flex;
    flex-direction: column;
    width: 100px;
    margin-top: 30px;
    margin-left: 20px;
}
.tsI-main-body-right span{
    font-size: 5px;
    //text-align: center;
}
</style>
