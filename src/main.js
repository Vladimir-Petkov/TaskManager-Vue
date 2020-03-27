import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Vuetify from 'vuetify';

Vue.use(VueRouter);
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
