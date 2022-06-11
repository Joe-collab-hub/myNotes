<!--
  ~ Time:2022/4/19 15:38 40
  ~ Name:ChartSongs.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="ChartSongs">
        <ul>
            <li v-for="(item,index) in songs" :key="item.id" :class="index%2?'':'li2'">
                <span :style="index<3?'color:#c90d0c':''">{{ index + 1 }}</span>
                <!--<img :src="item.al.picUrl" alt="" v-if="index<=2">-->
                <div>
                    <p>{{ item.name }}</p>
                    <div class="play" :class="index%2?'':'li2'">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </div>
            </li>
            <li class="li2">
                <div style="text-align: right"><a href="#" style="color: #000;font-size: 12px">查看全部></a></div>
            </li>
        </ul>
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: 'ChartSongs',
    data() {
        return {
            songs: [],
            id: 0,
        };
    },
    props: ['songId'],
    components: {},
    watch: {
        songId(a) {
            this.getSongsListData(a)
        }
    },
    methods: {
        // 获取榜单歌曲的数据回调
        async getSongsListData(id) {
            let songs = await request('/playlist/track/all', {id, limit: 100})
            this.songs = songs.songs;
        }
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

// -------ChartSongs----------
#ChartSongs {
    width: 100%;

    ul {
        width: 100%;

        li {
            width: 100%;
            display: flex;
            align-items: center;

            span {
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                font-size: 16px;
                margin-left: 20px;
            }

            img {
                width: 30px;
                height: 30px;
            }

            div {
                width: calc(100% - 40px);
                position: relative;

                p {
                    width: 90%;
                    height: 30px;
                    line-height: 30px;
                    font-size: 12px;
                    margin-left: 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    -o-text-overflow: ellipsis;
                }

                div {
                    width: 80px;
                    height: 30px;
                    position: absolute;
                    background-color: #f4f4f4;
                    right: 3px;
                    top: 0;
                    display: none;

                    i {
                        width: 17px;
                        height: 17px;
                        display: inline-block;
                        cursor: pointer;
                    }

                    i:nth-child(1) {
                        background: url('../../assets/index.png') no-repeat -267px -268px;

                        &:hover {
                            background: url('../../assets/index.png') no-repeat -267px -288px;
                        }
                    }

                    i:nth-child(2) {
                        background: url('../../assets/icon.png') no-repeat 0 -700px;

                        &:hover {
                            background: url('../../assets/icon.png') no-repeat -22px -700px;
                        }
                    }

                    i:nth-child(3) {
                        background: url('../../assets/index.png') no-repeat  -297px -270px;

                        &:hover {
                            background: url('../../assets/index.png') no-repeat -297px -290px;
                        }
                    }
                }

                &:hover {
                    p {
                        text-decoration: underline;
                    }

                    div {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                }
            }


        }

        .li2 {
            background: #e8e8e8;
        }
    }

}
</style>
