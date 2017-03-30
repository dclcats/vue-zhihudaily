import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Content from '@/components/Content'
import List from '@/components/List'
// import ListId from '@/components/List'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/List'
		},
		{
		  path: '/Hello',
		  name: 'Hello',
		  component: Hello
		},
		{
		  path: '/Content/:id',
		  name: 'Content',
		  component: Content
		},
		{
		  path: '/List/:id',
		  name: 'ListId',
		  component: List
		},
		{
		  path: '/List',
		  name: 'List',
		  component: List
		}
	]
})
