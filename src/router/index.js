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
import Cart from '@/pages/cart/cart'
import Person from '@/pages/personcenter/person'
import Recommend from '@/pages/recommend/recommend'
import RecommendDetail from '@/pages/recommend/recommendDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
			meta: {
				title: "阿莎希",
				content: 'disable'
			}
    },
	 {
	  path: '/StartProduct',
	  name: 'StartProduct',
	  component: StartProduct,
			meta: {
				title: "明星产品",
				content: 'disable'
			}
	},
		{
		  path: '/Room',
		  name: 'Room',
		  component: Room,
			meta: {
				title: "料理教室",
				content: 'disable'
			}
		},
		{
		  path: '/CompanyProfile',
		  name: 'CompanyProfile',
		  component: CompanyProfile,
			meta: {
				title: "公司简介",
				content: 'disable'
			}
		},
		{
		  path: '/CompanyIntroduction',
		  name: 'CompanyIntroduction',
		  component: CompanyIntroduction,
			meta: {
				title: "公司概要",
				content: 'disable'
			}
		},
		{
		  path: '/HistoricalEvents',
		  name: 'HistoricalEvents',
		  component: HistoricalEvents,
			meta: {
				title: "历史事件",
				content: 'disable'
			}
		},
		{
		  path: '/NewCenter',
		  name: 'NewCenter',
		  component: NewCenter,
			meta: {
				title: "新闻中心",
				content: 'disable'
			}
		},
		{
		  path: '/CallUs',
		  name: 'CallUs',
		  component: CallUs,
			meta: {
				title: "联系我们",
				content: 'disable'
			}
		},
		{
		  path: '/Share',
		  name: 'Share',
		  component: Share,
			meta: {
				title: "使用者分享",
				content: 'disable'
			}
		},
		{
		  path: '/Cart',
		  name: 'Cart',
		  component: Cart,
			meta: {
				title: "购物车",
				content: 'disable'
			}
		},
		{
		  path: '/Person',
		  name: 'Person',
		  component: Share,
			meta: {
				title: "个人中心",
				content: 'disable'
			}
		},
		{
		  path: '/Recommend',
		  name: 'Recommend',
		  component: Recommend,
			meta: {
				title: "推荐专栏",
				content: 'disable'
			}
		},
		{
		  path: '/RecommendDetail',
		  name: 'RecommendDetail',
		  component: RecommendDetail,
			meta: {
				title: "推荐专栏详情",
				content: 'disable'
			}
		},
  ],
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
