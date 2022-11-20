<template>
    <input :type="type" :id="id"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
           :placeholder="placeholder" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
    >
</template>

<script>
// READ MORE ABOUT V-MODEL USING CUSTOM INPUT COMPONENT
// https://vuejs.org/guide/components/events.html#usage-with-v-model
// PLAYGROUND: https://sfc.vuejs.org/#eNqFUttuwjAM/RUrQipI0LxXDG3a035gL2QPGTVQ1FzkpN2kqv8+pwVUGNqkqq0d+xz7nHTixfu8bVAUYh12VPm4UbYy3lGE1yZEZ96sbyLsyRnIcjnJpbZMWWXxeygvca+bOkKnLMDOMYZFG0MB3Q1Sv0znpY56vhhrAQhjQ/YSARgMQR+wgOyIde2YJWX79OEXP2t5HZaDiMbXOiJHAOspWbsyrsT6SYkzpBIgN9B1FwroB7QrgliKcfuV0T4/BWdZmWEudT4ISvBK40RKsAYpVuIYow+FlGG/S8KcQu7oIPkvp8bGymCOwaw+yX0FJAZWYtDhjCE52SKtCG2JhPQX5l3pL9yLSrzKnVs3Jj9yzZNjQthmg2rvumaHP4Y50VTJym3WeLYOi2nBv45UaYBx26JNPcmPK8A4McDzUMZHs0Q2f8C0hBm2fKfyqOmAvFLKLsZ+yVRTH/sf4FT+8A==
export default {
    name: "Input",
    props: ['type', 'id', 'placeholder', 'modelValue'],
    emits: ['update:modelValue']
}
</script>

<style scoped>

</style>
