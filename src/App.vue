<script setup lang="ts">
// Libs imports
import { ref, computed } from "vue";
// Type imports
import type ITask from "@/interfaces/ITask";
// Components imports
import SideBar from "@/components/SideBar.vue";
import TaskForm from "@/components/TaskForm.vue";
import TaskItem from "@/components/TaskItem.vue";
import YellowBox from "@/components/YellowBox.vue";

const tasks = ref([] as ITask[]);
const darkMode = ref<boolean>(false);
const saveTask = (task: ITask) => tasks.value.push(task);
const isTaskListEmpty = computed<boolean>(() => tasks.value.length === 0);
const changeMode = (enableDarkMode: boolean) =>
  (darkMode.value = enableDarkMode);
</script>

<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'dark-mode': darkMode }"
  >
    <div class="column is-one-quarter">
      <SideBar @on-change-mode="changeMode" />
    </div>
    <div class="column is-three-quarter content">
      <TaskForm @on-task-save="saveTask" />
      <div class="list">
        <YellowBox v-if="isTaskListEmpty">
          Você não está muito produtivo hoje :(
        </YellowBox>
        <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
      </div>
    </div>
  </main>
</template>

<style>
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}
.list {
  padding: 1.25rem;
}

.content {
  background-color: var(--bg-primary);
}
</style>
