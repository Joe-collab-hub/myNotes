<!--
  ~ Time:2022/4/13 11:36 30
  ~ Name:List.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/20_src_请求/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div class="row">
		<!--	展示用户列表	-->
		<div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.id">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style='width: 100px' alt=""/>
			</a>
			<p class="card-text">{{ user.login }}</p>
		</div>
		<!--	展示欢迎词	-->
		<h1 v-show="info.isFirst">欢迎使用</h1>
		<!--	展示加载中	-->
		<h1 v-show="info.isLoading">加载中....</h1>
		<!--	展示错误信息	-->
		<h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'List',
	data () {
		return {
			info: {
				isFirst: true,
				isLoading: false,
				errMsg: '',
				users: [],
			},

		};
	},
	components: {},
	mounted () {
		this.$bus.$on('updateListData', (dataObj) => {
			this.info = {...this.info,...dataObj}
		});
	},
	beforeDestroy () {

	},
};
</script>

