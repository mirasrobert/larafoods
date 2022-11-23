<template>
    <!--    <div class="container pb-10 pt-3">-->
    <!--        <h1 class="text-3xl font-bold text-center mb-16">Checkout</h1>-->
    <!--        <div class="overflow-x-auto relative">-->
    <!--            <table-->
    <!--                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"-->
    <!--            >-->
    <!--                <thead-->
    <!--                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"-->
    <!--                >-->
    <!--                    <tr>-->
    <!--                        <th scope="col" class="py-3 px-6">Product</th>-->
    <!--                        <th scope="col" class="py-3 px-6">Action</th>-->
    <!--                        <th scope="col" class="py-3 px-6">Total</th>-->
    <!--                    </tr>-->
    <!--                </thead>-->
    <!--                <tbody>-->
    <!--                    <tr-->
    <!--                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"-->
    <!--                    >-->
    <!--                        <th-->
    <!--                            scope="row"-->
    <!--                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"-->
    <!--                        >-->
    <!--                            <img-->
    <!--                                class="w-24 h-24 rounded-t-lg object-cover"-->
    <!--                                src="https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8="-->
    <!--                                alt="product image"-->
    <!--                            />-->
    <!--                            <div class="pl-5">-->
    <!--                                <p class="font-bold">Hot Chili Pizza</p>-->
    <!--                                <ul class="mt-2">-->
    <!--                                    <li>-->
    <!--                                        <span class="font-normal text-gray-600"-->
    <!--                                            >Size:</span-->
    <!--                                        >-->
    <!--                                        Large-->
    <!--                                    </li>-->
    <!--                                    <li>-->
    <!--                                        <span class="font-normal text-gray-600"-->
    <!--                                        >Qty:</span-->
    <!--                                        >-->
    <!--                                        1-->
    <!--                                    </li>-->
    <!--                                </ul>-->
    <!--                            </div>-->
    <!--                        </th>-->
    <!--                        <td class="py-4 px-6 text-pink-600 font-medium">-->
    <!--                            <span>Remove</span>-->
    <!--                        </td>-->
    <!--                        <td class="py-4 px-6 font-bold">$2999</td>-->
    <!--                    </tr>-->
    <!--                    <tr-->
    <!--                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"-->
    <!--                    >-->
    <!--                        <th-->
    <!--                            scope="row"-->
    <!--                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"-->
    <!--                        >-->
    <!--                            <img-->
    <!--                                class="w-24 h-24 rounded-t-lg object-cover"-->
    <!--                                src="https://media.istockphoto.com/id/1336655655/photo/pizza-with-bacon-mushrooms-salami-and-vegetables-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=iZaMhg4O0fl8bG7qMPoIv9RGImfDDAdi1jauyq1F2K4="-->
    <!--                                alt="product image"-->
    <!--                            />-->
    <!--                            <div class="pl-5">-->
    <!--                                <p class="font-bold">Pepperoni Pizza</p>-->
    <!--                                <ul class="mt-2">-->
    <!--                                    <li>-->
    <!--                                        <span class="font-normal text-gray-600"-->
    <!--                                            >Size:</span-->
    <!--                                        >-->
    <!--                                        Medium-->
    <!--                                    </li>-->
    <!--                                    <li>-->
    <!--                                        <span class="font-normal text-gray-600"-->
    <!--                                        >Qty:</span-->
    <!--                                        >-->
    <!--                                        1-->
    <!--                                    </li>-->
    <!--                                </ul>-->
    <!--                            </div>-->
    <!--                        </th>-->
    <!--                        <td class="py-4 px-6 text-pink-600 font-medium">-->
    <!--                            <span>Remove</span>-->
    <!--                        </td>-->
    <!--                        <td class="py-4 px-6 font-bold">$2999</td>-->
    <!--                    </tr>-->
    <!--                    <tr-->
    <!--                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"-->
    <!--                    >-->
    <!--                        <th-->
    <!--                            scope="row"-->
    <!--                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"-->
    <!--                        >-->
    <!--                            <img-->
    <!--                                class="w-24 h-24 rounded-t-lg object-cover"-->
    <!--                                src="https://media.istockphoto.com/id/1283482970/photo/top-view-of-round-pizza-isolated-on-white.jpg?s=612x612&w=0&k=20&c=7GPLy0DQ6QI89b26E4iQMY1ou9510Q7t5GMci-EmJ3E="-->
    <!--                                alt="product image"-->
    <!--                            />-->
    <!--                            <div class="pl-5">-->
    <!--                                <p class="font-bold">Pepperoni Pizza</p>-->
    <!--                                <ul class="mt-2">-->
    <!--                                    <li>-->
    <!--                                        <span class="font-normal text-gray-600">Size: Small</span>-->
    <!--                                    </li>-->
    <!--                                    <li>-->
    <!--                                        <span class="font-normal text-gray-600">Qty: 1</span>-->
    <!--                                    </li>-->
    <!--                                </ul>-->
    <!--                            </div>-->
    <!--                        </th>-->
    <!--                        <td class="py-4 px-6 text-pink-600 font-medium">-->
    <!--                            <span>Remove</span>-->
    <!--                        </td>-->
    <!--                        <td class="py-4 px-6 font-bold">$2999</td>-->
    <!--                    </tr>-->
    <!--                </tbody>-->
    <!--            </table>-->
    <!--        </div>-->

    <!--        <div class="grid grid-col-1 md:grid-cols-3 gap-6 my-24">-->
    <!--            <div>-->
    <!--                <p class="font-semibold text-lg mb-6">Shipping Options</p>-->
    <!--                <div class="mb-6">-->
    <!--                    <Label labelFor="province" text="Province" />-->
    <!--                    <select-->
    <!--                        id="province"-->
    <!--                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"-->
    <!--                    >-->
    <!--                        <option selected disabled>Choose a province</option>-->
    <!--                        <option value="US">United States</option>-->
    <!--                        <option value="CA">Canada</option>-->
    <!--                        <option value="FR">France</option>-->
    <!--                        <option value="DE">Germany</option>-->
    <!--                    </select>-->
    <!--                </div>-->
    <!--                <div class="mb-6">-->
    <!--                    <Label labelFor="city" text="City" />-->
    <!--                    <select-->
    <!--                        id="city"-->
    <!--                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"-->
    <!--                    >-->
    <!--                        <option selected disabled>Choose a city</option>-->
    <!--                        <option value="US">United States</option>-->
    <!--                        <option value="CA">Canada</option>-->
    <!--                        <option value="FR">France</option>-->
    <!--                        <option value="DE">Germany</option>-->
    <!--                    </select>-->
    <!--                </div>-->
    <!--                <div class="mb-6">-->
    <!--                    <Label labelFor="barangay" text="Barangay" />-->
    <!--                    <select-->
    <!--                        id="barangay"-->
    <!--                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"-->
    <!--                    >-->
    <!--                        <option selected disabled>Choose a barangay</option>-->
    <!--                        <option value="US">United States</option>-->
    <!--                        <option value="CA">Canada</option>-->
    <!--                        <option value="FR">France</option>-->
    <!--                        <option value="DE">Germany</option>-->
    <!--                    </select>-->
    <!--                </div>-->
    <!--                <div class="mb-6">-->
    <!--                    <Label labelFor="province" text="Street Address" />-->
    <!--                    <Input type="text" placeholder="House no & street" />-->
    <!--                </div>-->
    <!--            </div>-->
    <!--            <div>-->
    <!--                <p class="font-semibold text-lg mb-6">Discount Options</p>-->
    <!--                <div class="mb-6">-->
    <!--                    <Label-->
    <!--                        labelFor="province"-->
    <!--                        text="Do you have a discount code?"-->
    <!--                    />-->
    <!--                    <Input type="text" placeholder="Discount code" />-->
    <!--                </div>-->
    <!--                <div class="mb-6">-->
    <!--                    <Label-->
    <!--                        labelFor="shipping_option"-->
    <!--                        text="Choose Shipping Option"-->
    <!--                    />-->
    <!--                    <select-->
    <!--                        id="shipping_option"-->
    <!--                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"-->
    <!--                    >-->
    <!--                        <option selected disabled>-->
    <!--                            Choose shipping option-->
    <!--                        </option>-->
    <!--                        <option value="US">PayPal or Debit Card</option>-->
    <!--                        <option value="CA">Cash on Delivery</option>-->
    <!--                    </select>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--            <div>-->
    <!--                <p class="font-semibold text-lg mb-6">Order Summary</p>-->
    <!--                <div class="flex justify-between mb-2">-->
    <!--                    <Label-->
    <!--                        class="font-semibold"-->
    <!--                        labelFor="shipping_option"-->
    <!--                        text="Subtotal"-->
    <!--                    />-->
    <!--                    <p class="font-semibold">$80.96</p>-->
    <!--                </div>-->
    <!--                <div class="flex justify-between mb-2">-->
    <!--                    <Label-->
    <!--                        class="font-semibold"-->
    <!--                        labelFor="shipping_option"-->
    <!--                        text="Discount"-->
    <!--                    />-->
    <!--                    <p class="text-gray-600">(20%) - $16.19</p>-->
    <!--                </div>-->
    <!--                <div class="flex justify-between mb-2">-->
    <!--                    <Label-->
    <!--                        class="font-semibold"-->
    <!--                        labelFor="shipping_option"-->
    <!--                        text="Delivery"-->
    <!--                    />-->
    <!--                    <p class="text-gray-600">$0.00</p>-->
    <!--                </div>-->
    <!--                <div class="flex justify-between mb-2">-->
    <!--                    <Label-->
    <!--                        class="font-semibold"-->
    <!--                        labelFor="shipping_option"-->
    <!--                        text="Tax"-->
    <!--                    />-->
    <!--                    <p class="text-gray-600">+ $14.00</p>-->
    <!--                </div>-->
    <!--                <div class="flex justify-between mt-3">-->
    <!--                    <Label-->
    <!--                        class="font-semibold"-->
    <!--                        labelFor="shipping_option"-->
    <!--                        text="Total"-->
    <!--                    />-->
    <!--                    <p class="font-semibold">$76.6</p>-->
    <!--                </div>-->
    <!--                <div class="mt-3 block w-full">-->
    <!--                    <div class="mb-3">-->
    <!--                        <button-->
    <!--                            type="button"-->
    <!--                            class="block w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"-->
    <!--                        >-->
    <!--                            Proceed to checkout-->
    <!--                        </button>-->
    <!--                    </div>-->
    <!--                    <div>-->
    <!--                        <button-->
    <!--                            type="button"-->
    <!--                            class="block w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"-->
    <!--                        >-->
    <!--                            Continue Shopping-->
    <!--                        </button>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->

    <div class="container pb-10 pt-3">
        <h1 class="text-3xl font-bold text-center mb-16">Checkout</h1>
        <div
            class="grid grid-col-1 lg:grid-cols-[750px_minmax(450px,_1fr)_100px] gap-8">
            <div class="overflow-x-auto relative">
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                    <tr>
                        <th scope="col" class="py-3 px-6">Product</th>
