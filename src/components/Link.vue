<script lang="ts">
import { toRefs } from "vue";

export default {
  props: {
    name: String,
    link: String,
  },
  setup(props) {
    const { name, link } = toRefs(props);

    return { name, link };
  },
};
</script>

<template>
  <a className="underline" target="_blank" rel="noreferrer" :href="link">
    {{ name }}
  </a>
</template>
