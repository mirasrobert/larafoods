<template>

    <div v-if="path != 'login' && path != 'register'">
        <Navbar/>
    </div>
    <router-view/>

    <Footer/>

</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

export default {
    name: "AppRoot",
    components: {
        Footer,
        Navbar
    },
    setup() {
        const route = useRoute();
        const path = computed(() => route.name)

        return {
            path
        }
    }
}
</script>

<style scoped>

</style>
