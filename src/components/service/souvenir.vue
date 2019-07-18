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

                <img class="souvenir-main-souvenir-img" :src="$imageDomain+items.souvenir.imageUrl" alt="">
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
                    <div v-for="(info1 , key1) in items.way.ways" :key="key1">
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
                <img class="souvenir-main-drink-img" :src="$imageDomain+items.way.imageUrl" alt="">
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
                        <img :src="$imageDomain+info2.itemImageUrl" alt=""/>
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
                items: {
                    "gmtCreate": 1531680025411,
                    "gmtModified": 1531680025411,
                    "id": "5b4b9519aeb2a16d8affef3e",
                    "mind": {
                        "minds": [
                            {
                                "elements": [
                                    {
                                        "elementName": "龙井茶特级 A",
                                        "number": "HZ001",
                                        "price": 82,
                                        "size": "50g*1罐",
                                        "wrap": "单罐礼盒"
                                    },
                                    {
                                        "elementName": "西湖龙井特级 A",
                                        "number": "HZ002",
                                        "price": 188,
                                        "size": "65g*1罐",
                                        "wrap": "单罐礼盒"
                                    },
                                    {
                                        "elementName": "桂花龙井 A",
                                        "number": "HZ003",
                                        "price": 132,
                                        "size": "65g*1罐",
                                        "wrap": "单罐礼盒"
                                    },
                                    {
                                        "elementName": "九曲红梅特级 A",
                                        "number": "HZ004",
                                        "price": 105,
                                        "size": "65g*1罐",
                                        "wrap": "单罐礼盒"
                                    }
                                ],
                                "itemContent": "西湖龙井位列我国十大名茶之一，具有1200多年历史，明代列为上品，清顺治列为贡品。清乾隆游览杭州西湖时，盛赞龙井茶，并把狮峰山下胡公庙前的十八棵茶树封为“御茶”。<br>龙井茶素有“色绿、香郁、味醇、形美”四绝著称于世，其外形挺直削尖、扁平俊秀、光滑匀齐、色泽绿中显黄。龙井冲泡后，香气清高持久，香郁若兰；汤色杏绿，清澈明亮，叶底嫩绿，匀齐成朵，芽芽直立，栩栩如生。品饮茶汤，沁人心脾，齿间留芳，回味无穷。",
                                "itemImageUrl": "/SOUVENIR-A.png",
                                "itemTitle": "西湖龙井简介"
                            },
                            {
                                "elements": [
                                    {
                                        "elementName": "龙井茶特级 B",
                                        "number": "HZ005",
                                        "price": 160,
                                        "size": "50g*2罐",
                                        "wrap": "双罐礼盒"
                                    },
                                    {
                                        "elementName": "西湖龙井特级 B",
                                        "number": "HZ006",
                                        "price": 372,
                                        "size": "65g*2罐",
                                        "wrap": "双罐礼盒"
                                    },
                                    {
                                        "elementName": "桂花龙井 B",
                                        "number": "HZ007",
                                        "price": 260,
                                        "size": "65g*2罐",
                                        "wrap": "双罐礼盒"
                                    },
                                    {
                                        "elementName": "九曲红梅特级 B",
                                        "number": "HZ008",
                                        "price": 206,
                                        "size": "65g*2罐",
                                        "wrap": "双罐礼盒"
                                    },
                                    {
                                        "elementName": "龙凤呈祥 A",
                                        "number": "HZ009",
                                        "price": 183,
                                        "size": "龙井茶特级50g+九曲红梅特级65g",
                                        "wrap": "双罐礼盒"
                                    },
                                    {
                                        "elementName": "龙凤呈祥 B",
                                        "number": "HZ010",
                                        "price": 289,
                                        "size": "西湖龙井茶特级65g+九曲红梅特级65g",
                                        "wrap": "双罐礼盒"
                                    }
                                ],
                                "itemContent": "九曲红梅，这个富有诗意的茶叶产自人间天堂——杭州，或许是沾染了这座城市的浪漫气息，它因此也成为了中国众多茶叶中少数几个以文化命名的茶。尽管生产九曲红梅的茶因面积和产量占浙江省的份额甚少，但因其品质独特，成为杭州市的十大名茶之一，被誉为“万绿丛中一点红”，早在1915年，就拿过巴拿马万国博览会的金奖。因其茶形虬曲，茶性温和，茶味香甜，茶韵悠绵，有红梅之品格及茶文化等诸原因，故又以红梅称之。这是我国茶名中少有以文化命名的名茶。",
                                "itemImageUrl": "/Souvenir-B.png",
                                "itemTitle": "九曲红梅简介"
                            },
                            {
                                "elements": [
                                    {
                                        "elementName": "龙井茶特级 C",
                                        "number": "HZ011",
                                        "price": 270,
                                        "size": "50g*3罐",
                                        "wrap": "三罐木盒"
                                    },
                                    {
                                        "elementName": "西湖龙井特级 C",
                                        "number": "HZ012",
                                        "price": 588,
                                        "size": "65g*3罐",
                                        "wrap": "三罐木盒"
                                    },
                                    {
                                        "elementName": "桂花龙井 C",
                                        "number": "HZ013",
                                        "price": 420,
                                        "size": "65g*3罐",
                                        "wrap": "三罐木盒"
                                    },
                                    {
                                        "elementName": "九曲红梅特级 C",
                                        "number": "HZ014",
                                        "price": 339,
                                        "size": "65g*3罐",
                                        "wrap": "三罐木盒"
                                    },
                                    {
                                        "elementName": "印象西湖 A",
                                        "number": "HZ015",
                                        "price": 343,
                                        "size": "龙井茶特级50g+九曲红梅特级65g+桂花龙井65g",
                                        "wrap": "三罐木盒"
                                    },
                                    {
                                        "elementName": "印象西湖 B",
                                        "number": "HZ016",
                                        "price": 449,
                                        "size": "西湖龙井茶特级65g+九曲红梅特级65g+桂花龙井65G",
                                        "wrap": "三罐木盒"
                                    }
                                ],
                                "itemContent": "桂子月中落，天香云外飘。农历八月的杭州，整座城市弥漫着桂花的香甜气息，也勾起很多杭州人旧时的记忆。杭州市花——桂花，与来自春日西湖龙井旁的问候在入秋季节进行跨越时空的交接。以秋季桂香为经，春日龙井为纬，经纬交织间，融合两种最能代表杭州的花草芳香，于雅致中更见一座城市的风情万千。于丹桂飘香之际感觉到春天的问候，于遥远的地方感觉到西湖秋夜明月如同碧水。",
                                "itemImageUrl": "/Souvenir-C.png",
                                "itemTitle": "桂花龙井简介"
                            }
                        ],
                        "title": "伴手心意",
                        "title_en": "TEA SOUVENIR"
                    },
                    "souvenir": {
                        "content": "西湖龙井、九曲红梅、桂花龙井。都是最具杭城特色的茶品。是赠送外地友人的不二选择，也是外来游客的必选物品。<br>“研茶园杭州伴手礼”概念是将杭州的地方文化与礼品的概念相结合，以茶叶的呈现形式予以表达，具有典型的地域文化艺术特色。<br>伴手礼是代表着人与人之间情感的联系，只是一份小小的伴手礼却代表送礼者的心意，可谓礼轻情意重。",
                        "imageUrl": "/TEA SOUVENIR.png",
                        "title": "杭州伴手礼",
                        "title_en": "TEA SOUVENIR"
                    },
                    "way": {
                        "imageUrl": "/DRINKING WAY.png",
                        "title": "冲饮方式",
                        "title_en": "DRINKING WAY",
                        "ways": [
                            {
                                "content": "投入3G茶叶于玻璃杯中",
                                "title": "投茶"
                            },
                            {
                                "content": "往杯中注入开水（西湖龙井、桂花龙井水温均为85度，九曲红梅水温约95度），茶水比例约1/3，摇动后，快速洗去第一泡茶汤。",
                                "title": "洗茶"
                            },
                            {
                                "content": "再往杯中注入开水（西湖龙井、桂花龙井水温均为85度，九曲红梅水温约95度），约7分满，待茶叶吸水舒张。",
                                "title": "注水冲泡"
                            },
                            {
                                "content": "浸泡3-5分钟，即可饮茶香茶韵，可冲泡4次以上。",
                                "title": "品饮"
                            }
                        ]
                    }
                },
            }
        },
        created: function () {
            this.request();
        },
        methods: {

            request: function () {
                var that = this;
                this.$ajax.get('/getData', {params: {key: 'teaGift'}})
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
    .souvenir-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid #9dc135;
    }

    .souvenir-main {
        width: 900px;
    }

    .souvenir-main-title {
        display: flex;
        flex-direction: column;
        width: 600px;
        color: white;
    }

    .souvenir-main-title-hr {
        width: 600px;
        height: 1px;
        border: none;
        border-top: 2px solid #9dc135;
    }

    .souvenir-main-title-cn {
        width: 140px;
        margin-left: 30px;
        border-top: 50px solid #9dc135;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .souvenir-main-title-en {
        width: 140px;
        border-top: 30px solid #9dc135;
        border-right: 30px solid transparent;
        border-left: 30px solid transparent;
        margin-top: -23px;
    }

    .souvenir-main-souvenir {
        width: 860px;
        margin-left: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        //background: red;
    }

    .souvenir-main-souvenir-introduce {
        width: 500px;
        // background-color: aqua;
        line-height: 30px;
    }

    .souvenir-main-souvenir-img {
        width: 300px;
        height: auto;
    }

    .souvenir-main-drink {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .souvenir-main-drink-content {
        margin-left: 45px;
        margin-top: 5px;
        margin-bottom: 0px;
    }

    .souvenir-main-drink-img {
        width: 300px;
        height: auto;
    }

    .souvenir-main-drink-subtitle {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .souvenir-main-drink-subtitle1 {
        width: 25px;
        height: 25px;
        background-color: #9dc135;
        border-radius: 12.5px;
    }

    .souvenir-main-drink-subtitle2 {
        margin-left: 20px;
        color: #9dc135;
    }

    .souvenir-main-drink-introduce {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
        width: 500px;
        //background: red;
    }

    .gitf-introduce-content {
        margin-top: 20px;
        line-height: 30px;
    }

    .souvenir-main-gitf-introduce {
        margin-top: 20px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .souvenir-main-gitf-img {
        width: 300px;
        height: 200px;
    }

    .souvenir-main-gift {
        margin-bottom: 150px;
    }
</style>
