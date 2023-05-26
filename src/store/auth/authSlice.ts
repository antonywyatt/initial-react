import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState : {
        status: 'not-authenticated', //'checking' | 'not-authenticated' | 'authenticated';
        user: {}
    },
    reducers:{
        login: (state, {payload})=> {
            state.status = 'checking';
            state.user = payload;
        },
        logout: (state)=> {
            state.status = 'not-authenticated';
            state.user = {};
        },
        checkingAuthentication: (state)=> {
            state.status = 'checking';
        }
    }
});


export const { login, logout, checkingAuthentication } = authSlice.actions;