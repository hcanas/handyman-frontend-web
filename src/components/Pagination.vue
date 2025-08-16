<script setup lang="ts">
import type {Pagination, PaginationLink} from "../types/common";
import {useRouter} from "vue-router";

defineProps<{ data: Pagination }>();

const router = useRouter();

function redirect(url: string) {
  const queryString = Object.fromEntries(new URL(url).searchParams.entries())
  router.push({query: queryString});
}

function isActive(link: PaginationLink): boolean {
  return link.active;
}

function getStyling(active: boolean): string {
  return active
    ? "text-purple-500"
    : "text-neutral-100 hover:text-purple-500 focus:text-purple-500";
}
</script>

<template>
  <div v-if="data.last_page > 1" class="flex items-center justify-center gap-x-1 bg-neutral-800 p-3">
    <button v-for="link in data.links.filter((item: PaginationLink) => item.url !== null)"
            @click="redirect(link.url as string)"
            v-html="link.label"
            :disabled="isActive(link)"
            :class="getStyling(isActive(link))"
            class="px-2 py-1 cursor-pointer rounded transition duration-300 ease-in-out"/>
  </div>
</template>