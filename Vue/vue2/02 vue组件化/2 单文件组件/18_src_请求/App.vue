<!--
  ~ Time:2022/4/9 16:35 57
  ~ Name:App.vue
  ~ Path:src
  ~ ProjectName:zxc
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="App">
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    data () {
        return {};
    },
    components: {},
    methods: {
        getStudents () {
            axios.get ('http://localhost:8080/api/students').then (
                    (response) => {
                        console.log ('请求成功了', response.data);
                    },
                    (error) => {
                        console.log ('请求失败了', error);
                    },
            );
        },
        getCars () {
            axios.get ('http://localhost:8080/foo/cars').then (
                    (response) => {
                        console.log ('请求成功了', response.data);
                    },
                    (error) => {
                        console.log ('请求失败了', error);
                    },
            );
        },
    },
};
</script>
<style>
</style>
