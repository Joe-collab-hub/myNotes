<template>
	<div id="App">
		<h2>我是App组件（祖）</h2>
		<h2>车辆信息：{{ name }}---{{ price }}</h2>
		<Child/>
	</div>
</template>

<script>
import { reactive, toRefs, provide } from 'vue';
import Child from '@/components/Child';

export default {
	name: 'App',
	components: { Child },
	setup () {
		let car = reactive({
			name: '奔驰',
			price: '100万',
		});
		provide('car', car);
		return {
			...toRefs(car),
		};
	},
};
</script>

<style>
#App {
	background-color: #666666;
	padding: 10px;
}

</style>
