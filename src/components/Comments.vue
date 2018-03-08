<template>
	<div class="comments">
		<div class="loading" v-if="loading">Loading...</div>
		<div class="lc" v-if="getdone">
			<p class="lc-tt">{{lc.length}} 条长评论</p>
			<div class="lc-box" v-for="data in lc" :key='data.id'>
				<img class="lc-avatar" :src="data.avatar" alt="头像">
				<div class="lc-com">
					<div>
						<span class="name">{{data.author}}</span>
						<span class="like"><em>{{data.likes}}</em></span>
					</div>
					<p class="lc-ct">{{data.content}}</p>
					<p class="lc-reply" v-if="!!data.reply_to"><span>//{{data.reply_to.author}}：</span>{{data.reply_to.content}}</p>
					<p class="time">{{st(data.time)}}</p>
				</div>
			</div>
			<p class="lc-tt">{{sc.length}} 条短评论</p>
			<div class="lc-box" v-for="data in sc" :key='data.id'>
				<img class="lc-avatar" :src="data.avatar" alt="头像">
				<div class="lc-com">
					<div>
						<span class="name">{{data.author}}</span>
						<span class="like"><em>{{data.likes}}</em></span>
					</div>
					<p class="lc-ct">{{data.content}}</p>
					<p class="lc-reply" v-if="!!data.reply_to"><span>//{{data.reply_to.author}}：</span>{{data.reply_to.content}}</p>
					<p class="time">{{st(data.time)}}</p>
				</div>
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
				loading: true,
				getdone: false,
				lc: [],
				sc: [],
				time: ''
			}
		},
		created() {
			this.getCon();
		},
		watch: {
			"$route": 'getCon'
		},
		methods: {
			getCon() {
				if(!/comments/i.test(this.$route.name)) {
					this.lc = []
					this.sc = []
					return
				}
				this.loading = true;
				this.getdone = false;
				var _this = this;
				api.getMessage('newsStory', this.$route.params.id + "/long-comments").then((data) => {
					_this.lc = data.data.comments;
				});
				api.getMessage('newsStory', this.$route.params.id + "/short-comments").then((data) => {
					_this.sc = data.data.comments
					_this.loading = false;
					_this.getdone = true;
				});
			},
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
		top: 60px;
		left: 0px;
		right: 0px;
		bottom: 60px;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		letter-spacing: 1px;
	}

	.lc {
		font-size: 22px;
		text-align: left;
		.lc-tt {
			height: 60px;
			font-size: 26px;
			font-weight: bold;
			line-height: 60px;
			padding-left: 20px;
			border-bottom: 1px solid #ddd;
		}

		.lc-box {
			display: flex;
			flex-items: row wrap;
			align-items: flex-start;
			border-bottom: 1px solid #ddd;

			.lc-avatar {
				flex: 0 0 50px;
				width: 50px;
				margin: 20px;
				border-radius: 50px;
			}

			.like {
				position: relative;
				width: 90px;
				height: 100%;
    			background: url('../assets/like00.png') center center no-repeat;

    			em {
    				position: absolute;
    				top: 0;
    				left: 61px;
    			}
			}

			.lc-com {
				flex: 1;
				margin-right: 20px;
				&>div {
					height: 45px;
					display: flex;
					align-items: center;
					justify-content: space-between;

					.name {
						font-size: 24px;
						font-weight: bold;
					}
				}

				.lc-reply {
					margin-top: 12px;

					span {
						font-weight: bold;
					}
				}

				.time {
					height: 50px;
					line-height: 50px;
				}
			}
		}
	}
</style>