<template>
  <div id="app">
    <searchBar
    @debouncedQuery = 'searchUsers($event)'/>
    <tr v-for="user of users" :key="user.id">
      <td>{{user.login}}</td>
     
    </tr>
  </div>
</template>

<script>
// Services
import Users from './services/users'

// Components
import searchBar from './components/searchBar'

export default {
  name: 'App',
  components: {
    searchBar
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
    console.log(this.isLoading)
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
        this.isLoading = false
        console.log(this.isLoading)
        }
      )
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
