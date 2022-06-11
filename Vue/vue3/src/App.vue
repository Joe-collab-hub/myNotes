<template>
	<div id="App">
		<h2>车辆信息：{{ name }}---{{ price }}</h2>
	</div>
</template>

<script>
import { ref, reactive, toRefs,readonly, isRef, isReactive, isReadonly, isProxy } from 'vue';

export default {
	name: 'App',
	components: {},
	setup () {
		let sum = ref(0);
		let car = reactive({
			name: '奔驰',
			price: '100万',
		});
		let car2 = readonly(car)

		console.log(isRef(sum));
		console.log(isReactive(car));
		console.log(isReadonly(car2));
		console.log(isProxy(car));
		console.log(isProxy(car2));
		console.log(isProxy(sum));


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
