<script setup lang="ts">
import { defineProps } from "vue";

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
