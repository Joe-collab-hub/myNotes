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
		<Test/>
		<Test2/>
		<Test3/>
	</div>
</template>

<script>
import Test from '@/components/Test';
import Test2 from '@/components/Test2';
import Test3 from '@/components/Test3';

export default {
	name: 'App',
	data () {
		return {};
	},
	components: {
		Test,
		Test2,
		Test3,
	},
};
</script>
<style>
</style>
