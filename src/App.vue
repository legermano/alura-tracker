<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import TaskForm from "./components/TaskForm.vue";
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <TaskForm />
    </div>
  </main>
</template>

<style scoped></style>
