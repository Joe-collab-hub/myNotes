<!--
  ~ Time:2022/4/15 13:34 52
  ~ Name:Message.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/pages
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div>
		<ul>
			<li>
				<a href="/message1">message001</a>&nbsp;&nbsp;
			</li>
			<li>
				<a href="/message2">message002</a>&nbsp;&nbsp;
			</li>
			<li>
				<a href="/message/3">message003</a>&nbsp;&nbsp;
			</li>
		</ul>
	</div>

</template>

<script>
export default {
	name: 'Message',
	data () {
		return {};
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

// -------Message----------
#Message {

}
</style>
