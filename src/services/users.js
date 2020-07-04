import { http } from './config'

export default {

    search:(name) => {
        return http.get(`search/users?q=${name}`)
    },

    getRepos:(name) =>{
        return http.get(`users/${name}/repos`)
    }

}