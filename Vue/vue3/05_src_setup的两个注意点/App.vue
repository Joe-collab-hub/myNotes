<template>
	<h1>我是App组件</h1>
	<hr>
	<Demo @hello="showHello" a="32" b="hkk">
		<template v-slot:qwe>
			<span>你好啊</span>
		</template>
	</Demo>
</template>

<script>
import Demo from '@/components/Demo';

export default {
	name: 'App',
	components: {
		Demo,
	},
	setup () {
		function showHello (data) {
			alert(`Hello ${data}`);
		}

		return {
			showHello,
		};
	},
};
</script>

<style>
</style>
