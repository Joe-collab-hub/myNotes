<template>
	<h1>我是App组件</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>工作：{{ obj.type }}</h2>
	<h2>工资：{{ obj.salary }}</h2>
	<button @click="setHello">点击修改</button>
</template>

<script>
import { ref } from 'vue';

export default {
	name: 'App',
	setup () {
		let name = ref('张三');
		let age = ref(18);
		/* let obj = {
			type: '前端工程师',
			salary: '10k',
		} */
		let obj = ref({
			type: '前端工程师',
			salary: '10k',
		});


		function setHello () {
			name.value = '李四';
			age.value = 20;
			// obj.type = '后端工程师';
			// obj.salary = '30k';
			console.log(obj.value);
			obj.value = {
				type: '后端工程师',
				salary: '30k',
			};
		}

		return {
			name,
			age,
			obj,
			setHello,
		};
	},
};
</script>

<style>
</style>
