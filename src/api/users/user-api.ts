import { useState } from "react"
import { stateAxios } from "../../tools/type"

export const useSignup = () => {
    const [stateSignup, setStateSignup] = useState<stateAxios>({
        isLoading: false,
        message: null,
        data: null,
        errorMessage: null
    })

    const signup = async () => {

    }

    return {
        stateSignup,
        signup
    }
}