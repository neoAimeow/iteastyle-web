<template>
    <div class="sc-container">
        <div class="sc-head" :style="scHeadBackgroundStyle">
            <div class="head-name-top">
                <span>TEA BREAK WITH<br>IMAGINATIVE AND HEALTHY</span>
                <div class="head-name-bottom">
                    <span class="C-name">创意茶歇</span>
                    <img class="title-logo" :src='$imageDomain+"/opaque-logo.png"' alt="logo">
                    <span class="C-name" style="margin-left:10px;">健康时尚</span>
                </div>
            </div>
        </div>


        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">

            <el-tab-pane label="茶歇服务" name="first">
                <TeaBreakService></TeaBreakService>
            </el-tab-pane>

            <el-tab-pane label="杭州伴手礼" name="second">
                <Souvenir></Souvenir>
            </el-tab-pane>

            <el-tab-pane label="茶事活动" name="third">
                <Seminar></Seminar>
            </el-tab-pane>

            <el-tab-pane label="DIY活动" name="fourth">
                <DIYActivites></DIYActivites>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeName2: 'first',
                scHeadBackgroundStyle: ''

            };
        },
        created: function () {
            let imageUrl = this.$imageDomain + '/service-title-bkground.jpg';
            this.scHeadBackgroundStyle = 'background: url(' + imageUrl + ')no-repeat; background-size: 100% auto;'
            if (this.$route.query.name != null && this.$route.query.name != '') {
                this.activeName2 = this.$route.query.name;
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        components: {
            TeaBreakService: resolve => {
                require(['../service/teaBreakService.vue'], resolve)
            },
            Performance: resolve => {
                require(['../service/performance.vue'], resolve)
            },
            DIYActivites: resolve => {
                require(['../service/diyActivites.vue'], resolve)
            },
            Seminar: resolve => {
                require(['../service/seminar.vue'], resolve)
            },
            Souvenir: resolve => {
                require(['../service/souvenir.vue'], resolve)
            }
        }
    };
</script>

<style lang="scss" scoped>

    .sc-container {
        margin: 0;
        padding: 0;
    }

    .sc-head {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        background-size: 100% auto;
        height: 300px;
    }

    .head-name-top {
        z-index: 1;
        color: white;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 35px;
    }

    .head-name-bottom {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        min-width: 500px;
    }

    .title-logo {
        width: 60px;
        height: auto;
        margin: 0 20px;
    }

    .C-name {
        letter-spacing: 10px;
    }
</style>
