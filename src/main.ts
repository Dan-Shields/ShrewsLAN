import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

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
