<template>
<div class="classinside-one">
    <div class="case-top">
        <img class="top-background" src="http://pa74otoy6.bkt.clouddn.com/%E4%BA%A7%E5%93%81%E5%92%8C%E6%A1%88%E4%BE%8B%E5%86%85%E9%A1%B5%E6%A0%87%E9%A2%98%E8%83%8C%E6%99%AF%E5%9B%BE.png" alt="">
        <img src="http://pa74otoy6.bkt.clouddn.com/%E6%A0%87%E9%A2%98%E5%9B%BE%E4%B8%8A%E7%9A%84logo.png">
    </div>
    <div class="case-body">
       <router-link to="/homepage/classicCaseInside2"><div class="picture">
           <img src="http://pa74otoy6.bkt.clouddn.com/%E6%8A%B9%E8%8C%B6%E8%B4%B9%E5%8D%97%E9%9B%AA%E4%BA%A7%E5%93%81%E5%86%85%E9%A1%B5%E7%BD%91%E7%BB%9C%E5%9B%BE%E7%89%87.jpg" alt="">
           <div class="title"><span>绍兴玛莎拉蒂“双十一”活动</span></div>
        </div></router-link>
    </div>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
</template>
<style>
.case-top{
    height:220px;
    display: flex;
    align-items:center;
    justify-content:center;
}
.top-background{
    height:220px;
    position:absolute;
    z-index: -1;
}
.case-body{
    width:1025px;
    
}
.picture{
    width:305px;
    
}
.title{
    width:350px;
    height:45px;
}
</style>
