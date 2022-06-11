<template>
    <h1>我是App组件</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>工作：{{ person.obj.type }}</h2>
    <h2>工资：{{ person.obj.salary }}</h2>
    <h2>爱好：{{ person.hobby }}</h2>
    <h2>测试工具c：{{ person.obj.a.b.c }}</h2>
    <button @click="setHello">点击修改</button>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'App',
    setup () {
        let person = reactive({
                    name: '张三',
                    age: 18,
                    obj: {
                        type: '前端工程师',
                        salary: '10k',
                        a: {
                            b: {
                                c: 666,
                            },
                        },
                    },
                    hobby: ['吃饭', '睡觉', '打豆豆'],
                },
        );

        function setHello () {
            person.name = '李四';
            person.age = 20;
            person.obj.type = '后端工程师';
            person.obj.salary = '30k';
            person.obj.a.b.c = 999;
            person.hobby[0] = '唱歌';
        }

        return {
            person,
            setHello,
        };
    },
};
</script>

<style>
</style>
