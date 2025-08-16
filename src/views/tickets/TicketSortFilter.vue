<script setup lang="ts">
import TableSortFilter from "../../components/tables/TableSortFilter.vue";

type SortOption = {
  value: string;
  label: string;
}

const sortOptions: SortOption[] = [
  { value: 'priority_level', label: 'Priority Level' },
  { value: 'status', label: 'Status' },
];
</script>

<template>
  <TableSortFilter :options="sortOptions"/>
</template>