<template>
	<div class="nav">
		<div class="nav-head">
			<div class="avatar">
				<img src="../assets/logo.png" height="200" width="200" alt="">
			</div>
			<div class="user-name">{{ username }}</div>
		</div>
		<div class="nav-settings">
			<div class="colloct"></div>
			<div class="message"></div>
			<div class="settings"></div>
		</div>
		<div class="nav-list"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: "Chris"
			}
		}
	}
</script>

<style scoped>
	.nav-contents {
		width: 450px;
		height: 100%;
		background-color: #ddd;
	}
</style>