<script setup lang="ts">
import { ref, computed } from "vue";

const timeInSecods = ref<number>(0);
let timer = 0;

const elapsedTime = computed<string>(() => {
  return new Date(timeInSecods.value * 1000).toISOString().substring(11, 19);
});

function startCount() {
  timer = setInterval(() => {
    timeInSecods.value++;
  }, 1000);
}

function stopCount() {
  clearInterval(timer);
}
</script>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-B" role="form" aria-label="New task form creation">
        <input
          type="text"
          class="input"
          placeholder="Which task do you want to start?"
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <strong>{{ elapsedTime }}</strong>
          </section>
          <button class="button" @click="startCount">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="stopCount">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
