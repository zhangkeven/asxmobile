import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import StartProduct from '@/pages/startProduct/startProduct'
import Room from '@/pages/room/room'
import CompanyProfile from '@/pages/about/companyProfile'
import CompanyIntroduction from '@/pages/about/companyIntroduction'
import HistoricalEvents from '@/pages/about/historicalEvents'
import NewCenter from '@/pages/about/newCenter'
import CallUs from '@/pages/about/callUs'
import Share from '@/pages/share/share'
import Buy from '@/pages/goshopping/buy'
import Cart from '@/pages/cart/cart'
import Person from '@/pages/personcenter/person'
import Recommend from '@/pages/recommend/recommend'
import RecommendDetail from '@/pages/recommend/recommendDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
	 {
	  path: '/StartProduct',
	  name: 'StartProduct',
	  component: StartProduct
	},
		{
		  path: '/Room',
		  name: 'Room',
		  component: Room
		},
		{
		  path: '/CompanyProfile',
		  name: 'CompanyProfile',
		  component: CompanyProfile
		},
		{
		  path: '/CompanyIntroduction',
		  name: 'CompanyIntroduction',
		  component: CompanyIntroduction
		},
		{
		  path: '/HistoricalEvents',
		  name: 'HistoricalEvents',
		  component: HistoricalEvents
		},
		{
		  path: '/NewCenter',
		  name: 'NewCenter',
		  component: NewCenter
		},
		{
		  path: '/CallUs',
		  name: 'CallUs',
		  component: CallUs
		},
		{
		  path: '/Share',
		  name: 'Share',
		  component: Share
		},
		{
		  path: '/Buy',
		  name: 'Buy',
		  component: Buy
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
		  component: Recommend
		},
		{
		  path: '/RecommendDetail',
		  name: 'RecommendDetail',
		  component: RecommendDetail
		},
  ],
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
