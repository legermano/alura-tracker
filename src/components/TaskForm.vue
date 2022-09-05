<script setup lang="ts">
import { key } from "@/store";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import TaskTimer from "./TaskTimer.vue";

const store = useStore(key);
const projects = computed(() => store.state.projects);
const projectId = ref<string>("");
const description = ref<string>("");

const emit = defineEmits(["onTaskSave"]);

const endTask = (elapsedTime: number): void => {
  emit("onTaskSave", {
    timeInSeconds: elapsedTime,
    description: description.value,
    project: projects.value.find((p) => p.id == projectId.value),
  });
  description.value = "";
};
</script>

<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="New task form creation">
        <input
          type="text"
          class="input"
          placeholder="Which task do you want to start?"
          v-model="description"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Select the project</option>
            <option
              v-for="project in projects"
              :key="project.id"
              :value="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
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
