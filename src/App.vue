<template>
  <div id="app">
    <searchBar
    @debouncedQuery="searchUsers($event)"
    @CleanedQuery="cleanQuery()"/>
    
    <div style="display: flex">
      <div style="border: 1px solid black">
        <p 
          v-if="nothingToQuery && !isLoadingUsers">
          Nada para buscar
        </p>

        <p 
          v-else-if="!nothingToQuery && isLoadingUsers">
          Buscando usuários
        </p>
        
        <usersList 
          v-else-if="!nothingToQuery && !isLoadingUsers"
          @userSelected="searchUserRepos($event)"
          @userDeselected="userDeselected()"
          :Users = this.users 
        />

        
      </div>
      <div style="border: 1px solid blue">
        <p style="width:50vw;" v-if="isLoadingRepos">
          Buscando repositorios
        </p>
        <reposList  style="width:50vw;"
        v-else-if="userSelected != '' && !isLoadingRepos"
        :userRepos="userRepos"/>
      </div>
    </div>
  </div>
</template>

<script>
// Services
import Users from './services/users'

// Components
import searchBar from './components/searchBar'
import usersList from './components/usersList'
import reposList from './components/reposList'

export default {
  name: 'App',
  components: {
    searchBar,
    usersList,
    reposList
  },
  data () {
    return {
      tempUsers: [],
      users: [],
      isLoadingUsers: false,
      isLoadingRepos: false,
      nothingToQuery: true,
      userSelected: '',
      userRepos: '',
    }
  },
  methods:{
    searchUserRepos: async function(userLogin){
        this.isLoadingRepos = true;
        try {
          let reposResponse = await Users.getRepos(userLogin)
          this.userRepos = reposResponse.data;
        } catch (e){
          console.error(e)
        } finally {
          this.userSelected = userLogin;
          this.isLoadingRepos = false;
        }
      },
    searchUsers: async function(searchQuery){
        this.isLoadingUsers = true;
        this.nothingToQuery = false;
        try {
          let usersResponse = await Users.search(searchQuery);
          usersResponse.data.total_count != 0 ? this.users = usersResponse.data.items : this.users = [];
        } catch (e){
          console.log(e)
        } finally {
          this.isLoadingUsers = false;
        }
      },
      
    cleanQuery(){
        this.users = []; 
        this.nothingToQuery = true;
      },
    userDeselected(){
        this.userRepos = '';
        this.userSelected = '';
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
