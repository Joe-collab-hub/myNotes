<!--
  ~ Time:2022/4/18 14:15 23
  ~ Name:RecommendedNewDisc.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="RecommendedNewDisc">
        <div class="dynamic">
            <div :style="move">
                <ul>
                    <li v-for="(item,index) in newDisc" :key="item.id" v-if="5<=index&&index<10">
                        <div class="picture">
                            <a href="#"><img :src="item.picUrl" alt=""></a>
                            <div class="play"></div>
                        </div>
                        <div class="name">
                            <a href="#"><p style="color: #000">{{ item.name }}</p></a>
                            <a href="#"><p style="color: #666">{{ item.artist.name }}</p></a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in newDisc" :key="item.id" v-if="index<5">
                        <div class="picture">
                            <a href="#"><img :src="item.picUrl" alt=""></a>
                            <div class="play"></div>
                        </div>
                        <div class="name">
                            <a href="#"><p style="color: #000">{{ item.name }}</p></a>
                            <a href="#"><p style="color: #666">{{ item.artist.name }}</p></a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in newDisc" :key="item.picId" v-if="5<=index&&index<10">
                        <div class="picture">
                            <a href="#"><img :src="item.picUrl" alt=""></a>
                            <div class="play"></div>
                        </div>
                        <div class="name">
                            <a href="#"><p style="color: #000">{{ item.name }}</p></a>
                            <a href="#"><p style="color: #666">{{ item.artist.name }}</p></a>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in newDisc" :key="item.picId" v-if="index<5">
                        <div class="picture">
                            <a href="#"><img :src="item.picUrl" alt=""></a>
                            <div class="play"></div>
                        </div>
                        <div class="name">
                            <a href="#"><p style="color: #000">{{ item.name }}</p></a>
                            <a href="#"><p style="color: #666">{{ item.artist.name }}</p></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="left" @click="add(true)"></div>
        <div class="right" @click="add(false)"></div>
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: 'RecommendedNewDisc',
    data() {
        return {
            num: 1,
            newDisc: [],
            boolean: true,
            kai: true,
        };
    },
    computed: {

        // 判断是否可以滚动
        move: {
            get() {
                if (this.boolean) {
                    return {
                        left: (this.num - 1) * -100 + '%',
                        transition: 'all .5s',
                    };
                } else {
                    return {
                        left: (this.num - 1) * -100 + '%',
                        transition: 'none',
                    };
                }
            },

        },
    },
    methods: {
        // 获取新碟数据的回调
        async getNewDisc() {
            let newDisc = await request('/album/newest')
            this.newDisc = newDisc.albums;
        },
        // 左右按钮
        add(bool) {
            if (this.kai) {
                this.kai = false;
                this.boolean = true;
                if (bool) {
                    this.num--;
                    setTimeout(() => {
                        if (this.num < 1) {
                            this.num = 3;
                            this.boolean = false;
                        }
                        this.kai = true;
                    }, 1000);
                } else {
                    this.num++;
                    setTimeout(() => {
                        if (this.num > 2) {
                            this.num = 1;
                            this.boolean = false;
                        }
                        this.kai = true;
                    }, 1000);
                }
            }
        },
    },
    components: {},
    mounted() {
        this.getNewDisc()
    },
    beforeDestroy() {
    }
};
</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}

// -------RecommendedNewDisc----------
#RecommendedNewDisc {
    width: 630px;
    height: 140px;
    margin-top: 20px;
    position: relative;
    background-color: #f5f5f5;
    padding: 30px;
    //overflow: hidden;


    .dynamic {
        width: 630px;
        height: 140px;
        overflow: hidden;

        div {
            transition: all 1s;
            position: relative;


            ul {
                width: 630px;
                display: flex;
                justify-content: space-between;
                position: absolute;

                li {
                    width: 118px;

                    .picture {
                        background: url('../../assets/coverall.png') no-repeat 0 -570px;
                        width: 118px;
                        height: 101px;
                        position: relative;

                        img {
                            width: 100px;
                        }

                        .play {
                            background: url('../../assets/iconall.png') no-repeat 0 -215px;
                            width: 22px;
                            height: 22px;
                            position: absolute;
                            right: 22px;
                            bottom: 5px;
                            display: none;
                            cursor: pointer;
                        }

                        &:hover {
                            .play {
                                display: block;
                            }
                        }
                    }


                    .name {
                        width: 100px;
                        font-size: 12px;

                        p {
                            width: 100%;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            -o-text-overflow: ellipsis;
                            margin-top: 2px;

                            &:hover {
                                text-decoration: underline
                            }
                        }
                    }
                }
            }

            ul:nth-child(1) {
                left: -100%;
            }

            ul:nth-child(2) {
                left: 0;
            }

            ul:nth-child(3) {
                left: 100%;
            }

            ul:nth-child(4) {
                left: 200%;
            }
        }
    }


    .left {
        background: url('../../assets/index.png') no-repeat -265px -77px;
        width: 8px;
        height: 14px;
        position: absolute;
        left: 10px;
        top: 37%;
        cursor: pointer;

        &:hover {
            background: url('../../assets/index.png') no-repeat -285px -77px;
        }
    }

    .right {
        background: url('../../assets/index.png') no-repeat -305px -77px;
        width: 8px;
        height: 14px;
        position: absolute;
        right: 10px;
        top: 37%;
        cursor: pointer;

        &:hover {
            background: url('../../assets/index.png') no-repeat -325px -77px;
        }
    }
}
</style>
