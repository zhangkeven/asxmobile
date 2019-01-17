<template>
	<div id="nav-main">
		<div class="showMenu" :style="showModal">
			<div>
				<img src="../assets/img/shouye.png" alt="" @click="goMain">
			</div>
			<div>
				<img src="../assets/img/cart1.png" alt="">

			</div>
			<div> <img src="../assets/img/kefu.png" alt=""></div>
			<div> <img src="../assets/img/mine1.png" alt=""></div>
			<div> <img src="../assets/img/right.png" alt="" @click="showMenu"></div>
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
				showModal: 'visibility:visible',
				hideModal: 'visibility:hidden',
			};
		},
		methods: {
			showMenu() {
				this.showModal = 'visibility:hidden';
				this.hideModal = 'visibility:visible';
			},
			hideMenu() {
				this.showModal = 'visibility:visible';
				this.hideModal = 'visibility:hidden';
			},
			goMain() {
				this.$router.push({
					name: 'Main',
					params: {}
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
	#nav-main {
		position: fixed;
		right: 0;
		top: 50%;
		transform: translate(0, -50%);
		width: 18%;
		z-index: 20;
		display: flex;
		flex-direction: column;
		align-items: flex-end;

		div.showMenu {
			width: 42%;
			opacity: 0.55;
			border-radius: 0.3125rem;
			background-color: rgba(249, 84, 104, 1);
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 0.375rem 4%;

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
					z-index: 21;
				}
			}

			// transition: visibility linear .3s;

			div:not(:last-child) {
				margin-bottom: 1.125rem;
			}
		}

		div.hideMenu {
			width: 92%;
			padding: 0.375rem 4%;
			position: absolute;
			bottom: 0;
			opacity: 0.55;
			border-radius: 0.3125rem;
			background-color: rgba(249, 84, 104, 1);
			display: flex;
			flex-direction: row;
			align-items: center;

			// transition: visibility linear .3s;
			img {
				width: 45%;
				z-index: 21;
			}
		}
	}
</style>
