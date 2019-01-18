<template>
	<div>
		<Header />
		<Menu></Menu>
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
				title:'商城首页',
				content:'商城介绍',
				keyword:'阿沙希商城'
			}
		},
		metaInfo() {
			return {
				titleTemplate: this.title,
				htmlAttrs: {
					lang: 'zh'
				},

				meta: [{
						name: 'keywords',
						content:this.keyword
					},
					{
						name: 'description',
						content:this.content
					}
				],
			}
		},
		methods: {},
	}
</script>

<style lang="scss" scoped>

</style>
