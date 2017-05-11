
const config = {
	protocol: 'http://',
	common: 'news-at.zhihu.com/api/',
}

const config1 = {
	protocol: 'https://',
	site: 'test-zhihu.herokuapp.com/api'
}


export const API_ROOT = config1.protocol.concat(config1.site)
// export const API_ROOT = config.protocol.concat(config.common)
// export const API_ROOT = '/api'