// main.js
import { createApp } from 'vue';
import { router } from './router'; // Import the router configuration
import './assets/css/main.css';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
