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

/**
 * @function
 * @template T
 * @param {T} mapper
 */
export const mapUserState = (mapper) => mapState(useUserStore, mapper);

export const mapUserActions = (args) => mapActions(useUserStore, args);
