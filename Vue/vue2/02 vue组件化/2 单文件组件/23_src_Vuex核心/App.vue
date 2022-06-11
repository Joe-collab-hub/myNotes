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

		<Count/>
		<hr>
		<Person/>
	</div>

</template>

<script>
import Count from '@/components/Count';
import Person from '@/components/Person';

export default {
	name: 'App',
	data () {
		return {};
	},
	components: { Count,
		Person
	},
	methods: {},
};
</script>
<style lang="less" scoped>
</style>
