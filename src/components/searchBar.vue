<template>
    <md-field>
      <label>Digite aqui para começar!</label>
      <md-input v-model="searchQuery"></md-input>
      <md-icon>search</md-icon>
    </md-field>
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
                debouncedQuery.length > 0 ? this.emitQuery(debouncedQuery) : this.emitCleanedQuery()
            }, 1000)
    },
    methods:{
        emitQuery(debouncedQuery){
            this.$emit("debouncedQuery", debouncedQuery)
        },
        emitCleanedQuery(){
            this.$emit("CleanedQuery" , '')
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../styles.scss";

    .md-field{
        max-width: 420px;
    }
    .md-field.md-theme-default:before {
    background-color: #ff4081;
    background-color: #ff4081;
}

</style>