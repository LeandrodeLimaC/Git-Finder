<template>
    <div>
        <!-- <keep-alive>
            <component v-bind:is="component"></component>
        </keep-alive> -->
        <div v-if="Users.length >= 1 && !userSelected.id && !isLoading">
            <userItem 
                v-for="user of Users" :key="user.id"
                :User="user"
                @click.native="userClicked(user)"/>
        </div>
        
        <div v-else-if="userSelected.id && !isLoading" >
            <userItem 
                @click.native="clean()"
                :User="userSelected">
                {{userSelected}}
            </userItem>
        </div>

        <div v-else-if="!userSelected.id && isLoading">
            <p>Carregando usuarios</p>
        </div>

        <div v-else>
           <p>Nada para listar</p>
        </div>
    </div> 
</template>

<script>
import userItem from '@/components/userItem';

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
    components:{
        userItem
    },
    computed:{
        // is = 'userItem'
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

<style>

</style>