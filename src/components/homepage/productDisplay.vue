<template>
<div class="pd-container">

    <div class="pd-main">
        <div class="pd-title">
            <hr style="width:33.3%;height:2px;border:none;border-top:2px solid #9dc135;" />
            <div class="pd-title-name">
                <span>茶饮茶点</span>
                <span style="font-size:10px;">TEA DESSERT</span>
            </div>
            <hr style="width:33.3%;height:2px;border:none;border-top:2px solid #9dc135;" />
        </div>
        <div class="pd-content">
            <div class="pd-content-img">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
            </div>
            <div class="pd-content-img">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
            </div>
            <div class="pd-content-img">
                <img src="http://pa74otoy6.bkt.clouddn.com/Caseimg1.png" alt="">
            </div>
        </div>
    </div>

</div>
</template>

<!-- <script>
 export default {
    data() {
        return {
            items:[

            ],
            headerImageUrl:'',
            currentPage:1,
            totalCount:0,
            pageSize:6
        }
 },
created: function() {
    this.request();
  },
  methods: {
      currentPageChanged(val) {
          this.currentPage = val;
              this.request();
        console.log(`当前页: ${val}`);
      },
      request() {
              var that = this;
            this.$ajax.get('/productShower', {
                params: {
                    page:this.currentPage,
                    pageSize:this.pageSize
                }

            })
            .then(function (response) {
            console.log(response);
            that.items = response.data.model.products;
            that.totalCount = response.data.model.totalCount
            that.headerImageUrl = response.data.model.headerImageUrl
            })
            .catch(function (response) {
            console.log(response);
            });
      }
  }
}
</script> -->

<style lang="scss">
.pd-container{
    width: 100%;
}
.pd-main{
    width: 80%;
    background: red;
    margin: 0 auto;
    margin-top: 20px;
}
.pd-title{
    width: 80%;
    background: yellow;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.pd-title-name{
    width: 33.3%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.pd-content{
    
}
</style>
