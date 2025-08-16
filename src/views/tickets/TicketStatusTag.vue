<script setup lang="ts">
import type {TicketStatus} from "../../types/ticket";
import Tag from "../../components/Tag.vue";
import {startCase} from "lodash-es";

defineProps<{ status: TicketStatus }>();

const tagColors: Record<TicketStatus, string> = {
  pending: "text-amber-400",
  in_progress: "text-blue-400",
  resolved: "text-emerald-400",
  closed: "text-neutral-400",
  cancelled: "text-red-400",
};
</script>

<template>
  <Tag :class="tagColors[status]">{{ startCase(status.replace('_', ' ')) }}</Tag>
</template>