<!--
  ~ Time:2022/4/19 11:54 37
  ~ Name:CheckInSinger.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="CheckInSinger">
        <div class="singer">
            <div class="v-hd2">
                <p>入驻歌手</p>
                <a href="#"><p>查看全部></p></a>
            </div>
            <ul>
                <li v-for="item in singer" :key="item.id">
                    <div>
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div>
                        <a href="#"><p>{{ item.name }}</p></a>
                        <p>的附件客户打款</p>
                    </div>
                </li>
            </ul>
            <div class="apply">
                <a href="#">申请成为网易音乐人</a>
            </div>
        </div>
        <div class="anchor">
            <div class="v-hd2">
                <p>热门主播</p>
            </div>
            <ul>
                <li v-for="item in anchor" :key="item.id">
                    <div>
                        <img :src="item.avatarUrl" alt="">
                    </div>
                    <div>
                        <a href="#"><p>{{ item.nickName }} </p></a>
                        <a href="#"><p>的附件客户打款 </p></a>
                    </div>
                </li>
            </ul>
            <div class="apply">
            </div>
        </div>
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: 'CheckInSinger',
    data() {
        return {
            singer: [],
            anchor: [],
        };
    },
    components: {},
    methods: {
        // 获取入住歌手数据的回调
        async getSinger() {
            let singer = await request('/top/artists', {offset: 65, limit: 5})
            this.singer = singer.artists;
        },
        // 获取热门播主数据的回调
        async getAnchor() {
            let anchor = await request('/dj/toplist/popular',{limit:5})
            this.anchor = anchor.data.list
        },
    },
    mounted() {
        this.getSinger()
        this.getAnchor()
    },
};
</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

// -------CheckInSinger----------
#CheckInSinger {
    width: 90%;
    padding: 0 5%;


    .v-hd2 {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 13px;
        color: #000;
        font-weight: bold;
        border-bottom: 1px solid #cccccc;
        display: flex;
        justify-content: space-between;

        p {
            margin-right: 10px;
        }

        a {
            color: #666666;
            font-weight: normal;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .singer {
        ul {
            width: 100%;
            margin-top: 20px;

            li {
                width: 100%;
                border: 1px solid #e9e9e9;
                margin-bottom: 10px;
                display: flex;
                background-color: #fafafa;

                &:hover {
                    background-color: #f4f4f4;
                }

                div:nth-child(1) {
                    width: 60px;
                    height: 60px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                div:nth-child(2) {
                    width: calc(100% - 60px);
                    height: 60px;
                    align-items: center;

                    p {
                        width: 60%;
                        font-size: 13px;
                        color: #000;
                        margin-left: 10px;
                        margin-top: 10px;
                    }

                    p:nth-child(2) {
                        font-size: 12px;
                        color: #666666;
                        font-weight: normal;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        -o-text-overflow: ellipsis;
                    }
                }
            }
        }

        .apply {
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #c4c4c4;
            background-color: #f4f4f4;
            margin-top: 20px;
            border-radius: 5px;

            a {
                font-size: 13px;
                color: #000;
                font-weight: bold;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .anchor {
        margin-top: 30px;

        ul {
            width: 100%;
            margin-top: 20px;

            li {
                width: 100%;
                margin-bottom: 5px;
                display: flex;
                height: 40px;

                div:nth-child(1) {
                    width: 40px;
                    height: 40px;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }

                div:nth-child(2) {
                    width: 80%;
                    height: 60px;
                    align-items: center;

                    font-weight: normal;

                    p {
                        width: 60%;
                        font-size: 12px;
                        color: #000;
                        margin-left: 10px;
                        margin-top: 5px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        -o-text-overflow: ellipsis;

                        &:hover {
                            text-decoration: underline;
                        }
                    }

                    p:nth-child(2) {
                        font-size: 12px;
                        color: #666666;

                    }
                }
            }
        }
    }
}
</style>
