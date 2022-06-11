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
	<div id="Student">
		<h2>学生性名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<h2>求和：{{ number }}</h2>
		<button @click="add">点我number++</button>
		<button @click="sendStudentName">把我学校名称给App</button>
		<button @click="unbind">点我解除自定义绑定事件</button>
		<button @click="death">点我销毁student实例对象</button>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data () {
		return {
			name: '张三',
			sex: '男',
			number: 0,
		};
	},
	methods: {
		add () {
			this.number++;
			console.log(678);
		},
		sendStudentName () {
			// 触发Student实例身上的dom事件
			this.$emit('dom', this.name, 666, 888, 999);
			// this.$emit('demo');
			this.$emit('click');
		},
		unbind () {
			this.$off('dom');  // 解除一个自定义事件
			// this.$off(['dom', 'demo']);  // 解除多个自定义事件
			// this.$off();  // 解除所有的自定义事件
		},
		death () {
			this.$destroy();  // 销毁了当前的Student组件的实例对象 //销毁后所有的Student实例的自定义事件全部不奏效
		},
	},
};
</script>
<style lang="less" scoped>
#Student {
	background-color: #00FF00;
}
</style>
