import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
	state: {
		nav: false,
	},
	mutations: {
		toggle(state, ctoggle) {
			if(ctoggle) {
				state.nav = true
			} else {
				state.nav = false
			}
		}
	}
} )