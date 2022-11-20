<template>
    <div class="container">
        <div class="flex flex-col justify-center w-full items-center center-card">
            <a href="/" class="flex items-center justify-center mb-5">
                <img src="http://127.0.0.1:8000/logo.png" class="h-16 mr-3 sm:h-16" alt="LaraFoods Logo"/>
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <div
                class="block w-full	lg:w-1/3 md:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div v-if="loginError">
                    <AlertMessage type="error" :text="loginError.message"/>
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="mb-6">
                        <Label labelFor="email" text="Email Address"/>
                        <Input type="email" id="email" placeholder="name@example.com" v-model="form.email"/>
                        <div
                            v-if="loginError && loginError.errors && loginError.errors.email">
                            <span v-for="(message, keys) in loginError.errors.email">
                                <ValidationText :text="message"/>
                            </span>
                        </div>
                    </div>
                    <div class="mb-6">
                        <Label labelFor="password" text="Password"/>
                        <Input type="password" id="password" placeholder="●●●●●●" v-model="form.password"/>
                        <div
                            v-if="loginError && loginError.errors && loginError.errors.password">
                            <span v-for="(message, keys) in loginError.errors.password">
                                <ValidationText :text="message"/>
                            </span>
                        </div>
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value=""
                                   class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            >
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                            me</label>
                    </div>
                    <SubmitButton type="submit" text="Submit"/>
                </form>
            </div>
        </div>
    </div>
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

export default {
    name: "Login",
    components: {ValidationText, Label, AlertMessage, SubmitButton, Input},
    setup() {
        const store = useStore()
        const router = useRouter();

        const form = ref({
            email: '',
            password: ''
        });

        // Call vuex getters
        const loginError = computed(() => store.getters.loginError)

        // Call vuex action
        const onSubmit = () => store.dispatch('login', {formData: form.value, router: router})

        return {
            onSubmit,
            form,
            loginError
        }
    }
}
</script>

<style scoped>

</style>
