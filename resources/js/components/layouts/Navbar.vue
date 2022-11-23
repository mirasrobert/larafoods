<template>
    <div class="w-full py-3">
        <div class="antialiased bg-white">
            <div class="w-full text-gray-700 bg-white">
                <div
                    class="flex flex-col max-w-screen-xl px-4 mx-auto md:flex-row md:justify-between md:items-center md:px-6 lg:px-8">
                    <div class="flex flex-row items-center justify-between p-4">
                        <router-link to="/" class="flex items-center">
                            <img
                                src="http://127.0.0.1:8000/logo.png"
                                class="h-6 mr-3 sm:h-10"
                                alt="LaraFoods Logo"
                            />
                            <span
                                class="text-gray-900 self-center text-xl font-semibold whitespace-nowrap"
                            >LARAFOODS</span
                            >
                        </router-link>
                        <button
                            class="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                            @click="toggle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                    <nav
                        class="md:shadow-none md:justify-end md:flex md:flex-row items-center flex flex-col shadow-lg flex-grow pb-4 md:pb-0"
                        :class="{ hidden: !isOpen }">
                        <router-link
                            :to="{ name: 'Home' }"
                            class="block py-2 ml-8 pr-4 text-gray-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            Home
                        </router-link>

                        <template v-if="!authenticated">
                            <router-link
                                :to="{ name: 'login' }"
                                class="block py-2 ml-8 pr-4 text-gray-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Login
                            </router-link>
                            <router-link
                                :to="{ name: 'login' }"
                                class="block py-2 ml-8 pr-4 text-gray-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Sign Up
                            </router-link>
                        </template>
                        <template v-else>
                            <router-link
                                :to="{ name: 'add_product' }"
                                class="block py-2 ml-8 pr-4 text-gray-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Add Product
                            </router-link>
                            <a
                                @click.prevent="onLogout"
                                class="block py-2 ml-8 pr-4 text-gray-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                href="#"
                            >Logout</a>
                        </template>
                        <router-link
                            to="/cart"
                            class="block py-2 ml-8 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                            <div class="cart-icon-wrapper">
                                <div class="flex">
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
                                    <span class="md:hidden">[0]</span>
                                </div>

                                <span
                                    class="cart-item-count md:opacity-100 opacity-0"
                                >5</span
                                >
                            </div>
                        </router-link>
                    </nav>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import {ref, computed} from "vue";
import {useStore} from "vuex";

export default {
    name: "Navbar",
    setup() {
        const store = useStore();
        const isOpen = ref(false);
        // Dispatch an action from vuex
        const onLogout = () => store.dispatch("logout");
        // Get a data from the state getters
        const authenticated = computed(() => store.getters.authenticated);

        // Navbar collapse
        const toggle = () => {
            isOpen.value = !isOpen.value
        }

        return {
            onLogout,
            authenticated,
            isOpen,
            toggle
        };
    },
};
</script>

<style scoped>
nav .router-link-exact-active {
    color: rgb(29 78 216);
}

nav li {
    list-style: none;
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
