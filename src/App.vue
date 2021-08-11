<template>
  <div id="app">
    <h2>User {{ userState }}</h2>
    <p>
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
    </p>
</div>
</template>

<script>

import { mapState } from 'pinia'
import { mapUserState, mapUserActions, useUserStore } from './stores/user-store'

/**
 * 
 * @template {(string)[]} T 
 * @param {T} v
 * @returns {T}
 */
 export function toConstTuple(...v) {
  return v;
}

const tuple = toConstTuple('loggedIn');

export default {
  name: 'App',
  computed: {
    ...mapState(useUserStore, tuple), // Does not work (loggedIn has any type)
    ...mapState(useUserStore, {loggedIn2: 'loggedIn'}), // Works (loggedIn2 has boolean type)
    ...mapUserState({loggedIn3: 'loggedIn'}), // Works (loggedIn3 has any type)
    userState() {
      console.log(this.loggedIn);
      console.log(this.loggedIn2); 
      return this.loggedIn3 ? 'LOGGED IN' : 'NOT LOGGED IN';
    },
  },
  methods: {
    ...mapUserActions({
      login: 'login',
      logout: 'logout',
    }),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
 font-size: 20px;
 margin: 5px;
}

</style>
