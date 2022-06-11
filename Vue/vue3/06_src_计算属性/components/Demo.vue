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
	<span>姓:</span><input type="text" v-model="person.firsName">
	<br>
	<span>名:</span><input type="text" v-model="person.lestName">
	<br>
	<span>全名:{{ person.fullName }}</span>
	<br>
	全名：<input type="text" v-model="person.fullName">
</template>

<script>
import { reactive, computed } from 'vue';

export default {
	name: 'App',

	setup () {

		let person = reactive({
			firsName: '张',
			lestName: '三',
		});

		// 计算属性的简写方式（没有考虑计算属性被修改的情况）
		/* person.fullName = computed(() => {
			return person.firsName + '-' + person.lestName;
		}); */

		// 计算属性完整写法（考虑读和改）
		person.fullName = computed({
			get () {
				return person.firsName + '-' + person.lestName;
			},
			set (newValue) {
				let names = newValue.split('-');
				person.firsName = names[0];
				person.lestName = names[1];
			},
		});

		return {
			person,
		};
	},
};
</script>

<style>
</style>
