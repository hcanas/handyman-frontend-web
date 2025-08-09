<script setup lang="ts">
import SidebarNav from "../components/SidebarNav.vue";
</script>

<template>
  <div class="w-full min-h-screen flex">
    <SidebarNav/>
    <main class="flex-grow flex flex-col p-12">
      <slot/>
    </main>
  </div>
</template>