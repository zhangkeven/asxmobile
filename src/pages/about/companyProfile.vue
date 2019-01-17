<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="profile" class="main">
			<div class="swiper-container" id="profileContainer" style="width: 100%;">
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
			<div class="about-us">
				<p class="text-ch">关于我们</p>
				<p class="text-eh">ABOUT US</p>
				<div class="product-story">
					<p class="story-title">零秒活力锅开发的故事</p>
					<p class="story-conent">
						活力锅自推出后受到广大顾客的爱用,目前已研发进化成为超越“1分钟料理”※1具有 “0秒料理”※2性能的「零秒活力锅」。让您的料理变得越来越简单。然而,开发如此神奇功能的锅具并不是件简单的事情。现在就让我们来瞧瞧零秒活力锅开发的故事吧!
					</p>
					<p class="story-conent">※1： 1分钟料理:当锅中食物沸腾,配重泄压阀开始大幅度摇晃后,调成小火加热1分钟,接着关闭火源,利用余热闷煮即可。 </p>
					<p class="story-conent">※2： 0秒料理:当锅中食物沸腾,配重泄压阀开始大幅度摇晃后,立即关闭火源,利用余热闷煮即可。</p>
					<div class="story-person">
						
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
		updated() {
			console.log(this.selectid);
		},
		mounted() {
			new Swiper('#profileContainer', {
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
	#profile {
		div.about-us {
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
				margin-bottom: 0.625rem;
			}

			p.text-eh {
				width: 100%;
				text-align: center;
				color: #F4F4F4;
				font-size: 1.25rem;
				position: absolute;
				top: 0.625rem;
				left: 0;
				z-index: -2;
			}
			div.product-story{
				width: 92%;
				padding:0 4%;
				display: flex;
				flex-direction: column;
				p.story-title{
					width: 100%;
					text-align: center;
					color: #101010;
					font-size: 1rem;
					margin-bottom: 0.625rem;
				}
				p.story-conent{
					width: 100%;
					line-height: 180%;
					font-size: 0.875rem;
					color: #666666;					
				}
			}
		}
	}
</style>
