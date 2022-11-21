<template>
    <div v-if="width === 'full'">
        <button
            :type="type"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {{ text }}
        </button>
    </div>
    <div v-else>
        <button
            :type="type"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            {{ text }}
        </button>
    </div>
</template>

<script>
export default {
    name: "SubmitButton",
    props: ["type", "text", "width"],
};
</script>

<style scoped></style>
