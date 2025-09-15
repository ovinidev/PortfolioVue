<script setup lang="ts">
  const { name, link } = defineProps({
    name: String,
    link: String
  })
</script>

<template>
  <a
    class="underline"
    target="_blank"
    rel="noreferrer"
    :href="link"
    :text="name"
  />
</template>
