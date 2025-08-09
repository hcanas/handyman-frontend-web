<script setup lang="ts">
const props = defineProps<{ title: string }>();

document.title = props.title || "Handyman";
</script>

<template>
  <h1 class="text-3xl text-neutral-100 font-medium tracking-wide">{{ title }}</h1>
</template>