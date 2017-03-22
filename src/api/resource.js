
import { API_ROOT } from './config.js'

const apiList = {
	startImage: '4/start-image/',	//开机动画图
	news: '4/news/latest', 			//最新消息列表获取
	newsDate: '4/news/before/',		//按时间获取过往消息列表
	newsDetail: '4/news/',			//文章详情
	newsInfo: '4/story-extra/',		//文章评论等信息
	newsStory: '4/story/',			//文章评论等详情获取
	newsThemes: '4/themes',			//分类列表
	newsThemeDetail: '4/theme/',	//分类详情列表
}

export const startImage = API_ROOT.concat( apiList.startImage )
export const news = API_ROOT.concat( apiList.news )
export const newsDate = API_ROOT.concat( apiList.newsDate )
export const newsDetail = API_ROOT.concat( apiList.newsDetail )
export const newsInfo = API_ROOT.concat( apiList.newsInfo )
export const newsStory = API_ROOT.concat( apiList.newsStory )
export const newsThemes = API_ROOT.concat( apiList.newsThemes )
export const newsThemeDetail = API_ROOT.concat( apiList.newsThemeDetail )