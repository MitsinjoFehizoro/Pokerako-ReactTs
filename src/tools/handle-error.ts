import axios from "axios"
import { stateAxios, toast } from "./type"

export const handleError = (error: unknown, setStateAxios: (s: stateAxios) => void, addToast: (t: toast) => void) => {
    if (axios.isAxiosError(error)) {
        setStateAxios({ isLoading: false, message: error.response?.data.message, data: null})
        addToast({ toast: error.response?.data.message, type: 'error' })
    } else {
        const errorMessage = "🛠️ Une erreur est survenue de notre côté. Réessayer dans quelques instants."
        setStateAxios({ isLoading: false, message: errorMessage, data: null})
        addToast({ toast: errorMessage, type: 'error' })
        console.error("Une erreur se produite : ", error);
    }
}