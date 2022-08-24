<script setup lang="ts">
import { ref } from "vue";
import TaskCronometer from "./TaskCronometer.vue";

const timeInSecods = ref<number>(0);
const timerRunning = ref<boolean>(false);
const emits = defineEmits(["onStopTimer"]);
let timer = 0;

function startTimer() {
  timerRunning.value = true;
  timer = setInterval(() => {
    timeInSecods.value++;
  }, 1000);
}

function stopTimer() {
  timerRunning.value = false;
  clearInterval(timer);
  emits("onStopTimer", timeInSecods.value);
  timeInSecods.value = 0;
}
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <TaskCronometer :timeInSecods="timeInSecods" />
    <button class="button" @click="startTimer" :disabled="timerRunning">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="stopTimer" :disabled="!timerRunning">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>
