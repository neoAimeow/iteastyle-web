<template>
    <div class="productinside">
        <div class="introduction-title">
            <progressive-img class="title-background"
                             :src='$imageDomain+"/pd-case-DT-Details-background.png"' alt=""/>
            <img :src='$imageDomain+"/%E6%A0%87%E9%A2%98%E5%9B%BE%E4%B8%8A%E7%9A%84logo.png"' />
        </div>

        <div class="pd-picture">
            <div style="display:flex;" v-for="(img,key) in imgs" :key="key">
                <img class="pd-img" :src="$imageDomain+img" alt="">
                <div v-if="key==0" class="pd-name">
                    <div class="title">
                        <img :src='$imageDomain+"/opaque-logo.png"' alt="" class="logo">
                        <span>{{typeName}}</span>
                    </div>
                    <span class="name">{{title}}</span>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgs: [],
                title: '',
                tyoeName: ''
            }
        },
        created: function () {
            console.log(this.$route.query.id);
            var that = this;
            this.$ajax.get('/getCaseById', {
                params: {
                    caseId: this.$route.query.id
                }
            })
                .then(function (response) {
                    console.log(response);
                    that.imgs = response.data.model.imageArr;
                    that.title = response.data.model.title;
                    that.typeName = response.data.model.typeName

                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    }
</script>

<style scoped>
    .productinside {
        margin: 0;
        padding: 0;
        border-bottom: 2px solid #9dc135;
    }

    .introduction-title {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title-background {
        min-width: 1300px;
        height: 200px;
        width: 100%;
    }

    .pd-picture {
        display: flex;
        flex-wrap: wrap;
        width: 1020px;
        margin: 0 auto;
        margin-bottom: 80px;
        margin-top: 80px;
    }

    .pd-name {
        width: 340px;
        height: 220px;
        background-color: #9dc135;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: white;
    }

    .title {
        width: 205px;
        height: 50px;
        border: 1px dotted white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .title span {
        margin-left: 5px;
    }

    .title img {
        width: 40px;
        height: auto;
    }

    .pd-img {
        width: 340px;
        height: 220px;
    }

    .name {
        width: 200px;
        text-align: center;
    }
</style>
