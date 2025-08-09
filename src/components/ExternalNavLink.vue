<script setup lang="ts">
defineProps<{ to: string }>();
</script>

<template>
  <a :href="to" target="_blank" class="text-neutral-400 hover:text-neutral-100 focus:text-neutral-100 hover:underline focus:underline transition duration-300 ease-in-out">
    <slot/>
  </a>
</template>