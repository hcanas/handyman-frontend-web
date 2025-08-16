<script setup lang="ts">
import TableTextFilter from "./TableTextFilter.vue";
import {onMounted, provide, reactive, toRef} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();

const router = useRouter();

type SortOrder = "asc" | "desc" | "";

const filters = reactive<{
  keyword: string;
  order_by: string;
  order_dir: SortOrder;
}>({
  keyword: "",
  order_by: "",
  order_dir: "",
});

provide("keyword", toRef(filters, "keyword"));
provide("orderBy", toRef(filters, "order_by"));
provide("orderDir", toRef(filters, "order_dir"));

function applyFilters() {
  router.push({
    query: {
      keyword: filters.keyword || undefined,
      order_by: filters.order_by || undefined,
      order_dir: filters.order_dir || undefined,
    },
  });
}

onMounted(() => {
  filters.keyword = route.query?.keyword as string ?? "";
  filters.order_by = route.query?.order_by as string ?? "";
  filters.order_dir = route.query?.order_dir as SortOrder ?? "";
});
</script>

<template>
  <form @submit.prevent="applyFilters()">
    <div class="flex items-center gap-x-1">
        <TableTextFilter/>
        <slot/>
        <button type="submit" class="text-sm text-neutral-100 bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 px-6 py-1.5 border border-neutral-700 rounded cursor-pointer transition duration-300 ease-in-out">
          Apply Filters
        </button>
    </div>
  </form>
</template>