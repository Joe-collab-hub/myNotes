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
	<h2>当前求和{{ sum }}</h2>
	<button @click="sum++">点击加一</button>
	<hr>
	<h2>当前信息为：{{ msg }}</h2>
	<button @click="msg += '！'">点击修改数据</button>
	<hr>
	<h2>姓名：{{ person.name }}</h2>
	<h2>年龄：{{ person.age }}</h2>
	<h2>薪资：{{ person.job.j1.salary }}k</h2>
	<button @click="person.name+='~'">修改姓名</button>
	<button @click="person.age++">修改年龄</button>
	<button @click="person.job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue';

export default {
	name: 'App',

	setup () {
		let sum = ref(0);
		let msg = ref('hello');
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20,
				},
			},
		});

		/* watch(() => person.name,(newVal, oldVal) => {
			console.log(newVal, oldVal);
		},{immediate: true}); */

		// watchEffect所指定的回调中所用到的数据只要发生变化，则直接重新执行回调
		watchEffect(() => {
			let x1 = sum.value;
			let x2 = person.job.j1.salary;
			console.log('watchEffect配置的回调执行了');
		});

		return {
			sum,
			msg,
			person,
		};
	},
};
</script>

<style>
</style>
