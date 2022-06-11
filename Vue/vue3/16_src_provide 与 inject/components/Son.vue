<!--
  ~ Time:2022/4/25 15:44 17
  ~ Name:Son.vue
  ~ Path:src/components
  ~ ProjectName:vue3
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Son">
		<h2>我是Son组件（孙）</h2>
		<h2>车辆信息：{{ car }}</h2>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	name: 'Son',
	setup () {
		let car = inject('car', this);
		return {
			car,
		};
	},
};
</script>

<style scoped lang="less">


// -------Son----------
#Son {
	background-color: aqua;
	padding: 10px;
}
</style>
