import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import Vuetify from 'vuetify';
import Notifications from 'vue-notification';

Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';
Vue.use(Notifications);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
