<template>
	<div class="editor-detail">
		<div class="ed-header"><span @click="goback"></span>主编</div>
		<div class="ed-mes" v-for="data in editors" v-if="!!data" @click="godetail(data.url)">
			<img class="ed-av" :src="data.avatar" alt="头像">
			<div class="">
				<p class="ed-name">{{data.name}}</p>
				<p class="ed-bio">{{data.bio}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from "vuex"

	export default {
		data() {
			return {
				// editors: []
			}
		},
		computed: {
			...mapState({
				editors: state => state.editors,
			})
		},
		methods: {
			goback() {
				if(window.history.length > 1) {
	        		this.$router.go(-1)
	        	} else {
	        		this.$router.push({
	        			name: 'List'
	        		})
	        	}
			},
			godetail(url) {
				location.replace(url);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.editor-detail {
		position: relative;

		.ed-header {
			height: 60px;
			line-height: 60px;
			font: normal 32px/60px "宋体";
			color: #fff;
			background-color: #5fb3e4;
			font-weight: bold;
			text-align: center;

			span {
				position: absolute;
				left: 0;
				display: block;
		        width: 60px;
		        height: 60px;
		        -webkit-tap-highlight-color:rgba(0,0,0,0);
		        
		        &:before {
		        	content: "";
		        	display: inline-block;
		        	width: 20px;
		        	height: 20px;
		        	margin: 20px;
		        	border: {
			        	left: 2px solid #fff;
			        	bottom: 2px solid #fff;
			        }
			        transform: rotate(45deg);

		        }
			}
		}

		.ed-mes {
			position: relative;
			height: 69px;
			line-height: 69px;
			border-bottom: 1px solid #ddd;
			text-align: left;
			font: normal 32px/60px "宋体";

			&:after {
				content: "";
				position: absolute;
				right: 23px;
	        	display: inline-block;
	        	width: 15px;
	        	height: 15px;
	        	margin: 27px 20px;
	        	border: {
		        	top: 2px solid #6f6f6f;
		        	right: 2px solid #6f6f6f;
		        }
		        transform: rotate(45deg);
			}
			img, div {
				display: inline-block;
			}
			img {
				width: 44px;
				border-radius: 44px;
				// vertical-align: middle;
				margin: 0px 16px;
				// margin-left: 12px;
				// margin-right: 12px;
			}
			div {
				line-height: normal;
				font-family: "微软雅黑";
				padding: 0px 0px;
			}
			.ed-name {
				font-size: 20px;
				color: #000;
				padding: 7px 0 5px;
			}
			.ed-bio {
				font-size: 16px;
				color: #9a9a9a;
			}
		}
	}
</style>