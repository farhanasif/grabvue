import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'popper.js'; 
import 'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false

Vue.component("Navbar", require("./components/layout/Navbar.vue").default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
