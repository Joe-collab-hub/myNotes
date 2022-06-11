<!--
  ~ Time:2022/4/15 13:34 41
  ~ Name:News.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/pages
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<ul>
		<li>news001</li>
		<li>news002</li>
		<li>news003</li>
	</ul>
</template>

<script>
export default {
	name: 'News',
	data () {
		return {};
	},
	components: {},
};
</script>

<style scoped lang="less">
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

// -------News----------
#News {

}
</style>
