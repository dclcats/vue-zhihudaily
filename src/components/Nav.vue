<template>
	<div class="nav" :class="{slide: nav}"  @click="navToggle">
		<div class="nav-content">
			<div class="nav-head">
				<div class="avatar"></div>
				<div class="user-name">{{ username }}</div>
			</div>
			<table  class="nav-settings">
				<tr>
					<td>收藏</td>
					<td>|</td>
					<td>消息</td>
					<td>|</td>
					<td>设置</td>
				</tr>
			</table>
			<ul class="nav-list">
				<li title="首页" data-id="0" @click="tolist(0, '首页')">首页</li>
				<li v-for="sub in subList" :title="sub.description" :data-id="sub.id" @click="tolist(sub.id, sub.name)"> {{ sub.name }} </li>
				<li v-for="list in othersList" :title="list.description" :data-id="list.id" @click="tolist(list.id, list.name)"> {{ list.name }} </li>
				<li data-id="-1"><a href="https://github.com/dclcats/vue-zhihudaily">GitHub</a></li>
			</ul>
		</div>
		<!-- <div class="nav-mark" :class="{opmark: nav}"></div> -->
	</div>
</template>

<script>
	import api from "../api/index.js"
	import { mapState } from "vuex"

	export default {
		data() {
			return {
				username: "知乎日报",
				subList: [],
				othersList: [],
				jumpId: ''
			}
		},
		computed: {
			...mapState({
	            nav: state => state.nav,
	        })
		},
		// computed() {
		mounted() {
		// created() {
			var that = this;
			api.getMessage('newsThemes').then(function(data) {
				// console.log(data)
				that.subList = data.data.subscribed;
				that.othersList = data.data.others;
				var lid = that.$route.params.id;
				if(!lid) {
					lid = 0;
				}
				setTimeout(function () {
					if(!!document.querySelector('.nav-list li[data-id="' + lid + '"]')) {
						// console.log(lid)
						document.querySelector('.nav-list li[data-id="' + lid + '"]').classList.add('nav-choice')
					}
				}, 0)
				
			}).catch(err => {
				console.log(err);
			});
		},
		methods: {
	        navToggle() {
	            this.$store.commit('toggle', false)
	        },
	        choiceId(id, name) {
	        	if(!!document.querySelector('.nav-choice')) {
	        		document.querySelector('.nav-choice').classList.remove('nav-choice')
	        	}
	        	
	        	document.querySelector('.nav-list [data-id="' + id + '"]').classList.add('nav-choice')

	        	this.$store.commit('setLid', id)
	        },
	        tolist(id, cname) {
	        	if(id === 0) {
	        		this.$store.commit('setTitleName', '今日热闻')
	        	} else {
	        		this.$store.commit('setTitleName', cname )
	        	}
	        	this.choiceId(id, cname)
        		this.$router.push({
	        		name: "ListId",
	        		params: {
	        			id: id
	        		}
	        	})
	        }
		}
	}
</script>

<style lang="scss" scoped>
	ul {
		list-style-type: none;
	}
	div.slide {
		left: 0;
		// animation: slided .5s ease-in-out forwards;
	}
	@keyframes slided {
		0% {
			left: -640px;
			// display: none;
		}
		2% {
			left: -420px;
		}
		100% {
			left: 0px;
			// display: block;
		}
	}
	.nav {
		position: fixed;
		width: 100%;
		height: 100%;
		line-height: 34px;
		z-index: 99;
		font-size: 24px;
		overflow: hidden;
		left: -640px;
		transition: left .6s;
		z-index: 99;
		// background-color: rgba(0, 0, 0, .5);

		.nav-mark {
			position: absolute;
			top: 0;
			left: 0;
			display: none;
			opacity: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .5);
		}

		.opmark {
			display: block;
			opacity: 1;
		}

		.nav-content {
			position: absolute;
			width: 420px;
			height: 100%;
			background-color: #252525;
    		color: #afadad;
		}
		
		.nav-head {
			height: 100px;
			width: 380px;
			float: left;
			line-height: 100px;
			padding: 20px 20px;

			div {
				float: left;
			}
			.avatar {
				width: 100px;
				height: 100px;
				border-radius: 100px;
				background: #000 url('../assets/avatar.jpg') left top no-repeat;
				background-size: contain;
			}
			.user-name {
				width: 280px;
				font-size: 28px;
				// padding-left: 24px;
				text-align: center;
				font-weight: bold;
			}
		}

		.nav-settings {
			height: 34px;
			width: 80%;
			// line-height: 34px;
			text-align: center;
			margin: 0 auto;
			td {
				letter-spacing: 3px;
			}
			

			// div {
			// 	float: left;
			// }
			// .cut {
			// 	margin: 0 10px;
			// }
			
		}

		.nav-list {
			position: absolute;
			clear: both;
			width: 100%;
			height: 100%;
			padding: 0;
			line-height: 70px;
			text-align: left;
			overflow-y: scroll;

			li {
				padding-left: 24px;
			}

			.nav-choice {
				background-color: #000;
				color: #fff;
				box-shadow: 0px 0px 6px 5px #000 inset;
			}
		}
	}
</style>