<template>
    <Navbar />
    <router-view />
</template>

<script>
import Navbar from "./components/layouts/Navbar";

export default {
    name: "AppRoot",
    components: {
        Navbar
    }
}
</script>

<style scoped>

</style>
