<!--
  ~ Time:2022/4/20 12:50 57
  ~ Name:Leaderboard.vue
  ~ Path:src/pages
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="Leaderboard">
        <div class="box">
            <div class="list-t">
                <ul class="list">
                    <li class="title">
                        <p>云音乐特色榜</p>
                    </li>
                    <li
                            v-for="(item,index) in lists"
                            :key="item.id"
                            v-if="index<4"
                            @click="listContent(index,item)"
                            :class="num===index?'li1':'li2'"
                    >
                        <img :src="item.coverImgUrl" alt="">
                        <div>
                            <p>{{ item.name }}</p>
                            <p>{{ item.updateFrequency }}</p>
                        </div>
                    </li>
                </ul>

                <ul class="list">
                    <li class="title">
                        <p>全球媒体榜</p>
                    </li>
                    <li
                            v-for="(item,index) in lists"
                            :key="item.id"
                            v-if="index>=4"
                            @click="listContent(index,item)"
                            :class="num===index?'li1':'li2'"
                    >
                        <img :src="item.coverImgUrl" alt="">
                        <div>
                            <p>{{ item.name }}</p>
                            <p>{{ item.updateFrequency }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content">
                <ListLitle :list="list"/>
                <ChartSongs :songId="list.id"></ChartSongs>
            </div>
        </div>
    </div>
</template>

<script>
import ListLitle from '@/components/leaderboard/ListLitle';
import ChartSongs from "@/components/leaderboard/ChartSongs";

import dayjs from 'dayjs';
import request from "@/utils/request";

export default {
    name: 'Leaderboard',
    data() {
        return {
            num: Number(localStorage.getItem('num')) || 0,
            lists: [],
            list: {},
        };
    },
    components: {
        ListLitle,
        ChartSongs
    },
    watch: {
        num(val) {
            this.list = this.lists[val];
        },
    },

    methods: {
        // 获取排行榜的数据
        async getListsData() {
            let list = await request('/toplist/detail')
            this.lists = list.list
            this.list = list.list[this.num]
        },

        listContent(index, item) {
            this.num = index;
            localStorage.setItem('num', index);
        },
    },
    mounted() {
        this.getListsData()
    },
};
</script>

<style scoped lang="less">

// -------Leaderboard----------
#Leaderboard {
    width: 100%;
    background-color: #f5f5f5;

    .box {
        width: 980px;
        margin: 0 auto;
        border: 1px solid #d3d3d3;
        display: flex;

        .list-t {
            width: 240px;
            padding: 20px 0;
            background-color: #f9f9f9;
            border: 1px solid #d3d3d3;

            .list {
                width: 100%;

                li {
                    width: 100%;
                    height: 60px;
                    display: flex;

                    img {
                        width: 40px;
                        height: 40px;
                        margin-left: 20px;
                        margin-top: 10px;
                    }

                    div {
                        width: 150px;
                        height: 40px;
                        border: none;
                        margin-left: 15px;
                        margin-top: 10px;

                        p {
                            color: #000;
                            font-size: 12px;
                            line-height: 20px;
                        }

                        p:nth-child(2) {
                            color: #999999;
                        }
                    }
                }

                .li1 {
                    background-color: #e6e6e6;
                }

                .li2 {
                    background-color: #f9f9f9;

                    &:hover {
                        background-color: #f4f2f2;
                    }
                }

                .title {
                    height: 30px;
                    font-size: 15px;
                    padding: 10px 0;

                    p {
                        margin-left: 13px;
                        font-weight: bold;
                    }
                }
            }
        }

        .content {
            width: 660px;
            padding: 40px;


        }
    }
}
</style>
