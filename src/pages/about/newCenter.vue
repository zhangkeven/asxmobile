<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="newCenter" class="main">
			<div class="swiper-container" id="newCenterContainer" style="width: 100%;">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
						<img class="bannerImg" src="../../assets/img/banner3.png" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination" id="swiper-pagination"></div>

				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev swiper-button-white"></div>-->
				<!--<div class="swiper-button-next swiper-button-white"></div>-->
			</div>
			<div class="media-bg">
				<p class="text-ch">新闻中心</p>
				<p class="text-eh">ASAHI NABE</p>
				<div class="media-btn">
					<p :class="chooseId==0?'activeBtn':'chooseBtn'" @click="choosetype(0)">媒体报道</p>
					<p :class="chooseId==1?'activeBtn':'chooseBtn'" @click="choosetype(1)">最新消息</p>
				</div>
				<div class="media-list-bg">
					<div class="media-img">
						<img src="../../assets/img/mediaBg.png" alt="">
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
	import Header from '../../components/header';
	import Bottom from '../../components/bottom';
	import Menu from '../../components/menu';
	export default {
		components: {
			Header,
			Bottom,
			Menu
		},
		data() {
			return {
				imgs: ['', '', '', ''],
				recommendList: ['', '', '', ''],
				chooseId: 0,
				selectid: 0,
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
			};
		},
		methods: {
			choosetype(index) {
				if (this.chooseId == index) {

				} else {
					this.chooseId = index;
				}
			}
		},
		updated() {
			console.log(this.selectid);
		},
		mounted() {
			new Swiper('#newCenterContainer', {
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
	}
</script>

<style lang="scss" scoped>
	#newCenter {
		width: 100%;
		div.media-bg {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 0.625rem;
			position: relative;
			p.text-ch {
				width: 100%;
				text-align: center;
				color: #101010;
				font-size: 1.125rem;
				margin-top: 0.8125rem;
				margin-bottom:0.625rem;
			}
			
			p.text-eh {
				width: 100%;
				text-align: center;
				color:#F4F4F4;
				font-size:1.25rem;
				position: absolute;
				top: 0.625rem;
				left: 0;
				z-index: -2;
			}
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
</style>
