<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="callUs" class="main">
		<div class="swiper-container" id="callUsContainer" style="width: 100%;">
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
					myTitle:'联系我们',
					title:'活力锅',
					conent:'这是一家历史悠久的公司',
					imgs: ['', '', '', ''],
					selectid:0,
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
		 metaInfo (){
			return{
				titleTemplate: this.myTitle,
				htmlAttrs: {
					lang: 'zh'
				},
				
				meta: [{  name: 'keywords' ,content:this.myTitle+this.title}],
				meta: [{  name: 'description' ,content:this.conent}],
			}
		},
		updated(){
			console.log(this.selectid);
		},
		mounted(){
			new Swiper('#callUsContainer', {
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

<style>

</style>
