<template>
	<div class="nav"  @click="navToggle">
		<div class="nav-content">
			<div class="nav-head">
				<div class="avatar"></div>
				<div class="user-name">{{ username }}</div>
			</div>
			<!-- <div class="nav-settings">
				<div class="colloct">收藏</div>
				<div class="cut">|</div>
				<div class="message">消息</div>
				<div class="cut">|</div>
				<div class="settings">设置</div>
			</div> -->
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
				<li v-for="sub in subList" :title="sub.description" :data-id="sub.id" @click=""> {{ sub.name }} </li>
				<li v-for="list in othersList" :title="list.description" :data-id="list.id" @click="choiceId"> {{ list.name }} </li>
			</ul>
		</div>
		<!-- <div class="nav-mark"></div> -->
	</div>
</template>

<script>
	import api from "../api/index.js"
	import { mapState } from "vuex"

	export default {
		data() {
			return {
				username: "地理热吧",
				subList: [],
				othersList: [],
				jumpId: ''
			}
		},
		computed: {
			// ...mapState({
	  //           lid: state => state.lid,
	  //       })
		},
		mounted() {
			var that = this;
			api.getMessage('newsThemes').then(function(data) {
				// console.log(data)
				that.subList = data.data.subscribed;
				that.othersList = data.data.others;
				// console.log(lid)
				setTimeout(function () {
					if(!!document.querySelector('.nav-list li[data-id="' + that.$store.state.lid + '"]')) {
						// console.log(that.$store.state.lid)
						document.querySelector('.nav-list li[data-id="' + that.$store.state.lid + '"]').classList.add('nav-choice')
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
	        choiceId(e) {
	        	if(!!document.querySelector('.nav-choice')) {
	        		document.querySelector('.nav-choice').classList.remove('nav-choice')
	        	}
	        	
	        	e.target.classList.add('nav-choice')

	        	this.$store.commit('setLid', e.target.dataset['id'])
	        }
		}
	}
</script>

<style lang="scss" scoped>
	
	.nav-list {
		list-style-type: none;
	}
</style>

<style lang="scss">
	.nav {
		position: absolute;
		width: 100%;
		height: 100%;
		line-height: 34px;
		z-index: 99;
		font-size: 24px;
		overflow: hidden;
		// background-color: rgba(0, 0, 0, .5);

		.nav-content {
			width: 420px;
			height: 100%;
			background-color: #ddd;
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
				background: #000 url('../assets/logo.png') left top no-repeat;
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
			clear: both;
			padding: 0;
			line-height: 70px;
			text-align: left;

			li {
				padding-left: 24px;
			}

			.nav-choice {
				background-color: #868686;
				color: #fff;
			}
		}
	}
</style>