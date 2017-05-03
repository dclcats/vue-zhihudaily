import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

export default new Vuex.Store( {
	state: {
		nav: false,
		cid: 0,
		lid: 0,
		titleName: '',
		editors: []
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
		},
		setEditors(state, data) {
			if(!!data) {
				state.editors = data
				console.log(state.editors instanceof Array)
			}
		}
	}
} )