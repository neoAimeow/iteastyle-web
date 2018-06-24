<template>
    <div class="ts-container">
        <progressive-img class="ts-bgimg" :src="backgroundImageUrl"/>
        <div class="ts-main">
            <div class="ts-main-center" v-for="(item,key) in items" :key="key">
                <router-link to="./teaStateInside">
                    <div class="ts-main-center-right">
                        <span style="color:#9dc135;">{{item.title}}</span>
                        <span style="color:white;">{{item.content}}</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      items: [],
      backgroundImageUrl:''
    };
  },
  created: function() {
    var that = this;
     this.$ajax.get('/getPosts?page=1&pageSize=10', {

    })
    .then(function (response) {
      console.log(response.data);
      that.items = response.data.model.posts;
      that.backgroundImageUrl = response.data.model.postBackgroundImage;
    })
    .catch(function (response) {
      console.log(response);
    });
  }
};
</script>

<style lang="scss" scoped>
.ts-container{
    height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.ts-bgimg{
    min-width: 1440px;
    height: 1000px;
    width: 100%;//progressive-img不设置宽度整个图片就消失了
    position: absolute;
    z-index: -1;
}
.ts-main{
    width: 500px;
    //height: 1000px;
    background-color: red;
    display: flex;
    flex-direction: column;
}
.ts-main-center{
    margin-top: 30px;
    background-color: red;
}
.ts-main-center-right{
    background-color: rgba(32, 11, 32, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
