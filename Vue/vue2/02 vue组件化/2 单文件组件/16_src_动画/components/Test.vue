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
	<div id="Test">
		<button @click="isShow = !isShow">点我隐藏</button>
		<transition name="hello" appear>
			<h1 v-show="isShow">{{ name }}</h1>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Test',
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
#Test {
	h1{
		background-color: #00FFFF;
		margin-top: 20px;
		padding: 10px;
	}
	.hello-enter-active{
		animation: a 0.5s linear;
	}
	.hello-leave-active{
		animation: a 0.5s linear reverse;
	}
	@keyframes a {
		from{
			transform: translate(-100%);
		}
		to{
			transform: translate(0);
		}
	}
}

</style>
