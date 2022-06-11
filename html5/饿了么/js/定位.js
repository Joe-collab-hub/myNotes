/**
 * Time:2022/3/18 15:31 35
 * Name:定位.js
 * Path:html5/饿了么/js
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

window.onload = function () {
	var option = {
		enableHighAccuracy: true,
		maximumAge: 0,
		timeout: 100,
	};
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError, option);
	}
	
	function showPosition (position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		console.log('维度' + lat + ',精度' + lon);
	}
	
	function showError (error) {
		switch (error.code) {
			case error.PERMISSION_DENIED:
				alert('拒绝');
				break;
			case error.POSITION_UNAVAILABLE:
				alert('无法获取');
				break;
			case error.TIMEOUT:
				alert('超市');
		}
	}
};
