<!--
  ~ Time:2022/4/22 17:05 37
  ~ Name:Demo.vue
  ~ Path:src/components
  ~ ProjectName:vue3
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<h1>一个人的信息</h1>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<button @click="test">点击测试</button>
	<slot></slot>
</template>

<script>
import { reactive } from 'vue';

export default {
	name: 'App',
	beforeCreate () {
		console.log('-------beforeCreate-------');
	},
	props: ['a', 'b'],
	emits: ['hello'],
	setup (props, context) {
		// console.log('------setup-------', props);
		// console.log('------setup-------', context);
		// console.log('------setup-------', context.attrs);  	// 详细于 Vue2中的$attrs
		// console.log('------setup-------', context.emit); // 触发自定义事件的
		console.log('------setup-------', context.slots); // 插槽

		function test () {
		    context.emit('hello', 666);
		}

		let person = reactive({
			name: '张三',
			age: 18,
		});
		return {
			person,
			test,
		};
	},
};
</script>

<style>
</style>
