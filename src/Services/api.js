import axios from "axios"

const api =  axios.create({ 
    baseURL: 'http://10.92.198.23:8080'
}) 

export default api