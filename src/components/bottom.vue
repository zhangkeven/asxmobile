<template>
<div id="footer">
	<p>地址：台湾台南市东区裕平路118号</p>
	<div class="beian">
		<img src="../assets/img/gongan.gif" alt="">
		<p>&nbsp;&nbsp;苏公网安备 11000002000088号</p>
	</div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
#footer{
	width: 100%;
	min-height: 5.5rem;
	background-color: #852833;
	display: flex;
	flex-direction: column;
	align-items: center;
	p{
		width: auto;
		font-size: 0.75rem;
		color: #FFFFFF;
		margin-top: 0.6875rem;
		margin-bottom: 0.3125rem;
	}
	div.beian{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.3125rem;
		p{
			width: auto;
			font-size: 0.75rem;
			color: #FFFFFF;
		}
		img{
			width: 4%;
		}
	}
}
</style>
