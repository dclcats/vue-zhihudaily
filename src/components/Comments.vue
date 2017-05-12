<template>
	<div class="comments">
		<div class="lc">
			<p class="lc-tt">{{lc.length}}条长评论</p>
			<div class="lc-box" v-for="data in lc">
				<img :src="data.avatar" alt="头像">
				<div>
					<div>
						<span class="name">{{data.author}}</span>
						<span class="like"><em>{{data.likes}}</em></span>
					</div>
					<p class="lc-ct">{{data.content}}</p>
					<p class="time">{{st(data.time)}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import api from "../api/index.js"

	export default {
		data() {
			return {
				lc: [],
				sc: [],
				time: ''
			}
		},
		created() {
			var _this = this;
			api.getMessage('newsStory', this.$route.params.id + "/long-comments").then((data) => {
				_this.lc = data.data.comments
			});
			api.getMessage('newsStory', this.$route.params.id + "/short-comments").then((data) => {
				_this.sc = data.data.comments
			});
		},
		methods: {
			st(time) {
				var a = new Date();
				a.setTime(time*1000);
				var time = a.getMonth() + 1 + '-' + a.getDate() + ' ' + (a.getHours() >= 10 ? a.getHours() : '0' + a.getHours()) + ':' + (a.getMinutes() >= 10 ? a.getMinutes() : '0' + a.getMinutes());
				return time
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comments {
		position: absolute;
		margin-top: 60px;
		top: 0px;
		bottom: 60px;
		overflow-y: scroll;
	}

	.lc {
		font-size: 18px;
		text-align: left;
		.lc-tt {
			height: 50px;
			font-weight: bold;
			line-height: 50px; 
		}
	}
</style>