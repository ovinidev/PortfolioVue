<script setup lang="ts">
defineProps({
  name: String,
  link: String,
});
</script>

<template>
  <a className="underline" target="_blank" rel="noreferrer" :href="link">
    {{ name }}
  </a>
</template>
