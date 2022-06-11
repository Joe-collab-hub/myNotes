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
import { reactive, ref, watch } from 'vue';

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

		// 情况一：监视ref所定义的响应式数据
		/* watch(sum, (newVal, oldVal) => {
			console.log(`${oldVal} => ${newVal}`);
		},{immediate: true}); */

		// 情况二：监视ref所定义的多个响应式数据
		/* watch(sum, (newVal, oldVal) => {
			console.log(`${oldVal} => ${newVal}`);
		});
		watch(msg, (newVal, oldVal) => {
			console.log(`${oldVal} => ${newVal}`);
		}); */
		/* watch([sum,msg], (newVal, oldVal) => {
			console.log(`${oldVal} => ${newVal}`);
		}); */

		/*
			情况三：监视reactive所定义的一个响应式数据
				1、注意：此处无法正确的获取oldVal
				2、注意：强制开启了深度监视（deep配置无效）
		 */
		/* watch(person, (newVal, oldVal) => {
			console.log(oldVal, newVal);
		},); */

		// 情况四：监视reactive所定义的一个响应式数据中的某一个属性
		/* watch(() => person.age, (newVal, oldVal) => {
			console.log(oldVal, newVal);
		}); */

		// 情况五：监视reactive所定义的一个响应式数据中的某些属性
		/* watch([() => person.age, () => person.name], (newVal, oldVal) => {
			console.log(oldVal, newVal);
		}); */

		// 特殊情况
		/* watch(() => person.job, (newVal, oldVal) => {
			console.log(oldVal, newVal);
		},{deep:true}); */

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
