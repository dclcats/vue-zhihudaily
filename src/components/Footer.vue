<template>
	<div class="footer">
        <p @click="backroute"></p>
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
	        	// console.log(window.history.length)
	        	if(window.history.length > 1) {
	        		this.$router.go(-1)
	        	} else {
	        		this.$router.push({
	        			name: 'List'
	        		})
	        	}
	            
	        }
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		position: fixed;
		height: 60px;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		text-align: center;
		font: normal 32px/60px Serif;
		border-top: 1px solid #dcdcdc;
		background-color: rgba(255, 255, 255, 1);
		
	    p {
	        font-size: 28px;
	        text-align: left;
	        padding-left: 22px;
	        width: 34px;
	        -webkit-tap-highlight-color:rgba(0,0,0,0);

	        &:before {
	        	content: "<";
	        }
	    }
	}
</style>