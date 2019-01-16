<template>
	<div id="nav-main">
		<div class="showMenu" :style="showModal">
			<img src="../assets/img/shouye.png" alt="">
			<img src="../assets/img/cart1.png" alt="">
			<img src="../assets/img/kefu.png" alt="">
			<img src="../assets/img/mine1.png" alt="">
			<img src="../assets/img/right.png" alt="" @click="showMenu">
		</div>
		<div class="hideMenu" :style="hideModal">
			<img src="../assets/img/left.png" alt="" @click="hideMenu">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showModal:'visibility:visible',
				hideModal:'visibility:hidden',
			};
		},
		methods: {
			showMenu(){
				this.showModal='visibility:hidden';
				this.hideModal='visibility:visible';
			},
			hideMenu(){
				this.showModal='visibility:visible';
				this.hideModal='visibility:hidden';
			}
		},
	}
</script>

<style lang="scss" scoped>
#nav-main{
	position: fixed;
	right: 0;
	top:50%;
	transform: translate(0,-50%);
	width: 16%;
	z-index: 20;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	div.showMenu{
		width: 42%;
		opacity: 0.55;
		border-radius: 0.3125rem;
		background-color: rgba(249, 84, 104, 1);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding:0.375rem 4%;
		// transition: visibility linear .3s;
		img{
			width:80%;
			z-index: 21;
		}
		img:not(:last-child){
			margin-bottom: 1.125rem;
		}
	}
	div.hideMenu{
		width: 92%;
		padding:0.375rem 4%;
		position: absolute;
		bottom: 0;
		opacity: 0.55;
		border-radius: 0.3125rem;
		background-color: rgba(249, 84, 104, 1);
		display: flex;
		flex-direction: row;
		align-items: center;
		// transition: visibility linear .3s;
		img{
			width: 40%;
			z-index: 21;
		}
	}
}
</style>
