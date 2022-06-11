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
		<h1 ref="title">你好啊：{{name}}</h1>
		<hr>
		<button ref="bun" @click="showDom">点我输出上方的Dom</button>
		<School ref="box"/>
	</div>
</template>

<script>

import Student from '@/components/Student';
import School from '@/components/School';
export default {
	name: 'App',
	data () {
		return {
			name:'Vue'
		};
	},
	components: {
		Student,
		School
	},
	methods:{
		showDom(){
			console.log(this);
			this.$refs.title.style.color = 'aqua'
		}
	}
};
</script>
<style>
button{
	margin: 20px;
}
</style>
