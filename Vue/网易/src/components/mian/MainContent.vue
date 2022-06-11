<!--
  ~ Time:2022/4/18 10:29 31
  ~ Name:MainContent.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="MainContent">
        <div class="box">
            <div class="v-hd2">
                <div class="title"><a href="#">热门推荐</a></div>
                <ul>
                    <li v-for="(item,index) in popularList" :key="item.id"
                        :class="popularList.length-1===index?'':'wire'">
                        <a href="#">{{ item.name }}</a>
                    </li>
                </ul>
                <div class="more">
                    <a href="#">更多</a>
                </div>
            </div>
            <PopularRecommendation/>
        </div>
        <br><br>
        <div class="box">
            <div class="v-hd2">
                <div class="title"><a href="#">新碟上架</a></div>
                <div class="more">
                    <a href="#">更多</a>
                </div>
            </div>
            <RecommendedNewDisc/>
        </div>
        <br><br>
        <div class="box">
            <div class="v-hd2">
                <div class="title"><a href="#">榜单</a></div>
                <div class="more">
                    <a href="#">更多</a>
                </div>
            </div>
            <RecommendedList/>
        </div>
    </div>
</template>

<script>
import request from "@/utils/request";
import PopularRecommendation from '@/components/mian/PopularRecommendation';
import RecommendedNewDisc from '@/components/mian/RecommendedNewDisc';
import RecommendedList from '@/components/mian/RecommendedList';

export default {
    name: 'MainContent',
    data() {
        return {
            popularList: [],
        };
    },
    components: {
        PopularRecommendation,
        RecommendedNewDisc,
        RecommendedList,
    },
    methods: {
        // 获取榜单数据
        async getPopularListData() {
            let popularList = await request('/playlist/hot')
            let a = popularList.tags
            let arr = []
            for (let i = 0; i < 5; i++) {
                arr.push(a[i])
            }
            this.popularList = arr
        }
    },
    mounted() {
        this.getPopularListData()
    },
};
</script>

<style scoped lang="less">
#MainContent {
    width: 690px;
    padding: 20px;
    background-color: #fff;
    border-right: 1px solid #d3d3d3;

    .box {
        width: 100%;

        a {
            color: #333;
        }


        .v-hd2 {
            width: 100%;
            color: #333;
            height: 40px;
            position: relative;
            border-bottom: 2px solid #c10d0c;
            display: flex;
            justify-content: space-between;

            .title {
                margin-left: 30px;
                font-size: 20px;
                line-height: 35px;
                position: relative;

                &:before {
                    content: '';
                    background: url('../../assets/index.png') no-repeat -235px -164px;
                    width: 14px;
                    height: 14px;
                    position: absolute;
                    top: 10px;
                    left: -20px;
                }
            }

            .more {
                height: 35px;
                line-height: 35px;
                font-size: 12px;
                margin-right: 30px;
                position: relative;

                a {
                    color: #666;

                    &:hover {
                        border-bottom: 1px solid #666;
                    }
                }

                &:before {
                    content: '';
                    background: url('../../assets/index.png') no-repeat 0 -240px;
                    width: 12px;
                    height: 12px;
                    position: absolute;
                    top: 12px;
                    left: 30px;
                }
            }

            ul {
                width: 260px;
                position: relative;
                right: 135px;
                display: flex;
                justify-content: space-between;

                li {
                    width: 60px;
                    height: 35px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 12px;
                    position: relative;

                    a {
                        color: #666;

                        &:hover {
                            border-bottom: 1px solid #666;
                        }
                    }
                }

                .wire {
                    &:after {
                        content: '';
                        width: 0;
                        height: 10px;
                        border-right: 1px solid #cfd6e3;
                        position: absolute;
                        top: 13px;
                        right: 0;
                    }
                }
            }
        }

    }
}
</style>
