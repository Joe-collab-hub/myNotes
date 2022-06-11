<!--
  ~ Time:2022/4/17 17:38 01
  ~ Name:Carousel.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="MyBanner">
        <div class="carousel">
            <div class="picture">
                <ul>
                    <li v-for="(item,index) in carousel" :key="index" :class="index===num?'li2':''">
                        <img :src="item.imageUrl" alt="">
                    </li>
                </ul>
                <div>
					<span
                            v-for="(item,index) in carousel"
                            :key="index"
                            class="button"
                            :class="index===num?'span2':''"
                            @click="num=index"
                            @mousemove="startUp"
                            @mouseleave="pause"></span>
                </div>
            </div>
            <div class="download">
                <a href="#"></a>
            </div>
            <div class="carousel-left" @click="add(true)" @mousemove="startUp" @mouseleave="pause"></div>
            <div class="carousel-right" @click="add(false)" @mousemove="startUp" @mouseleave="pause"></div>
        </div>
        <div class="z" ref="background" :style="background1"></div>
    </div>
</template>

<script>
import request from "@/utils/request";

export default {
    name: 'MyBanner',
    data() {
        return {
            num: 0,
            carousel: [],
            background1: {},
        };
    },

    methods: {
        // 获取轮播图的数据
        async getCarousel() {
            let carousel = await request('/banner')
            console.log(carousel)
            this.carousel = carousel.banners
            this.pause()
        },

        // 左右按钮
        add(boolean) {
            if (boolean) {
                this.num--;
                if (this.num < 0) {
                    this.num = this.carousel.length - 1;
                    this.background1 = this.background();
                }
            } else {
                this.num++;
                if (this.num > this.carousel.length - 1) {
                    this.num = 0;
                    this.background1 = this.background();
                }
            }
        },
        // 开始轮播
        startUp() {
            clearInterval(this.times);
        },
        pause() {
            this.times = setInterval(() => {
                this.add(false);
            }, 2000);
        },

        // 获取数据
        background() {
            return {
                background: `url(${this.carousel[this.num].imageUrl})`,
                backgroundSize: '100% 100%',
            };
        },
    },
    watch: {
        num(newVal, oldVal) {
            this.background1 = this.background();
        },
    },
    mounted() {
        // 获取轮播图数据
        this.getCarousel()

    },
};
</script>

<style scoped lang="less">

#MyBanner {
    width: 100%;
    position: relative;
    backdrop-filter: blur(50px);


    .carousel {
        width: 984px;
        margin: auto;
        display: flex;
        position: relative;

        /* 图片 */

        .picture {
            width: 730px;
            height: 280px;
            position: relative;

            ul {
                width: 100%;
                height: 100%;
                position: relative;

                li {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    opacity: 0;
                    transition: all 2s;

                    img {
                        width: 100%;
                        height: 280px;
                    }
                }

                .li2 {
                    opacity: 1;
                }
            }

            div {
                width: 180px;
                height: 20px;
                position: absolute;
                bottom: 30px;
                left: 40%;
                z-index: 9999;

                span {
                    width: 8px;
                    height: 8px;
                    background-color: #fff;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 10px;
                    cursor: pointer;
                    transition: all 2s;

                    &:hover {
                        background-color: #c20c0c;
                    }
                }

                .span2 {
                    background-color: #c20c0c;
                }
            }
        }

        /* 下载 */

        .download {
            background: url('../../assets/download.png') no-repeat 0 0;
            width: 254px;
            height: 280px;

            a {
                width: 215px;
                height: 56px;
                display: inline-block;
                margin-top: 185px;
                margin-left: 19px;

                &:hover {
                    background: url('../../assets/download.png') no-repeat 0 -289px;
                }
            }
        }

        /* 左右按钮 */

        .carousel-left {
            background: url('../../assets/banner.png') no-repeat 0 -360px;
            width: 37px;
            height: 63px;
            position: absolute;
            left: -100px;
            top: 110px;

            &:hover {
                background: url('../../assets/banner.png') no-repeat 0 -430px;
            }
        }

        .carousel-right {
            background: url('../../assets/banner.png') no-repeat 0 -508px;
            width: 37px;
            height: 63px;
            position: absolute;
            right: -100px;
            top: 110px;

            &:hover {
                background: url('../../assets/banner.png') no-repeat 0 -578px;
            }
        }

    }


    //背景图模糊
    .z {
        width: 100%;
        height: 75%;
        filter: blur(50px);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -999;
    }
}
</style>
