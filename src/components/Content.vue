<template>
	<div class="ctn">
		<div class="loading" v-if="loading">Loading...</div>
		<div v-if="getdone">
			<div class="top">
				<div class="top-img">
					<img v-if="!!data.image" :src="data.image" :alt="data.image_source">
					<div class="slide-content">
						<p>{{data.title}}</p>
					</div>
				</div>
			</div>
			<div class="article" v-html="data.body"></div>
		</div>
			
	</div>
</template>

<script>
	import api from "../api/index.js"

	export default {
		data() {
			return {
				loading: false,
				getdone: false,
				data: {}
			}
		},
		created() {
			this.getContent()
		},
		watch: {
			"$route": "getContent"
		},
		methods: {
			getContent() {
				var that = this
				this.loading = true
				this.getdone = false
				var cid = this.$route.params.id
				api.getMessage('newsDetail', cid).then((data) => {
					that.data = data.data
					this.loading = false
					this.getdone = true
				}).catch(err => {
					console.log(':', err);
				})
			},
			backroute() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="scss">
	.ctn {
		position: absolute;
		width: 100%;
		height: 10000%;
		overflow: auto;
		
		.loading {
			position: absolute;
			width: 100%;
			font-size: 34px;
			line-height: 55px;
			padding-top: 400px;
		}

	}

	.article {
		position: relative;
		padding: 4px 26px;
		margin-bottom: 67px;
		text-align: left;
		font-size: 24px;
		line-height: 40px;
		
		.meta {
			height: 38px;
			line-height: 38px;
			img {
				vertical-align: middle;
			}
			.author {
				font-weight: bold;
				margin-left: 8px;
			}
			
		}
		.content {
			a, a:hover, a:visited, a:link, a:active {
				text-decoration: none;
				color: #1919f3;
				-webkit-tap-highlight-color:rgba(0,0,0,0);
			}

			p {
				margin: 20px 0;
				// font-size: 16px;

			}
			iframe {
				width: 560px;
    			height: 435.75px;
			}
		}
	}
</style>