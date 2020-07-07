<template>
  <div id="app">   
    <div class="main-wrapper full-width__column">
      <img class="logo" v-if="!userSelected.id" src="@/assets/logo.png">
      <div v-if="nothingToQuery">
        <md-empty-state 
          class="full-width__column"
          md-description="Escreva o nome de uma pessoa para encontrar informações do github, como repositórios e dados públicos">
        </md-empty-state>
      </div>
      <searchBar 
        v-show="!userSelected.id"
        @debouncedQuery="searchUsers($event)"
        @CleanedQuery="cleanQuery()"
        />
      <usersList  
        v-if="!nothingToQuery"
        @userSelected="searchUserRepos($event)"
        @userDeselected="userDeselected()"
        :Users="users"
        :userSelected="userSelected"
        :isLoading="isLoadingUsers"
        />  
        <reposList 
        class="full-width__column"
        v-if="userSelected.id"
        :userRepos="userRepos"
        :isLoading="isLoadingRepos"
        />
    </div>
   
  </div>
</template>

<script>
// Services
import Users from './services/users';

// // Components
import searchBar from './components/searchBar';
import usersList from './components/usersList';
import reposList from './components/reposList';

export default {
  name: 'App',
  components: {
    searchBar,
    usersList,
    reposList
  },
  data () {
    return {
      users: [],
      isLoadingUsers: false,
      isLoadingRepos: false,
      nothingToQuery: true,
      userSelected: {},
      userRepos: '',
    }
  },
  methods:{
    searchUserRepos: async function(userLogin){
        this.isLoadingRepos = true;
        try {
          let reposResponse = await Users.getRepos(userLogin);
          let userResponse = await Users.getUser(userLogin);
          this.userRepos = reposResponse.data;
          this.userSelected = userResponse.data;
        } catch (e){
          console.error(e);
        } finally {
          this.isLoadingRepos = false;
          this.scrollToTop();
        }
      },

    searchUsers: async function(searchQuery){
        this.isLoadingUsers = true;
        this.nothingToQuery = false;
        this.userDeselected()
        try {
          let usersResponse = await Users.search(searchQuery);
          usersResponse.data.total_count != 0 ? this.users = usersResponse.data.items : this.users = [];
        } catch (e){
          console.log(e);
        } finally {
          this.isLoadingUsers = false;
        }
      },

    cleanQuery(){
        this.users = []; 
        this.nothingToQuery = true;
        this.userDeselected()
      },

    userDeselected(){
        this.userRepos = '';
        this.userSelected = {};
      },

    scrollToTop() {
        window.scrollTo(0,0);
      }  
  }
}

</script>

<style lang="scss">
@import "@/styles.scss";

.md-theme-default a:not(.md-button) {
    color: #ff4081;
    color: var(--md-theme-default-primary-on-background, #ff4081)!important;
}
  
body{
  margin: 0;
  display: flex;
  align-items: center;
}
#app{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  display: flex;
  flex-flow: column;
  width: 100%;
}
.main-wrapper{
  display: flex;
  flex-flow: column;    
  max-width: 480px;
  align-items: center;
  min-width: 30vw;
  width: 100%;
}
.logo{
  width: 140px;
  margin: 20px 0;
}
.full-width__column{
  display: flex;
  flex-flow: column;
  max-width: 420px;
  align-items: center;
  min-width: 30vw;
  width: 100%;
}
.text-center{
  text-align: center;
}
md-list{
  background: transparent!important
}
a{
  color: #E562A3
}
.md-empty-state{
    max-width: none;
    padding: 0!important;
}
</style>
