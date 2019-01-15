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
Vue.config.productionTip = false
require('swiper/dist/css/swiper.css')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
