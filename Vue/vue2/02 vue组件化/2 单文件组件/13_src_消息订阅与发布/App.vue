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
		<School/>
		<hr>
		<Student/>
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
};
</script>
<style>

</style>

