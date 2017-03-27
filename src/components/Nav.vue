<template>
	<div class="nav">
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
			<li v-for="sub in subList" :title="sub.description" @click=""> {{ sub.name }} </li>
			<li v-for="list in othersList" :title="list.description" @click=""> {{ list.name }} </li>
		</ul>
	</div>
</template>

<script>
	import api from "../api/index.js"

	export default {
		data() {
			return {
				username: "地理热吧",
				subList: [],
				othersList: [],
				jumpId: ''
			}
		},
		mounted() {
			var that = this;
			api.getMessage('newsThemes').then(function(data) {
				// console.log(data)
				that.subList = data.data.subscribed;
				that.othersList = data.data.others;
			}).catch(err => {
				console.log(err);
			});
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
		width: 420px;
		height: 100%;
		line-height: 34px;
		background-color: #ddd;
		z-index: 99;
		font-size: 24px;
		overflow: hidden;
		
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
		}
	}
</style>