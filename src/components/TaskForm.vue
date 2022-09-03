<script setup lang="ts">
import { ref } from "vue";
import TaskTimer from "./TaskTimer.vue";

const description = ref<string>("");

const emit = defineEmits(["onTaskSave"]);

const endTask = (elapsedTime: number): void => {
  emit("onTaskSave", {
    timeInSeconds: elapsedTime,
    description: description.value,
  });
  description.value = "";
};
</script>

<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-B" role="form" aria-label="New task form creation">
        <input
          type="text"
          class="input"
          placeholder="Which task do you want to start?"
          v-model="description"
        />
      </div>
      <div class="column">
        <TaskTimer @on-stop-timer="endTask" />
      </div>
    </div>
  </div>
</template>

<style>
.form {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
</style>
