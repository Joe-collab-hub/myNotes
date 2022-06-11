<template>
	<div id="App">
		<MyHeader/>
		<router-view></router-view>
		<MyFooter/>
	</div>
</template>

<script>
import MyHeader from './components/MyHeader';
import MyFooter from '@/components/MyFooter';

export default {
	name: 'App',
	components: {
		MyHeader,
		MyFooter,
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
</style>
