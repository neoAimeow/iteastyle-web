<template>
    <div class="ts-container">
        <div class="ts-head" :style="tsHeadBackgroundStyle">
            <div class="ts-title">
                <div class="ts-title-en">
                    <span>TEA BREAK</span>
                    <span>INFORMATION</span>
                </div>
                <div class="ts-title-logo">
                    <img style="width:60px;height:60px;" :src='$imageDomain+"/150.png"' alt="">
                    <span style="letter-spacing:10px;margin-left:30px;">茶式动态</span>
                </div>
            </div>
        </div>
        <div v-for="(item , key) in items.items" :key="key">
            <router-link :to="{path:'./teaStateInside',query:{id:item.id}}">

                <div class="ts-main">
                    <img style="width:300px;height:200px;margin:10px;" :src="$imageDomain+item.imageUrl" alt="">
                    <div class="ts-main-content">
                        <div class="ts-main-content-title">
                            <span style="color:#9dc135;width:400px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.title}}</span>
                            <span style="font-size:10px;color:#909090">{{ item.gmtModified | dateFormat("YYYY-MM-DD")}}</span>
                        </div>
                        <div class="ts-main-content-center">{{item.summary}}</div>
                        <div class="ts-main-content-more">MORE</div>
                    </div>
                </div>
            </router-link>

            <div class="hr" style="width:940px;border:0.5px solid #f0f0f0;margin-top:20px;"></div>
        </div>

        <div class="case-foot">
            <el-pagination
                    layout="prev, pager, next"
                    :total="totalCount" :page-size="pageSize" :current-page="currentPage"
                    @current-change="currentPageChanged"
            >
            </el-pagination>
        </div>

    </div>
</template>


<script>
    export default {
        data() {
            return {
                items: [],
                currentPage: 1,
                totalCount: 0,
                pageSize: 5,
                tsHeadBackgroundStyle: ''
            }
        },
        created: function () {
            let imageUrl = this.$imageDomain + '/teaState-title-bkground.jpg';
            this.tsHeadBackgroundStyle = 'background: url(' + imageUrl + ')no-repeat; background-size: 100% auto;'
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
                this.$ajax.get('/getPosts', {
                    params: {
                        page: this.currentPage,
                        pageSize: this.pageSize
                    }
                })
                    .then(function (response) {
                        console.log(response.data);
                        that.items = response.data.model;
                        that.totalCount = response.data.model.totalCount
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            }
        }
    }
</script>

<style lang="scss">

    .ts-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 2px solid #9dc135;
    }

    .ts-head {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-size: 100% auto;
        height: 300px;
    }

    .ts-head-bg {
        width: 100%;
        min-width: 1270px;
    }

    .ts-title {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .ts-title-en {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 35px;
    }

    .ts-title-logo {
        margin-top: 20px;
        font-size: 35px;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-width: 270px;
    }

    .ts-main {
        margin-top: 40px;
        min-width: 60%;
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    .ts-main:hover {
        margin-top: 40px;
        min-width: 60%;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: 0px 0px 10px 0px #e0e0e0;
    }

    .ts-main-content {
        margin-left: 20px;
        min-width: 500px;
        // background-color: red;
        width: 600px;
        height: 200px;
    }

    .ts-main-content-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
        width: 550px;
    }

    .ts-main-content-center {
        margin-top: 25px;
        margin-left: 30px;
        height: 20px;
        width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #909090;
        // background-color: orange;
    }

    .ts-main-content-more {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: solid 1px #9dc135;
        border-radius: 3px;
        text-align: center;
        width: 15%;
        height: 25px;
        color: #9dc135;
        font-size: 10px;
    }

    .ts-main-content-more:hover {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
        text-align: center;
        width: 15%;
        height: 25px;
        font-size: 10px;
        background-color: #9dc135;
        color: #fff;

    }

    .case-foot {
        margin: 0 auto;
        margin-bottom: 40px;
        margin-top: 40px;
    }
</style>
