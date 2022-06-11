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
        <School/>
        <hr>
        <Student/>
    </div>
</template>

<script>

import School from '@/components/School';
import Student from '@/components/Student';

export default {
    name: 'App',
    data () {
        return {
            name: 'Vue',
        };
    },
    components: {
        Student,
        School,
    },
    methods: {},
};
</script>
<style>
button {
    margin: 20px;
}
</style>
