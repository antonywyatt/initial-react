import { checkingAuthentication, login, logout, verifyAuth } from "."
import authApi from "../../api/authApi"
import homeApi from "../../api/homeApi"

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

        const {data} = await homeApi.get('/autenticado')

        if(data[0]?.autenticado == '1'){
            const decrypt = atob(localStorage.getItem('_u_') || '');
            const user = JSON.parse(decrypt);
            dispatch( verifyAuth({ user }))
        }else{
            dispatch( logout({ Estado: 'Expired session!' }) )
        }
    }
}

export const onLogout:any = ( ) => {
    return async ( dispatch:any ) => {
        dispatch( checkingAuthentication() );
        dispatch( logout({Estado: 'Logout!'}));
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