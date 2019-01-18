<template>
	<div id="main">
		<Header />
		<Menu></Menu>
		<div class="main conent">
			<div class="swiper-container" id="swiperContainer" style="width: 100%;">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
						<img class="bannerImg" src="../assets/img/banner.png" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination" id="swiper-pagination"></div>

				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev swiper-button-white"></div>-->
				<!--<div class="swiper-button-next swiper-button-white"></div>-->
			</div>
			<go-shop :list="potList">

			</go-shop>
			<p class="text-ch">推荐专栏</p>
			<p class="text-eh">Expert tips</p>
			<expert-tips :list="recommendList">

			</expert-tips>
			<div class="line">

			</div>
			<div class="discountCoupon-Bg">
				<img src="../assets/img/youhui1.png" alt="" style="margin-bottom: 0.625rem;">
				<img src="../assets/img/youhui2.png" alt="">
			</div>
			<p class="text-ch">关于我们</p>
			<p class="text-eh">About us</p>
			<div class="about-us-bg">
				<img src="../assets/img/abouus.png" alt="">
				<p>&nbsp;&nbsp;&nbsp;&nbsp;环保是现代人必须认真思考的一大课题。ASAHI轻金属工业在思考是否能对环保尽一份心力时，把提供高性能的调理器具以减少一般家庭的瓦斯费......</p>
				<p @click="goAbout">查看更多>></p>
			</div>
			<div class="line">

			</div>
			<p class="text-ch">菜谱</p>
			<p class="text-eh">Recipes</p>
			<recipes :list="recipesList"></recipes>
			<div class="line">

			</div>
			<p class="text-ch">使用心得</p>
			<p class="text-eh">Customer reviews</p>
			<div class="use-bg">
				<div class="use-list" v-for="(item,index) in recommendList" :key="index">
					<img src="../assets/img/girl.png" alt="">
					<div>
						<p>莊小如</p>
						<p>买了3L零秒活力锅，想不煮饭都难！锅身外型......</p>
					</div>
				</div>
			</div>
			<div class="line">

			</div>
			<p class="text-ch">新闻中心</p>
			<p class="text-eh">News center</p>
			<div class="media-bg">
				<div class="media-btn">
					<p :class="chooseId==0?'activeBtn':'chooseBtn'" @click="choosetype(0)">媒体报道</p>
					<p :class="chooseId==1?'activeBtn':'chooseBtn'" @click="choosetype(1)">最新消息</p>
				</div>
				<div class="media-list-bg">
					<div class="media-img">
						<img src="../assets/img/mediaBg.png" alt="">
						<div>
							<p>活力锅必买的3大好处</p>
							<p>因为用水量少、快速烹煮，所以美味都锁在食材里！只需用一杯......</p>
						</div>
					</div>
					<div class="information-list">
						<div class="information-bg" v-for="(item,index) in recommendList" :key="index">
							<p>&nbsp;&nbsp;2018-10-08</p>
							<p>【涨价公告】10/16起，朝日锅具将调整价格</p>
						</div>
					</div>
				</div>


			</div>
		</div>
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Header from '../components/header';
	import Bottom from '../components/bottom';
	import Menu from '../components/menu';
	export default {
		components: {
			Header,
			Bottom,
			Menu
		},
		data() {
			return {
				myTitle:'阿莎希官网',
				title:'活力锅',
				conent:'这是一家历史悠久的公司',
				chooseId: 0,
				selectedId: 0,
				items: [{
						label: '全部'
					},
					{
						label: '新手必学'
					},
					{
						label: '健康食谱'
					},
					{
						label: '料理达人'
					},
					{
						label: '罗杰塔'
					},
					{
						label: '涛妈'
					},
					{
						label: '营养师'
					}
				],
				options: {
					activeColor: '#1d98bd'
					// 可在这里指定labelKey为你数据里文字对应的字段名
				},
				imgs: ['', '', '', ''],
				recommendList: ['', '', '', ''],
				potList: [{
					img: 'http://www.kevenzhang.com/static/img/huoliguo.a9fc4ea.png',
					title: '活力锅介绍'
				}, {
					img: 'http://www.kevenzhang.com/static/img/guo2.b142f75.png',
					title: '活力锅介绍'
				}, ],
				recipesList: [{
					status: 1
				}, {
					status: 0
				}, {
					status: 1
				}, {
					status: 1
				}, {
					status: 0
				}, {
					status: 1
				}, ]
			};
		},
		 metaInfo (){
			return{
				titleTemplate: this.myTitle,
				htmlAttrs: {
					lang: 'zh'
				},
				
				meta: [{  name: 'keywords' ,content:this.myTitle+','+this.title}],
				meta: [{  name: 'description' ,content:this.conent}],
			}
		},
		methods: {
			onSwipeLeft() {},
			goAbout() {
				this.$router.push({
					name: 'About',
					params: {}
				})
			},
			choosetype(index) {
				if (this.chooseId == index) {

				} else {
					this.chooseId = index;
				}
			}
		},
		mounted() {
			new Swiper('#swiperContainer', {
				autoplay: true,
				speed: 300,
				// autoplayDisableOnInteraction:true,
				loopAdditionalSlides: 1,
				paginationClickable: true,
				touchReleaseOnEdges: true,
				loop: true,
				// 如果需要分页器
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination'
				},
				paginationType: 'bullets',
				paginationHide: false,
				paginationElement: 'li',
				// grabCursor:true,
				paginationVisibleClass: 'my-visible-switch'
				// 如果需要前进后退按钮
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				// 如果需要滚动条
				// scrollbar: '.swiper-scrollbar',
			});
		}
	};
