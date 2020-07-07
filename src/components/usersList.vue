<template>
    <div class="wrapper-list">   
        <md-list 
            class="list__users"
            v-if="Users.length >= 1 && !userSelected.id && !isLoading">
            <md-divider/> 
                <md-list-item  
                    v-for="user of Users" :key="user.id"
                    :User="user"
                    @click="userClicked(user)">
                    <md-avatar>
                        <img :src="user.avatar_url" :alt="user.login">
                    </md-avatar>
                    <span class="md-list-item-text">{{user.login}}</span>
                </md-list-item>
            <md-divider/> 
        </md-list>
        
        <md-list 
            class="user-profile" 
            v-else-if="userSelected.id && !isLoading" >
            <div class="user-profile__header">
                <img src="@/assets/logo.png" class="logo" alt="GitFinder logo">
                <md-button 
                    :md-ripple="false" 
                    @click="clean()">
                    <md-icon>arrow_back</md-icon>
                    Voltar
                </md-button>
            </div>
            
            <md-list-item>
                <md-avatar class="md-large">
                    <img :src="userSelected.avatar_url" :alt="userSelected.login">
                </md-avatar>

                <div class="md-list-item-text">
                    <span class="md-list-item-text">{{userSelected.name}}</span>
                    <a :href="userSelected.html_url" target="_blank">@{{userSelected.login}}</a>
                </div>

            </md-list-item>
            <div>
                <p class="user-profile__bio" >
                    {{userSelected.bio}}
                </p>
                <md-list class="md-dense">
                    <md-list-item 
                        v-if="userSelected.location">
                        <md-icon class="profile__icon">public</md-icon>
                        <span class="md-list-item-text">{{userSelected.location}}</span>
                    </md-list-item>
                    <md-list-item 
                        v-if="userSelected.company">
                        <md-icon class="profile__icon">work</md-icon>
                        <span class="md-list-item-text">{{userSelected.company}}</span>
                    </md-list-item>
                </md-list>
            </div>       
        </md-list>

        <md-list 
            v-else-if="!userSelected.id && isLoading"
            class="list__users">
            <p>Carregando usuarios</p>
        </md-list>  

        <div class="text-center" v-else-if="!userSelected.id && !isLoading && !Users.length >= 1">
             <md-empty-state
                md-icon="search_off"
                md-label="Nenhuma pessoa encontrada"
                md-description="Não encontramos nenhum usuário com este nome! Por favor, verifique se o nome está correto."/>
        </div>
        
    </div> 
</template>

<script>

export default {
    data(){
        return{
            userlogin: '',
        }
    },
    props:{
        Users: Array,
        isLoading: Boolean,
        userSelected: Object
    },
    methods:{
        userClicked(user){
            this.userlogin = user.login;
            this.$emit("userSelected", this.userlogin)
        },
        clean(){
            this.userlogin = '';
            this.$emit("userDeselected", '')
        }
    }
}
</script>

<style lang="scss" scoped>

    .wrapper-list{
        width:100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        .list__users{
            overflow-y: auto;
            max-width: 420px;
            width: 100%;
        }
    }
    
    .user-profile{
        width: 100%;
        .user-profile__header{
            display: flex;
            justify-content: space-between;
            padding: 0 16px;
            align-items: center;
        }
        .user-profile__bio{
            padding: 0 16px;
            margin: 6px 0;
        }
    }
    .users-list{
            max-height: 50vh;
            overflow: scroll;
            width: 100%;
    }
    .md-list.md-theme-default{
        background-color: transparent!important;
    }
    i {
        .profile__icon{
            margin: 0 20px 0 0;
        }
    }
    md-progress-bar{
        width: 100%;
    }
</style>