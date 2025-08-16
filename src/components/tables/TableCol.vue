<script setup lang="ts">
import {inject, onMounted} from "vue";

const props = defineProps<{
  index: string;
  title: string;
  align?: string;
  custom?: boolean;
}>();

const registerColumn = inject<Function>("registerColumn");

const defaultAlignment: string = "left";

const alignment: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

onMounted(() => {
  registerColumn?.(props.index, props.title, props.align ?? defaultAlignment, props.custom ?? false);
});
</script>

<template>
  <th class="text-neutral-500 p-3" :class="alignment[align ?? defaultAlignment]">{{ title }}</th>
</template>