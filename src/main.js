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
import './assets/css/swiper.min.css';
import './assets/js/swiper.js'
import VueTouch from 'vue-touch'        
Vue.use(VueTouch, {name: 'v-touch'}) 
VueTouch.config.swipe = {             threshold: 100 ,//手指左右滑动距离        
}
import LyTab from './components/go-shop';
Vue.use(LyTab);
import expertTips from './components/expertTips';
Vue.use(expertTips);
import recipes from './components/recipes';
Vue.use(recipes);
// require('swiper/dist/css/swiper.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
