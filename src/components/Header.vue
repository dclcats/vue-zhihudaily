<template>
	<div class="header">
		<div class="left-menu">
			<span></span>
		</div>
		<div class="title">{{ title }}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "今日热闻"
			}
		}
	}
</script>

<style scoped>
	.header {
		height: 60px;
		text-align: center;
		/* line-height: 60px; */
		font: normal 32px/60px Serif;
		background-color: rgba(39, 131, 241, 0.7);
	}
	.left-menu {
		position: absolute;
		width: 60px;
		height: 60px;
	}
	.left-menu span{
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -2px 0 0 -22px;
		height: 4px;
		width: 44px;
		background-color: #fff;
	}
	.left-menu span::before{
		content: "";
		display: block;
		position: absolute;
		top: -12px;
		height: 4px;
		width: 44px;
		background-color: #fff;
	}
	.left-menu span::after{
		content: "";
		display: block;
		position: absolute;
		top: 12px;
		height: 4px;
		width: 44px;
		background-color: #fff;
	}
</style>