import React, { useState } from "react"
import { field } from "../tools/type"
import { regexPassword } from "../tools/regex"

export const usePseudoField = () => {
    const [passwordField, setPasswordField] = useState<field>({
        isValid: false,
        value: '',
        errorMessage: ''
    })

    const hanldePasswordField = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (regexPassword.test(e.target.value)) {
            setPasswordField({ isValid: true, value: e.target.value, errorMessage: '' })
        } else {
            const errorMessage = 'Minimum 4 caractères.'
            setPasswordField({ isValid: false, value: e.target.value, errorMessage: errorMessage })
        }
    }
    return {
        passwordField,
        hanldePasswordField
    }
}