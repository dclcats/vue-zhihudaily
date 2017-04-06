
import axios from 'axios'
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

// const apiList = {
// 	startImage: '4/start-image/',	//开机动画图
// 	news: '/4/news/latest', 			//最新消息列表获取
// 	newsDate: '/4/news/before/',		//按时间获取过往消息列表
// 	newsDetail: '/4/news/',			//文章详情
// 	newsInfo: '/4/story-extra/',		//文章评论等信息
// 	newsStory: '/4/story/',			//文章评论等详情获取
// 	newsThemes: '/4/themes',			//分类列表
// 	newsThemeDetail: '/4/theme/',	//分类详情列表
// }

export default {
	//获取信息函数第一参数为apiList 的属性， 第二参数为需要id等属性的动态地址路径。该函数为以下函数的汇总
	getMessage(local='news', id='') {
		// console.log(API_ROOT.concat(apiList[local], id))
		return axios.get( API_ROOT.concat(apiList[local], id) )
	},

	//获取信息函数的分类，每个函数作用是独立的， 与apiList中属性一一对应
	getStart(size) {		//获取开机动画图函数
		// return axios.get( startImage + size )
		return axios.get( API_ROOT.concat(apiList.startImage, size) )
	},
	getNews() {		//获取最新消息函数
		// return axios.get( news )
		return axios.get( API_ROOT.concat(apiList.news) )
	},
	getNewsDate(date) {		//按时间获取过往消息列表函数
		// return axios.get( newsDate + date )
		return axios.get( API_ROOT.concat(apiList.newsDate, date) )
	},
	getNewsDetail(id) {
		// return axios.get( newsDetail + id )
		return axios.get( API_ROOT.concat(apiList.newsDetail, id) )
	},
	getNewsInfo(id) {
		// return axios.get( newsInfo + id )
		return axios.get( API_ROOT.concat(apiList.newsInfo, id) )
	},
	getNewsStory(idMessage) {
		// return axios.get( newsStory + idMessage )
		return axios.get( API_ROOT.concat(apiList.newsStory,idMessage) )
	},
	getThemes() {
		// console.log(API_ROOT.concat(apiList.newsThemes))
		// return axios.get( newsThemes )
		return axios.get( API_ROOT.concat(apiList.newsThemes) )
	},
	getThemeDetail(themeId) {
		// return axios.get( newsThemeDetail + themeId )
		return axios.get( API_ROOT.concat(apiList.newsThemeDetail, themeId) )
	},
}