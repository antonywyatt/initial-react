import { Routes, Route } from 'react-router-dom';
import { AppRoutes } from '../auth/routes/AppRoutes';
import { HomeRoutes } from '../home/routes/HomeRoutes'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/auth/*' element={ <AppRoutes /> } />
            <Route path='/*' element={ <HomeRoutes /> } />
        </Routes>
    )
}