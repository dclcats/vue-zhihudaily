<template>
	<div class="header">
		<div v-if="menu" @click.stop="toggle" class="left-menu">
			<span></span>
		</div>
		<div class="title">{{ title }}</div>
	</div>
</template>

<script>
	import { mapState } from "vuex"

	export default {
		data() {
			return {
				// title: "今日热闻"
			}
		},
		computed: {
			...mapState({
				title: state => state.titleName,
				menu: state => state.menu
			})
		},
		methods: {
			toggle() {
				this.$store.commit('toggle', true)
			}
		}
	}
</script>

<style scoped>
	.header {
		position: fixed;
		height: 60px;
		width: 100%;
		text-align: center;
		font: normal 32px/60px Serif;
		background: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0));
		z-index: 11;
	}
	.left-menu {
		position: absolute;
		width: 60px;
		height: 60px;
		-webkit-appearance: none;
		-webkit-tap-highlight-color:rgba(0,0,0,0);
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
	.title {
		color: #fff;
	}
</style>