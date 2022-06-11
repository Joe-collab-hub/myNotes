<!--
  ~ Time:2022/4/13 13:11 48
  ~ Name:Category.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Category">
		<h2>{{ title }}</h2>
		<!--		<slot name="center">默认值</slot>
				<slot name="footer">默认值</slot>-->
		<slot :games="games">作用域插槽</slot>
	</div>
</template>

<script>
export default {
	name: 'Category',
	data () {
		return {
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
		};
	},
	props: ['title'],
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

// -------Category----------
#Category {
	background-color: #00FF00;
	width: 200px;
	height: 300px;

	h2 {
		text-align: center;
		background-color: #00FFFF;
	}

	img {
		width: 50%;
	}
}
</style>
