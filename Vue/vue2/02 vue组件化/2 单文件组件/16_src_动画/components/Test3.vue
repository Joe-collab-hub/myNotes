<!--
  ~ Time:2022/4/12 16:22 42
  ~ Name:Test.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Test3">
		<button @click="isShow = !isShow">点我隐藏</button>
		<transition-group
			appear
			name="animate__animated animate__bounce"
			enter-active-class="animate__bounceInDown"
			leave-active-class="animate__bounceOutUp"
		>
			<h1 v-show="!isShow" key="1">{{ name }}</h1>
			<h1 v-show="isShow" key="2">尚硅谷</h1>
		</transition-group>
	</div>
</template>

<script>
import 'animate.css'
export default {
	name: 'Test3',
	data () {
		return {
			name: '你好啊！',
			isShow: true,
		};
	},
	components: {},
};
</script>

<style scoped lang="less">
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

// -------Test----------
#Test3 {
	h1{
		background-color: #00FFFF;
		margin-top: 20px;
		padding: 10px;
	}
}

</style>
