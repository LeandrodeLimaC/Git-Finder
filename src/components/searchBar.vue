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
                console.log(debouncedQuery)
                debouncedQuery.length > 0 ? this.emitQuery(debouncedQuery) : this.emitCleanedQuery()
            }, 500)
    },
    methods:{
        emitQuery(debouncedQuery){
            console.log(debouncedQuery)
            this.$emit("debouncedQuery", debouncedQuery)
        },
        emitCleanedQuery(){
            console.log("cleaned query")
            this.$emit("CleanedQuery" , '')
        }
    },
}
</script>

<style>

</style>