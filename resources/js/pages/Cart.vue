<template>
    <div class="container pb-10 pt-3">
        <h1 class="text-3xl font-bold text-center mb-16">Shopping Cart</h1>
        <div
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 px-10 md:px-0">
                        <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex pr-36">
                            <img
                                class="w-24 h-24 rounded-t-lg object-cover"
                                src="https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8="
                                alt="product image"
                            />
                            <div class="pl-5">
                                <p class="font-bold">Hot Chili Pizza</p>
                                <div class="flex flex-col justify-between h-full">
                                    <ul class="mt-2">
                                        <li>
                                            <span class="font-normal text-gray-600">Size: Large</span>
                                        </li>
                                    </ul>
                                    <p class="font-bold pb-5">$75.52</p>
                                </div>
                            </div>
                        </td>
                        <td class="py-4 px-6">
                            <select id="small" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </td>
                        <td class="py-4 px-6 text-pink-600 font-medium">
                            <span>Remove</span>
                        </td>
                        <td class="py-4 px-6 font-bold">$2999</td>
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
                        <p class="text-gray-600">3</p>
                    </div>
                    <hr class="mb-3 h-px bg-gray-200 border-0 dark:bg-gray-700">
                    <div class="flex justify-between mb-2">
                        <Label
                            class="font-semibold"
                            labelFor="Subtotal"
                            text="Subtotal"
                        />
                        <p class="font-semibold">$80.96</p>
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
export default {
    name: "Cart",
    components: { Input, Label },
};
</script>

<style></style>
