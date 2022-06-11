<!--
  ~ Time:2022/4/15 13:34 41
  ~ Name:News.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/pages
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<ul>
		<li :style="{opacity}">欢迎来到Vue</li>
		<li>news001</li>
		<li>news002</li>
		<li>news003</li>
	</ul>
</template>

<script>
export default {
	name: 'News',
	data () {
		return {
			opacity: 1,
		};
	},
	components: {},
	/* mounted () {

	},
	beforeDestroy () {
		clearInterval(this.timer);
	}, */

	activated () {
		this.timer = setInterval(() => {
			this.opacity -= 0.01;
			if (this.opacity <= 0) this.opacity = 1;
		}, 16);
	},
	deactivated () {
		clearInterval(this.timer);
	}
};
</script>

