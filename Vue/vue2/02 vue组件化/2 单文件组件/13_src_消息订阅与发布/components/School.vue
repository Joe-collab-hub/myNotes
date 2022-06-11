<!--
  ~ Time:2022/4/9 10:42 57
  ~ Name:School.vue
  ~ Path:Vue/02 vue组件化/02 单文件组件
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="School">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
	name: 'School',
	data () {
		return {
			name: '尚硅谷',
			address: '北京昌平',
		};
	},
	methods: {
		demo (msgName, data) {
			console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
		},
	},
	mounted () {
		/* this.$bus.$on('hello', (data) => {
			console.log('我是School组件，收到的数据', data);
		}); */
		/* this.pubId = pubsub.subscribe('hello', (msgName, data) => {
			console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
		}); */
		this.pubId = pubsub.subscribe('hello', this.demo);
	},
	beforeDestroy () {
		// this.$bus.$off('hello');
		pubsub.unsubscribe(this.pubId);
	},
};
</script>
<style lang="less" scoped>
#School {
	background-color: #00FFFF;
}
</style>
