import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from '../auth/routes/AppRoutes';
import { HomeRoutes } from '../home/routes/HomeRoutes'
import { useDispatch, useSelector } from 'react-redux';

import { LoadingPage } from '../ui/LoadingPage';
import { Dispatch } from 'redux';
import { onVerifyAuth } from '../store/auth';

export const AppRouter = () => {

    const dispatch: Dispatch = useDispatch()

    useEffect(() => {
        dispatch( onVerifyAuth() )
    }, [])

    const { status } = useSelector((state:any) => state.auth)
    if(status === 'checking') return (<LoadingPage />)

    return (
        <Routes>
            {
                (status === 'authenticated')
                ? <Route path='/*' element={ <HomeRoutes /> } />
                : <Route path='/auth/*' element={ <AppRoutes /> } />

            }
            <Route path='/*' element={ <Navigate to='/auth/login' /> } />
        </Routes>
    )
}