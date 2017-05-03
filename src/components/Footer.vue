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
	        text-align: left;
	        width: 60px;
	        height: 60px;
	        -webkit-tap-highlight-color:rgba(0,0,0,0);
	        
	        &:before {
	        	content: "";
	        	display: inline-block;
	        	width: 20px;
	        	height: 20px;
	        	margin: 20px;
	        	border: {
		        	left: 1px solid #000;
		        	bottom: 1px solid #000;
		        }
		        transform: rotate(45deg);

	        }
	    }
	}
</style>