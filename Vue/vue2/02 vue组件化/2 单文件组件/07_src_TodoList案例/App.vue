<!--
  ~ Time:2022/4/9 16:35 57
  ~ Name:App.vue
  ~ Path:src
  ~ ProjectName:zxc
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="App">
		<div class="todo-container">
			<div class="todo-wrap">
				<MyHeader :receiver="addTodo"/>
				<MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
				<MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"/>
			</div>
		</div>
	</div>
</template>

<script>

import MyHeader from '@/components/MyHeader';
import MyList from '@/components/MyList';
import MyFooter from '@/components/MyFooter';

export default {
	name: 'App',
	data () {
		return {
			todos: [
				{ id: '001', title: '吃饭', done: true },
				{ id: '002', title: '睡觉', done: false },
				{ id: '003', title: '打豆豆', done: true },
			],
		};
	},
	components: {
		MyHeader,
		MyList,
		MyFooter,
	},
	methods: {

		// 添加一个todo
		addTodo (todoObj) {
			this.todos.unshift(todoObj);
		},

		// 勾选或取消一个todo
		checkTodo (id) {
			this.todos.forEach((todo) => {
				if (todo.id === id) todo.done = !todo.done;
			});
		},

		// 删除一个todo
		deleteTodo (id) {
			this.todos = this.todos.filter(todo => todo.id !== id);
		},

		// 全选或全不选
		checkAllTodo (done) {
			this.todos.forEach(todo => todo.done = done);
		},

		// 清除所有已完成的todos
		clearAllTodo () {
			this.todos = this.todos.filter((todo) => !todo.done);
		},
	},
};
</script>
<style>
/*base*/
body {
	background: #fff;
}

.btn {
	display: inline-block;
	padding: 4px 12px;
	margin-bottom: 0;
	font-size: 14px;
	line-height: 20px;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
}

.btn-danger {
	color: #fff;
	background-color: #da4f49;
	border: 1px solid #bd362f;
}

.btn-danger:hover {
	color: #fff;
	background-color: #bd362f;
}

.btn:focus {
	outline: none;
}

.todo-container {
	width: 600px;
	margin: 0;
}

.todo-container .todo-wrap {
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 5px;
}

</style>
