<template>
    <div class="souvenir-container">
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="position: relative;top:40px;left:50px;letter-spacing:5px;">杭州伴手礼</span>
                <div class="souvenir-main-title-cn"></div>
                <div class="souvenir-main-title-hr"></div>
                <span style="position: relative;left:40px;">TEA SOUVENIR</span>
                <div class="souvenir-main-title-en"></div>
            </div>
            <div class="souvenir-main-souvenir">
                <div class="souvenir-main-souvenir-introduce">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西湖龙井、九曲红梅、桂花龙井。都是最具杭城特色的茶品。是赠送外地友人的不二选择，也是外来游客的必选物品。</span>
                </div>
                <img class="souvenir-main-souvenir-img" src="http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png" alt="">
            </div>
        </div>
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="position: relative;top:40px;left:60px;letter-spacing:5px;">冲饮方式</span>
                <div class="souvenir-main-title-cn"></div>
                <div class="souvenir-main-title-hr"></div>
                <span style="position: relative;left:45px;">DRINKING WAY</span>
                <div class="souvenir-main-title-en"></div>
            </div>
            <div class="souvenir-main-drink">
                <div class="souvenir-main-drink-introduce">
                    <div class="souvenir-main-drink-subtitle">
                        <div class="souvenir-main-drink-subtitle1">
                            <span style="height:25px; line-height:25px; display:block; color:#FFF; text-align:center">1</span>
                        </div>
                        <div class="souvenir-main-drink-subtitle2">
                            <span>投茶</span>
                        </div>
                    </div>
                    <div class="souvenir-main-drink-introduce">
                        <span>投入3G茶叶于玻璃杯中</span>
                    </div>
                    <div class="souvenir-main-drink-subtitle">
                        <div class="souvenir-main-drink-subtitle1">
                            <span style="height:25px; line-height:25px; display:block; color:#FFF; text-align:center">2</span>
                        </div>
                        <div class="souvenir-main-drink-subtitle2">
                            <span>洗茶</span>
                        </div>
                    </div>
                    <div class="souvenir-main-drink-introduce">
                        <span>往杯中注入开水（西湖龙井、桂花龙井水温均为85度，九曲红梅水温约95度），茶水比例约1/3，摇动后，快速洗去第一泡茶汤。</span>
                    </div>
                    <div class="souvenir-main-drink-subtitle">
                        <div class="souvenir-main-drink-subtitle1">
                            <span style="height:25px; line-height:25px; display:block; color:#FFF; text-align:center">3</span>
                        </div>
                        <div class="souvenir-main-drink-subtitle2">
                            <span>注水冲泡</span>
                        </div>
                    </div>
                    <div class="souvenir-main-drink-introduce">
                        <span>再往杯中注入开水（西湖龙井、桂花龙井水温均为85度，九曲红梅水温约95度），约7分满，待茶叶吸水舒张。</span>
                    </div>
                    <div class="souvenir-main-drink-subtitle">
                        <div class="souvenir-main-drink-subtitle1">
                            <span style="height:25px; line-height:25px; display:block; color:#FFF; text-align:center">4</span>
                        </div>
                        <div class="souvenir-main-drink-subtitle2">
                            <span>品饮</span>
                        </div>
                    </div>
                    <div class="souvenir-main-drink-introduce">
                        <span>浸泡3-5分钟，即可饮茶香茶韵，可冲泡4次以上。</span>
                    </div>
                </div>
                <img class="souvenir-main-drink-img" src="http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png" alt="">
            </div>
        </div>
        <div class="souvenir-main">
            <div class="souvenir-main-title">
                <span style="position: relative;top:40px;left:60px;letter-spacing:5px;">伴手心意</span>
                <div class="souvenir-main-title-cn"></div>
                <div class="souvenir-main-title-hr"></div>
                <span style="position: relative;left:45px;">TEA SOUVENIR</span>
                <div class="souvenir-main-title-en"></div>
            </div>
            <div class="souvenir-main-gift">
                <div class="souvenir-main-gitf-category">
                    <div class="souvenir-main-gitf-list">
                        <el-table :data="tableData" stripe style="width: 600px;">
                            <el-table-column prop="number" label="编号" width="120">
                            </el-table-column>
                            <el-table-column prop="name" label="品名" width="120">
                            </el-table-column>
                            <el-table-column prop="pack" label="包装" width="120">
                            </el-table-column>
                            <el-table-column prop="specification" label="规格" width="120">
                            </el-table-column>
                            <el-table-column prop="price" label="价格（RMB）">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="souvenir-main-gitf-introduce1">
                        <div class="gitf-introduce-title">
                            <span style="color:#9dc135">- 西湖龙井介绍 --</span>
                        </div>
                        <div class="gitf-introduce-content">
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西湖龙井位列我国十大名茶之一，具有1200多年历史，明代列为上品，清顺治列为贡品。清乾隆游览杭州西湖时，盛赞龙井茶，并把狮峰山下胡公庙前的十八棵茶树封为“御茶”。</span><br>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龙井茶素有“色绿、香郁、味醇、形美”四绝著称于世，其外形挺直削尖、扁平俊秀、光滑匀齐、色泽绿中显黄。龙井冲泡后，香气清高持久，香郁若兰；汤色杏绿，清澈明亮，叶底嫩绿，匀齐成朵，芽芽直立，栩栩如生。品饮茶汤，沁人心脾，齿间留芳，回味无穷。</span>
                        </div>
                    </div>
                </div>
                <img src="http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png" alt="" class="souvenir-main-gitf-img1">
            </div>
            <div class="souvenir-main-gift">
                <div class="souvenir-main-gitf-category">
                    <div class="souvenir-main-gitf-list">
                        <el-table :data="tableData" stripe style="width: 800px;">
                            <el-table-column prop="number" label="编号" width="160">
                            </el-table-column>
                            <el-table-column prop="name" label="品名" width="160">
                            </el-table-column>
                            <el-table-column prop="pack" label="包装" width="160">
                            </el-table-column>
                            <el-table-column prop="specification" label="规格" width="160">
                            </el-table-column>
                            <el-table-column prop="price" label="价格（RMB）">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="souvenir-main-gitf-introduce2">
                        <div class="gitf-introduce2">
                            <div class="gitf-introduce-title">
                                <span style="color:#9dc135">- 九曲红梅介绍 --</span>
                            </div>
                            <div class="gitf-introduce-content">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西湖龙井位列我国十大名茶之一，具有1200多年历史，明代列为上品，清顺治列为贡品。清乾隆游览杭州西湖时，盛赞龙井茶，并把狮峰山下胡公庙前的十八棵茶树封为“御茶”。</span><br>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龙井茶素有“色绿、香郁、味醇、形美”四绝著称于世，其外形挺直削尖、扁平俊秀、光滑匀齐、色泽绿中显黄。龙井冲泡后，香气清高持久，香郁若兰；汤色杏绿，清澈明亮，叶底嫩绿，匀齐成朵，芽芽直立，栩栩如生。品饮茶汤，沁人心脾，齿间留芳，回味无穷。</span>
                            </div>
                        </div>
                        <img src="http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png" alt="" class="souvenir-main-gitf-img2">
                    </div>
                </div>
            </div>
            <div class="souvenir-main-gift2">
                <div class="souvenir-main-gitf-category">
                    <div class="souvenir-main-gitf-list">
                        <el-table :data="tableData" stripe style="width: 800px;">
                            <el-table-column prop="number" label="编号" width="160">
                            </el-table-column>
                            <el-table-column prop="name" label="品名" width="160">
                            </el-table-column>
                            <el-table-column prop="pack" label="包装" width="160">
                            </el-table-column>
                            <el-table-column prop="specification" label="规格" width="160">
                            </el-table-column>
                            <el-table-column prop="price" label="价格（RMB）">
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="souvenir-main-gitf-introduce2">
                        <div class="gitf-introduce2">
                            <div class="gitf-introduce-title">
                                <span style="color:#9dc135">- 桂花龙井介绍 --</span>
                            </div>
                            <div class="gitf-introduce-content">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西湖龙井位列我国十大名茶之一，具有1200多年历史，明代列为上品，清顺治列为贡品。清乾隆游览杭州西湖时，盛赞龙井茶，并把狮峰山下胡公庙前的十八棵茶树封为“御茶”。</span><br>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龙井茶素有“色绿、香郁、味醇、形美”四绝著称于世，其外形挺直削尖、扁平俊秀、光滑匀齐、色泽绿中显黄。龙井冲泡后，香气清高持久，香郁若兰；汤色杏绿，清澈明亮，叶底嫩绿，匀齐成朵，芽芽直立，栩栩如生。品饮茶汤，沁人心脾，齿间留芳，回味无穷。</span>
                            </div>
                        </div>
                        <img src="http://pa74otoy6.bkt.clouddn.com/case-inside2-picture2.png" alt="" class="souvenir-main-gitf-img2">
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
        tableData: [{
          number: 'HZ001',
          name: '龙井茶特级A',
          pack: '单罐礼盒',
          specification: '50G*1罐',
          price: '82.00'
        }, {
          number: 'HZ002',
          name: '西湖龙井特级A',
          pack: '单罐礼盒',
          specification: '65G*1罐',
          price: '188.00'
        }, {
          number: 'HZ003',
          name: '桂花龙井A',
          pack: '单罐礼盒',
          specification: '65G*1罐',
          price: '132.00'
        }, {
          number: 'HZ004',
          name: '九曲红梅特级A',
          pack: '单罐礼盒',
          specification: '65G*1罐',
          price: '105.00'
        }]
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    //background: red;
}
.souvenir-main-souvenir-introduce{
    width: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.souvenir-main-souvenir-img{
    width: 300px;
    height: 300px;
}
.souvenir-main-drink{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
.souvenir-main-drink-img{
    width: 300px;
    height: 300px;
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
    margin-left: 40px;
    //background: red;
}
.souvenir-main-gift{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom:2px solid #9dc135;
}
.souvenir-main-gitf-img1{
    width: 300px;
    height: 300px;
}
.souvenir-main-gitf-introduce1{
    margin-top: 20px;
    margin-bottom: 40px;
}
.gitf-introduce-content{
    margin-top: 20px;
}
.souvenir-main-gitf-introduce2{
    margin-top: 20px;
    margin-bottom: 40px;
    display: flex;
}
.souvenir-main-gitf-img2{
    width: 300px;
    height: 200px;
}
.souvenir-main-gift2{
    margin-bottom: 150px;
}
</style>
