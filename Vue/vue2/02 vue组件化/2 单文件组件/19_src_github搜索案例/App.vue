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
	<div class="container">
		<Section/>
		<List/>
	</div>
</template>

<script>
import Section from '@/components/Section';
import List from '@/components/List';

export default {
	name: 'App',
	data () {
		return {};
	},
	components: {
		Section,
		List,
	},
};
</script>
<style>
.album {
	min-height: 50rem; /* Can be removed; just added for demo purposes */
	padding-top: 3rem;
	padding-bottom: 3rem;
	background-color: #f7f7f7;
}

.card {
	float: left;
	width: 33.333%;
	padding: .75rem;
	margin-bottom: 2rem;
	border: 1px solid #efefef;
	text-align: center;
}

.card > img {
	margin-bottom: .75rem;
	border-radius: 100px;
}

.card-text {
	font-size: 85%;
}

</style>
