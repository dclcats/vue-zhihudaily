<template>
	<div class="list">
		<div class="top-slide"  v-for="topList in topStories"></div>
		<div class="list-message" v-for="list in stories">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topStories: [],
				stories: []
			}
		}
	}
</script>