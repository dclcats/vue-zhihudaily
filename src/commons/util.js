
const util = {
	slideNum: 0,
	numX: 0,
	tstart: function (e) {
		this.slideNum = 0;
		this.numX = e.touches[0].pageX;
		this.numY = e.touches[0].pageY;
	},
	tmove: function (e) {
		var moveNumX = e.touches[0].pageX;
		var moveNumY = e.touches[0].pageY;
		if(Math.abs(moveNumY - this.numY) > Math.abs(moveNumX - this.numX)) {
			this.slideNum = 0
		} else {
			if(moveNumX - this.num > 10) {
				this.slideNum = 1
			} else if(this.num - moveNumX > 10) {
				this.slideNum = -1
			} else {
				this.slideNum = 0
			}
			
			e.preventDefault();
			e.stopPropagation();
		}
	},
	tend: (e) => {
		return this.slideNum
	},
	foo: function () {
		this.num = 9
		console.log(':',this.num,util.num,":")
	},
	bar: () => {

	}
}

export default util;