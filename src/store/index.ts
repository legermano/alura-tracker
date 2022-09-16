import { createStore, Store, useStore as vuexUseStore } from "vuex";
import type IState from "@/interfaces/IState";
import type { InjectionKey } from "vue";
import type IProject from "@/interfaces/IProject";
import { ADD_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from "./mutation-types";

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: [],
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
  },
});

export function useStore(): Store<IState> {
  return vuexUseStore(key);
}
