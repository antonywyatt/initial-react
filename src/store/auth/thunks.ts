import authApi from "../../api/authApi"
import { checkingAuthentication, login, logout, verifyAuth } from "."

interface User{
    user: string,
    password: string
}

export const chekingAuth:any = ( ) => {
    return async ( dispatch:any ) => {
        dispatch( checkingAuthentication() );
    }
}

export const onVerifyAuth:any = ( ) => {
    return async ( dispatch:any ) => {
        dispatch( checkingAuthentication() );

        const user = localStorage.getItem('_u_');
        if(user == null){
            dispatch( logout({ Estado: 'Expired session!' }) )
        }else{
            const decrypt = atob(localStorage.getItem('_u_') || '');
            const user = JSON.parse(decrypt);
            dispatch( verifyAuth({ user }))
        }
    }
}

export const onLogin:any = ( user:User ) => {

    const userSiadeg:any = {
        dni: user.user,
        clave: user.password
    }
    
    return async ( dispatch:any ) => {
        dispatch( checkingAuthentication() );

        const { data } = await authApi.post('/login', userSiadeg);

        if(data[0].Estado == 'ACTIVO'){
            dispatch( login(data[0]) )
        }else{
            dispatch( logout(data[0]) )
        }
    }
}