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
	<h1>当前sum的值是：{{ sum }}</h1>
	<button @click="sum++">点击sum+1</button>
	<hr>
	<h2>姓名：{{ name }}</h2>
	<h2>年龄：{{ age }}</h2>
	<h2>薪资：{{ job.j1.salary }}k</h2>
	<h2 v-show="person.car">车辆信息：{{ person.car }}</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">修改年龄</button>
	<button @click="job.j1.salary++">增长薪资</button>
	<button @click="showRawPerson">输出最原始的preson</button>
	<button @click="addCar">添加一辆车的信息</button>
	<button @click="person.car.brand+='!'">修改车辆信息</button>
	<button @click="person.car.price++">点击加1</button>
</template>

<script>
import { reactive, ref, toRaw, toRefs, markRaw } from 'vue';

export default {
	name: 'App',

	setup () {
		let sum = ref(0);
		let person = reactive({
			name: '张三',
			age: 18,
			job: {
				j1: {
					salary: 20,
				},
			},
		});

		function showRawPerson () {
			const p = toRaw(person);
			p.age++;
			console.log(p);
		}

		function addCar () {
			person.car = markRaw({
				brand: 'BMW',
				price: 10,
			});
		}

		return {
			sum,
			person,
			...toRefs(person),
			showRawPerson,
			addCar,
		};
	},
};
</script>
