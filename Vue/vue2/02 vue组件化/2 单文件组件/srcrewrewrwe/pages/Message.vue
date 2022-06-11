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
			<li v-for="m in messageList" :key="m.id">
				<!-- 跳转路由并携带query参数，to为字符串 -->
				<!-- <router-link :to='`/home/message/detail?id=${m.id}&title=${m.title}`'>{{ m.title }}</router-link>&nbsp;&nbsp;-->
				<!-- 跳转路由并携带query参数，to为对象 -->
				<router-link
					:to="{
						// path:'/home/message/detail',
						name:'xiangqing',
						query:{
							id:m.id,
							title:m.title
						}
					}"
				>
					{{ m.title }}
				</router-link>&nbsp;&nbsp;
			</li>
		</ul>
		<router-view></router-view>
	</div>

</template>

<script>
export default {
	name: 'Message',
	data () {
		return {
			messageList: [
				{ id: '001', title: '消息001' },
				{ id: '002', title: '消息002' },
				{ id: '003', title: '消息003' },
			],
		};
	},
	components: {},
};
</script>

