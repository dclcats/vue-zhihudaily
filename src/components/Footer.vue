<template>
	<div class="footer">
		<div class="content fbox" v-if="content">
			<span class="bk arrow" @click="backroute"></span>
	        <span class="gt arrow"></span>
	        <span class="dz num"><em>{{dz}}</em></span>
	        <span class="share"></span>
	        <span class="comments num"  @click="backContent"><em>{{comments}}</em></span>
		</div>
		<div class="ct fbox" v-if="ct">
			<span class="bk arrow" @click="backroute"></span>
	        <p></p>
		</div>
        
	</div>
</template>

<script>
	import api from "../api/index.js"
	import { mapState } from "vuex"

	export default {
		data() {
			return {
				content: false,
				ct: false,
				dz: 0,
				comments: 0
			}
		},
		created() {
			var name = this.$route.name;
			var _this = this;
			if(/Content/i.test(this.$route.name)) {
				_this.content = true;
				api.getMessage('newsInfo', this.$route.params.id).then(function(data) {
					_this.dz = data.data.popularity;
					_this.comments = data.data.comments;
				})
			}
			if(/Comments/i.test(this.$route.name)) {
				_this.comments = true;
			}
		},
		computed: {
		},
		methods: {
	        backroute() {
	        	if(window.history.length > 1) {
	        		this.$router.go(-1)
	        	} else {
	        		this.$router.push({
	        			name: 'List'
	        		})
	        	}
	        },
	        backContent() {
	        	console.log('as');
	        	var _this = this;
	        	this.$store.commit('setTitleName', this.comments + "条评论");
	        	this.$store.commit('toMenu', false)
	        	this.$router.push({
	        		name: "Comments",
	        		params: {
	        			id: _this.$route.params.id
	        		}
	        	})
	        }
		}
	}
</script>

<style lang="scss" scoped>

	.footer {
		// display: flex;
		// align-items: center;
		position: fixed;
		height: 60px;
		width: 100%;
		bottom: 0;
		font: normal 32px/60px Serif;
		box-shadow: 0px -2px 11px #dadada;
		background-color: rgba(255, 255, 255, 1);
		
		.fbox {
			display: flex;
			align-items: center;
			height: 100%;
		}

		span {
			flex: 1;
			&.arrow {
				&:before {
					content: '';
					display: inline-block;
					width: 20px;
		        	height: 20px;
		        	border: {
			        	left: 1px solid #000;
			        	bottom: 1px solid #000;
			        }
			        transform: rotate(45deg);
				}
			}
			&.gt {
				&:before {
					transform: rotate(135deg);
					margin-bottom: -5px;
				}
			}
		}

		.dz {
			height: 100%;
			background: url(../assets/like.png) center center no-repeat;

			
		}

		.num {
			position: relative;
			em {
				position: absolute;
				display: block;
			    height: 12px;
			    font-size: 12px;
			    top: -19px;
			    left: 82px;
			}
		}

		.share {
			height: 100%;
			background: url(../assets/share.png) center center no-repeat;
		}

		.comments {
			height: 100%;
			background: url('../assets/comments.png') center center no-repeat;
		}



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