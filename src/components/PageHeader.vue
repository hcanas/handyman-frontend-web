<script setup lang="ts">
const props = defineProps<{ title: string }>();

document.title = props.title || "Handyman";
</script>

<template>
  <div class="flex items-center justify-between gap-x-6">
    <h1 class="text-3xl text-neutral-100 font-medium tracking-wide">{{ title }}</h1>
    <slot name="actions"/>
  </div>
</template>