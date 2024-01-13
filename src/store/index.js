import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export const useVariableStore = defineStore('variable', {
  state: () => ({ BASEURL: 'http://localhost:3000', name: 'Eduardo' }),
});