<!--                        <th scope="col" class="py-3 px-6">Action</th>-->
                        <th scope="col" class="py-3 px-6">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"
                        >
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
                                        <li>
                                        <span class="font-normal text-gray-600">Qty:</span>
                                            1
                                        </li>
                                    </ul>
                                    <p class="font-bold pb-5">$75.52</p>
                                </div>
                            </div>
                        </th>
<!--                        <td class="py-4 px-6 text-pink-600 font-medium">-->
<!--                            <span>Remove</span>-->
<!--                        </td>-->
                        <td class="py-4 px-6 font-bold">$2999</td>
                    </tr>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"
                        >
                            <img
                                class="w-24 h-24 rounded-t-lg object-cover"
                                src="https://media.istockphoto.com/id/1336655655/photo/pizza-with-bacon-mushrooms-salami-and-vegetables-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=iZaMhg4O0fl8bG7qMPoIv9RGImfDDAdi1jauyq1F2K4="
                                alt="product image"
                            />
                            <div class="pl-5">
                                <p class="font-bold">Pepperoni Pizza</p>
                                <ul class="mt-2">
                                    <li>
                                        <span class="font-normal text-gray-600"
                                        >Size:</span
                                        >
                                        Medium
                                    </li>
                                    <li>
                                        <span class="font-normal text-gray-600"
                                        >Qty:</span
                                        >
                                        1
                                    </li>
                                </ul>
                            </div>
                        </th>
