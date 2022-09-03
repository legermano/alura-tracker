<script setup lang="ts">
import { ref, computed } from "vue";

const emit = defineEmits(["onChangeMode"]);
const darkMode = ref<boolean>(false);
const changeMode = () => {
  darkMode.value = !darkMode.value;
  emit("onChangeMode", darkMode.value);
};
const darkThemeButtonText = computed<string>(() =>
  darkMode.value ? "Disable dark mode" : "Enable dark mode"
);
</script>

<template>
  <header>
    <h1>
      <img src="@/assets/logo.png" alt="Alura Tracker" />
    </h1>
    <button class="button" @click="changeMode">
      {{ darkThemeButtonText }}
    </button>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
