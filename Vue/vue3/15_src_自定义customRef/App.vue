<template>
	<input type="text" v-model="keyWord">
	<h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';

export default {
	name: 'App',
	components: {},
	setup () {
		// let keyWord = ref('hello');

		function myRef (value) {
			let timer = null;
			return customRef((track,trigger) => {
				return {
					get () {
						console.log('有人调用容器的数据了');
						track();  // 通知Vue追踪value的变化
						return value;
					},
					set (newValue) {
						console.log('有人修改容器的数据了',newValue);
						clearTimeout(timer);
						timer = setTimeout(() => {
							value = newValue;
							trigger();  // 通知Vue去重新解析模板
						},500);
					},
				};
			});
		}

		let keyWord = myRef('hello');
		return {
			keyWord,
		};
	},
};
</script>

<style>
</style>
