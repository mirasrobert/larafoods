<template>
    <Authenticated>
        <div class="container py-32">
            <div class="flex flex-col justify-center w-full items-center">
                <div class="flex items-center justify-center mb-5">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Add Pizza</span>
                </div>
                <div
                    class="block w-full	lg:w-1/3 md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
                        <div class="mb-6">
                            <Label labelFor="name" text="Product Name"/>
                            <Input type="text" id="name" placeholder="eg. Pizza" v-model="form.name" required/>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="image" text="Image"/>
                            <input @change="handleOnChange" accept="image/*"
                                   class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                   aria-describedby="user_avatar_help" id="image" type="file" required>
                            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A beautiful
                                picture is useful to attract customers
                            </div>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="small" text="Small Size Price"/>
                            <Input type="number" id="small" placeholder="0.00" v-model="form.small" required/>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="regular" text="Regular Size Price"/>
                            <Input type="number" id="regular" placeholder="0.00" v-model="form.regular" required/>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="large" text="Large Size Price"/>
                            <Input type="number" id="large" placeholder="0.00" v-model="form.large" required/>
                        </div>
                        <div class="w-full">
                            <SubmitButton width="full" type="submit" text="Add product"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Authenticated>
</template>

<script>

import {ref} from 'vue'
import {useRouter} from "vue-router";
import useProducts from "../../composables/products";
import SubmitButton from '../../components/forms/SubmitButton'
import Input from '../../components/forms/Input'
import Label from '../../components/forms/Label'
import Authenticated from "../../components/slot/Authenticated";
import Swal from 'sweetalert2'

export default {
    name: "AddProduct",
    components: {Authenticated, SubmitButton, Input, Label},
    setup() {
        const router = useRouter();

        const form = ref({
            name: '',
            regular_price: '',
            small_price: '',
            large_price: '',
            image: null
        })

        const handleOnChange = (e) => {
            form.value.image = e.target.files[0]
        }

        const {storeProduct, product} = useProducts();

        const onSubmit = () => {
            const formData = new FormData;
            formData.append('image', form.value.image)
            formData.append('name', form.value.name)
            formData.append('small_price', form.value.small)
            formData.append('regular_price', form.value.regular)
            formData.append('large_price', form.value.large)
            storeProduct(formData, router)

            Swal.fire({
                toast: true,
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: "Product has been added.",
            });
        }

        return {
            onSubmit,
            handleOnChange,
            form
        }
    }
}
</script>

<style scoped>

</style>
