<template>
    <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24">
        <pizza-item />
        <pizza-item />
        <pizza-item />
        <pizza-item />
        <pizza-item />
        <pizza-item />
    </div>
</template>

<script>
import PizzaItem from "./PizzaItem";
export default {
    name: "PizzaList",
    components: {PizzaItem}
}
</script>

<style scoped>

</style>
