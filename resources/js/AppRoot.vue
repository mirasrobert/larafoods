<template>

    <div v-if="path != 'login' && path != 'register'">
        <Navbar/>
    </div>
    <router-view/>
</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";
import Navbar from "./components/layouts/Navbar";

export default {
    name: "AppRoot",
    components: {
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
