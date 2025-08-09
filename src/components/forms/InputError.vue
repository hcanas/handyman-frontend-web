<script lang="ts" setup>
defineProps<{ message?: string }>();
</script>

<template>
  <p class="text-sm text-red-500" v-if="message">{{ message }}</p>
</template>