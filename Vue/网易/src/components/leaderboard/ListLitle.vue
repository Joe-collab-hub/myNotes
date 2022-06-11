<!--
  ~ Time:2022/4/20 17:24 42
  ~ Name:ListLitle.vue
  ~ Path:src/pages
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="ListLitle">
        <div class="data">
            <div class="picture">
                <img :src="list.coverImgUrl" alt="">
            </div>
            <div class="info">
                <h2>{{ list.name }}</h2>
                <div class="renew">
                    <i></i>
                    <span>最近更新：</span>
                    <span>{{ list.trackUpdateTime|fmtTime }}</span>
                    <span>({{ list.updateFrequency }})</span>
                </div>
                <ul>
                    <li>
                        <div class="play">
                            <span></span>
                            <p>播放</p>
                        </div>
                        <div class="addTo">
                            <span></span>
                        </div>
                    </li>
                    <li>
                        <div class="collect">
                            <span></span>
                            <p>{{ list.subscribedCount }}</p>
                            <span></span>
                        </div>
                    </li>
                    <li>
                        <div class="share">
                            <span></span>
                            <p>({{ String(list.coverImgId).slice(0, 5) }})</p>
                            <span></span>
                        </div>

                    </li>
                    <li>
                        <div class="download">
                            <span></span>
                            <p>下载</p>
                            <span></span>
                        </div>

                    </li>
                    <li>
                        <div class="Comment">
                            <span></span>
                            <p>({{ String(list.playCount).slice(0, 6) }})</p>
                            <span></span>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
        <div class="z">
            <p>歌曲列表</p>
            <span>{{ list.trackCount }}首歌</span>
            <div>
                <p>播放：<span>{{ list.playCount }}</span>次</p>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import ListContent from '@/pages/ListContent';
import ChartSongs from "@/components/leaderboard/ChartSongs";

export default {
    name: 'ListLitle',
    data() {
        return {};
    },
    props: ['list'],
    components: {
        ListContent,
        ChartSongs
    },
    filters: {
        fmtTime(time) {
            return dayjs(time).format('MM月DD日');
        },
    },
};
</script>

<style scoped lang="less">
#ListLitle {
    width: 100%;

    .data {
        width: 100%;
        height: 140px;
        display: flex;

        .picture {
            width: 140px;
            height: 100%;
            padding: 3px;
            border: 1px solid #cccccc;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .info {
            width: 480px;
            margin-left: 35px;

            h2 {
                font-weight: normal;
                margin-top: 10px;
            }

            .renew {
                font-size: 12px;
                color: #66667f;
                margin-top: 10px;

                span {
                    margin-left: 10px;

                    &:nth-child(2) {
                        margin-left: 0;
                    }
                }

                i {
                    background: url('../../assets/icon.png') no-repeat -18px -682px;
                    width: 13px;
                    height: 13px;
                    display: inline-block;
                    margin-right: 2px;
                }
            }
        }

        ul {
            width: 100%;
            display: flex;
            margin-top: 30px;

            li {
                display: flex;
                margin-right: 5px;

                div {
                    position: relative;
                    height: 30px;
                    font-size: 12px;
                    display: flex;
                    line-height: 30px;
                    border-radius: 5px;

                    span {
                        display: inline-block;
                        height: 31px;
                    }
                }

                .play {
                    span {
                        background: url('../../assets/button2.png') no-repeat 0 -719px;
                        width: 70px;
                    }

                    p {
                        position: absolute;
                        left: 35px;
                        color: #fff;
                    }
                }

                .addTo {
                    span {
                        background: url('../../assets/button2.png') no-repeat -40px -1588px;
                        width: 32px;
                    }
                }

                .collect {
                    span:nth-child(1) {
                        background: url('../../assets/button2.png') no-repeat  0 -1063px;
                        width: 90px;
                    }

                    p {
                        position: absolute;
                        left: 30px;
                        color: #000;
                    }

                    span:nth-child(3) {
                        background: url('../../assets/button2.png') no-repeat -245px -1106px;
                        width: 5px;
                    }
                }

                .share {
                    span:nth-child(1) {
                        background: url('../../assets/button2.png') no-repeat 0 -1268px;
                        width: 80px;
                    }

                    p {
                        position: absolute;
                        left: 30px;
                        color: #000;
                    }

                    span:nth-child(3) {
                        background: url('../../assets/button2.png') no-repeat -245px -1106px;
                        width: 5px;
                    }
                }

                .download {
                    span:nth-child(1) {
                        background: url('../../assets/button2.png') no-repeat  0 -2805px;
                        width: 60px;
                    }

                    p {
                        position: absolute;
                        left: 30px;
                        color: #000;
                    }

                    span:nth-child(3) {
                        background: url('../../assets/button2.png') no-repeat -245px -1106px;
                        width: 5px;
                    }
                }

                .Comment {
                    span:nth-child(1) {
                        background: url('../../assets/button2.png') no-repeat   0 -1508px;
                        width: 85px;
                    }

                    p {
                        position: absolute;
                        left: 30px;
                        color: #000;
                    }

                    span:nth-child(3) {
                        background: url('../../assets/button2.png') no-repeat -245px -1106px;
                        width: 5px;
                    }
                }
            }
        }
    }

    .z {
        width: 100%;
        height: 40px;
        display: flex;
        line-height: 40px;
        border-bottom: 2px solid #c20c0c;
        position: relative;
        margin-top: 50px;

        p {
            font-size: 23px;
            font-weight: 300;
        }

        span {
            font-size: 12px;
            margin-left: 30px;
        }

        div {
            position: absolute;
            right: 0;

            p {
                font-size: 12px;
            }

            span {
                margin-left: 0;
                font-weight: bold;
                color: #c20c0c
            }
        }
    }
}

</style>
