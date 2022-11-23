import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Product from "../pages/Product";
import AddProduct from "../pages/products/AddProduct";

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
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
    },
    {
        path: "/product/add",
        name: "add_product",
        component: AddProduct,
    },
    {
        path: "/product/:id",
        name: "product",
        component: Product,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router;
