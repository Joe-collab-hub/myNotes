<!--
  ~ Time:2022/4/10 16:34 41
  ~ Name:MyHeader.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
	</div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
	name: 'MyHeader',
	data () {
		return {
			title: '',
		};
	},
	// props: ['receiver'],
	methods: {
		add () {
			if (!this.title.trim()) return alert('输入不能为空！！！');
			const todoObj = {
				id: nanoid(),
				title: this.title,
				done: false,
			};
			// this.receiver(todoObj);
			this.$emit('addTodo', todoObj);
			this.title = '';
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

// -------MyHeader----------

/* header */

.todo-header input {
	width: 560px;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;

	&:focus {
		outline: none;
		border-color: #00FFFF;
		box-shadow: inset 0 1px 1px #00F7DE, 0 0 8px #00FFFF;
	}
}

</style>
