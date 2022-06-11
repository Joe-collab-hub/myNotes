<!--
  ~ Time:2022/4/20 13:51 49
  ~ Name:ListContent.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="ListContent">
        <ul>
            <li class="li1">
                <div class="serialNumber" style="border-right: 1px solid #ccc;"></div>
                <div class="title" style="border-right: 1px solid #ccc">标题</div>
                <div class="duration" style="border-right: 1px solid #ccc">时长</div>
                <div class="singer">歌手</div>
            </li>
            <li v-for="(item,index) in data" :key="item.id">
                <div class="serialNumber">
                    <span>{{ index + 1 }}</span>
                    <div></div>
                </div>
                <div class="title">
                    <img v-if="index<3" :src="item.al.picUrl" alt="">
                    <div>
                        <i></i>
                        <span>{{ item.name }}</span>
                        <span v-show="item.alia[0]">-({{ item.alia[0] }})</span>
                    </div>
                </div>
                <div class="duration"></div>
                <div class="singer"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: 'ListContent',
    data() {
        return {
            data: [],

        };
    },
    props: ['id'],
    components: {},
    watch: {
    },
    methods: {
        // 获取排行榜歌曲数据
        async getSongsData(id) {
            let songsList = await request('/playlist/track/all', {id, limit: 100})
            console.log(songsList)
        }
    },
    mounted() {
        console.log(this.id)

        this.getSongsData(this.id)
    },
    beforeDestroy() {

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

// -------ListContent----------
#ListContent {
    ul {
        width: 658px;
        border: 1px solid #ccc;

        .li1 {
            width: 100%;
            line-height: 30px;
            border-bottom: 1px solid #ccc;
        }

        li {
            width: 100%;
            display: flex;
            line-height: 30px;
            margin-bottom: 10px;

            .serialNumber {
                width: 80px;

                span {
                    display: block;
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                    color: #999999;
                }
            }

            .title {
                width: 300px;
                font-size: 13px;
                color: #666666;
                padding: 0 5px;
                display: flex;
                align-items: center;

                img {
                    width: 50px;
                    height: 50px;
                    margin-right: 5px;
                    margin-left: 5px;
                }

                div {
                    width: 250px;
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    margin-left: 5px;

                    i {
                        display: block;
                        background: url('../assets/table.png') no-repeat 0 -103px;
                        width: 17px;
                        height: 17px;
                        margin-right: 10px;
                    }

                    span {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;

                    }

                    span:nth-child(2) {
                        color: #000;
                    }

                    span:nth-child(3) {
                        width: 130px;
                        color: #aeaeae;
                    }
                }
            }

            .duration {
                width: 80px;
                font-size: 13px;
                color: #666666;
                padding: 0 5px;
            }

            .singer {
                width: 150px;
                font-size: 13px;
                color: #666666;
                padding: 0 5px;
            }
        }
    }
}
</style>
