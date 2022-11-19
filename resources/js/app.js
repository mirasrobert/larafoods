require('./bootstrap');

import {createApp} from 'vue'
import router from './router'

import App from './components/App'

const app = createApp({});
app.component('app', App);
app.use(router);
app.mount('#app');
