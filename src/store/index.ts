import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type IState from "@/interfaces/IState";
import type { InjectionKey } from "vue";
import type IProject from "@/interfaces/IProject";
import {
  ADD_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  NOTIFICATE,
} from "./mutation-types";
import type { INotification } from "@/interfaces/INotifications";

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: [],
    notifications: [],
  },
  mutations: {
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProject;
      state.projects.push(project);
    },
    [UPDATE_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex((p) => p.id == project.id);
      state.projects[index] = project;
    },
    [DELETE_PROJECT](state, projectId: string) {
      state.projects = state.projects.filter((p) => p.id != projectId);
    },
    [NOTIFICATE](state, newNotification: INotification) {
      newNotification.id = new Date().getTime();
      state.notifications.push(newNotification);

      setTimeout(() => {
        state.notifications = state.notifications.filter(
          (n) => n.id != newNotification.id
        );
      }, 3000);
    },
  },
});

export function useStore(): Store<IState> {
  return vuexUseStore(key);
}
