<script lang="ts" setup>
const model = defineModel();
</script>

<template>
  <input v-model="model" class="bg-transparent text-neutral-100 placeholder-neutral-500 p-3 border-b-1 border-neutral-600 focus:border-purple-600 focus:ring-0 rounded-tr rounded-tl outline-none transition duration-150 ease-in-out"/>
</template>