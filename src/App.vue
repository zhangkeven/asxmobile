<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	
	export default {
		name: 'App',
		data(){
			return{
				myTitle:'阿沙希',
				title:'活力锅',
				conent:'这是一家历史悠久的公司'
			}
		},
		 metaInfo (){
			return{
				titleTemplate: this.myTitle,
				htmlAttrs: {
					lang: 'zh'
				},
				
				meta: [{  name: 'keywords' ,content:this.myTitle+','+this.title},{  name: 'description' ,content:this.conent}],
			}
		},
	}
</script>

<style lang="scss" scoped>
	#app {}
</style>
