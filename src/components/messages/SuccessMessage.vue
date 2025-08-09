<script lang="ts" setup>
defineProps<{ message?: string }>();
</script>

<template>
  <p v-if="message" class="text-sm text-green-500">{{ message }}</p>
</template>