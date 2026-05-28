import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { Toaster } from "vue-sonner";
import { setupInterceptors } from './api/interceptor.js';

import router from "./router";
import pinia from "./stores"


setupInterceptors();

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
