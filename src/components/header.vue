<template>
	<div id="head-main">
		<div id="header">
			<div class="menu" @click="showModal">
				<img src="../assets/img/line.png" alt="">
			</div>
			<div class="head-title">
				<p>阿莎希</p>
			</div>
			<div class="right-icon">
				<img src="../assets/img/mine.png" alt="" @click="goPerson">
				<img src="../assets/img/cart.png" alt="" @click="goCart">
			</div>
		</div>
		<div id="menu-main" v-show="modal">
			<div class="menu-left">
				
					<div class="choose-tap">
						<div @click="goMain">
							<p>首页</p>
						</div>
						<div @click="goRecommend">
							<p>推荐专栏</p>
						</div>
						<div>
							<p>明星产品</p>
							<div @click="showStartModal">
								<img src="../assets/img/add.png" alt="" v-show="!showStart">	
								<img src="../assets/img/dec.png" alt="" v-show="showStart">
							</div>
						</div>
						<transition name="red">
							<div class="menu-conet" v-show="showStart">
								<p @click="goStart">0秒活力锅</p>
								<p>全能平底锅</p>
								<p>梦幻公主锅</p>
								<p>天使锅</p>
							</div>
						</transition>
						
						<div>
							<p>料理教室</p>
							<div @click="showRoomModal">
								<img src="../assets/img/add.png" alt="" v-show="!showRoom">	
								<img src="../assets/img/dec.png" alt="" v-show="showRoom">
							</div>
						</div>
						<transition name="red">
							<div class="menu-conet" v-show="showRoom">
								<p @click="goRoom">0秒活力锅</p>
								<p @click="goRoom">全能平底锅</p>
							</div>
						</transition>
						
						<div @click="goShare">
							<p>使用者分享</p>
						</div>
						<div>
							<p>关于我们</p>
							<div @click="showAboutModal">
								<img src="../assets/img/add.png" alt="" v-show="!showAbout">	
								<img src="../assets/img/dec.png" alt="" v-show="showAbout">
							</div>
						</div>
						<transition name="red">
							<div class="menu-conet" v-show="showAbout">
								<p @click="goCompanyProfile">公司简介</p>
								<p @click="goCompanyIntroduction">公司概要</p>
								<p @click="goHistoricalEvents">历史事件</p>
								<p @click="goNewCenter">新闻中心</p>
								<p @click="goCallUs">联系我们</p>
							</div>
						</transition>
						<div>
							<p>我要购买</p>
							<div @click="showBuyModal">
								<img src="../assets/img/add.png" alt="" v-show="!showBuy">	
								<img src="../assets/img/dec.png" alt="" v-show="showBuy">
							</div>
						</div>
						<transition name="red">
							<div class="menu-conet" v-show="showBuy">
								<p @click="goStart">0秒活力锅</p>
								<p>全能平底锅</p>
								<p>梦幻公主锅</p>
								<p>天使锅</p>
							</div>
						</transition>
					</div>
				
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
				activeid:0,
				modal: false,
				activeName: '',
				showStart:false,
				showRoom:false,
				showAbout:false,
				showBuy:false
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
			goStart(){
				this.$router.push({
					name: 'StartProduct',
					params: {}
				})
			},
			goRoom(){
				this.$router.push({
					name: 'Room',
					params: {}
				})
			},
			goCompanyProfile(){
				this.$router.push({
					name: 'CompanyProfile',
					params: {}
				})
			},
			goCompanyIntroduction(){
				this.$router.push({
					name: 'CompanyIntroduction',
					params: {}
				})
			},
			goHistoricalEvents(){
				this.$router.push({
					name: 'HistoricalEvents',
					params: {}
				})
			},
			goNewCenter(){
				this.$router.push({
					name: 'NewCenter',
					params: {}
				})
			},
			goCallUs(){
				this.$router.push({
					name: 'CallUs',
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
			},
			showStartModal(){
				this.showStart=!this.showStart;
				this.showRoom=false;
				this.showAbout=false;
				this.showBuy=false;
			},
			showRoomModal(){
				this.showStart=false;
				this.showRoom=!this.showRoom;
				this.showAbout=false;
				this.showBuy=false;
			},
			showAboutModal(){
				this.showStart=false;
				this.showRoom=false;
				this.showAbout=!this.showAbout;
				this.showBuy=false;
			},
			showBuyModal(){
				this.showStart=false;
				this.showRoom=false;
				this.showAbout=false;
				this.showBuy=!this.showBuy;
			},
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
			z-index: 21;
			display: flex;
			flex-direction: row;

			div.menu-left {
				width: 84%;
				background-color: #852833;
				display: flex;
				flex-direction: column;
				overflow:auto;
				.choose-tap{
					width: 90%;
					padding:0 5%;
					div{
						width: 100%;
						border-bottom:0.0625rem solid #E8E8E8;
						padding-top:8%;
						padding-bottom: 5%;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						p{	
							font-size: 1.125rem;
							color: #FFFFFF;
							width: auto;
						}
						div{
							flex: 1;
							border: none;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: flex-end;
							padding:0 0;
							img{
								width: 1rem;
								height: 1rem;
							}
						}
					}
					div.menu-conet{
						width: 100%;
						display: flex;
						flex-direction: column;
						align-items: flex-start;
						border: none;
						margin-top: 0.8125rem;
						padding:0 0;
						transition:display linear .3s; 
						p{
							color: #E3C8CB;
							cursor: pointer;
							font-size: 0.875rem;
						}
						p:not(:last-child){
							margin-bottom: 1.0625rem;

						}
					}
					
				}
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
	.red{
    width: 100%;
    /*下面的样式可以不写，这里为了方便理解*/
    opacity: 1;
}
.red-enter{
    opacity: 0.3;
}
.red-enter-active,.red-leave-active{
    transition: all .5s linear;
}
.red-leave{
    /*对于简单动画来说，[name]-leave也可以不写，多数情况下，此处的样式和元素正常显示是的样式是相同的*/
    opacity: 0.5;
}
.red-leave-active{
    opacity: 1;
}
</style>
