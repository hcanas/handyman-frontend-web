<script setup lang="ts" generic="T extends Record<string, any>">
import NoTableData from "./NoTableData.vue";
import type {Pagination} from "../../types/common";
import {provide, ref} from "vue";
import type {Ref} from "vue";
import {camelCase} from "lodash-es";
import TableFilters from "./TableFilters.vue";
import PaginationComponent from "../../components/Pagination.vue"

type ColumnIndex<T> = keyof T & string;

type ColumnAlignment = "left" | "center" | "right";

interface ColumnDef<T> {
  index: ColumnIndex<T>;
  title: string;
  align: ColumnAlignment;
  custom: boolean;
}

defineProps<{
  data?: T[];
  meta?: Pagination;
}>();

const columns: Ref<ColumnDef<T>[]> = ref([]);

function registerColumn(index: ColumnIndex<T>, title: string, align: ColumnAlignment, custom: boolean) {
  const exists = columns.value.some(col => col.index === index);

  if (!exists) {
    columns.value.push({ index, title, align, custom });
  }
}

provide("registerColumn", registerColumn);

const alignment: Record<string, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <div class="flex items-center justify-between gap-x-3">
      <TableFilters>
        <slot name="customFilters"/>
      </TableFilters>
    </div>

    <table v-if="data?.length" class="table-auto">
      <thead class="bg-neutral-800">
      <tr>
        <slot name="header"/>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex" class="hover:bg-neutral-800">
        <td v-for="col in columns" :class="alignment[col.align]" class="text-neutral-100 p-3">
          <slot v-if="col.custom" :name="camelCase(col.index).concat('Cell')" :rowData="row"/>
          <span v-else>{{ row[col.index] }}</span>
        </td>
      </tr>
      </tbody>
    </table>

    <NoTableData v-else/>

    <PaginationComponent v-if="meta" :data="meta" />
  </div>
</template>