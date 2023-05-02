// import the axios package
import axios from 'axios'

export default {
    // create the function to get all the states
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    }




}
