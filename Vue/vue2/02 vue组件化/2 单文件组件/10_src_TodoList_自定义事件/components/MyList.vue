<!--
  ~ Time:2022/4/10 16:35 18
  ~ Name:MyList.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<ul class="todo-main">
		<MyItem
			v-for="todo in todos"
			:key="todo.id"
			:todo="todo"
			:checkTodo="checkTodo"
			:deleteTodo="deleteTodo"
		/>
	</ul>
</template>

<script>
import MyItem from '@/components/MyItem';

export default {
	name: 'MyList',
	props: ['todos', 'checkTodo', 'deleteTodo'],
	components: {
		MyItem,
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

// -------MyList----------

/* main */
.todo-main {
	margin-left: 0;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding: 0;
}

.todo-empty {
	height: 40px;
	line-height: 40px;
	border: 1px solid #ddd;
	border-radius: 2px;
	padding-left: 5px;
	margin-top: 10px;
}

</style>
