<!--
  ~ Time:2022/4/17 13:53 33
  ~ Name:Header.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="MyHeader">
        <div style="background-color: #242424">
            <div id="MyHeader-div">
                <div class="logo">
                    <!--				<a href="https://baidu.com" class="logo"></a>-->
                </div>
                <ul>
                    <li @click="show=true">
                        <!--						<a href="#">发现音乐</a>-->
                        <router-link to="/">发现音乐</router-link>
                    </li>
                    <li @click="show=false">
                        <a href="#">我的音乐</a>
                    </li>
                    <li @click="show=false">
                        <a href="#">关注</a>
                    </li>
                    <li @click="show=false">
                        <a href="#">商城</a>
                    </li>
                    <li @click="show=false">
                        <a href="#">音乐人</a>
                    </li>
                    <li @click="show=false">
                        <a href="#">下载客户端</a>
                        <span></span>
                    </li>
                </ul>
                <div class="box">
                    <div class="search">
                        <input type="text" placeholder="音乐/视频/电台/用户">
                    </div>
                    <div class="creation">创作者中心</div>
                    <div class="logIn">登录</div>
                </div>
            </div>
        </div>
        <div style="background-color: #c20c0c">
            <div style="padding: 5px 0">
                <ul id="MyHeader-ul" v-show="show">
                    <li>
                        <!--						<a href="#">推荐</a>-->
                        <router-link to="/">推荐</router-link>
                    </li>
                    <li>
                        <!--						<a href="#">排行榜</a>-->
                        <router-link to="/leaderboard">排行榜</router-link>
                    </li>
                    <li>
                        <a href="#">歌单</a>
                    </li>
                    <li>
                        <a href="#">主播点台</a>
                    </li>
                    <li>
                        <a href="#">歌手</a>
                    </li>
                    <li>
                        <a href="#">新碟上架</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',
    data () {
        return {
            show: true,
        };
    },
    components: {},
};
</script>

<style scoped lang="less">

#MyHeader {
    width: 100%;
    background-color: #242424;

    div {
        width: 100%;

        #MyHeader-div {
            width: 1100px;
            margin: auto;
            display: flex;
            justify-content: space-between;

            .logo {
                margin: 15px;
                background: url('../assets/topbar.png') no-repeat 0 -19px;
                width: 157px;
                height: 33px;
            }

            ul {
                color: #cccccc;
                display: flex;
                margin-right: 30px;
                background-color: #242424 !important;

                li {
                    padding: 0 20px;
                    line-height: 60px;
                    font-size: 14px;

                    a {
                        color: #cccccc;
                    }

                    &:hover {
                        background-color: black !important;
                    }

                    &:nth-child(1) {
                        background-color: #000;

                        a {
                            color: #fff;
                        }
                    }

                    &:hover a {
                        color: #fff !important;
                    }

                    span {
                        display: inline-block;
                        background: url('../assets/topbar.png') no-repeat -192px 0;
                        width: 26px;
                        height: 13px;
                        margin-left: 15px;
                        position: relative;
                        top: -10px;
                    }
                }

                &:hover li {
                    background-color: #242424;
                    color: #ccc;
                }
            }

            .box {
                width: 320px;
                display: flex;
                justify-content: space-between;

                .search {
                    width: 120px;
                    height: 33px;
                    background-color: #fff;
                    position: relative;
                    padding: 0 20px;
                    border-radius: 20px;
                    margin-top: 15px;
                    overflow: hidden;

                    &:before {
                        content: '';
                        background: url('../assets/topbar.png') no-repeat -10px -108px;
                        width: 13px;
                        height: 14px;
                        position: absolute;
                        left: 8px;
                        top: 9px;
                    }

                    input {
                        width: 100%;
                        height: 100%;
                        border: none;
                        outline: none;
                        background: #fff;
                        font-size: 12px;
                        color: #9b9b9b;
                        padding-left: 10px;
                    }
                }

                .creation {
                    width: 70px;
                    height: 30px;
                    position: relative;
                    padding: 0 10px;
                    border-radius: 20px;
                    color: #ccc;
                    font-size: 12px;
                    border: 1px solid #4f4f4f;
                    line-height: 30px;
                    margin-top: 15px;
                    text-align: center;
                }

                .logIn {
                    width: 40px;
                    height: 30px;
                    position: relative;
                    color: #787878;
                    font-size: 12px;
                    line-height: 30px;
                    margin-top: 15px;
                    text-align: center;
                }
            }

        }

        #MyHeader-ul {
            width: 680px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            position: relative;

            li {
                height: 20px;
                padding: 5px;

                a {
                    color: #fff;
                    padding: 2px 13px;
                }

                &:hover a {
                    border-radius: 10px;
                    background-color: #9b0909;
                }

                &:nth-child(1) a {
                    border-radius: 10px;
                    background-color: #9b0909;
                }
            }

            &:before {
                content: '';
                width: 0;
                height: 0;
                border: 8px solid;
                border-color: transparent transparent #c20c0c transparent;
                position: absolute;
                top: -21px;
                left: 20px;
            }
        }
    }


}
</style>
