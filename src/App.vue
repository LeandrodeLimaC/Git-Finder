<template>
  <div id="app">
    <searchBar
    @debouncedQuery = 'searchUsers($event)'/>

    <p 
    v-if="nothingToQuery && !isLoading">Nada para buscar</p>

    <usersList 
    v-else-if="!nothingToQuery && !isLoading"
    :Users = this.users />

    <p v-if="isLoading">Buscando</p>
  </div>
</template>

<script>
// Services
import Users from './services/users'

// Components
import searchBar from './components/searchBar'
import usersList from './components/usersList'

export default {
  name: 'App',
  components: {
    searchBar,
    usersList
  },
  data () {
    return {
      tempUsers: [],
      users: [],
      isLoading: false,
      nothingToQuery: true
    }
  },
  methods:{
  searchUsers(searchQuery){
    if(searchQuery != ""){
      this.isLoading = true;
      this.nothingToQuery = false;
      Users.search(searchQuery)
        .then(
          res => {
           this.tempUsers = res.data.items
           console.log("sucess")
          }
        )
        .catch(
          error => console.log(error)
        )
        .finally(
          () => {
            this.tempUsers.length != 0 ? this.users = this.tempUsers : '';
            this.isLoading = false;
          }
        )
    } else {
      this.users = [];
      this.nothingToQuery = true;
    }
    }
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
