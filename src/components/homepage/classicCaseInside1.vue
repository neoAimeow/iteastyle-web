<template>
<div class="classinside-one">
    <div class="case-top">
        <progressive-img class="top-background" src="http://pa74otoy6.bkt.clouddn.com/pd-case-DT-Details-background.png" alt="" />
        <img src="http://pa74otoy6.bkt.clouddn.com/case-light-logo.png" >
    </div>
    <div class="case-body">
               
        <div v-for="(item,key) in items" :key="key">   
           <router-link  :to="{path:'/homepage/classicCaseInside2',query: {id: item.id}}">
            <div class="picture"> 
               <img class="case-picture" :src="item.imageArr[0]" alt="">
               <div class="case-title">
                   <span>{{item.title}}</span>
               </div> 
            </div>  
            </router-link>
        </div>
          
    </div> 
    <div class="case-foot">
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
              
            this.$ajax.get('/cases', {
                params: {
                    type:this.$route.query.type,
                    page:this.currentPage,
                    pageSize:this.pageSize
                }

            })
            .then(function (response) {
            console.log(response);
            that.items = response.data.model.cases;
            that.totalCount = response.data.model.totalCount
            
            })
            .catch(function (response) {
            console.log(response);
            });
      }
  }
}
</script>


<style scoped>
.classinside-one{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content:center;
    border-bottom:2px solid #9dc135;
}
.case-top{
    height:200px;  
    display: flex;
    align-items:center;
    justify-content:center;     
}

.top-background{
    min-width: 1300px;
    height: 200px;
    width: 100%;
    position: absolute;
    z-index: -1;
}
.case-body{
    width:1000px;
    height:500px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin: 0 auto;
    margin-top:40px; 
    
}

.picture{
    width:305px;
    height: 220px;
}

.case-picture{
    width:305px;
    height: 220px;
    position:absolute;
    z-index: -1;
}
.case-title{
    width:305px;   
    background-color: rgba(174,203,87, 0.83);
    text-align: center;
    color: white;
    line-height: 45px;
    position: relative;
    top: 160px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.case-foot{
    margin: 0 auto;
    margin-bottom: 40px;
}
</style>
