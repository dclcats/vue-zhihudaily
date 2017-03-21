
## API分析

### 启动界面图像获取
+ URL：http://news-at.zhihu.com/api/4/start-image/1080*1776
+ start-image 后为图像分辨率， 接受 n * n 格式，n为任意值， 返回值相同
+ 相应实例 
	``` stylus
	{
		text: "© Fido Dido",
		img: "http://p2.zhimg.com/10/7b/107bb4894b46d75a892da6fa80ef504a.jpg"
	}
	```
+ 分析
	+ text： 版权信息
	+ img： 图像的URL

### 最新消息获取

+ URL： http://news-at.zhihu.com/api/4/news/latest
+ 分析：
	+ data： 日期
	+ stories： 当日新闻
		+ title： 新闻标题
		+ images： 图像地址， （可能无图片）
		+ ga_prefix：供 Google Anilytics 使用
		+ type：。。。
		+ id：定位文章内容的具体位置
		+ multipic：消息是包含多张图片的
	+ top_stories：界面顶部滚动显示内容 具体参数内同参见 stories

### 消息内容获取与离线下载




此信息参见与 
https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90