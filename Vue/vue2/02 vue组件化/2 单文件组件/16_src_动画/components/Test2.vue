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
	<div id="Test2">
		<button @click="isShow = !isShow">点我隐藏</button>
		<transition-group name="hello" appear>
			<h1 v-show="!isShow" key="1">{{ name }}</h1>
			<h1 v-show="isShow" key="2">尚硅谷</h1>
		</transition-group>
	</div>
</template>

<script>
export default {
	name: 'Test2',
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
#Test2 {
	h1{
		background-color: #00FFFF;
		margin-top: 20px;
		padding: 10px;
	}
	.hello-enter-active,.hello-leave-active{
		transition: all 0.5s linear;
	}
	// 进入的起点，离开的终点
	.hello-enter,.hello-leave-to{
		transform: translate(-100%);
	}

	// 离开的起点，进入的终点
	.hello-leave,.hello-enter-to{
		transform: translate(0);
	}
}

</style>
