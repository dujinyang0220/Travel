// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import App from "./App";
import router from "./router";
import "swiper/dist/css/swiper.css";
import store from "./store";
//import fastClick from "fastclick";
import "styles/reset.css";
import "styles/border.css";
import "styles/iconfont.css";
Vue.config.productionTip = false;

//fastClick.attach(document.body);
// 1像素边框问题
/* eslint-disable no-new */
//轮播
Vue.use(VueAwesomeSwiper);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
//路由就是根据网址的不同，来展示不同的网页
