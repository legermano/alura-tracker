<script setup lang="ts">
import type IProject from "@/interfaces/IProject";
import { ref } from "vue";

const projects = ref([] as IProject[]);
const projectName = ref("");

const onSave = () => {
  const project: IProject = {
    id: new Date().toISOString(),
    name: projectName.value,
  };
  projects.value.push(project);
  projectName.value = "";
};
</script>

<template>
  <section class="projects">
    <h1 class="title">Projects</h1>
    <form @submit.prevent="">
      <div class="field">
        <label for="projectName" class="label"> Project Name </label>
        <input
          type="text"
          class="input"
          v-model="projectName"
          id="projectName"
        />
      </div>
      <div class="field">
        <button class="button" type="submit" @click="onSave">Save</button>
      </div>
    </form>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Project name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.projects {
  padding: 1.25rem;
}
</style>
