<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  timeInSecods: {
    type: Number,
    default: 0,
  },
});

const elapsedTime = computed<string>(() => {
  return new Date(props.timeInSecods * 1000).toISOString().substring(11, 19);
});
</script>

<template>
  <section>
    <strong class="display">{{ elapsedTime }}</strong>
  </section>
</template>

<style scoped>
.display {
  color: var(--text-primary);
}
</style>
