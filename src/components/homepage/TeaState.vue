<template>
  <div class="state-container">
  <div style="margin-top:100px;wdith:1000px;height:1000px">
    <router-link to="state-insidepage">
      <div class="tea-state">     
        <img class="images" src="../../assets/state-image.png" alt="">
        <div class="state">
          <div style="display:flex;flex-direction:column;align-content:center;justify-content:center;width:700px;height:120px;margin-left:90px">
          <span style="color:#9bc348;font-size:16px;width:600px">这份小确幸，您想要吗？</span>
          <span style="color:white;font-size:13px;margin-top:10px;width:600px">转眼夏至 这一年已过去一半 正值夏天 闷热、阵雨、烈日 似乎是个不太好的季节 却也有人喜欢夏天的激情 阳光、海滩、冷饮 激情的夏日 一切活动仿佛充满了干劲...</span>
        </div>
          
        </div>
      </div>
    </router-link>
    
    <router-link to="state-insidepage">
      <div class="tea-state">     
        <img class="images" src="../../assets/state-image.png" alt="">
        <div class="state">
          <div style="display:flex;flex-direction:column;align-content:center;justify-content:center;width:700px;height:120px;margin-left:90px">
          <span style="color:#9bc348;font-size:16px;width:600px">这份小确幸，您想要吗？</span>
          <span style="color:white;font-size:13px;margin-top:10px;width:600px">转眼夏至 这一年已过去一半 正值夏天 闷热、阵雨、烈日 似乎是个不太好的季节 却也有人喜欢夏天的激情 阳光、海滩、冷饮 激情的夏日 一切活动仿佛充满了干劲...</span>
        </div>        
        </div>
      </div>
    </router-link>

    <router-link to="state-insidepage">
      <div class="tea-state">     
        <img class="images" src="../../assets/state-image.png" alt="">
        <div class="state">
          <div style="display:flex;flex-direction:column;align-content:center;justify-content:center;width:700px;height:120px;margin-left:90px">
          <span style="color:#9bc348;font-size:16px;width:600px">这份小确幸，您想要吗？</span>
          <span style="color:white;font-size:13px;margin-top:10px;width:600px">转眼夏至 这一年已过去一半 正值夏天 闷热、阵雨、烈日 似乎是个不太好的季节 却也有人喜欢夏天的激情 阳光、海滩、冷饮 激情的夏日 一切活动仿佛充满了干劲...</span>
        </div>
        </div>
      </div>
    </router-link>

    <router-link to="state-insidepage">
      <div class="tea-state">     
        <img class="images" src="../../assets/state-image.png" alt="">
        <div class="state">
          <div style="display:flex;flex-direction:column;align-content:center;justify-content:center;width:700px;height:120px;margin-left:90px">
          <span style="color:#9bc348;font-size:16px;width:600px">这份小确幸，您想要吗？</span>
          <span style="color:white;font-size:13px;margin-top:10px;width:600px">转眼夏至 这一年已过去一半 正值夏天 闷热、阵雨、烈日 似乎是个不太好的季节 却也有人喜欢夏天的激情 阳光、海滩、冷饮 激情的夏日 一切活动仿佛充满了干劲...</span>
        </div>
        </div>
      </div>
    </router-link>
  </div>
  </div>
</template>

<style lang="scss">
.state-container{
  background:url("../../assets/DT-background.png");
  background-repeat:no-repeat;
  background-position:center;
  background-color: #23201f;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
}
.state{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 120px;
  background-color: rgba(17,15,30,0.5);
  width: 720px;

}
.tea-state{
height:120px;
width: 810px;
//background-color:red;
display:flex;
flex-direction: row;
margin-top:30px;
}
.images{
height:100px;
width:100px;
border-radius:50%;
border:solid 10px rgba(155,194,72,0.6);
margin-right:-60px;
z-index:1;
}
</style>
