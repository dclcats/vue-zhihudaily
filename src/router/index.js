import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Header from '@/components/Header'
import Content from '@/components/Content'
import List from '@/components/List'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/Hello'
		},
		{
		  path: '/Hello',
		  name: 'Hello',
		  component: Hello
		},
		{
		  path: '/Header',
		  name: 'Header',
		  component: Header
		},
		{
		  path: '/Content',
		  name: 'Content',
		  component: Content
		},
		{
		  path: '/List',
		  name: 'List',
		  component: List
		},
		{
		  path: '/Nav',
		  name: 'Nav',
		  component: Nav
		}
	]
})
