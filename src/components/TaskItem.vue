<script setup lang="ts">
import type { PropType } from "vue";
import type ITask from "@/interfaces/ITask";
import TaskCronometer from "./TaskCronometer.vue";
import YellowBox from "./YellowBox.vue";
defineProps({
  task: {
    type: Object as PropType<ITask>,
    required: true,
  },
});
</script>

<template>
  <YellowBox>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || "Task without description" }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || "N/D" }}
      </div>
      <div class="column">
        <TaskCronometer :time-in-secods="task.timeInSeconds" />
      </div>
    </div>
  </YellowBox>
</template>
