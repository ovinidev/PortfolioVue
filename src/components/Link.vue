<script setup lang="ts">
const { name } = defineProps({
  name: String,
  link: String,
});
</script>

<template>
  <a
    className="underline"
    target="_blank"
    rel="noreferrer"
    :href="link"
    :text="name"
  />
</template>
