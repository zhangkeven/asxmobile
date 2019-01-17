<template>
	<div>
		<Header />
		<Menu></Menu>
		<div id="startProduct" class="main">
			<img src="../../assets/img/mingxing.png" alt="">
			<div class="start-title">
				<div class="round-icon">
					<div>
						<img src="../../assets/img/yuanquan.png" alt="">
					</div>
				</div>
				<p class="start-text">三代人的匠心传承</p>
			</div>
			<p class="product-conent-detail">ASAHI 70年来致力于创新研发出拥有健康烹饪功能的料理器，因此研发出了为健康把关的「阿莎希全能平底锅」，无油、无水、可烘烤的特性，让您吃得健康又美味！</p>
			<div class="buy-btn">
				<p>立即购买</p>
			</div>
			<div class="line">

			</div>
			<video src="" controls></video>
			<p class="prodcut-style">
				零秒活力锅的尺寸规格
			</p>
			<div class="bottom-big-product">
				<img src="../../assets/img/bigguo.png" alt="" class="big-guo">
				<div>
					<img src="../../assets/img/bigsize.png" alt="" class="small-guo">
					<p>点击购买</p>
				</div>
			</div>
			<div class="bottom-big-product">
				<img src="../../assets/img/smallguo.png" alt="" class="big-guo">
				<div>
					<img src="../../assets/img/smallsize.png" alt="" class="small-guo">
					<p>点击购买</p>
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

			};
		}
	}
</script>

<style lang="scss" scoped>
	#startProduct {
		align-items: center;

		img {
			width: 100%;
		}

		div.start-title {
			width: 50%;
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			margin: 0.625rem 0;

			.round-icon {
				width: 25%;

				div {
					width: 100%;
					height: 0;
					padding-bottom: 100%;
					position: relative;

					img {
						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
					}
				}
			}

			p.start-text {
				position: absolute;
				left: 12%;
				color: #101010;
				font-size: 1.125rem;
			}
		}

		p.product-conent-detail {
			width: 92%;
			padding: 0 4%;
			line-height: 150%;
			color: #666666;
			font-size: 0.875rem;
			margin-bottom: 0.625rem;
		}

		div.buy-btn {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			p {
				width: 21%;
				text-align: center;
				border: 0.0625rem solid #BBBBBB;
				border-radius: 0.25rem;
				color: #101010;
				font-size: 0.875em;
				padding: 2% 0;
				margin-bottom: 0.625rem;
			}
		}

		div.line {
			width: 100%;
			height: 0.375rem;
			background-color: #F4F4F4;
		}

		video {
			width: 92%;
		}

		p.prodcut-style {
			color: #333333;
			font-size: 1.125rem;
			margin-top: 1.75rem;
			margin-bottom: 0.8125rem;
		}

		div.bottom-big-product {
			width: 92%;
			border: 0.0625rem solid #BBBBBB;
			border-radius: 0.3125rem;
			position: relative;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 0.625rem;
			img.big-guo {
				width: 59%;
				margin:10% 0;
				margin-left: 2%;
				
			}
			div{
				width: 45%;
				position: absolute;
				right: 1%;
				bottom: 2%;
				img.small-guo {
					width: 95%;
					margin-bottom: 0.625rem;
				}
				p {
					cursor: pointer;
					width:100%;
					padding:4% 0;
					background-color: rgba(217, 217, 217, 1);
					color: rgba(255, 255, 255, 1);
					font-size: 1.125rem;
					text-align: center;
				}
			}
			

			
		}
	}
</style>
