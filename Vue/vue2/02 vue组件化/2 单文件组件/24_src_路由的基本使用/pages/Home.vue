<!--
  ~ Time:2022/4/15 12:42 31
  ~ Name:Home.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Home">
		<h2>我是Home的内容</h2>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {};
	},
	components: {},
	mounted () {
		console.log('Home挂载完毕');
	},
	beforeDestroy () {
		console.log('Home即将被销毁');
	}
};
</script>
