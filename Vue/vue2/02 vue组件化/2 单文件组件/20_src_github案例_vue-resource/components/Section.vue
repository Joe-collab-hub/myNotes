<!--
  ~ Time:2022/4/13 11:35 41
  ~ Name:Section.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/20_src_请求/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model='keyWord'/>&nbsp;
			<button @click="searchUsers">Search</button>
		</div>
	</section>
</template>

<script>
import axios from 'axios';


export default {
	name: 'Section',
	data () {
		return {
			keyWord: '',
		};
	},
	components: {},
	methods: {
		searchUsers () {
			this.$bus.$emit('updateListData', {
				isFirst: false,
				isLoading: true,
				errMsg: '',
				users: [],
			});
			this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
				response => {
					console.log('请求成功了', response.data.items);
					this.$bus.$emit('updateListData', {
						isLoading: false,
						errMsg: '',
						users: response.data.items,
					});
				},
				error => {
					console.log('请求失败了', error.message);
					this.$bus.$emit('updateListData', {
						isLoading: false,
						errMsg: error.message,
						users: [],
					});
				},
			);
		},
	},
};
</script>


