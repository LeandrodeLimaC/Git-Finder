<template>
  <div >
        <div v-if="userRepos.length >= 1">
            <div v-for="repo in userRepos" v-bind:key="repo.id">
                {{repo}}
            </div>
        </div>
        
        <div v-else>
           <p>Este usuário nao tem repositórios</p>
        </div>
  </div>    
</template>

<script>
export default {
    props:{
        userRepos: {}
    },
}
</script>

<style>

</style>