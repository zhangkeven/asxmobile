<template>
	<div id="main">
		<Header />
		<div class="main">
			<div class="swiper-container" id="swiperContainer" style="width: 100%;">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img class="bannerImg" src="../assets/img/banner.png" alt="">
					</div>
					<div class="swiper-slide">
						<img class="bannerImg" src="../assets/img/banner2.png" alt="">
					</div>
				</div>
				<!-- 如果需要分页器 -->
				<div class="swiper-pagination"></div>

				<!-- 如果需要导航按钮 -->
				<!--<div class="swiper-button-prev swiper-button-white"></div>-->
				<!--<div class="swiper-button-next swiper-button-white"></div>-->
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import Header from '../components/header'
	export default {
		components: {
			Header
		},
		data() {
			return {
				imgs: ['','','',''],
			};
		},
		methods: {

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
				pagination: '.swiper-pagination',
				// paginationHide:true,
				// grabCursor:true,
				paginationVisibleClass: 'my-visible-switch',
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
	#main {}
</style>
