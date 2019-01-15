<template>
	<div id="main">
		<Header />
		<div class="main">
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
						<ly-tab>
							
						</ly-tab>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import Header from '../components/header';
export default {
	components: {
		Header
	},
	data() {
		return {
			 selectedId: 0,
      items: [
        {label: '首页'},
        {label: '推荐'},
        {label: 'Android'},
        {label: '前端'},
        {label: '后端'},
        {label: 'iOS'},
        {label: '产品'},
        {label: '人工智能'},
        {label: '设计'}
      ],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
			imgs: ['', '', '', '']
		};
	},
	methods: {
		onSwipeLeft() {}
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
}
</style>
