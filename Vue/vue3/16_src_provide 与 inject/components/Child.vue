<!--
  ~ Time:2022/4/25 15:43 49
  ~ Name:Child.vue
  ~ Path:src/components
  ~ ProjectName:vue3
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Child">
		<h2>我是Child组件（子）</h2>
		<Son/>
	</div>
</template>

<script>
import Son from '@/components/Son';

export default {
	name: 'Child',
	components: {
		Son,
	},
};
</script>

<style scoped lang="less">


// -------Child----------
#Child {
	background-color: pink;
	padding: 10px;
}
</style>
