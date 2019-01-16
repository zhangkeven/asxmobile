<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="share" class="main">
		<div class="swiper-container" id="shareContainer" style="width: 100%;">
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
		<div class="share-list-bg">
			<div class="share-list" v-for="(item,index) in list" :key="index">
				<div class="user">
					<div class="left-icon">
						<div class="img-bg">
							<img src="../../assets/img/touxiang.png" alt="">
						</div>
					</div>
					<p class="userName">莊小如</p>
				</div>
				<div class="share-conet">
					<p>美味食材，精彩不断</p>
					<p>总觉得压力锅煮不出经过慢火细炖的西红柿牛肉浓郁汤头的我。在试过活力锅后，那软嫩入味、色泽漂亮的牛肉汤彻底转变了我这铁齿到不行的脑袋，现在我竟然逢人便称赞这神奇的压力锅，包括说服比我更硬的母亲大人！</p>
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
					imgs: ['', '', '', ''],
					selectid:0,
					items: [{
						label: '0秒活力锅'
					},
					{
						label: '全能平底锅'
					},
					{
						label: '节能省水'
					},
					
				],
				list:['','','','','']
			};
		},
		updated(){
			console.log(this.selectid);
		},
		mounted(){
			new Swiper('#shareContainer', {
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
#share{
	div.share-list-bg{
		div.share-list{
			width: 92%;
			padding:0.625rem 4%;
			border: 0.0625rem solid #F4F4F4;
			div.user{
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				p.userName{
					width: 84%;
					color: #101010;
					font-size: 1rem;
				}
				div.left-icon{
					width: 12%;
					display:flex;
					flex-direction: row;
					div.img-bg{
						width: 100%;
						height: 0;
						padding-bottom: 100%;
						position: relative;
						img{
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
				}
			}
			div.share-conet{
				width: 100%;
				display: flex;
				flex-direction: column;
				p:first-child{
					padding:0.625rem 0;
					color: #666666;
					font-size: 1rem;
				}
				p:last-child{
					color: #999999;
					font-size: 0.75rem;
					line-height: 150%;
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
		margin-top:3.9375rem;
		margin-bottom: 1.25rem;
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
