<!--
  ~ Time:2022/4/9 16:35 57
  ~ Name:App.vue
  ~ Path:src
  ~ ProjectName:zxc
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="App">
		<h1>你好啊！学生姓名:{{ studentName }}</h1>
		<!--		通过父组件给子组件传递函数类型的props实现：子给父组件传递函数-->
		<School :getSchoolName="getSchoolName"/>
		<hr>
		<!--		通过父组件给子组件绑定一个自定义事件实现：子给父组件传递函数 （第一种写法，使用 @ 或 v-on）-->
		<Student v-on:dom="getStudentName" @demo="m1"/>
		<!--		<Student v-on:dom.once="getStudentName"/> 一次性 -->
		<!--		通过父组件给子组件绑定一个自定义事件实现：子给父组件传递函数 （第二种写法，使用 ref ）-->
		<Student ref="student" @click.native="show"/>
	</div>
</template>

<script>

import School from '@/components/School';
import Student from '@/components/Student';

export default {
	name: 'App',
	data () {
		return {
			name: 'Vue',
			studentName: '',
		};
	},
	components: {
		Student,
		School,
	},
	methods: {
		getSchoolName (name) {
			console.log(name);
		},
		getStudentName (name, ...params) {
			console.log(name, params);
			this.studentName = name;
		},
		m1 () {
			// console.log(56789);
		},
		show () {
			alert(123);
		},
	},
	mounted () {
		this.$refs.student.$on('dom', (name, ...params) => {
			console.log(name, params);
			this.studentName = name;
		}); // 绑定自定义事件
		// this.$refs.student.$once('dom', this.getStudentName);  // 绑定自定义事件（一次性）
	},
};
</script>
<style>

</style>

