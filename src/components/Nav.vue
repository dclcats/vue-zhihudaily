<template>
	<div class="nav">
		<div class="nav-head">
			<div class="avatar">
				<img src="../assets/logo.png" height="200" width="200" alt="">
			</div>
			<div class="user-name">{{ username }}</div>
		</div>
		<div class="nav-settings">
			<div class="colloct">收藏</div>
			<div class="message">消息</div>
			<div class="settings">设置</div>
		</div>
		<ul class="nav-list">
			<li v-for="sub in subList" :title="sub.description" @click=""> {{ sub.name }} </li>
			<li v-for="list in othersList" :title="list.description"> {{ list.name }} </li>
		</ul>
	</div>
</template>

<script>
	import api from "../api/index.js"

	export default {
		data() {
			return {
				username: "Chris",
				subList: [],
				othersList: []
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
		width: 450px;
		height: 100%;
		background-color: #ddd;
		z-index: 99;
	}
</style>