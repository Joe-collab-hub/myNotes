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
	<h1>{{ person }}</h1>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
<!--	<h2>薪资：{{ salary }}k</h2>-->
	<h2>薪资：{{ job.j1.salary }}k</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">修改年龄</button>
<!--	<button @click="salary++">增长薪资</button>-->
	<button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	name: 'App',

	setup () {
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20,
				},
			},
		});

		// let name = person.name;
		// console.log(name);

		// let name1 = toRef(person, 'name');
		// console.log(name1);

		let person1 = toRefs(person);
		console.log(person1);
		return {
			person,

			// toRef()写法,
			/* name: toRef(person, 'name'),
			age: toRef(person, 'age'),
			salary: toRef(person.job.j1, 'salary'), */

			// toRefs()写法,
			...toRefs(person),
		};
	},
};
</script>
