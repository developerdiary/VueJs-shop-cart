import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import jQuery from 'jquery'
global.jQuery = jQuery

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
