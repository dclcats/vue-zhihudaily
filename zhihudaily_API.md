
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

+ URL：http://news-at.zhihu.com/api/4/news/3892357 （最后一串数字为ID 即该条文章信息的id 在消息列表里的）
+ 分析：
	+ body：HTML 格式的新闻
	+ image-source：图片提供方（来源）
	+ title：新闻标题
	+ image：文章浏览界面的（顶部）大图
	+ share_url：提供在线查看与内容分享值SNS的URL（文章的位置）
	+ js：供手机端的WebView（UIWebView）使用
	+ recommenders：此文章推荐者
	+ section：栏目信息
		+ thumbnail：栏目的缩略图
		+ id：该栏目的id
		+ name：该栏目的名称
	+ type：新闻类型
	+ id：新闻的id
	+ css：供手机端的WebView（UIWebView）使用
		+ 可知，知乎日报的文章浏览界面利用 WebView(UIWebView) 实现

### 过往消息（之前）

+ URL：http://news-at.zhihu.com/api/4/news/before/20131119
+ 连接中日期比实际日期后退一天， 就像上一行链接返回的是 2013年11月18日的消息
+ 知乎日报在2013年5月19日诞生， 所以连接中数字小于20130520， 返回空消息
+ 返回 data 和 stories 没有 top_stories 其他参数如最新消息

### 新闻额外消息

+ URL：http://news-at.zhihu.com/api/4/story-extra/#{id}
+ 该消息主要为ID指向文章的额外消息， 如评论、赞数， 只显示数量不显示具体信息
+ 分析：
	+ long_comments：长评论总数
	+ popularity：点赞总数
	+ short_comments：短评论总数
	+ comments：评论总数

### 新闻对应长评论查看

+ URL：http://news-at.zhihu.com/api/4/story/8997528/long-comments
+ id 为文章对应的id
+ 分析：
	+ comments：长评论列表，数组（长度可为零）
		+ author：评论作者
		+ content：评论的内容
		+ avatar：用户头像图片的地址
		+ id：评论者的唯一标示符
		+ likes：评论所获 赞 的数量
		+ time：评论时间
		+ reply_to：所回复的消息
			+ content：原消息的内容
			+ status：消息状态，0为正常， 非0为已被删除
			+ id：被回复者的唯一标示
			+ author：被回复者
			+ err_msg：错误消息，仅当status非0时出现

### 新闻对应短评论
+ URL：http://news-at.zhihu.com/api/4/story/8997528/short-comments

### 新闻对应所有评论
+ URL：http://news-at.zhihu.com/api/4/story/8997528/comments

### 主题日报列表查看（分类信息）

+ URL：http://news-at.zhihu.com/api/4/themes
+ 分析：
	+ limit：返回数目值限制（未确认）
	+ subscribed：已订阅条目
	+ others：其他条目
		+ color：颜色，作用未知
		+ thumbnail：供显示的图片地址
		+ description：主题日报的介绍
		+ id：该日报的编号（用于定位到该分类）
		+ name：供显示的主题日报名称

### 主题日报内容查看（按照分类信息查看）

+ URL：http://news-at.zhihu.com/api/4/theme/11
+ 通过分类信息的id定位到该分类下的文章信息
+ 分析：
	+ stories：该主题日报中的文章列表
		+ images：图像地址（如果有）
		+ type：类型
		+ title：消息的标题
		+ id：文章唯一标志
	+ description：该主题日报的介绍
	+ background：该主题日报的背景图片（大图）
	+ color：颜色
	+ name：该主题日报的名称
	+ image：背景图片的小图版本
	+ editors：该主题日报的编辑（有可能为空也可能为多人，数组）
		+ url：主编的知乎用户主页
		+ bio：主编的个人简介
		+ id：数据库中的唯一标示符
		+ avatar：主编的头像
		+ name：主编的姓名
	+ image_source：图像的版权信息

### 热门消息

+ URL：http://news-at.zhihu.com/api/3/news/hot
+ 分析： 
	+ recent：热门信息（数组）
		+ news_id：文章的id
		+ thumbnail：缩略图
		+ title：标题
		+ url：文章信息获取位置（返回 JSON数据）



此信息参见与 
https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90