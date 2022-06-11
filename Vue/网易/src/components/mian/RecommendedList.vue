<!--
  ~ Time:2022/4/19 14:18 15
  ~ Name:RecommendedList.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="RecommendedList">
        <ul>
            <li v-for="item in songList" :key="item.id">
                <div class="outer">
                    <div>
                        <img :src="item.coverImgUrl" alt="">
                    </div>
                    <div>
                        <p>{{ item.name }}</p>
                        <div>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <ChartSongs :songId="item.id"></ChartSongs>
            </li>
        </ul>
    </div>
</template>

<script>
import ChartSongs from '@/components/leaderboard/ChartSongs';
import request from "@/utils/request";

export default {
    name: 'RecommendedList',
    data() {
        return {
            songList: [],
        };
    },
    components: {ChartSongs},
    methods:{
        async getSongList() {
            let songList = await request('/toplist', {offset: 65, limit: 5})
            this.songList = songList.list.slice(0, 3);
        },
    },
    mounted() {
        this.getSongList()
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

// -------RecommendedList----------
#RecommendedList {
    width: 100%;
    margin-top: 20px;
    background-color: #f4f4f4;

    ul {
        width: 100%;
        display: flex;
        border-collapse: collapse;

        li {
            width: 33%;
            border: 1px solid #d3d3d3;

            .outer {
                width: 80%;
                padding: 10%;
                display: flex;

                div {
                    width: 45%;
                    margin-right: 10px;

                    img {
                        width: 100%;
                        height: 100%;
                    }

                    p {
                        font-size: 13px;
                        font-weight: bold;
                        line-height: 30px;
                    }

                    div {
                        width: 100%;
                        margin-top: 10px;

                        span {
                            width: 22px;
                            height: 22px;
                            display: inline-block;
                            margin-right: 15px;
                        }

                        span:nth-child(1) {
                            background: url('../../assets/index.png') no-repeat -267px -205px;
                        }

                        span:nth-child(2) {
                            background: url('../../assets/index.png') no-repeat  -300px -207px;
                        }
                    }
                }
            }


        }
    }
}
</style>
