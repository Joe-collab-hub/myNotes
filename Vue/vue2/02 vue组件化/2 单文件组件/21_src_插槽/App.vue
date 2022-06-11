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
		<!--	默认插槽、具名插槽	-->
		<!--		<Category title="美食">
					<img slot="center" src="https://img.zcool.cn/community/01576557fb41bba84a0d304fd0bbbc.JPG@1280w_1l_2o_100sh.jpg" alt="">
				</Category>
				<Category title="游戏">
					<ul slot="center">
						<li v-for="(time,index) in games" :key="index">{{ time }}</li>
					</ul>
					<div class="foot" slot="footer">
						<a href="https://baidu.com">单机游戏</a>
						<a href="https://baidu.com">联机游戏</a>
					</div>
				</Category>
				<Category title="电影">
					<ul slot="center">
						<li v-for="(time,index) in films" :key="index">{{ time }}</li>
					</ul>
					<template v-slot:footer>
						<div class="foot" slot="footer">
							<a href="https://baidu.com">经典</a>
							<a href="https://baidu.com">热门</a>
							<a href="https://baidu.com">推荐</a>
						</div>
						<h2>欢迎来到观影</h2>
					</template>
				</Category>-->

		<!--	作用域插槽	-->
		<Category title="游戏">
			<template scope="games">
				<!--				{{games}}-->
				<ul slot="center">
					<li v-for="(time,index) in games.games" :key="index">{{ time }}</li>
				</ul>
			</template>
		</Category>
		<Category title="游戏">
			<template scope="{games}">
				<ol slot="center">
					<li style="color: red" v-for="(time,index) in games" :key="index">{{ time }}</li>
				</ol>
			</template>
		</Category>
		<Category title="游戏">
			<template slot-scope="{games}">
				<h4 v-for="(time,index) in games" :key="index">{{ time }}</h4>
			</template>
		</Category>
	</div>
</template>

<script>
import Category from '@/components/Category';

export default {
	name: 'App',
	data () {
		return {
			/* foods: ['火锅', '烧烤', '小龙虾', '牛排'],
			games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
			films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'], */
		};
	},
	components: { Category },
	methods: {},
};
</script>
<style lang="less" scoped>
#App, .foot {
	display: flex;
	justify-content: space-between;
}
</style>