<!--                        <td class="py-4 px-6 text-pink-600 font-medium">-->
<!--                            <span>Remove</span>-->
<!--                        </td>-->
                        <td class="py-4 px-6 font-bold">$2999</td>
                    </tr>
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                        <th
                            scope="row"
                            class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"
                        >
                            <img
                                class="w-24 h-24 rounded-t-lg object-cover"
                                src="https://media.istockphoto.com/id/1283482970/photo/top-view-of-round-pizza-isolated-on-white.jpg?s=612x612&w=0&k=20&c=7GPLy0DQ6QI89b26E4iQMY1ou9510Q7t5GMci-EmJ3E="
                                alt="product image"
                            />
                            <div class="pl-5">
                                <p class="font-bold">Pepperoni Pizza</p>
                                <ul class="mt-2">
                                    <li>
                                        <span class="font-normal text-gray-600">Size: Small</span>
                                    </li>
                                    <li>
                                        <span class="font-normal text-gray-600">Qty:</span>
                                        1
                                    </li>
                                </ul>
                            </div>
                        </th>
<!--                        <td class="py-4 px-6 text-pink-600 font-medium">-->
<!--                            <span>Remove</span>-->
<!--                        </td>-->
                        <td class="py-4 px-6 font-bold">$2999</td>
                    </tr>
                    </tbody>
                </table>
                <div class="px-8 pt-8">
                    <p class="font-semibold text-lg mb-6">Shipping Options</p>
                    <div class="mb-6 grid grid-cols-2 gap-6">
                        <div>
                            <Label labelFor="province" text="Province"/>
                            <select
                                id="province"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected disabled>Choose a province</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <Label labelFor="city" text="City"/>
                            <select
                                id="city"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                            >
                                <option selected disabled>Choose a city</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-6 grid grid-cols-2 gap-6">
                        <div>
                            <Label labelFor="barangay" text="Barangay"/>
                            <select
                                id="barangay"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected disabled>Choose a barangay</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </div>
                        <div>
                            <Label labelFor="province" text="Street Address"/>
                            <Input type="text" placeholder="House no & street"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="bg-gray-50 rounded-lg">
                    <div class="px-8 pt-8">
                        <p class="font-semibold text-lg mb-6">Discount Options</p>
                        <div class="mb-6">
                            <Label
                                labelFor="province"
                                text="Do you have a discount code?"
                            />
                            <div class="flex rounded-md shadow-sm">
                                <input type="text" placeholder="Discount code" name="discount_code"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <button type="button" class="inline-flex flex-shrink-0 justify-center items-center px-5 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div class="mb-6">
                            <Label
                                labelFor="shipping_option"
                                text="Choose Shipping Option"
                            />
                            <select
                                id="shipping_option"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected disabled>
                                    Choose shipping option
                                </option>
                                <option value="US">PayPal or Debit Card</option>
                                <option value="CA">Cash on Delivery</option>
                            </select>
                        </div>
                    </div>
                    <div class="px-8 pb-8">
                        <p class="font-semibold text-lg mb-6">Order Summary</p>
                        <div class="flex justify-between mb-2">
                            <Label
                                class="font-semibold"
                                labelFor="shipping_option"
                                text="Subtotal"
                            />
                            <p class="font-semibold">$80.96</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <Label
                                class="font-semibold"
                                labelFor="shipping_option"
                                text="Discount"
                            />
                            <p class="text-gray-600">(20%) - $16.19</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <Label
                                class="font-semibold"
                                labelFor="shipping_option"
                                text="Delivery"
                            />
                            <p class="text-gray-600">$0.00</p>
                        </div>
                        <div class="flex justify-between mb-2">
                            <Label
                                class="font-semibold"
                                labelFor="shipping_option"
                                text="Tax"
                            />
                            <p class="text-gray-600">+ $14.00</p>
                        </div>
                        <div class="flex justify-between mt-3">
                            <Label
                                class="font-semibold"
                                labelFor="shipping_option"
                                text="Total"
                            />
                            <p class="font-semibold">$76.6</p>
                        </div>
                        <div class="mt-3 block w-full">
                            <div class="mb-3">
                                <button
                                    type="button"
                                    class="block w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                >
                                    Confirm Order
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    class="block w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                                >
                                    Continue Shopping
                                </button>
                            </div>
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
    name: "Checkout",
    components: {Input, Label},
};
</script>

<style></style>
