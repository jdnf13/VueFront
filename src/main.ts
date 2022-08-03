import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import "bulma";
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
