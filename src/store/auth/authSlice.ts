import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',
    initialState : {
        status: 'checking', //'checking' | 'not-authenticated' | 'authenticated';
        user: {}
    },
    reducers:{
        login: ()=> {

        },
        logout: ()=> {

        },
        checkingAuth: ()=> {

        }
    }
});


export const { login, logout, checkingAuth } = authSlice.actions;