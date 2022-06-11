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
	<h3>点击获取鼠标位置：x ：{{ point.x }}，y ：{{ point.y }}</h3>
</template>

<script>
import { ref } from 'vue';
import usePoint from '@/hooks/usePoint';

export default {
	name: 'App',
	setup () {
		let sum = ref(0);

		let point = usePoint();

		return {
			sum,
			point,
		};
	},

};
</script>

<style>
</style>
