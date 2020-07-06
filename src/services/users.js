import { http } from './config'

export default {

    search:(name) => {
        return http.get(`search/users?q=${name}`)
    },

    getUser:(name) => {
        return http.get(`users/${name}`)
    },

    getRepos:(name) =>{
        return http.get(`users/${name}/repos`)
    }

}