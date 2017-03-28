<template>
	<div class="list">
		<div class="top-slide">
			<swiper :options="swiperOption" class="sdj">
				<swiper-slide class="swiper-in" v-for="slide in topStories" :key="slide" :data-id="slide.id">
					<img :src="slide.image" :alt="slide.title">
					<div class="slide-content">{{slide.title}}</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!-- <div class="list-message" v-for="list in stories">
			
		</div> -->
	</div>
</template>

<script>
	import api from "../api/index.js"

	export default {
		data() {
			return {
				topStories: [1, 2, 3, 4],
				stories: [],
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
		mounted() {
			var that = this;
			api.getMessage('news').then(function(data) {
				// console.log(data)
				var top_stories = data.data.top_stories;
				top_stories[0].image = top_stories[0].image.replace(/https/, 'http');
				that.topStories = top_stories;
				that.stories = data.data.stories;
				// console.log(lid)
				
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

		
</script>

<style lang="scss">
	.list {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;

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
	}

</style>