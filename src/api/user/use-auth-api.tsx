import { createContext, FunctionComponent, PropsWithChildren, useContext, useState } from "react";
import { User } from "../../models/user-model";
import { field, stateAxios } from "../../tools/type";
import axios from "axios";
import { handleError } from "../../tools/handle-error";
import { useToast } from "../../hooks/use-toast";
import { useLocation, useNavigate } from "react-router-dom";

interface authContext {
    isAuth: boolean,
    setIsAuth: (b: boolean) => void,
    stateAuth: stateAxios,
    setStateAuth: (s: stateAxios) => void,
    userConnected: User | undefined,
    setUserConnected: (u: User | undefined) => void
}

const AuthContext = createContext<authContext>({
    isAuth: false,
    setIsAuth: () => { },
    stateAuth: {
        isLoading: false, message: null, data: null
    },
    setStateAuth: () => { },
    userConnected: undefined,
    setUserConnected: () => { }
})

export const useAuth = () => {
    const { isAuth, setIsAuth, stateAuth, setStateAuth, userConnected, setUserConnected } = useContext(AuthContext)

    const { addToast } = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const initialRefreshAccessToken = async () => {
        try {
            setStateAuth({ isLoading: true, message: null, data: null })
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}refresh-token`, {}, { withCredentials: true })
            setIsAuth(true)
            setUserConnected(response.data.data)
            localStorage.setItem('accessToken', response.data.accessToken)
            setStateAuth({ isLoading: false, message: response.data.message, data: response.data.data })
        } catch (error) {
            handleError(error, setStateAuth, addToast)
        }
    }

    const login = async (phoneField: field, passwordField: field) => {
        if (!phoneField.isValid || !passwordField.isValid) {
            return addToast({ toast: 'Merci de remplir correctement les formulaires.', type: 'error' })
        }
        try {
            setStateAuth({ isLoading: true, message: null, data: null })
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}login`, { phone: phoneField.value, password: passwordField.value })
            setIsAuth(true)
            setUserConnected(response.data.data)
            setStateAuth({ isLoading: false, message: response.data.message, data: response.data.data })
            addToast({ toast: response.data.message, type: 'success' })
            const from = location.state?.from || '/'
            localStorage.setItem('accessToken', response.data.accessToken)
            if (from !== '/login' && from !== '/signup') navigate(from)
        } catch (error) {
            handleError(error, setStateAuth, addToast)
        }
    }

    const logout = async () => {
        try {
            setStateAuth({ isLoading: true, message: null, data: null })
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}logout`, {}, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } })
            setIsAuth(false)
            setUserConnected(undefined)
            setStateAuth({ isLoading: false, message: response.data.message, data: null })
            navigate('/login')
        } catch (error) {
            handleError(error, setStateAuth, addToast)
        }
    }

    return {
        isAuth,
        stateAuth,
        userConnected,
        initialRefreshAccessToken,
        login,
        logout
    }
}

export const AuthContexProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [userConnected, setUserConnected] = useState<User>()
    const [stateAuth, setStateAuth] = useState<stateAxios>({
        isLoading: false,
        message: null,
        data: null
    })
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, userConnected, setUserConnected, stateAuth, setStateAuth }} >
            {children}
        </AuthContext.Provider>
    )
}