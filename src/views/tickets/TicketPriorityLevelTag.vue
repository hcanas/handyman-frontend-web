<script setup lang="ts">
import Tag from "../../components/Tag.vue";
import type {TicketPriorityLevel} from "../../types/ticket";
import {capitalize} from "lodash-es";

defineProps<{ level: TicketPriorityLevel }>();

const tagColors: Record<TicketPriorityLevel, string> = {
  high: "text-red-400",
  medium: "text-amber-400",
  low: "text-blue-400",
};
</script>

<template>
  <Tag :class="tagColors[level]">{{ capitalize(level) }}</Tag>
</template>