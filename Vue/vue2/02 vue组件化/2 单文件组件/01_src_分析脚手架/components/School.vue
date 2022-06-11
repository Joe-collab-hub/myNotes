<!--
  ~ Time:2022/4/9 10:42 57
  ~ Name:School.vue
  ~ Path:Vue/02 vue组件化/02 单文件组件
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
  <div id="School">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校名称：{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      name: '尚硅谷',
      address: '北京昌平',
    };
  },
  components: {},
};
</script>


