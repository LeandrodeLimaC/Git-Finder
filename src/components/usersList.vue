<template>
    <div>
        <userItem v-for="user of Users" :key="user.id"
        :User="user"/>
    </div>
</template>

<script>
import userItem from '@/components/userItem'

export default {
    props:{
        Users: {}
    },
    components:{
        userItem
    }
}
</script>

<style>

</style>