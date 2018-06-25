<template>
<div class="productDisplay">

    <div class="pd-title">
        <progressive-img class="pd-title-picture" :src="headerImageUrl" />
        <div class="title-logo"><img src="http://pa74otoy6.bkt.clouddn.com/opaque-logo.png"></div>
    </div>
    <div class="pd-ct">           
                <div class="product-name" v-for="(item,key) in items" :key="key">
                    <router-link :to="{path:'/homepage/productInside',query: {id: item.id}}">
                        <div class="pd-picture-border">
                            <img class="pd-img" :src="item.imageArr[0]">
                        </div>
                        <span>{{item.title}}</span>
                    </router-link>
                </div>
    </div>
   <div class="pd-page">
        <el-pagination
            layout="prev, pager, next"
            :total="totalCount" :page-size="pageSize" :current-page="currentPage" @current-change="currentPageChanged"
        >
        </el-pagination>
   </div>

</div>
</template>

<script>
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
</script>


<style scoped>
a{
    color:black;
}
.productDisplay {
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
  border-bottom:2px solid #9dc135;
}

.pd-title {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pd-title-picture {
    min-width: 1300px;
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: -1;
}

.pd-title-logo {
  text-align: center;
}

.pd-ct {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  margin-top: 40px;
  margin-bottom: 20px;
}

.pd-picture-border {
  border: 1px solid #e0e0e0;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 275px;
  height: 180px;
}

.pd-img {
  width: 265px;
  height: 170px;
  
}

.product-name {
  width:265px;
  text-align: center;
  margin: 15px;
  color: #626262;
}

.pd-page {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}


</style>