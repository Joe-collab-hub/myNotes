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
		<h2>学生年龄：{{ age }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data () {
		return {
			name: '张三',
			age: 19,
		};
	},
};
</script>

