<!--
  ~ Time:2022/4/17 15:38 24
  ~ Name:MyMain.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
    <div id="MyMain">
        <MyBanner/>
        <div class="content">
            <MainContent/>
            <Side/>
        </div>
    </div>
</template>

<script>
import MyBanner from '../components/mian/MyBanner.vue';
import MainContent from '../components/mian/MainContent';
import Side from '../components/mian/Side';

export default {
    name: 'MyMain',
    data() {
        return {};
    },
    components: {
        MyBanner,
        MainContent,
        Side,
    },
    methods: {},
};
</script>

<style lang="less" scoped>
#MyMain {
    background-color: #f5f5f5;
    width: 100%;

    .content {
        display: flex;
        width: 982px;
        margin: auto;
        border: 1px solid #d3d3d3;

    }

}
</style>
