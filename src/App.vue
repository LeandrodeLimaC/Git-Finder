<template>
  <div id="app">
    <form v-on:submit.prevent="searchUsers()">
      <input v-model="Username" type="text" name="" id="">
      <button>Procurar</button>
    </form>
    <tr v-for="user of users" :key="user.id">
      <td>{{user.login}}</td>
    </tr>
  </div>
</template>

<script>

import Users from './services/users'

export default {
  name: 'App',
  components: {},
  data () {
    return {
      users: [],
      Username: ''
    }
  },
  methods:{
    searchUsers(){
      Users.search(this.Username)
        .then(res => {
          this.users = res.data.items;
        }
      )
        .catch(error => console.log(error))
    }
  }
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
</style>
