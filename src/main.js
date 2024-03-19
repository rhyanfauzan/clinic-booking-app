// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router'; // Import the router configuration
import './assets/css/main.css';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import App from './App.vue';
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.component('VueDatePicker', VueDatePicker);
app.mount('#app');
