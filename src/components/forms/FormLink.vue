<script setup lang="ts">
defineProps<{ to: string | { name: string } }>();
</script>

<template>
  <RouterLink :to="to" class="text-neutral-400 hover:text-purple-500 hover:underline hover:underline-offset-4 focus:text-purple-500 focus:underline focus:underline-offset-4 transition duration-300 ease-in-out">
    <slot/>
  </RouterLink>
</template>