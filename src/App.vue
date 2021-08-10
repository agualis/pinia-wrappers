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

import { mapUserState, mapUserActions } from './stores/user-store'

export default {
  name: 'App',
  computed: {
    ...mapUserState({loggedIn: 'loggedIn'}),
    userState() {
      return this.loggedIn ? 'LOGGED IN' : 'NOT LOGGED IN';
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
