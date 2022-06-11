/**
 * Time:2022/3/22 13:00 32
 * Name:店铺.js
 * Path:html5/饿了么/js
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

window.onload = function () {
	console.log(980);
	console.log($('header').css('height'));
	$(window).scroll(function () {
		let $scroll = $(document).scrollTop();
		if ($scroll >= parseInt($('header').css('height'))){
			$('#z').css({
				backgroundColor:'#fff'
			})
			$('#search').css({
				background: "url('./img/TB1zl0dfCR26e4jSZFEXXbwuXXa-60-66.png') no-repeat",
				backgroundSize:'100% 100%'
			})
			$('#return>a>img').attr('src','./img/fanhuijiantou-1.png')
			$('#attention').css({
				color:'#000',
				background: "url('./img/O1CN01EUsXdn1UiP2jjFnXS_!!6000000002551-2-tps-84-84.png') no-repeat",
				backgroundSize:' 50% 100%'
			})
		} else {
			$('#z').css({
				backgroundColor:'transparent',
			})
			$('#search').css({
				background: "url('./img/O1CN01ksp9qw27FKvCQl3Ap_!!6000000007767-2-tps-84-84.png') no-repeat",
				backgroundSize:'100% 100%'
			})
			$('#return>a>img').attr('src','./img/fanhuijiantou.png')
			
			$('#attention').css({
				color:'#fff',
				background: "url('./img/O1CN01cKdTIN1EwZRT7eWAt_!!6000000000416-2-tps-84-84.png') no-repeat",
				backgroundSize:' 50% 100%'
				
			})
		}
	});
}
