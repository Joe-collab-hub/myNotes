/**
 * Time:2022/3/21 18:48 35
 * Name:渲染.js
 * Path:html5/饿了么/js
 * ProjectName:前端
 * Author:突然
 *
 *  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
 */
function fun(data) {
	let a = ''
	for (let i = 0;i<data.length;i++){
		if (i>2){
			a += data[i];
		}
	}
	return a
}

	function fun1(myData) {
		$('nav>#m>h3').text(myData.storeInfo.name);
		let a = myData.storeInfo.deliveryTag.text;
		for (let i = 0; i < myData.storeInfo.serviceDesc.length; i++) {
			a += ' ' + myData.storeInfo.serviceDesc[i];
		}
		$('nav>#m>p').text(a);
		$('nav>img').attr('src','img/'+fun(myData.storeInfo.storeLogo)+".png")
		$('nav>p').text(myData.storeInfo.announcement);
		$('#threshold>p').text('￥' + myData.storePromotionInfo.storeCouponInfo[0].amount + myData.storePromotionInfo.storeCouponInfo[0].titleDetail);
		$('#threshold>div').text(myData.storePromotionInfo.storeCouponInfo[0].acceptText);
		let ul = $('<ul></ul>')
		for (let j = 0; j<myData.storePromotionInfo.storeActivityTags.length;j++){
			ul.append(`<li>${myData.storePromotionInfo.storeActivityTags[j].text}</li>`)
		}
		$('nav').append(ul)
		$('nav').append(`<span>${myData.storePromotionInfo.action}</span>`)
	}

function fun2(myData) {
	let classify = $('<ul id="classify"></ul>')
	let commodity = $('<ul id="commodity"></ul>')
	for (let i = 0;i<myData.length;i++){
		let li1 = $(`<li>
										<div>
											<img src="${myData[i].iconUrl}" alt="">
											<span>${myData[i].name}</span>
										</div>
									</li>`)
		let li2 = $('<li></li>')
		for (let j = 0; j <myData[i].items.length ; j++) {
			let data = myData[i].items[j]
			// console.log(myData[i].items[j]);
			if (j===0){
				li2.append(`
						<div class="one">
							<h3>${data.name}</h3>
							<span>${data.description}</span>
						</div>
					`)
			} else {
				li2.append(`
					<div class="specimen">
						<img src= 'img/${fun(data.imageHash)}.png' alt="">
						<div class="introduce">
							<h4>${data.name}</h4>
							<div>
								<p></p>
								<p>${data.description}</p>
								<p>${data.tipTextList}</p>
							</div>
							<div>
								<p class="price">￥<span>${data.price}</span> ${data.pricePostfix}</p>
								<div>选规格</div>
							</div>
						</div>
					</div>
					`)
			}
			
		}
		classify.append(li1)
		commodity.append(li2)
	}
	$('main').append(classify)
	$('main').append(commodity)
}
