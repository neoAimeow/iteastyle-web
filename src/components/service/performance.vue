<template>
    <div class="ps-container">
        <div class="ps-main">
            <div class="ps-content" v-for="(info1 , key1) in info.items" :key="key1">
                <silentbox-group>
                    <silentbox-item v-for="(image,imageKey) in info1.imageUrls" :key="imageKey" :src="image">
                        <img v-if="imageKey===0" :src="image" alt="" class="ps-content-img">
                    </silentbox-item>
                </silentbox-group>
                <div class="ps-content-title">
                    <img :src="info1.iconImageUrl" alt="" class="ps-content-logo">
                    <div class="ps-content-name">
                        <span style="color:#9dc135;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:110px;">{{info1.title}}</span>
                        <span style=" color: rgb(228, 227, 227);">{{info1.title_en}}</span>
                    </div>
                </div>
            </div>
        </div>
        <el-pagination
            layout="prev, pager, next"
            :total="totalCount" :page-size="pageSize" :current-page="currentPage" @current-change="currentPageChanged"
        >
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info:{},
            currentPage:1,
            pageSize:6,
            totalCount: 0
        }
    },
created: function() {
    console.log(this.$route.query.id);
    this.request();
  },
  methods : {
      request() {
        var that = this;
        this.$ajax.get('/getTeaPerformService', {
            params:{
                id:this.$route.query.id,
                page:this.currentPage,
                pageSize:this.pageSize
            }
        })
        .then(function (response) {
        console.log(response);
        that.info = response.data.model;
        that.totalCount = response.data.model.totalCount;
        })
        .catch(function (response) {
        console.log(response);
        });
      },
      currentPageChanged(val) {
        this.currentPage = val;
        this.request();

      }
  }
}
</script>

<style lang="scss">
.ps-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom:2px solid #9dc135;
}
.ps-main{
    width: 900px;
    display: flex;
    flex-direction: row;
    margin-bottom: 200px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.ps-content{
    width: 270px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:0px 0px  5px 2px #aaa;
}
.ps-content-img{
    width: 270px;
    height: 200px;
}
.ps-content-title{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 270px;
    margin-bottom: 10px;
}
.ps-content-logo{
    width: 50px;
    height: 50px;
}
.ps-content-name{
    color: white;
    font-size: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>

