<template>
    <div class="cu-container" :style="backgroundStyle">
        <div class="cu-main">
            <div class="cu-main-title">
                <span class="title-english">CONTACT US</span>
                <img :src='$imageDomain+"/plus.png"' alt="">
                <span class="titile-chinese">联系我们</span>
                <span style="margin-top:10px;">{{info.contactUsTitle}}</span>
            </div>
            <div class="cu-main-content">
                <span>{{info.companyName}}</span>
                <span>地址：{{info.companyAddress}}</span>
                <span>电话：<span v-html="info.telephoneNumber"></span></span>
                <div style="display:flex;flex-direction:row;">
                    <div>手机：</div>
                    <div>
                        <span v-for="(number,key) in info.phoneNumber" :key="key">{{number}}<br></span>
                    </div>
                </div>
                <span>邮箱：{{info.mail}}</span>
                <span>网址：{{info.webUrl}}</span>
            </div>
            <div class="cu-foot">
                <el-amap class="cu-foot-left" vid="amapDemo" :zoom="zoom" :center="center">
                    <el-amap-marker :position="center"></el-amap-marker>
                </el-amap>
                <div class="cu-foot-right">
                    <progressive-img class="cu-foot-right-img" :src="$imageDomain+info.qrCodeImageUrl" alt=""/>
                    <progressive-img class="cu-foot-right-img" :src="$imageDomain+info.customerQrCodeImageUrl" alt=""/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                backgroundStyle: '',
                info: {
                    "companyAddress": "杭州民和路525号三宏国际8楼",
                    "companyName": "杭州执贝科技有限公司",
                    "customerQrCodeImageUrl": "/Customer service-QR code.png",
                    "latitude": 30.2312,
                    "longitude": 120.25479,
                    "mail": "iteastyle@126.com",
                    "phoneNumber": [
                        "15906631121",
                        "15858232263"
                    ],
                    "postCode": "300000",
                    "qrCodeImageUrl": "/contactus-QRcode.png",
                    "telephoneNumber": "(86)0571-83731743",
                    "webUrl": "https://www.iteastyle.cn",
                    "companyStoryBgUrl": "/compamy-bk-1500-1133.jpg",
                    "contactUsBgUrl": "/ct-us-1700-930.jpg",
                    "contactUsTitle": "杭式下午茶 创意茶歇 健康食尚",
                    "logoUrl": "/logo.png"
                },
                center: [0, 0],
                zoom: 14
            }
        },
        created: function () {
            this.center = [this.info.longitude, this.info.latitude];
            let imageUrl = this.$imageDomain + this.info.contactUsBgUrl;
            this.backgroundStyle = 'background:url(' + imageUrl + ') no-repeat; background-size:100% auto; '
        }
    }
</script>


<style lang="scss">
    .cu-container {
        height: 680px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 2px solid #9dc135;
    }

    .cu-bgimg {
        width: 100%;
        min-width: 1270px;
        height: auto;
        position: absolute;
        z-index: -1;
    }

    .cu-main {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cu-main-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        font-size: 17px;
    }

    .title-english {
        font-family: 'Times New Roman';
        font-size: 25px;
    }

    .titile-chinese {
        font-size: 18px;
        margin-bottom: 10px;
        letter-spacing: 5px;
    }

    .cu-main-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 10px;
        font-size: 14px;
        line-height: 2;
    }

    .cu-foot {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 230px;
        margin-top: 20px;
        margin-left: 100px;
    }

    .cu-foot-left {
        border: 8px solid rgba(157, 193, 53, 0.6);
        margin-top: 10px;
        width: 400px;
    }

    .cu-foot-right {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cu-foot-right-img {
        border: 8px solid rgba(157, 193, 53, 0.6);
        margin-top: 10px;
        height: 100px;
        width: 100px;
    }
</style>
