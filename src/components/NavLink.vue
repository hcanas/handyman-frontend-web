<script setup lang="ts">
defineProps<{
  to: string | { name: string };
  active?: boolean;
}>();
</script>

<template>
  <RouterLink :to="to" :class="active ? 'text-purple-500' : 'text-neutral-400'" class="hover:text-purple-500 focus:text-purple-500 font-medium transition duration-300 ease-in-out">
    <slot/>
  </RouterLink>
</template>