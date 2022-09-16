<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store";
import { DELETE_PROJECT } from "@/store/mutation-types";

const store = useStore();
const projects = computed(() => store.state.projects);
const onDelete = (id: string) => {
  store.commit(DELETE_PROJECT, id);
};
</script>

<template>
  <section>
    <RouterLink to="/projects/new" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>New Project</span>
    </RouterLink>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Project name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <RouterLink :to="`/projects/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>
            <button class="button ml-2 is-danger" @click="onDelete(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
