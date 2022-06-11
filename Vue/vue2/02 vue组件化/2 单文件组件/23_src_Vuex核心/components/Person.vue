<!--
  ~ Time:2022/4/14 17:04 15
  ~ Name:Person.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Person">
		<h1>人员列表</h1>
		<h3 style="color: red">Count组件求和值：{{ sum }}</h3>
		<h3 style="color: red">列表中第一个人的名字是：{{ firstPersonName }}</h3>
		<input type="text" v-model="name" placeholder="请输入要添加人的姓名">
		<button @click="add">添加</button>
		<button @click="addWang">添加一个性王的人</button>
		<button @click="add2">添加随机人</button>
		<ul>
			<li v-for="p in personList" :key="p.id">{{ p.name }}</li>
		</ul>
	</div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
	name: 'Person',
	data () {
		return {
			name: '',
		};
	},
	components: {},
	computed: {
		personList () {
			return this.$store.state.personOptions.personList;
		},
		sum () {
			return this.$store.state.countOptions.sum;
		},
		firstPersonName () {
			return this.$store.getters['personOptions/firstPersonName'];
		},
	},
	methods: {
		add () {
			const personObj = { id: nanoid(), name: this.name };
			this.$store.commit('personOptions/ADD_PERSON', personObj);
			this.name = '';

		},
		addWang () {
			const personObj = { id: nanoid(), name: this.name };
			this.$store.dispatch('personOptions/addPersonWang', personObj);
			this.name = '';
		},
		add2 () {
			this.$store.dispatch('personOptions/addPersonServer');
		},
	},

};
</script>

<style scoped lang="less">
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}

// -------Person----------
#Person {

}
</style>
