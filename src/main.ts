import 'babel-polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

library.add(faTimes);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.filter('two_digits', function (value: string | number) {
  if (value.toString().length <= 1) {
    return '0' + value.toString();
  }

  return value.toString();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
