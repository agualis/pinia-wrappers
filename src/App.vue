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
import { mapActions, mapState } from 'pinia';
import { mapUserWithRecord, useUserStore, mapUserWithArray } from './stores/user-store'

export default {
  name: 'App',
  computed: {
    // ...mapUserWithArray(['loggedIn']), // Types work but maps all getters and state props 
    // ...mapUserWithRecord({loggedIn2: 'loggedIn'}), // loggedIn2 is found but resolved with type any instead of boolean
   ...mapState(useUserStore, {loggedIn2: 'loggedIn'}), // Types do not work
    userState() {
      console.log(this.loggedIn);
      console.log(this.loggedIn2);
      console.log(this.loggedIn3);
      console.log(this.loggedIn4);
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
