<template>
    <div v-if="isLoading" class="flex items-center justify-center min-h-screen w-full">
        <pulse-loader color="#1A56DB" size="40px"></pulse-loader>
    </div>
    <div v-else class="container pb-10 pt-3">
        <h1 class="text-3xl font-bold text-center mb-16">Shopping Cart</h1>
        <div v-if="cart.length === 0">
            <AlertMessage text="Your cart is currently empty." />
        </div>
        <div v-else
            class="grid grid-col-1 lg:grid-cols-[750px_minmax(450px,_1fr)_100px] gap-8">
            <div class="overflow-x-auto overflow-y-hidden">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                    <tr>
                        <th scope="col" class="py-3 px-6">Product</th>
                        <th scope="col" class="py-3 px-6">Quantity</th>
                        <th scope="col" class="py-3 px-6">Action</th>
                        <th scope="col" class="py-3 px-6">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="product in cart" :key="product.rowId"
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-10 md:px-0">
                        <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex pr-36">
                            <img
                                class="w-24 h-24 rounded-t-lg object-cover"
                                :src="product.options.image"
                                alt="product image"
                            />
                            <div class="pl-5">
                                <p class="font-bold">{{ product.name }}</p>
                                <div class="flex flex-col justify-between h-full">
                                    <ul class="mt-2">
                                        <li>
                                            <span class="font-normal text-gray-600">Size: {{
                                                    product.options.size
                                                }}</span>
                                        </li>
                                    </ul>
                                    <p class="font-bold pb-5">${{ product.price }}</p>
                                </div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            <select id="small"
                                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option v-for="(num, index) in 10" :key="index" :value="num"
                                        :selected="product.qty === num">{{ num }}
                                </option>
                            </select>
                        </td>
                        <td class="py-4 px-6 text-pink-600 font-medium">
                            <button @click="removeCart(product.rowId)" class="bg-transparent">Remove</button>
                        </td>
                        <td class="py-4 px-6 font-bold">₱{{ (product.price * product.qty) }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div class="bg-gray-50 rounded-lg p-8">
                    <p class="font-semibold text-lg mb-6">Order Summary</p>
                    <div class="flex justify-between mb-2">
                        <Label
                            class="font-semibold"
                            labelFor="Discount"
                            text="Items"
                        />
                        <p class="text-gray-600">
                            {{ cart.reduce((acc, product) => acc + product.qty, 0) }}
                        </p>
                    </div>
                    <hr class="mb-3 h-px bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="flex justify-between mb-2">
                        <Label
                            class="font-semibold"
                            labelFor="Subtotal"
                            text="Subtotal"
                        />
                        <p class="font-semibold">₱{{ cart.reduce((acc, product) => acc + (product.price * product.qty), 0) }}</p>
                    </div>
                    <p class="text-gray-600 text-sm">Shipping and others will be calculated at checkout.</p>
                    <hr class="my-3 h-px bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="mt-3 block w-full">
                        <div class="mb-3">
                            <button
                                type="button"
                                class="block w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            >
                                Proceed to checkout
                            </button>
                        </div>
                        <div>
                            <router-link
                                to="/"
                                type="button"
                                class="block w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                            >
                                Continue Shopping
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Label from "../components/forms/Label.vue";
import Input from "../components/forms/Input.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import useCart from "../composables/cart";
import {onMounted} from "vue";
import AlertMessage from "../components/alerts/AlertMessage";

export default {
    name: "Cart",
    components: {Input, Label, PulseLoader, AlertMessage},
    setup() {
        const {getCart, deleteCart, cart, isLoading} = useCart();

        onMounted(getCart)

        const removeCart = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }
            await deleteCart(id);
            await getCart();
        }

        return {
            cart,
            isLoading,
            removeCart
        }
    }
};
</script>

<style></style>
