import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import TasksView from "@/views/TasksView.vue";
import ProjectsView from "@/views/ProjectsView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
