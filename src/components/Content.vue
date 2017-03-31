<template>
	<div class="content">
		<div class="loading" v-if="loading">Loading...</div>
		<div>
			<div>
				<img v-if="!!data.image" :src="data.image" :alt="data.image_source">
				<p>{{data.title}}</p>
			</div>
			<div v-html="data.body"></div>
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
	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: auto;

		.loading {
			position: absolute;
			width: 100%;
			font-size: 34px;
			padding-top: 400px;
		}
	}
</style>