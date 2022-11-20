require('./bootstrap');

import {createApp} from 'vue'
import router from './router'
import store from "./store";

import AppRoot from "./AppRoot";

// Subscriber runs for every vuex mutation
require("./store/subscriber");

store.dispatch("attempt", localStorage.getItem("token")).then(() => {
    // After loading the ME api
    // Then render the vue

    const app = createApp(AppRoot);
    app.use(store);  // VUEX
    app.use(router); // VUE-ROUTER
    app.mount('#app');

});


