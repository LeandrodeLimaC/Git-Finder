<template>
    <div>
        <tr v-for="user of Users" :key="user.id">
            <td>
                <img :src="user.avatar_url">{{user}}</td>
            <br>
        </tr> 
    </div>
</template>

<script>
export default {
    props:{
        Users: {}
    }
}
</script>

<style>

</style>