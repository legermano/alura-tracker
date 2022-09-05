import { createStore, Store } from "vuex";
import type IState from "@/interfaces/IState";
import type { InjectionKey } from "vue";

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  state: {
    projects: [],
  },
});
