import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
	state: {
		nav: false,
		cid: 0,
		lid: 0,
		titleName: ''
	},
	mutations: {
		toggle(state, ctoggle) {
			if(ctoggle) {
				state.nav = true
			} else {
				state.nav = false
			}
		},
		setLid(state, lid) {
			state.lid = lid
		},
		setTitleName(state, name) {
			if(!!name) {
				state.titleName = name
			}
		}
	}
} )