<!--
  ~ Time:2022/4/19 11:26 01
  ~ Name:Side.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="Side">
        <div class="maskLayer" v-if="isLogIn">
            <div class="login">
                <div class="header">
                    <span style="color: #fff">手机号登录</span>
                    <span class="quit" @click="isLogIn=false">X</span>
                </div>
                <div class="main">
                    <div class="mainItem">
                        <input type="text" placeholder="请输入手机号" v-model="phone"/>
                        <input type="password" placeholder="输入密码" v-model="password">
                        <div>
                            <span class="message">短信登录</span>
                            <input type="checkbox">
                            <span class="automatic">自动登录</span>
                        </div>
                        <button @click="loginJudgment">登录</button>
                    </div>
                </div>
                <div class="footer">
                    <span style="color: #0c72c3">< 其他登录方式</span>
                    <span style="color: #999999">< 没有账号？免费登录</span>
                </div>
            </div>
        </div>
        <div class="logIn">
            <br>
            <div class="logIn-t">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步手机</div>
            <div class="logIn-d" @click="isLogIn=true">
                <a href="#">用户登录</a>
            </div>
        </div>
        <div class="logIn-s">
            <div>
                <img src="http://p1.music.126.net/XWi5do-mbQzYtATeWOXucQ==/109951167352058174.jpg?param=180y180" alt="">
                <div>
                    <p></p>
                    <span></span>
                </div>
            </div>
            <!--            <ul>
                            <li>
                                <span>0</span>
                                <span>动态</span>
                            </li>
                            <li>
                                <span>2</span>
                                <span>关注</span>
                            </li>
                            <li>
                                <span>0</span>
                                <span>粉丝</span>
                            </li>
                        </ul>-->
        </div>
        <!--        <CheckInSinger/>-->

        <audio src=""></audio>

        <button @click="add">点击</button>
    </div>
</template>

<script>
import CheckInSinger from '@/components/mian/CheckInSinger';
import request from "@/utils/request";

export default {
    name: 'Side',
    data() {
        return {
            isLogIn: false,
            phone: "", // 账号
            password: '', // 密码
            audio:''
        };
    },
    components: {
        CheckInSinger,
    },
    methods: {
        // 登录用户的回调
        async loginJudgment() {
            let {phone, password} = this

            // 前端验证
            // 账号验证
            if (phone.trim() === '') {
                alert('请输入账号')
            } else {
                if (!(/^1[3456789]\d{9}$/.test(phone))) {
                    alert("账号输入有误！！！")
                    return
                }
            }

            // 密码验证
            if (password.trim() === "") {
                alert('请输入密码')
                return
            }

            // 后端验证
            let resUlt = await request('/login/cellphone', {phone, password,isLogin: true})

            if (resUlt.code === 200) {
                alert('登录成功')
            } else if (resUlt.code === 501) {
                alert('账号不存在')
            } else if (resUlt.code === 502) {
                alert('密码错误')
            } else {
                alert("登录失败，请重新登录")
            }
        },

        async add(){
            let audio = await request('/song/url',{id:145408293})
            console.log("@@@@",audio)
        }
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

// -------Side----------
#Side {
    width: 254px;

    .maskLayer {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(153, 153, 153, 0.14);
        position: fixed;

        .login {
            width: 530px;
            height: 300px;
            background-color: #2d2d2d;
            padding: 5px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            border: 1px solid #2c0303;
            border-radius: 5px;

            .header {
                width: 95%;
                height: 30px;
                line-height: 30px;
                margin: auto;
                display: flex;
                justify-content: space-between;
                font-size: 14px;
                font-weight: bold;
                align-items: center;

                .quit {
                    color: #aeaeae;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    text-align: center;
                    cursor: pointer;
                }
            }

            .main {
                height: 220px;
                background-color: #fff;
                border-radius: 5px;

                .mainItem {
                    width: 40%;
                    margin: auto;
                    display: flex;
                    flex-wrap: wrap;
                    position: relative;
                    top: 20px;

                    input {
                        width: 100%;
                        height: 30px;
                        border-color: #e5e5e5;
                        outline: none;
                        margin-top: 10px;
                        text-indent: 5px;
                    }

                    div {
                        width: 100%;
                        display: flex;
                        margin-top: 10px;
                        font-size: 13px;
                        height: 30px;
                        align-items: center;

                        .message {
                            flex: 1;
                        }

                        input {
                            width: 15px;
                            margin-right: 10px;
                            margin-bottom: 6px;
                        }
                    }

                    button {
                        width: 100%;
                        height: 30px;
                        font-size: 12px;
                        color: #fff;
                        background-color: #3988d3;
                        border: none;
                        border-radius: 5px;
                        margin-top: 10px;
                    }
                }
            }

            .footer {
                width: 90%;
                border-top: 1px solid #c6c6c6;
                background-color: #fff;
                margin-top: -2px;
                height: 55px;
                line-height: 55px;
                font-size: 12px;
                display: flex;
                justify-content: space-between;
                padding: 0 5%;
            }
        }
    }

    .logIn {
        background: url('../../assets/index.png') no-repeat 0 0;
        width: 250px;
        min-height: 126px;

        .logIn-t {
            width: 210px;
            font-size: 12px;
            color: #666666;
            margin: auto;
            line-height: 20px;
        }

        .logIn-d {
            background: url('../../assets/index.png') no-repeat 0 -195px;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            font-size: 12px;
            color: #fff;
            border-radius: 5px;
            margin: 10px auto 0;

            a {
                color: #fff;
            }

            &:hover {
                background: url('../../assets/index.png') no-repeat -110px -195px;
            }
        }
    }

    .logIn-s {
        width: 210px;
        padding: 20px;
        background-color: #f6f6f6;
        border-bottom: 1px solid #e5e5e5;

        div {
            width: 100%;
            display: flex;

            img {
                width: 80px;
                height: 80px;
            }

            div {
                flex: 1;
                margin: 10px;
                display: flex;
                flex-wrap: wrap;

                p {
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap
                }

                span {
                    width: 35px;
                    height: 15px;
                    border-radius: 10px;
                    background-color: #999999;
                }
            }
        }
    }
}
</style>
