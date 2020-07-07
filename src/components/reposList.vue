<template>
    <div>
        <md-list class="repos-list md-triple-line"  v-if="userRepos.length >= 1">
            <md-divider/> 
            <md-list-item 
                v-for="repo in userRepos" 
                v-bind:key="repo.id">
                <div class="md-list-item-text">
                    <span>{{repo.name}}</span>
                    <a :href="repo.html_url" target="_blank">{{repo.full_name}}</a>
                    <p>{{repo.description}}</p>
                </div>

                <div class="l-stars">
                    <span class="stars__number">{{repo.stargazers_count}}</span>
                   <md-icon>star</md-icon>
                </div>
            </md-list-item>
            <md-divider/> 
        </md-list>

        <div v-else>
           <p>Este usuário não tem repositórios</p>
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

<style lang="scss" scoped>
    .l-stars{
        display: flex;
        .stars__number{
            padding: 0 8px;
            line-height: 1.65rem;
        }
    }

    .repos-list{
        background:transparent!important;
        width: 100%;
    }
</style>