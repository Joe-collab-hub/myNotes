/**
 * Time:2022/4/20 11:42 12
 * Name:index.js
 * Path:src/router
 * ProjectName:网易
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

import VueRouter from 'vue-router';
import MyMain from '@/pages/MyMain';
import Leaderboard from '@/pages/Leaderboard';
import ChartSongs from "@/components/leaderboard/ChartSongs";

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: '发现音乐/推荐',
			component: MyMain,
		},
		{
			path: '/leaderboard',
			name: '排行榜',
			component: Leaderboard,
		},
	],
});
