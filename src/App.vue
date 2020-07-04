<template>
  <div id="app">
    <searchBar
    @debouncedQuery = 'searchUsers($event)'/>
    <usersList
    :Users = this.users />
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
      users: [],
      isLoading: false,
    }
  },
  methods:{
  searchUsers(searchQuery){
    this.isLoading = true;
    if(searchQuery.length){
      Users.search(searchQuery)
        .then(
          res => {
            this.users = res.data.items;
          }
        )
        .catch(
          error => console.log(error)
        )
        .finally(
          () => {
            this.isLoading = false;
          }
        )
    }
      this.users = [];
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
