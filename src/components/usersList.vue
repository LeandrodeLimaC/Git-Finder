<template>
    <div>
        <div v-if="Users.length >= 1 && userSelected == ''">
            <userItem 
                v-for="user of Users" :key="user.id"
                :User="user"
                @click.native="userClicked(user)"/>
        </div>

        <div v-else-if="userSelected != ''" >
            <userItem 
                @click.native="clean()"
                :User="userSelected">
                {{userSelected}}
            </userItem>
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
            this.userSelected = user;
            this.$emit("userSelected", this.userSelected.login)
        },
        clean(){
            this.userSelected = '';
            this.$emit("userDeselected", '')
        }
    }
}
</script>

<style>

</style>