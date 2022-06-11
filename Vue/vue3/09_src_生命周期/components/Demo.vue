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
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export default {
	name: 'App',
	setup () {
		console.log('setup');
		let sum = ref(0);

		// 通过组合式API的形式使用生命周期钩子
		onBeforeMount(() => {
			console.log('onBeforeMount');
		});
		onMounted(() => {
			console.log('onMounted');
		});
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate');
		});
		onUpdated(() => {
			console.log('onUpdated');
		});
		onBeforeUnmount(() => {
			console.log('onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('onUnmounted ');
		});
		return {
			sum,
		};
	},

	// 通过配置项的形式使用生命周期钩子
	/* beforeCreate () {
		console.log('beforeCreate');
	},
	created () {
		console.log('created');
	},
	beforeMount () {
		console.log('beforeMount');
	},
	mounted () {
		console.log('mounted');
	},
	beforeUpdate () {
		console.log('beforeUpdate');
	},
	updated () {
		console.log('updated');
	},
	beforeUnmount () {
		console.log('beforeUnmount');
	},
	unmounted () {
		console.log('activated');
	}, */
};
</script>

<style>
</style>
