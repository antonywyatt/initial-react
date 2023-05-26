import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { onLogout } from '../../store/auth'

export const HomePage = () => {

    const dispatch: Dispatch = useDispatch()

    const Logout = () => {
        dispatch( onLogout() )
    }

    return (
        <>
        <h1>Home Page</h1>
        <button
            onClick={Logout}
        >Logout</button>
        </>
    )
}