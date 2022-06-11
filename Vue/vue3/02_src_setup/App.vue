<template>
	<h1>我是App组件</h1>
	<h2>姓名{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>性别：{{ sex }}</h2>
	<button @click="setHello">说话</button>
	<br>
	<br>
	<button @click="set">说话-set</button>
</template>

<script>

export default {
	name: 'App',
	data () {
		return {
			sex: '男',
		};
	},
	methods: {
		set () {
			alert("3457")
		},
	},
	setup () {
		let name = '张三';
		let age = 18;

		function setHello () {
			alert('我是' + name + '，今年' + age + '岁了');
		}

		return {
			name,
			age,
			setHello,
		};
	},
};
</script>

<style>
</style>
