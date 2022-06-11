<!--
  ~ Time:2022/4/18 10:14 11
  ~ Name:PopularRecommendation.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <ul>
        <li v-for="(item,index) in popular" :key="item.id">
            <div class="picture">
                <a href="#">
                    <img :src="item.picUrl" alt="">
                    <p>{{ item.name }}</p>
                </a>
            </div>
            <div class="play-volume">
                <div class="volume">{{ item.playCount | mySlice }}万</div>
                <div class="play"></div>
            </div>
        </li>
    </ul>
</template>

<script>
import request from "@/utils/request";

export default {
    name: 'PopularRecommendation',
    data() {
        return {
            popular: [],
        };
    },
    components: {},
    filters: {
        mySlice(value) {
            return String(value).slice(0, -4);
        },
    },
    methods: {
        //
        async getPopularData() {
            let popularList = await request('/personalized', {limit: 8})
            this.popular = popularList.result;
        }
    },
    mounted() {
        this.getPopularData()
    },

};
</script>

<style scoped lang="less">
// -------PopularRecommendation----------
ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;

    li {
        width: 140px;
        margin-bottom: 50px;
        position: relative;

        .picture {
            width: 100%;
            margin: auto;

            a {
                img {
                    width: 100%;
                    height: 100%;
                }

                p {
                    color: #000;
                    width: 100%;
                    font-size: 14px;

                    &:hover {
                        text-decoration: underline
                    }
                }
            }
        }

        .play-volume {
            width: 100%;
            height: 25px;
            background-color: rgba(36, 36, 36, 0.41);
            position: absolute;
            bottom: 41px;
            display: flex;
            justify-content: space-between;

            .volume {
                font-size: 13px;
                line-height: 25px;
                color: #fff;
                margin-left: 30px;
                position: relative;

                &:before {
                    content: '';
                    background: url('../../assets/iconall.png') no-repeat 0 -24px;
                    width: 14px;
                    height: 11px;
                    position: absolute;
                    top: 7px;
                    left: -20px;
                }
            }

            .play {
                background: url('../../assets/iconall.png') no-repeat 0 0;
                width: 16px;
                height: 17px;
                margin-top: 5px;
                margin-right: 5px;
                cursor: pointer;

                &:hover {
                    background-position: 0 -60px;
                }
            }
        }
    }
}
</style>
