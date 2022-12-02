import Vue from 'vue';
import App from './App.vue';
import router from './router';
import install from '../src/index';

// 代码高亮
import 'highlight.js/styles/color-brewer.css';

Vue.config.productionTip = false;
install(Vue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
