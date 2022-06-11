<template>
	<h1>我是App组件</h1>
	<hr>
	<Demo/>
</template>

<script>
import Demo from '@/components/Demo';

export default {
	name: 'App',
	components: {
		Demo,
	},
};
</script>

<style>
</style>
