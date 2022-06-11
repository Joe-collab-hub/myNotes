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
	<div id="Student">
		<h2>学生性名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<button @click="add">点我给School组件传送数据</button>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
	name: 'Student',
	data () {
		return {
			name: '张三',
			sex: '男',
		};
	},
	methods: {
		add () {
			// this.$bus.$emit('hello', this.name);
			pubsub.publish('hello',666);
		},
	},
};
</script>
<style lang="less" scoped>
#Student {
	background-color: #00FF00;
}
</style>
