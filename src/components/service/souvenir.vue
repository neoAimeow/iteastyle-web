<template>
    <div class="souvenir-container">
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="position: relative;top:45px;left:45px;letter-spacing:2px;font-size:20px;">{{items.souvenir.title}}</span>
                <div class="souvenir-main-title-cn"></div>
                <div class="souvenir-main-title-hr"></div>
                <span style="position: relative;left:45px;font-size:15px;">{{items.souvenir.title_en}}</span>
                <div class="souvenir-main-title-en"></div>
            </div>
            <div class="souvenir-main-souvenir">
                
                <span class="souvenir-main-souvenir-introduce" v-html="items.souvenir.content"></span>
                
                <img class="souvenir-main-souvenir-img" :src="items.souvenir.imageUrl" alt="">
            </div>
        </div>
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="position: relative;top:45px;left:55px;letter-spacing:2px;font-size:20px;">{{items.way.title}}</span>
                <div class="souvenir-main-title-cn"></div>
                <div class="souvenir-main-title-hr"></div>
                <span style="position: relative;left:45px;font-size:15px;">{{items.way.title_en}}</span>
                <div class="souvenir-main-title-en"></div>
            </div>
            <div class="souvenir-main-drink">
                <div class="souvenir-main-drink-introduce">
                    <div  v-for="(info1 , key1) in items.way.ways" :key="key1">
                    <div class="souvenir-main-drink-subtitle">
                        <div class="souvenir-main-drink-subtitle1">
                            <span style="height:25px; line-height:25px; display:block; color:#FFF; text-align:center">{{key1+1}}</span>
                        </div>
                        <div class="souvenir-main-drink-subtitle2">
                            <span>{{info1.title}}</span>
                        </div>
                    </div>
                        
                        <p class="souvenir-main-drink-content">{{info1.content}}</p>
                        
                    </div>
                </div>
                <img class="souvenir-main-drink-img" :src="items.way.imageUrl" alt="">
            </div>
        </div>
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="position: relative;top:45px;left:55px;letter-spacing:2px;font-size:20px;">{{items.mind.title}}</span>
                <div class="souvenir-main-title-cn"></div>
                <div class="souvenir-main-title-hr"></div>
                <span style="position: relative;left:45px;font-size:15px;">{{items.mind.title_en}}</span>
                <div class="souvenir-main-title-en"></div>
            </div>
            <div class="souvenir-main-gift">
                <div class="souvenir-main-gitf-category" v-for="(info2 , key2) in items.mind.minds" :key="key2">
                    <div class="souvenir-main-gitf-list">
                        <el-table :data="info2.elements" stripe style="width: 800px;">
                            <el-table-column prop="number" label="编号" width="160">
                            </el-table-column>
                            <el-table-column prop="elementName" label="品名" width="160">
                            </el-table-column>
                            <el-table-column prop="wrap" label="包装" width="160">
                            </el-table-column>
                            <el-table-column prop="size" label="规格" width="160">
                            </el-table-column>
                            <el-table-column prop="price" label="价格（RMB）">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="souvenir-main-gitf-introduce">
                        <div class="gitf-introduce">
                            <div class="gitf-introduce-title">
                                <span style="color:#9dc135;font-size:18px;">- {{info2.itemTitle}} - -</span>
                            </div>
                            <div class="gitf-introduce-content">
                                <span v-html="info2.itemContent"></span>
                            </div>
                        </div>
                        <img :src="info2.itemImageUrl" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
            items:{},
        }
    },
    created: function() {
        this.request();
    },
    methods: {

        request: function() {
            var that = this;
            this.$ajax.get('/getTeaGiftService',{
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
  }
</script>

<style lang="scss">
.souvenir-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom:2px solid #9dc135;
}
.souvenir-main{
    width: 900px;
}
.souvenir-main-title{
    display: flex;
    flex-direction: column;
    width: 600px;
    color: white;
}
.souvenir-main-title-hr{
    width:600px;
    height:1px;
    border:none;
    border-top:2px solid #9dc135;
}
.souvenir-main-title-cn{
    width: 140px;
    margin-left: 30px;
    border-top: 50px solid #9dc135;
    border-top-left-radius: 10px;
    border-top-right-radius:10px;
}
.souvenir-main-title-en{
    width: 140px;
    border-top: 30px solid #9dc135;
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;
    margin-top: -23px;
}
.souvenir-main-souvenir{
    width: 860px;
    margin-left:40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //background: red;
}
.souvenir-main-souvenir-introduce{
    width: 500px;
    // background-color: aqua;
    line-height:30px;
}
.souvenir-main-souvenir-img{
    width: 300px;
    height: auto;
}
.souvenir-main-drink{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.souvenir-main-drink-content{
    margin-left:45px;
    margin-top:5px;
    margin-bottom:0px;
}

.souvenir-main-drink-img{
    width: 300px;
    height: auto;
}
.souvenir-main-drink-subtitle{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
}
.souvenir-main-drink-subtitle1{
    width:25px; 
    height:25px; 
    background-color: #9dc135; 
    border-radius:12.5px;
}
.souvenir-main-drink-subtitle2{
    margin-left: 20px;
    color: #9dc135;
}
.souvenir-main-drink-introduce{
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    width: 500px;
    //background: red;
}
.souvenir-main-gift{
    border-bottom:2px solid #9dc135;
}
.gitf-introduce-content{
    margin-top: 20px;
    line-height:30px;
}
.souvenir-main-gitf-introduce{
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.souvenir-main-gitf-img{
    width: 300px;
    height: 200px;
}
.souvenir-main-gift{
    margin-bottom: 150px;
}
</style>
