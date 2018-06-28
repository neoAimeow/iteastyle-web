<template>
<div class="productinside">
    <div class="pdinside-title">
        <progressive-img class="title-background" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="" />
        <img src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png">
    </div>

    <div class="pdinside-body">
        <div style="display:flex;" v-for="(img,key) in imgs" :key="key" >          

            <img  class="body-img" :src="img" alt="">
                        <div v-if="key==0" class="body-name" >
                <div class="name-top">
                    <img class="logo" src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png" alt="">
                    <span class="name-bottom">茶饮茶点</span>
                </div>
                <span class="pd-name">{{title}}</span>
            </div>
        </div>
    </div>

    <div class="pd-introduction">
        <span v-html="content"></span>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            imgs:[],
            content:'',
            title: ''
        }
    },
created: function() {
    console.log(this.$route.query.id);
    var that = this;
     this.$ajax.get('/productShowerDetail', {
        params:{
            productShowerId:this.$route.query.id
        }
    })
    .then(function (response) {
      console.log(response);
      that.content = response.data.model.content;
      that.imgs = response.data.model.imageArr;
      that.title = response.data.model.title;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style scoped>
    .productinside{
        margin:0;
        padding:0;
        border-bottom:2px solid #9dc135;
    }

    .pdinside-title{
        height:200px;
        display: flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 80px;
    }

    .title-background{
        min-width: 1300px;
        height: 200px;
        width: 100%;
        position: absolute;
        z-index: -1;
    }

    .pdinside-body{
        width:1020px;       
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin:0 auto;  
    }

    .body-name{
        width:340px;
        height:220px;       
        font-size: 20px;
        background: #9dc135; 
        color:white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .pd-name{
        width:200px;
        text-align: center;
    }

    .name-top{
        width:205px;
        height:50px;
        border:1px dotted white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .logo{
        width:40px;
        height:auto;
    }

    .name-bottom{
        margin-left:5px;
    }

    .body-img{
        width:340px;
        height:220px;
    }

    .pd-introduction{
        border:1px dotted #e0e0e0;
        width:1020px;
        margin:0 auto;       
        margin-bottom:40px; 
        margin-top:40px;       
    }

    .pd-introduction span{
       line-height: 2;
       display:flex;
       justify-content: center;
       margin-top:20px;
       margin-bottom: 20px;
       text-align: center;
    }
    
</style>
