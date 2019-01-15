import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Share from '@/pages/share/share'
import Cart from '@/pages/cart/cart'
import Person from '@/pages/personcenter/person'
import Recommend from '@/pages/recommend/recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
		{
		  path: '/Share',
		  name: 'Share',
		  component: Share
		},
		{
		  path: '/Cart',
		  name: 'Cart',
		  component: Cart
		},
		{
		  path: '/Person',
		  name: 'Person',
		  component: Share
		},
		{
		  path: '/Recommend',
		  name: 'Recommend',
		  component: Share
		},
  ]
})
