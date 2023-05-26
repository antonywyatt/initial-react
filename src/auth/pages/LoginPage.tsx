import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import { useForm } from "../helpers/useForm"
import { AuthLayout } from "../layout/AuthLayout"
import { onLogin } from '../../store/auth'
import { useMemo } from 'react'

export const LoginPage = () => {
    const { status } = useSelector((state: any) => state.auth)

    const dispatch: Dispatch = useDispatch()

    const { user, password, onInputChange } = useForm({
        user: '',
        password: ''
    })

    const isAuth = useMemo(() => status === 'checking', [status])

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch( onLogin({user, password}) )
    }
    
    return (
        <AuthLayout>
            <form onSubmit={onSubmit}> 
            <h1>Login Page</h1>
            <input
                name="user" 
                value={user}
                onChange={onInputChange}
                type="text" />
            <input
                name="password" 
                value={password}
                onChange={onInputChange} 
                type="password" />
            <button
                type="submit"
                disabled={isAuth}
            >
                Login
            </button>
            </form>
        </AuthLayout>
    )
}