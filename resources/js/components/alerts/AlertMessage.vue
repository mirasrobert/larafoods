<template>
    <div v-if="type === 'success'"
         class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
         role="alert">
        {{ text }}
    </div>
    <div v-else-if="type === 'error'"
         class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
        {{ text }}
    </div>
    <div v-else
         class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
         role="alert">
        {{ text }}
    </div>

</template>

<script>
export default {
    name: "AlertDanger",
    props: ['type', 'text']
}
</script>

<style scoped>

</style>
