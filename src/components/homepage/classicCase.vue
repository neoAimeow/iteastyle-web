<template>
<div class="classicCase">

<div v-for="(item,key) in items" :key="key" >
    <router-link :to="{path:'/homepage/classicCaseInside1', query: {type: item.type}}">
    <div class="case" >
        <div class="case-picture">
            <img class="picture" :src="item.typeImage">
            <img class="picture-logo" src="http://pa74otoy6.bkt.clouddn.com/title-logo.png">
        </div>
        <div class="case-name">
            <img class="logo" :src="item.typeIcon">
            <div class="title">
                <span class="C-title">{{item.typeName}}</span>
                <span class="E-title">{{item.typeNameEn}}</span>
            </div>
        </div>
    </div>
    </router-link>
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
    var that = this;
     this.$ajax.get('/getCaseTypes', {

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
</script>


<style scoped>
a{
    color:black;
}
    .classicCase{
        display: flex;
        flex-direction: row;
        justify-content: center;      
        border-bottom:2px solid #9dc135;

    }
    .case{
        width:250px;
        height:600px;
        
       
    }
    .case-picture{
        width:250px;
        height:400px;
        display: flex;
        justify-content: center; 

    }
    .picture{
        width:250px;
        height:400px;
    }
    .picture-logo{
        padding-top:280px;
        width:80px;
        height:80px;
    }
    
    .case-name{
        width:250px;
        height:200px;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .logo{
        width:40px;
        height:auto;
    }
    .title{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
        height:40px;
    }
    .C-title{
        font-size: 20px;
        letter-spacing: 12px;
   
    }
    .E-title{
        font-size:10px;
        line-height: 0.8;
    }
     
</style>