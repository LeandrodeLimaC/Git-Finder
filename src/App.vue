<template>
  <div id="app">
    <!-- <form v-on:submit.prevent="searchUsers()"> -->
      <input v-model="searchQuery" type="text" name="" id="">
      <!-- <button>Procurar</button> -->
    <!-- </form> -->
     {{this.teste}}
    <tr v-for="user of users" :key="user.id">
      <td>{{user.login}}</td>
     
    </tr>
  </div>
</template>

<script>

import Users from './services/users'
import {debounce} from './helpers/debounce'

export default {
  name: 'App',
  components: {},
  data () {
    return {
      users: [],
      searchQuery: '',
      isTyping: false,
      searchResult: [],
      isLoading: false,
      teste: ''
    }
  },
  methods:{
    searchUsers(searchQuery){
      this.isLoading = true;
      Users.search(searchQuery)
        .then(res => {
          this.users = res.data.items;
        }
      )
        .catch(error => console.log(error))
    }
  },
    watch: {
      searchQuery: debounce(function (debouncedQuery) {
        this.searchUsers(debouncedQuery)
      }, 500)
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
</style>
