<script setup lang="ts">
import type {RouteLocationRaw} from "vue-router";

defineProps<{ to: RouteLocationRaw }>();
</script>

<template>
  <RouterLink :to="to" class="hover:text-purple-500">
    <slot/>
  </RouterLink>
</template>