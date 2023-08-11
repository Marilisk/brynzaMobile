const axios = require('axios').default;

const DEV_API_URL = 'http://185.137.234.42/api/'
export const API_URL = DEV_API_URL

const instance = axios.create({
    baseURL: API_URL,  
    withCredentials: true,    
})


export default instance