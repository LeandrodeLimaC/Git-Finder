<template>
    <div>
        <div v-if="userSelected != ''" >
            <userItem @click.native="clean()"
                :User="userSelected">
                {{userSelected}}
            </userItem>
        </div>
        <div v-else-if="Users.length >= 1 && userSelected == ''">
            <userItem v-for="user of Users" :key="user.id"
            :User="user"
            @click.native="userClicked(user)"/>
        </div>
        <div v-else>
           <p>Nada para listar</p>
        </div>
    </div> 
</template>

<script>
import userItem from '@/components/userItem'

export default {
    data(){
        return{
            userSelected: '',
        }
    },
    props:{
        Users: {}
    },
    components:{
        userItem
    },
    computed:{
    },
    methods:{
        userClicked(user){
            console.log(this.userSelected);
            this.userSelected = user;
        },
        clean(){
            console.log('clean user')
            this.userSelected = '';
        }
    }
}
</script>

<style>

</style>