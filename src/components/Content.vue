<template>
	<div class="ctn">
		<div class="loading" v-if="loading">Loading...</div>
		<div id="art-box" v-if="getdone">
			<div v-if="!!data.image" class="top">
				<div class="top-img">
					<img :src="data.image" :alt="data.image_source">
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
				var cid = this.$route.params.id
				if(!/content/i.test(this.$route.name) || cid < 100 || !cid) {
					return
				}
				var that = this
				this.loading = true
				this.getdone = false
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
		top: 0;
		left: 0;
		right: 0;
		bottom: 60px;
		overflow-y: scroll;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		

	}

		.loading {
			position: absolute;
			width: 100%;
			font-size: 34px;
			line-height: 55px;
			padding-top: 400px;
		}


	.article {
		position: relative;
		padding: 4px 26px;
		text-align: left;
		font-size: 28px;
		line-height: 40px;
		word-break:break-all;

		h1 {
			font-size: 40px;
			line-height: 50px;
		}

		h2 {
			font-size: 33px;
			line-height: 45px;
		}
		
		a, a:link, a:visited {
			color: #2c3e50;
			text-decoration: none;
		}

		.meta {
			display: inline-block;
			height: 38px;
			line-height: 38px;
			// margin-bottom: 26px;
			width: 588px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			// float: left;

			img {
				vertical-align: middle;
				float: left;
			}
			.author {
				font-weight: bold;
				margin-left: 8px;
			}
			
		}
		.content {
			clear: both;
			// margin-top: 23px;

			a, a:hover, a:visited, a:link, a:active {
				text-decoration: none;
				color: #1996d4;
				-webkit-tap-highlight-color: rgba(0,0,0,0);
			}

			p {
				margin: 20px 0;
				// font-size: 16px;

			}
			iframe {
				width: 560px;
    			height: 435.75px;
			}
			img {
				display: block;
				margin: 0 auto;
				width: auto;
    			max-width: 100%;
			}
		}
		.view-more {
			display: none;
			background-color: #ddd;
			text-align: center;
			height: 52px;
			line-height: 52px;
			margin-top: 19px;

			a {
				display: block;
				font-size: 27px;
				width: 100%;
				height: 100%;
				text-decoration: none;
				color: #1919f3;
			}
		}
	}
</style>