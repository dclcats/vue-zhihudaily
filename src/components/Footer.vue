<template>
	<div class="footer">
        <p @click="backroute"><=</p>
	</div>
</template>

<script>
	import { mapState } from "vuex"

	export default {
		data() {
			return {
			}
		},
		computed: {
		},
		methods: {
	        backroute() {
	            this.$router.go(-1)
	        }
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
	    position: fixed;
	    bottom: -1px;
	    left: 0;
	    height: 44px;
	    background-color: #ddd;
	    font-size: 0;
	    width: 100%;
	    margin: 0;
	    z-index: 99;
	    p {
	        font-size: 28px;
	        text-align: left;
	    }
	}
</style>