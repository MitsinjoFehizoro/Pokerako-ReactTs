import React, { useState } from "react"
import { field } from "../tools/type"

export const useConfirmPasswordField = () => {
    const [confirmPasswordField, setConfirmPasswordField] = useState<field>({
        isValid: false,
        value: '',
        errorMessage: ''
    })

    const handleConfirmPasswordField = (e: React.ChangeEvent<HTMLInputElement>, password: string) => {
        if (password === e.target.value) {
            setConfirmPasswordField({ isValid: true, value: e.target.value, errorMessage: '' })
        } else {
            const errorMessage = "Les mots de passe ne sont pas identiques."
            setConfirmPasswordField({ isValid: false, value: e.target.value, errorMessage: errorMessage })
        }
    }

    return {
        confirmPasswordField,
        handleConfirmPasswordField
    }
}