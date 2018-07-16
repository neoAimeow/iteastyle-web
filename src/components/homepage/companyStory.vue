<template>
<div class="company-story">
    <progressive-img class="companystory-background" :src="info.backgroundImageUrl" />
    <div class="story">
        <div class="story-title">
            <span class="title-english">OUR STORY</span>
            <img src="http://pa74otoy6.bkt.clouddn.com/plus.png">
            <span class="titile-chinese">{{info.storyTitle}}</span>
       </div>
    <span class="story-ct" v-html="info.storyContent"></span>
    </div>

    <video v-if="info.videoUrl != null" :src="info.videoUrl" controls></video>
    <div v-else style="height:600px;"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      info:{}
    }
  },
  created: function() {
    var that = this;
     this.$ajax.get('/companyStory', {

    })
    .then(function (response) {
      console.log(response);
      that.info = response.data.model;
      that.center = [response.data.model.longitude , response.data.model.latitude]
    })
    .catch(function (response) {
      console.log(response);
    });
  }
}
</script>

<style scoped>
    .company-story{      
        margin:0;
        padding:0;
        color:white;
        height:900px;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        border-bottom:2px solid #9dc135;
    }
    .companystory-background{
        height:900px;
        position:absolute;
        z-index: -1;
        margin-left:0px;
        margin-top:0px;
        width: 100%;
        min-width: 1000px;
       
    }
    .story{    
        width:1000px;
        margin-top:100px;
        background-color:rgba(17,14,30,0.5)
    }
    
    .story-title{
        text-align:center;
        padding-top:30px;
    }
    span{
        display:block;
    }
    .title-english{
        font-family:'Times New Roman';
        font-size:25px;
    }
    .titile-chinese{
        font-size:18px;
        letter-spacing:normal;
    }
    .story-ct{
        margin-top:20px;
        padding-left:125px;
        padding-right:125px;
        margin-bottom:50px;
        
        
    }
    /* .story-ct1{
        padding-bottom: 40px;
    } */
    video{
        width:1000px;
        height:600px;
        background-color:black;
        margin-top:30px;
        margin-bottom:100px;
    }
</style>