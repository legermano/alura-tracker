<script setup lang="ts">
// Libs imports
import { ref, computed } from "vue";
// Type imports
import type ITask from "@/interfaces/ITask";
// Components imports
import TaskForm from "@/components/TaskForm.vue";
import TaskItem from "@/components/TaskItem.vue";
import YellowBox from "@/components/YellowBox.vue";

const tasks = ref([] as ITask[]);
const saveTask = (task: ITask) => tasks.value.push(task);
const isTaskListEmpty = computed<boolean>(() => tasks.value.length === 0);
</script>

<template>
  <TaskForm @on-task-save="saveTask" />
  <div class="list">
    <YellowBox v-if="isTaskListEmpty">
      Você não está muito produtivo hoje :(
    </YellowBox>
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<style>
.list {
  padding: 1.25rem;
}

.content {
  background-color: var(--bg-primary);
}
</style>
