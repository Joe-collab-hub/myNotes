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
<!--	<h1>当前x的值是：{{ x }}</h1>-->
	<h1>当前x.y的值是：{{ x.y }}</h1>
<!--	<button @click="x++">点击x+1</button>-->
	<button @click="x.y++">点击x.y+1</button>
	<hr>
	<h1>{{ person }}</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}k</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">修改年龄</button>
	<button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRef, toRefs, shallowReactive, shallowRef } from 'vue';

export default {
	name: 'App',

	setup () {
		// let person = shallowReactive({ // 只是只考虑第一层的响应式数据
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20,
				},
			},
		});
		// let x = ref(0);
		let x = shallowRef({
			y: 0,
		});

		return {
			person,
			x,
			...toRefs(person),
		};
	},
};
</script>
