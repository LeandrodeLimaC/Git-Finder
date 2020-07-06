<template>
  <div>
      <div>
        <img :src="User.avatar_url">
        {{User}}
      </div>
  </div>
</template>

<script>
export default {
    props:{
        User: Object
    }
}
</script>

<style>

</style>