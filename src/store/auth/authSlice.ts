import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState : {
        status: 'not-authenticated', //'checking' | 'not-authenticated' | 'authenticated';
        user: {},
        errorMsj: ''
    },
    reducers:{
        login: (state, { payload })=> {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMsj = '';
            //save user in localstorage
            const encrypt = btoa(JSON.stringify(payload));
            localStorage.setItem('_u_', encrypt)

        },
        checkingAuthentication: (state)=> {
            state.status = 'checking';
        },
        verifyAuth: (state, { payload })=> {
            state.status = 'authenticated';
            state.user = payload.user;
        },
        logout: (state, { payload })=> {
            state.status = 'not-authenticated';
            state.user = {};
            localStorage.removeItem('_u_');
            state.errorMsj = payload.Estado;
        },
    }
});


export const { 
    login, 
    logout, 
    checkingAuthentication, 
    verifyAuth 
} = authSlice.actions;