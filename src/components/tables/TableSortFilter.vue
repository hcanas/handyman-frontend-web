<script setup lang="ts">
import {inject} from "vue";
import type {Ref} from "vue";

defineProps<{
  options: {
    value: string;
    label: string;
  }[];
}>();

type SortDir = {
  value: string;
  label: string;
};

const sortDirections: SortDir[] = [
  {value: "asc", label: "Ascending"},
  {value: "desc", label: "Descending"},
];

const orderBy = inject<Ref<string>>("orderBy");
const orderDir = inject<Ref<string>>("orderDir");
</script>

<template>
  <div class="flex items-center gap-x-1">
    <select v-model="orderBy" class="text-sm text-neutral-100 px-3 py-1.5 rounded bg-neutral-800">
      <option value="">Sort By</option>
      <option v-if="options" v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <select v-model="orderDir" class="text-sm text-neutral-100 px-3 py-1.5 rounded bg-neutral-800">
      <option value="">Sort Order</option>
      <option v-for="direction in sortDirections" :value="direction.value">
        {{ direction.label }}
      </option>
    </select>
  </div>
</template>