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
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">修改年龄</button>
	<button @click="job.j1.salary++">增长薪资</button>
</template>

<script>
import { ref, reactive, toRefs ,readonly,shallowReadonly} from 'vue';

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

		// person = readonly(person); // 限制person的只读
		person = shallowReadonly(person); // 限制person的最外层属性只读，深层属性可改
		// sum = readonly(sum); // 限制sum的只读
		sum = shallowReadonly(sum);

		return {
			sum,
			...toRefs(person),
		};
	},
};
</script>
