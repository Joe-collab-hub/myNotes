<!--
  ~ Time:2022/4/13 13:11 48
  ~ Name:Category.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="Count">
		<h1>当前的值是：{{ sum }}</h1>
		<h3>当前的值放大10倍是：{{ bigSum }}</h3>
		<h3>学校：{{ school }}</h3>
		<h3>学习：{{ subject }}</h3>
		<h3 style="color: red">下边组件的总人数是：{{ personList.length }}</h3>
		<br>
		<select v-model.number="n">
			<option :value="1">1</option>
			<option :value="2">2</option>
			<option :value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等在加</button>

	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
	name: 'Count',
	data () {
		return {
			n: 1,
		};
	},
	computed: {
		// 借助mapState生成的计算属性，从state中读取数据（对象写法）
		// ...mapState({ he: 'sum', xuexiao: 'school', xueke: 'subject' }),
		// 借助mapState生成的计算属性，从state中读取数据（数组写法）
		...mapState('countOptions', ['sum', 'school', 'subject']),
		...mapState('personOptions', ['personList']),

		/* ********************************************* */

		// 借助mapGetters生成的计算属性，从state中读取数据（对象写法）
		// ...mapGetters({ bei:'bigSum' }),
		// 借助mapGetters生成的计算属性，从Getters中读取数据（数组写法）
		...mapGetters('countOptions', ['bigSum']),
	},
	methods: {

		// 靠mapMutations生成，incrementOdd、incrementWait（对象写法）
		...mapMutations('countOptions', { increment: 'JIA', decrement: 'JIAN' }),
		// 靠mapMutations生成，incrementOdd、incrementWait（数组写法）
		// ...mapMutations(['JIA', 'JIAN']),

		/* ***************************** */
		// 靠mapActions生成，incrementOdd、incrementWait（对象写法）
		...mapActions('countOptions', { incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),
		// 靠mapActions生成，incrementOdd、incrementWait（数组写法）

		// ...mapActions(['jiaOdd', 'jiaWait']),
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

// -------Category----------
#Count {
	button {
		margin: 5px;
		padding: 5px;
	}
}
</style>
