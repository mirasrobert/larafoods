<template>
    <Guest>
        <div class="container">
            <div class="flex flex-col justify-center w-full items-center center-card">
                <router-link to="/" class="flex items-center justify-center mb-5">
                    <img src="http://127.0.0.1:8000/logo.png" class="h-16 mr-3 sm:h-16" alt="LaraFoods Logo"/>
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                </router-link>
                <div
                    class="block w-full	lg:w-1/3 md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div v-if="registerError">
                        <AlertMessage type="error" :text="registerError.message"/>
                    </div>
                    <form @submit.prevent="onSubmit">
                        <div class="mb-6">
                            <Label labelFor="name" text="Your name"/>
                            <Input type="name" id="name" placeholder="eg. John Doe" v-model="form.name"/>
                            <div
                                v-if="registerError && registerError.errors && registerError.errors.name">
                            <span v-for="(message, keys) in registerError.errors.name">
                                <ValidationText :text="message"/>
                            </span>
                            </div>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="email" text="Email Address"/>
                            <Input type="email" id="email" placeholder="name@example.com" v-model="form.email"/>
                            <div
                                v-if="registerError && registerError.errors && registerError.errors.email">
                            <span v-for="(message, keys) in registerError.errors.email">
                                <ValidationText :text="message"/>
                            </span>
                            </div>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="password" text="Password"/>
                            <Input type="password" id="password" placeholder="●●●●●●" v-model="form.password"/>
                            <div
                                v-if="registerError && registerError.errors && registerError.errors.password">
                            <span v-for="(message, keys) in registerError.errors.password">
                                <ValidationText :text="message"/>
                            </span>
                            </div>
                        </div>
                        <div class="mb-6">
                            <Label labelFor="password_confirm" text="Confirm Password"/>
                            <Input type="password" id="password_confirm" placeholder="●●●●●●"
                                   v-model="form.password_confirmation"/>
                        </div>
                        <div class="flex flex-col md:flex-row md:justify-between md:items-end">
                            <SubmitButton type="submit" text="Register"/>
                            <a href="/login" class="text-sm mt-3 md:mt-0 text-gray-700 hover:text-blue-700">Already
                                have an account?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Guest>
</template>

<script>
import {ref, computed} from 'vue';
import {useStore} from 'vuex'
import {useRouter} from "vue-router";


import Input from '../components/forms/Input'
import Label from '../components/forms/Label'
import ValidationText from '../components/forms/ValidationText'
import SubmitButton from "../components/forms/SubmitButton";
import AlertMessage from "../components/alerts/AlertMessage";
import Guest from "../components/slot/Guest";

export default {
    name: "Register",
    components: {Guest, ValidationText, Label, AlertMessage, SubmitButton, Input},
    setup() {
        const store = useStore()
        const router = useRouter();

        const form = ref({
            email: '',
            password: '',
            name: '',
            password_confirmation: ''
        });

        // Call vuex getters
        const registerError = computed(() => store.getters.registerError)

        // Call vuex action
        const onSubmit = () => store.dispatch('register', {formData: form.value, router: router})

        return {
            onSubmit,
            form,
            registerError
        }
    }
}
</script>

<style scoped>

</style>
