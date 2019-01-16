<template>
	<div id="head-main">
		<div id="header">
			<div class="menu" @click="showModal">
				<img src="../assets/img/line.png" alt="">
			</div>
			<div class="head-title">
				<p>阿萨西</p>
			</div>
			<div class="right-icon">
				<img src="../assets/img/mine.png" alt="" @click="goPerson">
				<img src="../assets/img/cart.png" alt="" @click="goCart">
			</div>
		</div>
		<div id="menu-main" v-show="modal">
			<div class="menu-left">
				<el-collapse v-model="activeName" accordion>
					<div class="left-btn" @click="goMain">
						首页
					</div>
					<div class="left-btn" @click="goRecommend">
						推荐专栏
					</div>
					<el-collapse-item title="明星产品" name="1">
						<div class="menu-conet">
							<p>0秒活力锅</p>
							<p>全能平底锅</p>
							<p>梦幻公主锅</p>
							<p>天使锅</p>
						</div>
					</el-collapse-item>
					<el-collapse-item title="料理教室" name="2">
						<div class="menu-conet">
							<p>0秒活力锅</p>
							<p>全能平底锅</p>
						</div>
					</el-collapse-item>
					<div class="left-btn" @click="goShare">
						使用者分享
					</div>
					<el-collapse-item title="关于我们" name="3">
						<div class="menu-conet">
							<p>公司简介</p>
							<p>公司概要</p>
							<p>历史事件</p>
							<p>新闻中心</p>
							<p>联系我们</p>
						</div>
					</el-collapse-item>
					<el-collapse-item title="我要购买" name="4">
						<div class="menu-conet">
							<p>0秒活力锅</p>
							<p>全能平底锅</p>
							<p>梦幻公主锅</p>
							<p>天使锅</p>
							<p>工具</p>
						</div>
					</el-collapse-item>
				</el-collapse>
			</div>
			<div class="menu-right">
				<p class="cancel" @click="cancelModal">
					x
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modal: false,
				activeName: ''
			};
		},
		methods: {
			showModal() {
				this.modal = true;
			},
			cancelModal() {
				this.modal = false;
			},
			goMain(){
				this.$router.push({
					name: 'Main',
					params: {}
				})
			},
			goPerson(){
				this.$router.push({
					name: 'Person',
					params: {}
				})
			},
			goCart(){
				this.$router.push({
					name: 'Cart',
					params: {}
				})
			},
			goRecommend(){
				this.$router.push({
					name: 'Recommend',
					params: {}
				})
			},
			goShare(){
				this.$router.push({
					name: 'Share',
					params: {}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	#head-main {
		width: 100%;

		#header {
			width: 92%;
			height: 2.8125rem;
			padding: 0 4%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			background-color: #fff;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;

			div.menu {
				width: 16%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				cursor: pointer;

				img {
					width: 40%;
				}
			}

			div.head-title {
				flex: 1;

				p {
					width: 100%;
					text-align: center;
				}
			}

			div.right-icon {
				width: 16%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				img {
					width: 33%;
				}
			}
		}

		#menu-main {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			z-index: 11;
			display: flex;
			flex-direction: row;

			div.menu-left {
				width: 84%;
				background-color: #852833;
			}

			div.menu-right {
				width: 16%;
				background-color: rgba(133, 40, 51, .8);
				display: flex;
				flex-direction: row;
				justify-content: center;

				p {
					color: #FFFFFF;
					font-size: 2.125rem;
					cursor: pointer;
				}
			}
		}
	}
	.left-btn{
		width: 96%;
		padding-left:4%;
		height: 48px;
		line-height: 48px;
		color: #FFFFFF;
		font-size: 18px;
		border-bottom: 1px solid #ebeef5;
		cursor: pointer;
	}
	div.menu-conet{
		width: 96%;
		padding-left: 4%;
		display: flex;
		flex-direction: column;
		p{
			color: #E3C8CB;
			cursor: pointer;
			font-size: 0.875rem;
		}
	}
</style>
