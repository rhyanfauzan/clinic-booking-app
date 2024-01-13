// main.js
import { createApp } from 'vue';
import { router } from './router'; // Import the router configuration
import './assets/css/main.css';

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import App from './App.vue';

const app = createApp(App);
app.component('VueDatePicker', VueDatePicker);
app.use(router);
app.mount('#app');
