import { defineStore, mapState } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      loggedIn: false,
      name: 'Guest',
    }
  },
  getters: {
    loggedInGetter(state) {
      return state.loggedIn;
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
 * @type {import('./types').mapUserWithArray} 
 */
export const mapUserWithArray = (keys) => mapState(useUserStore, keys);

/**
 * @type {import('./types').mapUserWithObject} 
 */
export const mapUserWithObject = (keyMapper) => mapState(useUserStore, keyMapper);

/**
 * @type {import('./types').mapUserWithRecordWitHardCodedKeyMapper} 
 */
export const mapUserWithRecordWitHardCodedKeyMapper = () => mapState(useUserStore, {loggedIn3:'loggedIn'});


