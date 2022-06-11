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
		<h1>{{ mvg }}</h1>
		<h2>学生性名：{{ name }}</h2>
		<h2>学生性别：{{ sex }}</h2>
		<h2>学生年龄：{{ age2 }}</h2>
		<button @click="add">点我年龄加一</button>
	</div>
</template>

<script>
export default {
	name: 'Student',
	data () {
		return {
			mvg: '欢迎来到，Vue',
			age2: this.age,
		};
	},

	// 接受数据
	// props:['name','age','sex']

	// 接受数据类型限制
	/* props:{
		name:String,
		age:Number,
		sex:String
	} */

	// 接受数据类型限制、默认值指定、必须传值
	props: {
		name: {
			type: String,	 // 传参类型
			required: true, // 必须传值
		},
		age: {
			type: Number,
			default: 99,  // 默认值
		},
		sex: {
			type: String,
			required: true,
		},
	},
	methods: {
		add () {
			this.age2++
		},
	},
};
</script>

