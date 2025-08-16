<script setup lang="ts">
import type {Ref} from "vue";
import {inject} from "vue";

const keyword = inject<Ref<string>>("keyword");
</script>

<template>
  <input type="search" v-model="keyword" placeholder="Search keyword..." autofocus
         class="w-96 text-sm text-neutral-100 placeholder-neutral-300 p-2 border-b border-neutral-800 focus:ring-0 focus:border-purple-500"/>
</template>