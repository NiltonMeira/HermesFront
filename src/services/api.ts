import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:1960/api/",
    timeout: 80000
})

export default api