<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import type IProject from "@/interfaces/IProject";
import { UPDATE_PROJECT, ADD_PROJECT } from "@/store/mutation-types";
import { NotificationType } from "@/interfaces/INotifications";
import useNotificator from "@/hooks/notificator";

const store = useStore();
const projectName = ref("");
const router = useRouter();
const { notificate } = useNotificator();

const prop = defineProps({
  id: {
    type: String,
  },
});

onMounted(() => {
  if (prop.id) {
    const project = store.state.projects.find((p) => p.id == prop.id);
    projectName.value = project?.name || "";
  }
});

const onSave = () => {
  if (prop.id) {
    store.commit(UPDATE_PROJECT, {
      id: prop.id,
      name: projectName.value,
    } as IProject);
  } else {
    store.commit(ADD_PROJECT, projectName.value);
  }
  projectName.value = "";
  notificate(
    NotificationType.SUCCESS,
    "Excellent!",
    "Project successfully created"
  );
  router.push("/projects");
};
</script>

<template>
  <section>
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
  </section>
</template>
