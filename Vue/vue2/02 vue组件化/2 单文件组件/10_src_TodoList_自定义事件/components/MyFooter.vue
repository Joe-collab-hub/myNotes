<!--
  ~ Time:2022/4/10 16:36 41
  ~ Name:MyFooter.vue
  ~ Path:Vue/02 vue组件化/2 单文件组件/src/components
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div class="todo-footer" v-show="total">
		<label>
			<!--			<input type="checkbox" :checked="isAll" @change="checkAll">-->
			<input type="checkbox" v-model="isAll">
		</label>
		<span>已完成 {{ doneTotal }}</span>
		<span> / 全部 {{ total }}</span>
		<button class="btn btn-danger" @click="clickAll">清除已完成任务</button>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	data () {
		return {};
	},
	props: ['todos', 'checkAllTodo'],
	computed: {
		total () {
			return this.todos.length;
		},
		doneTotal () {
			/* const x = this.todos.reduce((per, current) => {
				console.log(per, current);
				return per + (current.done ? 1 : 0);
			}); */

			return this.todos.reduce((per, current) => per + (current.done ? 1 : 0), 0);
		},
		isAll: {
			get () {
				console.log(7);
				return this.doneTotal === this.total && this.total > 0;
			},
			set (value) {
				// this.checkAllTodo(value);
				this.$emit('checkAllTodo', value)
			},
		},

	},
	methods: {
		checkAll (e) {
			// this.checkAllTodo(e.target.checked)
			// this.$emit('checkAllTodo', e.target.checked)
		},
		clickAll () {
			// this.clearAllTodo();
			this.$emit('clearAllTodo');
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

// -------MyFooter----------

/* footer */

.todo-footer {
	height: 40px;
	line-height: 40px;
	padding-left: 6px;
	margin-top: 5px;

	label {
		display: inline-block;
		margin-right: 20px;
		cursor: pointer;

		input {
			position: relative;
			top: -1px;
			vertical-align: middle;
			margin-right: 5px;
		}
	}

	button {
		float: right;
		margin-top: 5px;
	}
}

</style>
