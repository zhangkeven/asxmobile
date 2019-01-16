<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="room" class="main">
			<div class="swiper-container" id="roomContainer" style="width: 100%;">
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
			<ly-tab :items="items" v-model="selectid">

			</ly-tab>
			<div class="food-list">
				<div class="food" v-for="(item,index) in foodList" :key="index">
					<div class="vide-bg" v-if="item.status==0">
						<img src="../../assets/img/hongdou.png" alt="">
						<img src="../../assets/img/play.png" alt="">
					</div>
					<img src="../../assets/img/hongdou.png" alt="" v-if="item.status==1">
					<p>五行找米饭</p>
					<p>使用零秒活力锅来煮糙米饭，省时省力还省能源，而且米饭更Ｑ更好吃喔！我们的糙米比起一般......</p>
				</div>
			</div>
			<div class="add-list">
				<p>加载更多</p>
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
				foodList: [{
					status: 0
				}, {
					status: 1
				}, {
					status: 0
				}, {
					status: 1
				}, {
					status: 0
				}, ],
				selectid: 0,
				items: [{
						label: '蔬菜'
					},
					{
						label: '鱼类'
					},
					{
						label: '饭类'
					},
					{
						label: '肉类'
					},
					{
						label: '汤类'
					},
					{
						label: '面食'
					},
					{
						label: '豆类'
					},
					{
						label: '蛋类'
					}
				],
			};
		},
		updated() {
			console.log(this.selectid);
		},
		mounted() {
			new Swiper('#roomContainer', {
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
	#room {
		div.food-list {
			width: 92%;
			padding: 0.625rem 4%;
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;

			div.food {
				width: 49%;
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				div.vide-bg {
					width: 100%;
					position: relative;

					img:first-child {
						width: 100%;
					}

					img:last-child {
						width: 20%;
						position: absolute;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
					}
				}

				img {
					width: 100%;
				}

				p {
					width: 88%;
					padding: 0.25rem 6%;
				}

				p:nth-child(3) {
					color: #333333;
					font-size: 0.875rem;
				}

				p:nth-child(4) {
					color: #666666;
					font-size: 0.75rem;
				}
			}
		}

		div.add-list {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			margin: 1.375rem 0;

			p {
				width: 21%;
				padding: 0.5rem 0;
				border-radius: 0.25rem;
				color: rgba(133, 40, 51, 1);
				font-size: 0.875rem;
				text-align: center;
				border: 0.0625rem solid rgba(133, 40, 51, 1);
				cursor: pointer;
			}
		}
	}
</style>
