<template>
	<div class="list">
		<div class="loading" v-if="loading">Loading...</div>
		<div v-if="getdone">
			<div class="top-slide top" v-if="!!data.top_stories">
				<swiper :options="swiperOption" class="sdj">
					<swiper-slide class="top-img" v-for="slide in data.top_stories" :key="slide" :data-id="slide.id">
						<div @click="toContent(slide.id)">
							<img :src="slide.image" :alt="slide.title">
							<div class="slide-content">
								<p>{{slide.title}}</p>
							</div>
						</div>
						
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<div class="list-message" v-if="!!data.stories">
				<p v-if="!!data.date && !data.top_stories">{{data.date}}</p>
				<img v-if="!data.date && !!data.image" :src='"http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=" + data.image'  :alt="data.name">
				<ul>
					<li v-for="list in data.stories" @click="toContent(list.id)" :data-id="list.id">
						<p>{{list.title}}</p>
						<img v-if="!!list.images" :src="list.images" :alt="list.title">
					</li>
				</ul>
				
			</div>
		</div>
		
	</div>
</template>

<script>
	import api from "../api/index.js"
	import { mapState } from "vuex"

	export default {
		data() {
			return {
				topStories: [1, 2, 3, 4],
				data: {},
				loading: false,
				getdone: false,
				swiperOption: {
					autoplay: 3500,
					setWrapperSize :true,
					pagination : '.swiper-pagination',
					paginationClickable :true,
					mousewheelControl : true,
					observeParents:true,
					loop: true,
				}
			}
		},
		created() {
			// console.log('sad');
			// console.log(this.$route.path)
			// this.data = {};
			this.getlist();
		},
		watch: {
			"$route": "getlist"
		},
		// beforeRouteUpdate(to, from, next) {
		// 	console.log(to.path)
		// 	console.log(": " + from.path)
		// 	if(to.path.search(/\/con/)) {
		// 		// this.data = {};
		// 		this.getlist();
		// 	}
		// 	next();
		// },
		// beforeRouteLeave(to, from, next) {
		// 	console.log("leave", from.path)

		// 	if(from.path.search(/\/con/)) {
		// 		this.data = {};
		// 	}
		// 	// next();
		// },
		// beforeEach(to, from, next) {
		// 	console.log(to.path)
		// 	console.log(": " + from.path)
		// 	if(to.path.search(/\/con/)) {
		// 		this.data = {};
		// 		this.getlist();
		// 	}
		// 	next();
		// },
		// afterEach(to, from, next) {
		// 	console.log("leave", to.path)

		// 	if(from.path.search(/\/con/)) {
		// 		// this.data = {};
		// 		this.getlist();
		// 	}
		// 	// next();
		// },
		methods: {
			toContent(id) {
				this.$router.push({
	        		name: "Content",
	        		params: {
	        			id: id
	        		}
	        	})
			},
			getlist() {
				var that = this;
				var jumpId = this.$route.params.id
				var local = "newsThemeDetail"
				this.loading = true
				this.getdone = false
				// console.log(jumpId)
				// console.log(typeof jumpId)
				if(!jumpId || jumpId === '0') {
					// console.log("newsThemeDetail")
					jumpId = ""
					local = "news"
				}
				// console.log(local,': ', jumpId)
				api.getMessage(local, jumpId).then(function(data) {
					// console.log(data)
					var data = data.data;
					if(!!data.top_stories) {
						var top_stories = data.top_stories;
						var tlength = top_stories.length;
						for (var i = tlength - 1; i >= 0; i--) {
							// top_stories[i].image = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + top_stories[i].image
						}
						data.top_stories = top_stories
					}
					if(!!data.stories) {
						var stories = data.stories;
						var tlength = stories.length;
						for (var i = tlength - 1; i >= 0; i--) {
							if(!!stories[i].images) {
								// stories[i].images = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + stories[i].images
							}
						}
						data.stories = stories
					}
					// console.log(": ", data)
					if(!!data.date) {
						var date = data.date
						date = date.substring(0, 4) + "年" + date.substring(4, 6) + "月" + date.substring(6, 8) + "日"
						data.date = date
					}

					if(!!data.name) {
						that.$store.commit('setTitleName', data.name )
					} else {
						that.$store.commit('setTitleName', '今日热闻')
					}
						
					that.data = data
					that.loading = false
					that.getdone = true
					
					
				}).catch(err => {
					console.log(err);
				});
				setInterval(() => {
					// console.log('simulate async data')
					// let swiperSlides = this.swiperSlides
					// if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
				}, 3000)
			}
		}
	}

		
</script>

<style lang="scss">
	p {
		margin: 0;
	}
	.list {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		overflow: auto;

		.loading {
			position: absolute;
			// height: calc(100%-400px);
			width: 100%;
			font-size: 34px;
			padding-top: 400px;
		}

		.top-slide {
			// width: 100%;
			// height: 440px;

		}

		.list-message {
			font-size: 0;

			&>p {
				background-color: #5886e8;
				height: 58px;
				line-height: 58px;
				font-size: 28px;
				color: #fff;
				font-weight: bold;
			}
			ul {
				margin: 0 30px;
				padding: 0;

				li {
					display: flex;
					align-items: center;
					// flex-flow: row;
					// clear: both;
					height: 136px;
					// line-height: 100px;
					padding: 3px 0;
					border: {
						top: 1px solid #ddd;
					} 

					p {
						flex: 1;
						text-align: justify;
						line-height: 24px;
						font-size: 23px;
						padding: 0 14px 0;
						font-weight: bold;
					}
					img {
						// flex: 75px;
						// width: 75px;
						width: 111px;
						overflow-y: hidden;
						// margin: 12.5px 0;
						align-items: center;
						// flex: ver
						// verticalCenter: middle;
						vertical-align: middle;
					}
				}
			}

		}
	}
	.top {
		position: relative;
		height: 350px;
		.top-img {
			width: 100%;
			height: 350px;
			color: #000;
			background-color: #ddd;
			line-height: 440px;
			overflow: hidden;
			
			img {
				width: 100%;
				margin-top: -145px;
			}
		}
		.slide-content {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			background-color: rgba(0, 0, 0, .3);

			p {
				position: absolute;
				font-size: 29px;
				// vertical-align: bottom;
				color: #fff;
				bottom: 23px;
				text-align: left;
				line-height: 44px;
				max-width: 600px;
				left: 50%;
				margin-left: -300px;
			}
		}

	}
		
</style>