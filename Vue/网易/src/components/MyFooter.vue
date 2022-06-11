<!--
  ~ Time:2022/4/19 16:33 50
  ~ Name:MyFooter.vue
  ~ Path:src/components
  ~ ProjectName:网易
  ~ Author:突然
  ~
  ~  Il n'ya qu'un héroïsme au monde : c'est de voir le monde tel qu'il est et de l'aimer.
  -->

<template>
	<div id="MyFooter">
		<div class="box">
			<div class="left">
				<ul>
					<li><a href="#">服务条款</a></li>
					<li>|</li>
					<li><a href="#">隐私政策</a></li>
					<li>|</li>
					<li><a href="#">儿童隐私政策</a></li>
					<li>|</li>
					<li><a href="#">版权投诉</a></li>
					<li>|</li>
					<li><a href="#">投资者关系</a></li>
					<li>|</li>
					<li><a href="#">广告合作</a></li>
					<li>|</li>
					<li><a href="#">廉政举报</a></li>
					<li>|</li>
					<li><a href="#">联系我们</a></li>
				</ul>
				<p>网易公司版权所有©1997-2022杭州乐读科技有限公司运营：<a href="#">浙网文[2021] 1186-054号</a></p>
				<div>
					<a href="#">粤B2-20090191-18 工业和信息化部备案管理系统网站 </a>
					<span></span>
					<a href="#"> 浙公网安备 33010902002564号</a>
				</div>
			</div>
			<div class="right">
				<ul>
					<li>
						<div></div>
						<p></p>
					</li>
					<li>
						<div></div>
						<p></p>
					</li>
					<li>
						<div></div>
						<p></p>
					</li>
					<li>
						<div></div>
						<p></p>
					</li>
					<li>
						<div></div>
						<p></p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MyFooter',
	data () {
		return {};
	},
	components: {},
};
</script>

<style scoped lang="less">

// -------MyFooter----------
#MyFooter {
	width: 100%;
	border-top: 1px solid #e5e5e5;
	background-color: #f2f2f2;
	padding: 50px 0;

	.box {
		display: flex;
		width: 982px;
		font-size: 12px;
		margin: auto;
		justify-content: space-between;

		.left {
			width: 522px;
			line-height: 20px;


			ul {
				width: 100%;
				display: flex;
				justify-content: space-between;

				li {
					color: #999;

					a {
						color: #999;

						&:hover {
							text-decoration: underline;
						}
					}

				}
			}

			p {
				color: #666;

				a {
					color: #666;

					&:hover {
						text-decoration: underline;
					}
				}
			}

			div {
				width: 100%;
				display: flex;

				a {
					color: #666;

					&:hover {
						text-decoration: underline;
					}
				}

				span {
					margin-left: 15px;
					display: inline-block;
					width: 15px;
					height: 15px;
					background: url("../assets/police.png") no-repeat;
					background-size: 100% 100%;
					margin-top: 3px;
				}
			}
		}

		.right {
			width: 420px;

			ul {
				width: 100%;
				display: flex;
				justify-content: space-between;

				li {
					width: 20%;
					text-align: center;

					div {
						width: 50px;
						height: 50px;
						margin: auto;
					}
					p{
						height: 20px;
						display: inline-block;
						margin-top: 10px;
					}

				}

				li:nth-child(1) {
					div {
						background: url('../assets/foot_enter_new.png') no-repeat -68px -512.5px;
						background-size: 118px 619px;
					}

					p {
						width: 75px;
						background: url('../assets/foot_enter_tt.png') no-repeat -1px -135px;
						background-size: 192.6px 173px;
					}
				}

				li:nth-child(2) {
					div {
						background: url('../assets/foot_enter_new.png') no-repeat -68px -113.6px;
						background-size: 118px 619px;
					}

					p {
						width: 46px;
						background: url('../assets/foot_enter_tt.png') no-repeat -5px -113px;
						background-size: 192.6px 173px;
					}
				}

				li:nth-child(3) {
					div {

						background: url('../assets/foot_enter_new.png') no-repeat 0 0;
						background-size: 118px 619px;
					}

					p {
						width: 55px;
						background: url('../assets/foot_enter_tt.png') no-repeat 0 0;
						background-size: 192.6px 173px;
					}
				}

				li:nth-child(4) {
					div {
						background: url('../assets/foot_enter_new.png') no-repeat -68px -56.8px;
						background-size: 118px 619px;
					}

					p {
						width: 20px;
						background: url('../assets/foot_enter_tt.png') no-repeat -17px -68px;
						background-size: 192.6px 173px;
					}
				}

				li:nth-child(5) {
					div {
						background: url('../assets/foot_enter_new.png') no-repeat 0 -113.6px;
						background-size: 118px 619px;
					}

					p {
						width: 46px;
						background: url('../assets/foot_enter_tt.png') no-repeat -5px -91px;
						background-size: 192.6px 173px;
					}
				}
			}
		}
	}
}
</style>
