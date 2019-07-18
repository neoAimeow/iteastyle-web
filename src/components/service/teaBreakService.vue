<template>
    <div class="service">
        <div class="reservation">

            <div class="r-title">
                <div class="hr"></div>
                <div class="mid-name">
                    <div class="border">
                        <div class="name">
                            <span class="c-title">{{responseDatas.order.title}}</span>
                            <span class="e-title">{{responseDatas.order.title_en}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <span class="re-title2" v-html="responseDatas.order.orderWay.title"></span>

            <div class="way-ct">
                <div class="ct1" v-for="(value,key) in responseDatas.order.orderWay.items" :key="key">
                    <div class="ct-title">
                        <img style="width:30px;height:auto;" :src=$imageDomain+value.imageUrl alt="">
                        <span class="ct-title-name">{{value.title}}</span>
                    </div>
                    <span class="ct-bottom">{{value.content}}</span>
                </div>
            </div>

            <span class="re-title2" v-html="responseDatas.order.menu.title"></span>

            <div class="menu-border-out" v-for="(value,key) in responseDatas.order.menu.menus" :key="key">

                <div class="menu-border-inside">
                    <div class="menu-head">
                        <div class="menu-head-name">
                            <span v-html="value.title"></span>
                        </div>
                        <div class="menu-head-triangle"></div>
                    </div>

                    <div class="menu-ct">
                        <div class="menu" v-for="(food,eat) in  value.items" :key="eat">

                            <span class="menu-top top-icon" v-html="food.icon"></span>
                            <span class="menu-top">{{food.title}}</span>

                            <ul class="menu-bottom">
                                <li v-for="(cake,dessert) in food.desserts" :key="dessert">{{cake}}</li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div class="service-scope">
            <div class="r-title">
                <div class="hr"></div>
                <div class="mid-name">
                    <div class="border">
                        <div class="name">
                            <span class="c-title">{{responseDatas.range.title}}</span>
                            <span class="e-title">{{responseDatas.range.title_en}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service-ct">
                <div class="service-border" v-for="(value,key) in responseDatas.range.ranges" :key="key">
                    <div class="service-ct-top">
                        <div class="service-ct-top-left">
                            <img class="service-ct-top-no" :src=$imageDomain+value.titleImageUrl alt="logo">
                            <div class="service-e-name">{{value.title_en}}</div>
                        </div>
                        <div class="service-c-name">
                            <span>{{value.mainTitle}}</span>
                            <span class="s-c-name-bottom">{{value.subTitle}}</span>
                        </div>
                    </div>
                    <img style="width:180px;height:120px;" :src=$imageDomain+value.imageUrl alt="service picture">
                </div>
            </div>
        </div>

        <div class="order-process">
            <div class="r-title">
                <div class="hr"></div>
                <div class="mid-name">
                    <div class="border">
                        <div class="name">
                            <span class="c-title">{{responseDatas.process.title}}</span>
                            <span class="e-title">{{responseDatas.process.title_en}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="order">
                <div class="order-ct" v-for="(value,key) in responseDatas.process.processes" :key="key">
                    <div>
                        <div class="order-top">
                            <span>{{key+1}}.{{value.title}}</span>
                        </div>
                        <div class="order-bottom"><span>{{value.content}}</span></div>
                    </div>
                    <span class="order-arrow">&#xe631;</span>
                </div>
            </div>
        </div>

        <div class="order-information">
            <div class="r-title">
                <div class="hr"></div>
                <div class="mid-name">
                    <div class="border">
                        <div class="name">
                            <span class="c-title">{{responseDatas.note.title}}</span>
                            <span class="e-title">{{responseDatas.note.title_en}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="in-ct">
                <div class="in-ct1" v-for="(value,key) in responseDatas.note.notes" :key="key">
                    <div class="in-no">
                        <span class="in-no1">{{key+1}}</span>
                    </div>
                    <span v-html="value"></span>
                </div>
            </div>
        </div>

        <div class="order-ways">
            <div class="r-title">
                <div class="hr"></div>
                <div class="mid-name">
                    <div class="border">
                        <div class="name">
                            <span class="c-title">{{responseDatas.orderMode.title}}</span>
                            <span class="e-title">{{responseDatas.orderMode.title_en}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ways-ct">
                <div class="ways-top">
                    <div class="ways-ver"></div>
                    <span>{{responseDatas.orderMode.qrTitle}}</span>
                    <div class="ways-ver"></div>
                </div>
                <div class="ways-bottom">
                    <img class="ways-bottom-left" :src=$imageDomain+responseDatas.orderMode.qrImageUrl alt="QR Code">
                    <div class="ways-bottom-mid"></div>
                    <div class="ways-bottom-right">
                        <span>长按二维码关注</span>
                        <span class="fingerprint">&#xe61b;</span>
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
                responseDatas: {
                    "gmtCreate": 1531662132259,
                    "gmtModified": 1531662132259,
                    "id": "5b4b4f34aeb2a141262e41ca",
                    "note": {
                        "notes": [
                            "杭式下午茶<span style='color:#9dc135'>目前支持杭州地区订购</span>，全国其他地区暂未开通；",
                            "订单金额<span style='color:#9dc135'>1500元起订</span>，所有订单请<span style='color:#9dc135'>提前48小时预约</span>并支付预定金；",
                            "高端个性化定制请<span style='color:#9dc135'>提前7天预约</span>；",
                            "<span style='color:#9dc135'>杭州市区内免费送货</span>，其他地区（余杭、萧山等）交通费另计；",
                            "杭式下午茶提供<span style='color:#9dc135'>茶歇现场服务人员</span>，并提供现场摆盘服务、装饰布置等服务；",
                            "活动结束后，现场器具如有丢失损坏，100元金额以内属正常损耗，无须赔偿，100元金额以上需按器具价格进行赔偿；",
                            "如在订购后解除订购，我们将按照实际制作量按比例扣除预定订金。"
                        ],
                        "title": "订购须知",
                        "title_en": "ORDER INSTRUCTIONS"
                    },
                    "order": {
                        "menu": {
                            "menus": [
                                {
                                    "gmtCreate": 1531659011135,
                                    "gmtModified": 1531659011135,
                                    "id": "5b4b4303aeb2a109aafacc97",
                                    "items": [
                                        {
                                            "desserts": [
                                                "特色茶曲奇",
                                                "抹茶慕斯",
                                                "水果布丁",
                                                "抹茶泡芙",
                                                "双色巧克力蛋糕"
                                            ],
                                            "icon": "&#xe9ea;",
                                            "title": "点 心"
                                        },
                                        {
                                            "desserts": [
                                                "西瓜",
                                                "橙子",
                                                "圣女果"
                                            ],
                                            "icon": "&#xe9ec;",
                                            "title": "水果拼盘"
                                        },
                                        {
                                            "desserts": [
                                                "抹茶拿铁",
                                                "桂花龙井茶"
                                            ],
                                            "icon": "&#xe9eb;",
                                            "title": "饮 料"
                                        }
                                    ],
                                    "sort": 0,
                                    "title": "A款茶歇/48元人均"
                                },
                                {
                                    "gmtCreate": 1531659007214,
                                    "gmtModified": 1531659007214,
                                    "id": "5b4b42ffaeb2a109913f5b6d",
                                    "items": [
                                        {
                                            "desserts": [
                                                "抹茶慕斯",
                                                "水果布丁",
                                                "抹茶泡芙",
                                                "纸杯蛋糕",
                                                "特色茶曲奇",
                                                "抹茶瑞士卷",
                                                "双色巧克力蛋糕"
                                            ],
                                            "icon": "&#xe9ea;",
                                            "title": "点 心"
                                        },
                                        {
                                            "desserts": [
                                                "西瓜",
                                                "橙子",
                                                "哈密瓜",
                                                "火龙果"
                                            ],
                                            "icon": "&#xe9ec;",
                                            "title": "水果拼盘"
                                        },
                                        {
                                            "desserts": [
                                                "抹茶拿铁",
                                                "洛神花茶",
                                                "水果茶"
                                            ],
                                            "icon": "&#xe9eb;",
                                            "title": "饮 料"
                                        }
                                    ],
                                    "sort": 1,
                                    "title": "B款茶歇/68元人均 <span style='color:red'>&#xe7a8;</span>"
                                },
                                {
                                    "gmtCreate": 1531659004217,
                                    "gmtModified": 1531659004217,
                                    "id": "5b4b42fcaeb2a10979c1a73e",
                                    "items": [
                                        {
                                            "desserts": [
                                                "蓝莓挞",
                                                "栗子蛋糕",
                                                "抹茶慕斯",
                                                "水果布丁",
                                                "抹茶泡芙",
                                                "盆栽蛋糕",
                                                "抹茶瑞士卷",
                                                "特色茶曲奇",
                                                "双色巧克力蛋糕",
                                                "芒果抹茶慕斯球"
                                            ],
                                            "icon": "&#xe9ea;",
                                            "title": "点 心"
                                        },
                                        {
                                            "desserts": [
                                                "西瓜",
                                                "橙子",
                                                "圣女果",
                                                "哈密瓜",
                                                "火龙果",
                                                "时令果串"
                                            ],
                                            "icon": "&#xe9ec;",
                                            "title": "水果拼盘"
                                        },
                                        {
                                            "desserts": [
                                                "抹茶拿铁",
                                                "玫瑰红茶拿铁",
                                                "洛神花茶",
                                                "水果茶"
                                            ],
                                            "icon": "&#xe9eb;",
                                            "title": "饮 料"
                                        }
                                    ],
                                    "sort": 2,
                                    "title": "C款茶歇/88元人均"
                                }
                            ],
                            "title": "&#xe9e7; 茶歇菜单"
                        },
                        "orderWay": {
                            "items": [
                                {
                                    "content": "按照您的个性化需求，茶歇师会为您制定独一无二的产品，预算金额将根据工作量进行相应预算。",
                                    "imageUrl": "/no-one.png",
                                    "title": "高端个性化定制"
                                },
                                {
                                    "content": "按照您提供的人数，选择菜单，立刻生成预算。",
                                    "imageUrl": "/no-two.png",
                                    "title": "人数标准化菜单"
                                },
                                {
                                    "content": "每人平均分配，人手一份，同样根据人数，快速生成预算。",
                                    "imageUrl": "/no-three.png",
                                    "title": "一人一份"
                                }
                            ],
                            "title": "&#xe9e7; 预定方式"
                        },
                        "title": "茶歇预定",
                        "title_en": "RESERVATION"
                    },
                    "orderMode": {
                        "qrImageUrl": "/contactus-QRcode.png",
                        "qrTitle": "公众号预定",
                        "title": "订购方式",
                        "title_en": "ORDERING WAYS"
                    },
                    "process": {
                        "processes": [
                            {
                                "content": "茶歇服务完成后请于当日内支付尾款",
                                "title": "售前咨询"
                            },
                            {
                                "content": "确认选择的产品和服务清单",
                                "title": "确认订单"
                            },
                            {
                                "content": "线上预定",
                                "title": "线上预定"
                            },
                            {
                                "content": "根据合同的产品清单制作新鲜茶歇产品",
                                "title": "接单合作"
                            },
                            {
                                "content": "按合同上约定的送达时间准时送达产品",
                                "title": "订单配送"
                            },
                            {
                                "content": "现场服务人员布置茶歇摆台与装饰",
                                "title": "摆台服务"
                            },
                            {
                                "content": "对产品及服务有不满意对地方请及时联系客服小tea",
                                "title": "售后服务"
                            },
                            {
                                "content": "电话或微信联络杭式下午茶小tea，了解产品及服务",
                                "title": "支付尾款"
                            }
                        ],
                        "title": "订购流程",
                        "title_en": "ORDER PROCESS"
                    },
                    "range": {
                        "ranges": [
                            {
                                "imageUrl": "/company afternoon tea.jpg",
                                "mainTitle": "公司",
                                "subTitle": "下午茶",
                                "titleImageUrl": "/no-one.png",
                                "title_en": "Afternoon Tea"
                            },
                            {
                                "imageUrl": "/staff birthday party.jpg",
                                "mainTitle": "员工",
                                "subTitle": "生日会",
                                "titleImageUrl": "/no-two.png",
                                "title_en": "Staff Birthday Party"
                            },
                            {
                                "imageUrl": "/Annual Meeting.jpg",
                                "mainTitle": "公司",
                                "subTitle": "年会",
                                "titleImageUrl": "/no-three.png",
                                "title_en": "Annual Meeting"
                            },
                            {
                                "imageUrl": "/Festival Celebration.jpg",
                                "mainTitle": "节日",
                                "subTitle": "庆典",
                                "titleImageUrl": "/no-four.png",
                                "title_en": "Festival Celebration"
                            },
                            {
                                "imageUrl": "/High-end Reception.jpg",
                                "mainTitle": "高端",
                                "subTitle": "酒会",
                                "titleImageUrl": "/no-five.png",
                                "title_en": "High-end Reception"
                            },
                            {
                                "imageUrl": "/Business Reception.jpg",
                                "mainTitle": "商务",
                                "subTitle": "接待会",
                                "titleImageUrl": "/no-six.png",
                                "title_en": "Business Reception"
                            },
                            {
                                "imageUrl": "/Product Launch.jpg",
                                "mainTitle": "产品",
                                "subTitle": "发布会",
                                "titleImageUrl": "/no-seven.png",
                                "title_en": "Product Launch"
                            },
                            {
                                "imageUrl": "/Opening Ceremony.jpg",
                                "mainTitle": "开业",
                                "subTitle": "庆典",
                                "titleImageUrl": "/no-eight.png",
                                "title_en": "Opening Ceremony"
                            }
                        ],
                        "title": "服务范围",
                        "title_en": "SERVICE SCOPE"
                    }
                }
            };
        },
        created() {
            var that = this;
            this.$ajax.get("/getData", {params: {key: 'teaBreak'}})
                .then(function (response) {
                    // console.log(response)
                    that.responseDatas = response.data.model;
                    console.log(that.responseDatas);
                })
                .catch(function (response) {
                    console.log(response);
                });
        }
    };
</script>

<style scoped>
    @font-face {
        font-family: "iconfont"; /* project id 721549 */
        src: url("//at.alicdn.com/t/font_721549_gv2tbnt6yt8.eot");
        src: url("//at.alicdn.com/t/font_721549_gv2tbnt6yt8.eot?#iefix") format("embedded-opentype"),
        url("//at.alicdn.com/t/font_721549_gv2tbnt6yt8.woff") format("woff"),
        url("//at.alicdn.com/t/font_721549_gv2tbnt6yt8.ttf") format("truetype"),
        url("//at.alicdn.com/t/font_721549_gv2tbnt6yt8.svg#iconfont") format("svg");
    }

    .service {
        margin: 0;
        padding: 0;
        border-bottom: 2px solid #9dc135;
    }

    .name {
        /* text-align: center;
        width: 160px;
        color: #9dc135;
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; */
        text-align: center;
        /* background-color: blue; */
        width: 160px;
        color: #9dc135;
        /* position:absolute;
                                  z-index: 1; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -25px;
    }

    .c-title {
        display: block;
        font-size: 20px;
        line-height: 20px;
        width: 120px;
        background-color: #fff;
    }

    .e-title {
        font-size: 10px;
    }

    .border {
        /* border: 2px solid #9dc135;
        width: 180px;
        height: 30px;
        background-color: #fff;
        margin-top: 20px; */
        border: 2px solid #9dc135;
        width: 180px;
        height: 30px;
        background-color: #fff;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .mid-name {
        /* width: 180px;
        display: block;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center; */
        width: 180px;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    .hr {
        /* border: 0.5px dashed #9dc135;
        width: 400px;
        position: absolute;
        z-index: -1;
        margin-top: 10px; */
        border: 0.5px dashed #9dc135;
        width: 300px;
        margin-bottom: -36px;
        margin-top: 30px;
    }

    .r-title {
        /* display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 30px; */
        display: flex;
        flex-direction: column;

        align-items: center;

        width: 300px;
    }

    .reservation {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }

    .re-title2 {
        margin-top: 30px;
        color: #9dc135;
        font-size: 20px;
        margin-bottom: 20px;
        font-family: iconfont;
    }

    .ct1,
    .ct-bottom {
        width: 200px;
    }

    .way-ct {
        display: flex;
        margin-top: 30px;
        margin-bottom: 20px;
        width: 900px;
        justify-content: space-between;
    }

    .ct-title-name {
        font-size: 18px;
        margin-left: 10px;
        font-weight: bold;
    }

    .ct-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    }

    .menu-ct {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 30px;
    }

    .menu-top {
        color: #9dc135;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .top-icon {
        margin-right: 10px;
    }

    .menu-bottom > li {
        margin-top: 5px;
    }

    .menu-border-out {
        width: 700px;
        border: 2px solid #9dc135;
        margin-top: 50px;
    }

    .menu-border-inside {
        margin: 5px;
        border: 2px dotted #9dc135;
    }

    .menu-head-name {
        background-color: #9dc135;
        height: 50px;
    }

    .menu-head-name > span {
        margin: 20px;
        font-size: 20px;
        line-height: 50px;
        color: #fff;
    }

    .menu-head-triangle {
        border-top: solid 25px transparent;
        border-right: solid 25px transparent;
        border-bottom: solid 25px transparent;
        border-left: solid 25px #9dc135;
    }

    .menu-head {
        display: flex;
        flex-direction: row;
        position: relative;
        top: -30px;
        left: 50px;
    }

    .service-scope {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .order-process {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: yellow; */
        width: 100%;
    }

    .service-ct-top {
        display: flex;
        flex-direction: row;
        /* background-color: yellow; */
        margin-bottom: 5px;
    }

    .service-ct-top-no {
        width: 30px;
        height: 30px;
        margin-left: 5px;
    }

    .service-c-name {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-weight: bold;
        font-size: 20px;
        /* background-color: blue; */
        margin-left: 5px;
    }

    .service-e-name {
        font-size: 10px;
        /* background-color: red; */
        /* font-style: italic; */
        width: 130px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: right;
    }

    .service-border {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 0px 10px 0px #e0e0e0;
        margin-bottom: 30px;
    }

    .s-c-name-bottom {
        font-size: 14px;
    }

    .service-ct-top-left {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .service-ct {
        width: 900px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
        margin-top: 60px;
    }

    .order-ct {
        width: 200px;
        font-size: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
    }

    .order-top {
        width: 152px;
        height: 40px;
        text-align: center;
        background: #9dc135;
        line-height: 40px;
        border-radius: 5px 5px 0 0;
        position: relative;
        color: #fff;
    }

    .order-bottom {
        border-left: 2px dotted #9dc135;
        border-right: 2px dotted #9dc135;
        border-bottom: 2px dotted #9dc135;
        width: 128px;
        height: 70px;
        padding: 10px;
    }

    .order-arrow {
        color: #9dc135;
        margin-left: 25px;
        font-size: 30px;
    }

    .order {
        width: 900px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 30px;
    }

    .in-no {
        width: 25px;
        height: 25px;
        background-color: #9dc135;
        border-radius: 12.5px;
        margin-right: 10px;
    }

    .in-no1 {
        width: 25px;
        height: 25px;
        line-height: 25px;
        display: block;
        color: #fff;
        text-align: center;
    }

    .in-ct1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-items: flex-start;
        margin-bottom: 20px;
    }

    .in-ct {
        margin-top: 40px;
        width: 900px;
        /* background-color: aqua; */
    }

    .order-information {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ways-ver {
        width: 8px;
        height: 23px;
        background-color: #9dc135;
    }

    .ways-top {
        display: flex;
        flex-direction: row;
    }

    .ways-top > span {
        margin: 0 10px;
        font-size: 18px;
    }

    .ways-bottom {
        border: 2px solid #9dc135;
        width: 500px;
        height: 200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
    }

    .ways-bottom-left {
        width: 120px;
        height: 120px;
    }

    .ways-bottom-mid {
        border: 1px solid #9dc135;
        height: 100px;
        margin: 0 60px;
    }

    .ways-bottom-right {
        color: #9dc135;
        display: flex;
        flex-direction: column;
        font-size: 18px;
        text-align: center;
    }

    .fingerprint {
        font-size: 120px;
    }

    .order-ways {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ways-ct {
        margin-top: 40px;
        margin-bottom: 100px;
    }
</style>
