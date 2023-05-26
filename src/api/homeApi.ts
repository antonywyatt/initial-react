import axios from "axios";

let user = {token: ''};
const decrypt = atob(localStorage.getItem('_u_') || '');
if(decrypt){
    user = JSON.parse(decrypt);
}
const homeApi = axios.create({
    baseURL: 'https://api.siadeg.pe/api',
    params: {
        token: user.token
    }
})

export default homeApi