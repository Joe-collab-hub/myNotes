<!--
  ~ Time:2022/4/15 13:55 47
  ~ Name:Detail.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/25_src_多级路由/pages
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<ul>
		<li>消息编号：{{ $route.query.id }}</li>
		<li>消息内容：{{ $route.query.title }}</li>
	</ul>
</template>

<script>
export default {
	name: 'Detail',
	data () {
		return {

		};
	},
	components: {},

};
</script>

