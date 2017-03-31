// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

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

// router.beforeEach((to, from, next) => {
// 	if( to.path.search(/\/list/i) !== -1 ) {
// 		store.commit('toggleHead', true)
// 		console.log(to.path, 'true')
// 	} else {
// 		store.commit('toggleHead', false)
// 		console.log(to.path, 'false')
// 	}
// 	next()
// })