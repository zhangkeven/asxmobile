// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/initial.css'
import ElementUI from 'element-ui'
import './assets/theme-chalk/index.css'
Vue.use(ElementUI)
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
import VueMeta from 'vue-meta'
Vue.use(VueMeta)
import './assets/css/swiper.min.css';
import './assets/js/swiper.js'
import VueTouch from 'vue-touch'       
Vue.use(VueTouch, {name: 'v-touch'}) 
VueTouch.config.swipe = {             threshold: 100 ,//手指左右滑动距离       
}
import GoShop from './components/go-shop';
Vue.use(GoShop);
import expertTips from './components/expertTips';
Vue.use(expertTips);
import recipes from './components/recipes';
Vue.use(recipes);
import LyTab from './components/ly-tab';
Vue.use(LyTab);
// require('swiper/dist/css/swiper.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
})
	//main.js里面的代码
  router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});
