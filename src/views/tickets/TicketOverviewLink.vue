<script setup lang="ts">
import BasicLink from "../../components/BasicLink.vue";
import type {RouteLocationRaw} from "vue-router";

defineProps<{ to: RouteLocationRaw }>();
</script>

<template>
  <BasicLink :to="to">
    <slot/>
  </BasicLink>
</template>