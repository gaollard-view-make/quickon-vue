// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './assets/styles/base.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { registerComponent } from '../mobile/registerComponent';

import '../static/UE/ueditor.config.js';
import '../static/UE/ueditor.all.min.js';
import '../static/UE/lang/zh-cn/zh-cn.js';
import '../static/UE/ueditor.parse.min.js';

registerComponent(Vue);

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
