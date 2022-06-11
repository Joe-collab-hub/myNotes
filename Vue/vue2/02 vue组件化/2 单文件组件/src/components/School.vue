<!--
  ~ Time:2022/4/9 10:42 57
  ~ Name:School.vue
  ~ Path:Vue/02 vue组件化/02 单文件组件
  ~ ProjectName:前端
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="School">
		<h2>学校名称：{{ name }}</h2>
		<h2>学校地址：{{ address }}</h2>
		<button @click="add">er456</button>
	</div>
</template>

<script>
window.name = '132'
export default {
	name: 'School',
	data () {
		return {
			name: '尚硅谷',
			address: '北京昌平',
		};
	},
	methods:{
		add(){
			this.$bus.$emit('hello', 'this.name',1,34,45,45);
		}
	},
	mounted () {
		this.$bus.$on('hello',  (data)=> {
			console.log('我是School组件，收到的数据', data);
			console.log(this);
			console.log(this.name);

		});
		this.$bus.$on('hello',  (a,b,c)=> {
			console.log(a+b+c);
			console.log(a,b,c);

		});
		this.$bus.$on('hello',  ()=> {
			console.log('dsfdsf');

		});
		// window.name = "测试"
		// eventBus.on('login', function (data) {
		// 	console.log('登录成功')
		// 	console.log(data)
		// 	console.log(this.name);
		// })
		// eventBus.emit('login', '张三')
	},
	beforeDestroy () {
		this.$bus.$off('hello');
	},
};
</script>
<style lang="less" scoped>
#School {
	background-color: #00FFFF;
}
</style>
