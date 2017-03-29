<template>
	<div class="list" v-if="!!data.top_stories">
		<div class="top-slide">
			<swiper :options="swiperOption" class="sdj">
				<swiper-slide class="swiper-in" v-for="slide in data.top_stories" :key="slide" :data-id="slide.id">
					<img :src="slide.image" :alt="slide.title">
					<div class="slide-content">{{slide.title}}</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="list-message" v-if="!!data.stories">
			<p>{{data.date}}</p>
			<ul>
				<li v-for="list in data.stories">
					<p>{{list.title}}</p>
					<img :src="list.images" :alt="list.title">
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	import api from "../api/index.js"

	export default {
		data() {
			return {
				topStories: [1, 2, 3, 4],
				data: {},
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
		activated() {
			this.getlist();
		},
		deactivated: function() {
			this.data = "";
		},
		methods: {
			getlist() {
				var that = this;
				var jumpId = this.$route.query.id
				var local = "newsThemeDetail"
				console.log(jumpId)
				console.log(typeof jumpId)
				if(!jumpId || jumpId === '0') {
					console.log("newsThemeDetail")
					jumpId = ""
					local = "news"
				}
				console.log(local,': ', jumpId)
				api.getMessage(local, jumpId).then(function(data) {
					console.log(data)
					var data = data.data;
					if(!!data.top_stories) {
						var top_stories = data.top_stories;
						var tlength = top_stories.length;
						for (var i = tlength - 1; i >= 0; i--) {
							top_stories[i].image = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + top_stories[i].image
						}
						data.top_stories = top_stories
					}
					if(!!data.stories) {
						var stories = data.stories;
						var tlength = stories.length;
						for (var i = tlength - 1; i >= 0; i--) {
							if(!!stories[i].images) {
								stories[i].images = 'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl=' + stories[i].images
							}
						}
						data.stories = stories
					}
					console.log(": ", data)
					if(!!data.date) {
						var date = data.date
						date = date.substring(0, 4) + "年" + date.substring(4, 6) + "月" + date.substring(6, 8) + "日"
						data.date = date
					}
						
					that.data = data
					
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

		.top-slide {
			// width: 100%;
			// height: 440px;

			.swiper-in {
				width: 100%;
				height: 350px;
				color: #000;
				background-color: #ddd;
				line-height: 440px;
				// font-size: 34px;
				overflow: hidden;

				img {
					width: 100%;
				}
			}
			.slide-content {
				font-size: 24px;
				vertical-align: bottom;
			}
		}

		.list-message {

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
						height: 111px;
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

</style>