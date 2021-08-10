import { defineStore, mapState, mapActions } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      loggedIn: false,
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

export const mapUserState = (args) => mapState(useUserStore, args);
export const mapUserActions = (args) => mapActions(useUserStore, args);
