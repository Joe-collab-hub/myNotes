<!--
  ~ Time:2022/4/10 16:35 49
  ~ Name:MyItem.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template xmlns="">
	<li>
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
			<!--	如下代码也能实现功能，但是不太推荐，因为有点违法原则，修改了props		-->
			<!--			<input type="checkbox" v-model="todo.done">-->
			<span>{{ todo.title }}</span>
		</label>
		<button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
	</li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
	name: 'MyItem',
	data () {
		return {};
	},
	props: ['todo', 'checkTodo',"deleteTodo"],
	methods: {
		handleCheck (id) {
			// 通知App组件将对应的todo对象的done取反
			this.$bus.$emit('checkTodo',id)
		},
		handleDelete(id){
			if (confirm("确定删除吗？")){
				// this.$bus.$emit('deleteTodo',id)
				pubsub.publish('demo',id)
			}
		}
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

// -------MyItem----------

/* item */

li {
	list-style: none;
	height: 36px;
	line-height: 36px;
	padding: 0 5px;
	border-bottom: 1px solid #ddd;

	label input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	label {
		float: left;
		cursor: pointer;
	}

	button {
		float: right;
		display: none;
		margin-top: 3px;

		&:before {
			content: initial;
		}
	}

	&:last-child {
		border-bottom: none;
	}

	&:hover {
		background-color: #ddd;

		button {
			display: block;
		}
	}
}
</style>
