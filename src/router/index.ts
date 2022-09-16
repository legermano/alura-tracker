import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import TasksView from "@/views/TasksView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import FormView from "@/views/Projects/FormView.vue";
import ListView from "@/views/Projects/ListView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tasks",
    component: TasksView,
  },
  {
    path: "/projects",
    component: ProjectsView,
    children: [
      {
        path: "",
        name: "Projects",
        component: ListView,
      },
      {
        path: "new",
        name: "New Project",
        component: FormView,
      },
      {
        path: ":id",
        name: "Edit Project",
        component: FormView,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
