import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'piniaCounter',
  state() {
    return {
      counter: 0,
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
})
