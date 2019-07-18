import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.254.254.80:12001'
})

export default api