</script>

<style lang="scss" scoped>
	#main {
		.conent {
			div.line {
				width: 100%;
				height: 0.375rem;
				background-color: #F4F4F4
			}

			p.text-ch {
				width: 100%;
				text-align: center;
				color: #333333;
				font-size: 1.125rem;
				margin-top: 0.625rem;
			}

			p.text-eh {
				width: 100%;
				text-align: center;
				color: #666;
				font-size: 0.875rem;
				margin-top: 0.1875rem;
				margin-bottom: 0.625rem;
			}

			div.discountCoupon-Bg {
				width: 100%;
				margin-top: 0.9375rem;
				display: flex;
				flex-direction: column;
				align-items: center;

				img {
					width: 92%;
				}
			}

			div.about-us-bg {
				width: 92%;
				padding: 0 4%;
				padding-bottom: 1.25rem;
				display: flex;
				flex-direction: column;

				img {
					width: 100%;
				}

				p {
					width: 100%;
					font-size: 0.875rem;
					color: #666666;
					line-height: 150%;
					margin-top: 0.8125rem;
				}

				p:last-child {
					color: #DF4557;
					font-size: 0.75rem;
					cursor: pointer;
					text-align: right;
					width: 96%;
					padding-right: 4%;
				}
			}

			div.use-bg {
				width: 92%;
				padding: 0 4%;
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;

				.use-list {
					width: 49%;
					display: flex;
					flex-flow: column nowrap;
					position: relative;
					margin-bottom: 0.625rem;

					img {
						width: 100%;
					}

					div {
						width: 100%;
						position: absolute;
						bottom: 0;
						left: 0;
						background-color: rgba(235, 235, 235, .5);
						display: flex;
						flex-direction: column;
						min-height: 4.3125rem;

						p:first-child {
							width: 96%;
							padding: 0.3125rem 2%;
							color: #101010;
							font-size: 0.875rem;
						}

						p:last-child {
							width: 96%;
							padding: 0 2%;
							padding-bottom: 0.3125rem;
							color: #333333;
							font-size: 0.75rem;
						}
					}
				}
			}

			div.media-bg {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 0.625rem;

				div.media-btn {
					width: 80%;
					padding: 0 10%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;

					p.chooseBtn {
						width: 37%;
						text-align: center;
						font-size: 0.875rem;
						color: #666;
						border: 0.0625rem solid #333333;
						padding: 0.4rem 0;
						cursor: pointer;
					}

					p.activeBtn {
						width: 37%;
						text-align: center;
						font-size: 0.875rem;
						border: 0.0625rem solid #852833;
						color: #852833;
						padding: 0.4rem 0;
						cursor: pointer;
					}
				}

				div.media-list-bg {
					margin-top: 0.875rem;
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-bottom: 2.875rem;

					div.media-img {
						width: 100%;
						position: relative;

						img {
							width: 100%;
						}

						div {
							width: 95%;
							padding: 0.5rem 2.5%;
							background-color: rgba(235, 235, 235, .5);
							position: absolute;
							bottom: 0;
							left: 0;
							display: flex;
							flex-direction: column;
							align-items: center;

							p {
								width: auto;
							}

							p:first-child {
								color: #666666;
								font-size: 0.875rem;
								margin-bottom: 0.3125rem;
							}

							p:last-child {
								color: #999999;
								font-size: 0.75rem;
							}
						}
					}

					div.information-list {
						width: 92%;
						padding: 0 4%;

						.information-bg {
							width: 100%;
							display: flex;
							flex-direction: column;
							border-bottom: 0.0625rem solid #BBBBBB;
							padding-top: 0.625rem;
							padding-bottom: 0.875rem;

							p:first-child {
								color: #999999;
								font-size: 0.75rem;
								text-align: left;
								margin-bottom: 0.125rem;
							}

							p:last-child {
								color: #666666;
								font-size: 0.875rem;
								text-align: left;
							}
						}
					}
				}
			}
		}
	}
</style>
