import { createContext, FunctionComponent, PropsWithChildren, useContext, useState } from "react";
import { User } from "../../models/user-model";
import { field, stateAxios } from "../../tools/type";
import { useToast } from "../../hooks/use-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleError } from "../../tools/handle-error";

interface AuthContextInterface {
    isAuth: boolean,
    setIsAuth: (b: boolean) => void,
    user: User | undefined,
    setUser: (user: User | undefined) => void,
    stateAuth: stateAxios,
    setStateAuth: (s: stateAxios) => void
}

const Authcontext = createContext<AuthContextInterface>({
    isAuth: false,
    setIsAuth: () => { },
    user: undefined,
    setUser: () => { },
    stateAuth: {
        isLoading: false,
        message: null,
        data: null,
        errorMessage: null
    },
    setStateAuth: () => { }
})

export const useAuth = () => {
    const { isAuth, setIsAuth, user, setUser, stateAuth, setStateAuth } = useContext(Authcontext)

    const { addToast } = useToast()
    const navigate = useNavigate()
    const location = useLocation()

    const login = async (phoneField: field, passwordField: field) => {
        if (!phoneField.isValid || !passwordField.isValid) {
            return addToast({ toast: 'Merci de remplir correctement les formulaires.', type: 'error' })
        }
        try {
            setStateAuth({ isLoading: true, message: null, data: null, errorMessage: null })
            const response = await axios.post(`${import.meta.env.BASE_URL}login`, { phone: phoneField.value, password: passwordField.value })
            localStorage.setItem('token', response.data.token)
            setIsAuth(true)
            setUser(response.data.user)
            addToast({ toast: `Bonjour ${user?.pseudo}.`, type: 'success' })
            setStateAuth({ isLoading: false, message: response.data.message, data: response.data.data, errorMessage: null })
            const from = location.state.from || '/'
            if (from !== '/login' && from !== '/signup') navigate(from)
        } catch (error) {
            handleError(error, setStateAuth, addToast)
        }
    }

    const logout = () => {
        try {
            setStateAuth({ isLoading: true, message: null, data: null, errorMessage: null })
            localStorage.removeItem('token')
            setIsAuth(false)
            addToast({ toast: `Au revoir ${user?.pseudo}`, type: 'success' })
            setUser(undefined)
            navigate('/login')
            setStateAuth({ ...stateAuth, isLoading: false })
        } catch (error) {
            handleError(error, setStateAuth, addToast)
        }
    }

    return {
        isAuth,
        login,
        logout,
        user,
        stateAuth
    }
}

export const AuthContexProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [user, setUser] = useState<User>()
    const [stateAuth, setStateAuth] = useState<stateAxios>({
        isLoading: false,
        message: null,
        data: null,
        errorMessage: null
    })
    return (
        <Authcontext.Provider value={{ isAuth, setIsAuth, user, setUser, stateAuth, setStateAuth }} >
            {children}
        </Authcontext.Provider>
    )
}