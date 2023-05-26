import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://api.siadeg.pe/api',
})

export default authApi