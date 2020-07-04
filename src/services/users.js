import { http } from './config'

export default {

    search:(name) => {
        return http.get(`users?q=${name}`)
    }

}