<template>
    <div class="container" v-if="isLoading">
        Loading...
    </div>
    <div class="container" v-else>
        <!--   Product  Details  -->
        <div
            class="grid grid-col-1 lg:grid-cols-[750px_minmax(450px,_1fr)_100px] gap-6 my-24"
        >
            <div class="w-full product-image-wrapper">
                <div
                    class="block w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow-md"
                >
                    <img
                        class="w-full h-full object-cover"
                        src="https://media.istockphoto.com/id/1067288680/photo/assorted-pizza-on-a-white-background-view-from-above.jpg?s=612x612&w=0&k=20&c=KY3Lsw__x2lYjkUhQQUe5ZtYcPUHNcnZXkt6plz4WtU="
                        alt="product-image"
                    />
                </div>
            </div>
            <div class="w-full">
                <form action="#">
                    <!-- Title -->
                    <div class="flex justify-between mb-6">
                        <p class="text-xl font-semibold">{{ product && product.name }}</p>
                        <p class="text-xl font-semibold">${{ productPrice }}
                        </p>
                    </div>
                    <!-- Ratings -->
                    <div class="flex mt-2.5 mb-5">
                        <span
                            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mr-3"
                        >5.0</span
                        >
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>First star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                        </svg>
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Second star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                        </svg>
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Third star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                        </svg>
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Fourth star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                        </svg>
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Fifth star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            ></path>
                        </svg>
                    </div>
                    <!-- Sizes -->
                    <div class="mb-6">
                        <p class="text-base font-medium mb-2">Size</p>
                        <ul
                            class="grid gap-6 w-full grid-cols-2 md:grid-cols-3">
                            <li>
                                <input
                                    type="radio"
                                    id="pizza-small"
                                    name="size"
                                    value="regular"
                                    class="hidden peer"
                                    @change="onChange"
                                    required
                                >
                                <label
                                    for="pizza-small"
                                    class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
                                >
                                    <div class="block">
                                        <div
                                            class="w-full text-lg font-semibold"
                                        >
                                            S
                                        </div>
                                        <div class="w-full">2-3 people</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="pizza-medium"
                                    name="size"
                                    value="medium"
                                    class="hidden peer"
                                    @change="onChange"
                                    required
                                />
                                <label
                                    for="pizza-medium"
                                    class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
                                >
                                    <div class="block">
                                        <div
                                            class="w-full text-lg font-semibold"
                                        >
                                            M
                                        </div>
                                        <div class="w-full">4-6 people</div>
                                    </div>
                                </label>
                            </li>

                            <li>
                                <input
                                    type="radio"
                                    id="pizza-large"
                                    name="size"
                                    value="large"
                                    @change="onChange"
                                    class="hidden peer"
                                />
                                <label
                                    for="pizza-large"
                                    class="inline-flex justify-between items-center p-4 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md"
                                >
                                    <div class="block">
                                        <div
                                            class="w-full text-lg font-semibold"
                                        >
                                            L
                                        </div>
                                        <div class="w-full">5-8 people</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div class="mb-6">
                        <Label labelFor="quantity" text="Quantity"/>
                        <Input
                            type="number"
                            id="quantity"
                            placeholder="How many?"
                        />
                    </div>
                    <div class="mb-6">
                        <SubmitButton width="full" text="Add to cart"/>
                    </div>
                </form>
                <!-- Description -->
                <div class="product-description">
                    <p class="text-base font-medium mb-2">Description</p>
                    <p class="text-sm text-gray-700 mb-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Veniam saepe itaque at tempora asperiores libero
                        dolore. Reprehenderit obcaecati excepturi est. Vero
                        consequatur ullam commodi expedita nam deleniti eveniet
                        corporis ad repellendus, fuga possimus explicabo quod.
                    </p>
                    <p class="text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos omnis dignissimos, eligendi quis qui itaque! Soluta
                        esse consectetur iste similique!
                    </p>
                </div>
            </div>
        </div>
        <!--   Reviews     -->
        <div
            class="grid grid-col-1 lg:grid-cols-[750px_minmax(450px,_1fr)_100px] gap-6 my-24"
        >
            <div
                class="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <h5
                    class="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                    What do others think about this product?
                </h5>
                <div class="flex space-x-3.5">
                    <div>
                        <img
                            width="40"
                            height="40"
                            src="
                    https://randomuser.me/api/portraits/men/92.jpg"
                            alt=""
                            class="rounded-full object-cover mb-3"
                        />
                        <p class="font-semibold">John Doe</p>
                        <div class="flex mt-2.5 mb-5">
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>First star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                ></path>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Second star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                ></path>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Third star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                ></path>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Fourth star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                ></path>
                            </svg>
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Fifth star</title>
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm font-semibold mb-3">
                            This is the best pizza out there
                        </p>
                        <p class="text-sm text-gray-700">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Eaque alias iure cumque necessitatibus
                            nesciunt itaque, debitis velit expedita. Libero,
                            itaque aperiam quo quaerat dolorum impedit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import Input from "../components/forms/Input.vue";
import Label from "../components/forms/Label.vue";
import SubmitButton from "../components/forms/SubmitButton.vue";
import useProducts from "../composables/products";

export default {
    name: "Product",
    components: {SubmitButton, Input, Label},
    setup() {
        const {product, getSingleProduct, isLoading} = useProducts();
        const route = useRoute();
        let productPrice = ref(0);
        const prdAttribute = ref('');

        // fetch the user information when params change
        watch(
            () => route.params.id,
            (newId) => {
                if (newId) {
                    getSingleProduct(newId);
                }
            },
            {
                deep: true,
                immediate: true,
            }
        );

        // On Change of Radio Button
        const onChange = (e) => {
            if (product.value) {
                const attr = product.value;
                const product_attributes = attr.product_attribute;
                prdAttribute.value = product_attributes.find(attr => attr.size.toLowerCase() === e.target.value.toLowerCase());
                if (prdAttribute.value && prdAttribute.value.price) {
                    productPrice.value = prdAttribute.value.price;
                } else {
                    productPrice.value = 0.00;
                }
                console.log(productPrice.value)
            }
        }

        return {
            product,
            onChange,
            isLoading,
            prdAttribute,
            productPrice
        }

    }
};
</script>

<style scoped>
.product-image-wrapper {
    height: 450px;
    max-height: 500px;
}

.product-description p {
    line-height: 1.8;
}
</style>
