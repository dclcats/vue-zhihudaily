<template>
	<div class="list">
		<div class="top-slide">
			<div v-swiper:mySwiper="swiperOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide swiper-in" v-for="topList in topStories">
						{{topList}}
						<!-- <img :src="banner"> -->
					</div>
				</div>
				<div class="swiper-pagination swiper-pagination-bullets"></div>
			</div>
		</div>
		<div class="list-message" v-for="list in stories">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topStories: [1, 2, 3, 4],
				stories: [],
				banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
				swiperOption: {
					autoplay: 5000,
					initialSlide: 1,
					loop: true,
					pagination: '.swiper-pagination',
					onSlideChangeEnd: swiper => {
						console.log('onSlideChangeEnd', swiper.realIndex)
					}
				}
			}
		},
		mounted() {
			console.log('app init')
			setTimeout(() => {
				// this.banners.push('/5.jpg')
				console.log('banners update')
			}, 3000)

			console.log(
			'This is current swiper instance object', this.mySwiper, 
			'It will slideTo banners 3')

			this.mySwiper.slideTo(3)
		}
	}

		
</script>

<style lang="scss">
	// .list {
	// 	width: 100%;
	// 	height: 100%;

	// 	.top-slide {
	// 		// width: 100%;
	// 		// height: 440px;

	// 		.swiper-in {
	// 			width: 100%;
	// 			height: 440px;
	// 			color: #000;
	// 			background-color: #ddd;
	// 			line-height: 440px;
	// 			font-size: 34px;
	// 		}
	// 	}
	// }

</style>