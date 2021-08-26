import { defineStore, mapState } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      loggedIn: false,
      name: 'Guest',
    }
  },
  actions: {
    login() {
      this.loggedIn = true;
    },
    logout() {
      this.loggedIn = false;
    },
  }
})

/**
 * @type {import('./user-store').mapUserWithArray} 
 */
export const mapUserWithArray = (keys) => mapState(useUserStore, keys);
