<template>
    <div class="bg-white w-full">
        <div class="container">
            <nav
                class="py-4 fixed w-full z-20 top-0 left-0 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
            >
                <div
                    class="container flex flex-wrap items-center justify-between mx-auto"
                >
                    <a href="#" class="flex items-center">
                        <img
                            src="http://127.0.0.1:8000/logo.png"
                            class="h-6 mr-3 sm:h-10"
                            alt="LaraFoods Logo"
                        />
                        <span
                            class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
                            >LARAFOODS</span
                        >
                    </a>
                    <button
                        data-collapse-toggle="navbar-dropdown"
                        type="button"
                        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        class="hidden w-full md:block md:w-auto"
                        id="navbar-dropdown"
                    >
                        <ul
                            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <li>
                                <router-link
                                    :to="{ name: 'Home' }"
                                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Home
                                </router-link>
                            </li>
                            <template v-if="!authenticated">
                                <li>
                                    <router-link
                                        :to="{ name: 'login' }"
                                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Login
                                    </router-link>
                                </li>
                                <li>
                                    <router-link
                                        :to="{ name: 'register' }"
                                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    >
                                        Sign Up
                                    </router-link>
                                </li>
                            </template>
                            <template v-else>
                                <li>
                                    <a
                                        href="#"
                                        @click="onLogout"
                                        class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                        >Logout</a
                                    >
                                </li>
                            </template>
                            <li>
                                <router-link
                                    to="/cart"
                                    class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    <div class="cart-icon-wrapper">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                        <span class="cart-item-count">5</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
    name: "Navbar",
    setup() {
        const store = useStore();
        // Dispatch an action from vuex
        const onLogout = () => store.dispatch("logout");
        // Get a data from the state getters
        const authenticated = computed(() => store.getters.authenticated);
        return {
            onLogout,
            authenticated,
        };
    },
};
</script>

<style scoped>
nav .router-link-exact-active {
    color: rgb(29 78 216);
}

.cart-icon-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}

.cart-item-count {
    position: absolute;
    top: -5px;
    left: 70%;
    z-index: 1;
    background: #111;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
