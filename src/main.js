
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'


import 'swiper/dist/css/swiper.css'

// mount with global
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	template: '<App/>',
	components: { App }
})