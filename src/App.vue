<script setup lang="ts">
// Libs imports
import { ref } from "vue";
// Components imports
import SideBar from "@/components/SideBar.vue";

const darkMode = ref<boolean>(false);
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
      <RouterView />
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
</style>
