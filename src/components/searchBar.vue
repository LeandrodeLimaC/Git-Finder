<template>
  <input v-model="searchQuery" type="text" name="" id="">
</template>

<script>
// Helpers
import { debounce } from '@/helpers/debounce'

export default {
    data() {
        return {
            searchQuery: '',
        }
    },
    watch: {
        searchQuery: 
            debounce(function (debouncedQuery) {
                this.emitQuery(debouncedQuery)
            }, 500)
    },
    methods:{
        emitQuery(debouncedQuery){
            if(debouncedQuery.length > 0){
                this.$emit("debouncedQuery", debouncedQuery)
            }
        }
    },
}
</script>

<style>

</style>