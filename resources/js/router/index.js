import {createRouter, createWebHistory} from "vue-router";

import Home from '../pages/Home'
import Login from '../pages/Login'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
