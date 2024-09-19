import { useState } from "react"
import { field, stateAxios } from "../../tools/type"
import { useToast } from "../../hooks/use-toast"
import axios from "axios"
import { handleError } from "../../tools/handle-error"
import { useNavigate } from "react-router-dom"

export const useSignup = () => {
    const [stateSignup, setStateSignup] = useState<stateAxios>({
        isLoading: false,
        message: null,
        data: null,
        errorMessage: null
    })

    const navigate = useNavigate()
    const { addToast } = useToast()
    const signup = async (phoneField: field, pseudoField: field, passwordField: field, confirmPasswordField: field) => {
        if (!phoneField.isValid || !pseudoField.isValid || !passwordField.isValid || !confirmPasswordField.isValid) {
            return addToast({ toast: 'Merci de remplir correctement les formulaires.', type: 'warning' })
        }
        try {
            setStateSignup({ isLoading: true, message: null, data: null, errorMessage: null })
            const user = {
                phone: phoneField.value,
                pseudo: pseudoField.value,
                password: passwordField.value
            }
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}signup`, user)
            setStateSignup({ isLoading: false, message: response.data.message, data: response.data.data, errorMessage: null })
            addToast({ toast: response.data.message, type: 'success' })
            navigate('/login')
        } catch (error) {
            handleError(error, setStateSignup, addToast)
        }
    }

    return {
        stateSignup,
        signup
    }
}