import {createRouter, createWebHistory} from "vue-router";

import App from '../components/App'

const routes = [
    {
        path: '/',
        name: 'app',
        component: App
    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
