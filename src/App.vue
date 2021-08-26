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
import { mapActions } from 'pinia/dist/src';

import { mapUserWithArray, mapUserWithObject, mapUserWithRecordWitHardCodedKeyMapper, useUserStore } from './stores/user-store'

export default {
  name: 'App',
  computed: {
    // ...mapUserWithArray(['loggedIn']), // Types work but maps all getters and state props 
    // ...mapUserWithObject({loggedIn2: 'loggedIn'}), // Types do not work
    ...mapUserWithRecordWitHardCodedKeyMapper(), // Hardcoded loggedIn3 boolean works
    userState() {
      console.log(this.loggedIn);
      console.log(this.loggedIn3);
      return this.loggedIn2 ? 'LOGGED IN' : 'NOT LOGGED IN';
    },
  },
  methods: {
    ...mapActions(useUserStore, {
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
