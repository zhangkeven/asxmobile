<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="recommend-main" class="main">
			<div class="swiper-container" id="recommedContainer" style="width: 100%;">
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
			<div class="recommend-conent">
				<div class="recommend-list" v-for="(item,index) in list" :key="index" @click="goRecommendDetail">
					<img src="../../assets/img/douya.png" alt="">
					<p>黄豆芽排骨汤</p>
					<p>「过于忙碌、压力过大的上班族常常外食，而导致摄取不够多的高纤食物，造成身体中的负担太多...」赵函颖营养师说。
						体内的负担过多可是健康的一大隐忧喔！美国心血管协会建议我们每天要多吃一些高纤的食材，可是我们现在很多人都吃不够...研究证实，这些人容易得到癌症的机率比一般人高出3%~5%喔......</p>
					<div>
						<p>查看更多>></p>
					</div>
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
				list: ['', '', ''],
				imgs: ['', '', '', ''],
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
			goRecommendDetail(){
				this.$router.push({
					name: 'RecommendDetail',
					params: {}
				})
			}
		},
		updated() {
			console.log(this.selectid);
		},
		mounted() {
			new Swiper('#recommedContainer', {
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
	#recommend-main {
		div.recommend-conent {
			width: 100%;
			background-color: #F4F4F4;

			div.recommend-list {
				width: 92%;
				padding: 0 4%;
				display: flex;
				flex-direction: column;
				background-color: #FFFFFF;
				margin-bottom: 0.75rem;

				img {
					width: 100%;
					border-radius: 0.625rem;
				}

				p:nth-child(2) {
					width: 100%;
					color: #333333;
					font-size: 1rem;
					padding: 0.625rem 0;
				}

				p:nth-child(3) {
					width: 100%;
					color: #666666;
					font-size: 0.875rem;
					margin-bottom: 0.375rem;
					line-height: 150%;
				}

				div:last-child {
					width: 100%;
					margin-bottom: 0.5rem;
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					align-items: center;

					p {
						color: #FFFFFF;
						font-size: 0.75rem;
						text-align: center;
						width: 24%;
						padding: 0.3125rem 0;
						background-color: #852833;
						border-radius: 0.25rem;
					}
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
