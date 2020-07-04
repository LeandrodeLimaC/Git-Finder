<template>
  <div>
      <img :src="User.avatar_url">{{User}}
  </div>
</template>

<script>
export default {
    props:{
        User: {}
    }
}
</script>

<style>

</style>