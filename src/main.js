import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
