<template>
    <div class="company-story" :style="backgroundStyle">
        <!-- <progressive-img class="companystory-background" :src="info.backgroundImageUrl" /> -->
        <div class="story">
            <div class="story-title">
                <span class="title-english">OUR STORY</span>
                <img :src='$imageDomain+"/plus.png"' />
                <span class="titile-chinese">{{info.storyTitle}}</span>
            </div>
            <span class="story-ct" v-html="info.storyContent"></span>
        </div>

        <video v-if="info.videoUrl != null" :src="info.videoUrl" controls></video>
        <div v-else style="height:600px;"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info: {
                    "storyContent": "&emsp;&emsp;执贝科技，立足杭州，以吃茶、喝茶为切入点，借助时尚、新颖的主题方式，让更多的年轻人了解茶文化，享受食尚茶歇，从而逐步打造属于我们自己的“杭式下午茶”。目前公司主要以“茶歇服务”为主体业务，茶礼茶具、器皿租赁、糕点供应为辅，提供全方位的特色服务。<br><br>&emsp;&emsp;HangZhou Afternoon Tea is a compositive organization which is devoted to Tea Break one-stop service. It really takes tea elements as the core.  Using pure natural tea powder tea with drinks , cakes  and fashion together . It aims to lead a healthy lifestyle and concept of life.",
                    "storyTitle": "杭式下午茶",
                    "companyStoryBgUrl": "/compamy-bk-1500-1133.jpg"
                },
                backgroundStyle: '',
                isVideoShown: false
            }
        },
        created: function () {
            let imageUrl = this.$imageDomain + this.info.companyStoryBgUrl;
            this.backgroundStyle = 'background: url(' + imageUrl + ')no-repeat; background-size: 100% auto;'
        }
    }
</script>

<style scoped>
    .company-story {
        margin: 0;
        padding: 0;
        color: white;
        height: 900px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #9dc135;

    }

    .story {
        width: 1000px;
        margin-top: 100px;
        background-color: rgba(17, 14, 30, 0.5)
    }

    .story-title {
        text-align: center;
        padding-top: 30px;
    }

    span {
        display: block;
    }

    .title-english {
        font-family: 'Times New Roman';
        font-size: 25px;
    }

    .titile-chinese {
        font-size: 18px;
        letter-spacing: normal;
    }

    .story-ct {
        margin-top: 20px;
        padding-left: 125px;
        padding-right: 125px;
        margin-bottom: 50px;

    }

    /* .story-ct1{
        padding-bottom: 40px;
    } */
    video {
        width: 1000px;
        height: 600px;
        background-color: black;
        margin-top: 30px;
        margin-bottom: 100px;
    }
</style>