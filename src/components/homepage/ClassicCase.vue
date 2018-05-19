<template>
  <div class="cc-container">

    <router-link to="/homepage/case-insidepage1">
    <div style="width:200px;height:450px;">    
      <div class="case-top">
        <img class="cc-container-img" src="../../assets/tea-case-images.png">      
        <div class="cc-container-img-logo"><img class="cc-container-logo" src="../../assets/teacase-light-logo.png" ></div>
      </div>      
      <div class="case-foot">
        <img src="../../assets/case-tea-dessert.png" style="width:50%">
      </div>
    </div>      
    </router-link>
    
    <router-link to="/homepage/case-insidepage1">
    <div style="width:200px;height:450px;">    
      <div class="case-top">
        <img class="cc-container-img" src="../../assets/tea-case-images.png">      
        <div class="cc-container-img-logo"><img class="cc-container-logo" src="../../assets/teacase-light-logo.png" ></div>
      </div>      
      <div class="case-foot">
        <img src="../../assets/case-tea-culture-seminar.png" style="width:58%">
      </div>
    </div>      
    </router-link>

    <router-link to="/homepage/case-insidepage1">
    <div style="width:200px;height:450px;">    
      <div class="case-top">
        <img class="cc-container-img" src="../../assets/tea-case-images.png">      
        <div class="cc-container-img-logo"><img class="cc-container-logo" src="../../assets/teacase-light-logo.png" ></div>
      </div>      
      <div class="case-foot">
        <img src="../../assets/case-DIY-activities.png" style="width:47%">
      </div>
    </div>      
    </router-link>

    <router-link to="/homepage/case-insidepage1">
    <div style="width:200px;height:450px;">    
      <div class="case-top">
        <img class="cc-container-img" src="../../assets/tea-case-images.png">      
        <div class="cc-container-img-logo"><img class="cc-container-logo" src="../../assets/teacase-light-logo.png" ></div>
      </div>      
      <div class="case-foot">
        <img src="../../assets/case-private-tea-customisation.png" style="width:65%">
      </div>
    </div>      
    </router-link>

    <router-link to="/homepage/case-insidepage1">
    <div style="width:200px;height:450px;">    
      <div class="case-top">
        <img class="cc-container-img" src="../../assets/tea-case-images.png">      
        <div class="cc-container-img-logo"><img class="cc-container-logo" src="../../assets/teacase-light-logo.png" ></div>
      </div>      
      <div class="case-foot">
        <img src="../../assets/case-tea-performance.png" style="width:50%">
      </div>
    </div>      
    </router-link>
    
  </div>
  
</template>

<script>
  import {
    casesGQL
  } from '@/graphql/Case';

  export default {
  
    apollo: {
      cases: {
        query() {
          return casesGQL;
        }
      },
    },
    data() {
      return {
        cases: {},
      }
    },
  }
</script>
<style lang="scss">
.cc-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1200px;
  margin-top: 30px;
  margin: 0 auto;
}
.case-top{
  width:200px;
  height:300px;
  display: flex;
  flex-direction: column;
}
.cc-container-img{
  width:200px;
  height:300px;
  position:absolute;
  z-index:-1;
}
.cc-container-img-logo{
display:flex;
justify-content:center;
width:200px;
height:300px;
}
.cc-container-logo{
  padding-top:200px;
  height:25%;
}
.case-foot{
width:200px;
height:150px;
display:flex;
align-items:center;
justify-content:center;
//background-color:yellow;
}
</style>
