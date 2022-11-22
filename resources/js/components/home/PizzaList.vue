<template>
    <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-24">
        <div v-for="(product, index) in products">
            <pizza-item :product="product" />
        </div>
    </div>
</template>

<script>
import PizzaItem from "./PizzaItem";

export default {
    name: "PizzaList",
    components: {PizzaItem},
    props: ['products']
}
</script>

<style scoped>

</style>
