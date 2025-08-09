<script lang="ts" setup>
withDefaults(defineProps<{ disabled?: boolean }>(), {
  disabled: false,
});
</script>

<template>
  <button :disabled="disabled" :class="disabled ? 'bg-neutral-700 cursor-not-allowed' : 'bg-purple-700 cursor-pointer'" class="text-neutral-200 tracking-wider hover:bg-purple-600 focus:bg-purple-600 p-3 rounded transition duration-300 ease-in-out">
    <slot/>
  </button>
</template>