import authApi from "../../api/authApi"
import { checkingAuthentication, login, logout } from "."

interface User{
    user: string,
    password: string
}

export const chekingAuth:any = ( user:User ) => {
    return async ( dispatch:any ) => {
        dispatch( checkingAuthentication() );
    }
}

export const onLogin:any = ( user:User ) => {

    const userSiadeg:any = {
        dni: user.user,
        clave: user.password
    }
    
    return async ( dispatch:any ) => {
        dispatch( checkingAuthentication() );

        const {data} = await authApi.post('/login', userSiadeg);

        if(data[0].Estado == 'ACTIVO'){
            dispatch( login(data[0]) )
        }else{
            dispatch( logout() )
        }
    }
}