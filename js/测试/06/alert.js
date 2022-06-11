/**
 * Time:2022/2/22 14:14 28
 * Name:alert.js
 * Path:js/测试/06
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */

function Alert (options,closeFn) {
	// 通常情况下，在创建这个对象时会在构造函数的配置上默认值
	const initOption = {
		title: ' ',
		text: ' ',
		which: 300,
		height: 200,
	};
	if (typeof options === 'string') {
		initOption.text = options;
	}
	
	// 将独立的属性储存在 this 对象上
	this.options = options;
	
	// 初始化一个变量储存弹窗出层分jquery对象
	this.alertRoot = null;
	
	// 储存关闭监听器
	this.closeFn = closeFn
}

// 将公用的属性储存在原型上
Alert.prototype.show = function () {
	// 判断当前是否拥有元素，如果没有，则创建，有的话则显示
	if (this.alertRoot === null) {
		
		this.init();
		
	} else {
		
		this.alertRoot.css('display', 'block');
	}
};
Alert.prototype.hide = function () {
	this.alertRoot.css('display', 'none');
};
// 初始化
Alert.prototype.init = function () {
	this.alertRoot = $(`<div class="alert-root">
	<div class="alert-box">
		<div class="alert-title">
			${this.options.title}
			<a href="#">x</a>
		</div>
		<div class="alert-content">
			${this.options.text}
		</div>
	</div>
</div>`);
	
	$('body').append(this.alertRoot);
	
	// $('a',this.alertRoot).click (this.hide)
	// 这种写法绑定的事件，函数中的this指向出发的元素，因此需要绑定bind修改一下this的指向
	
	$('a', this.alertRoot).click(this.hide.bind(this));
	$('.alert-box', this.alertRoot).css({
		width: this.options.which,
		height: this.options.height,
	});
};
