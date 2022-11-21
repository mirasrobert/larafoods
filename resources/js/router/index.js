import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
