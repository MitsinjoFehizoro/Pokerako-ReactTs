import React, { useState } from "react"
import { field } from "../tools/type"
import { regexPhone } from "../tools/regex"

export const usePhoneField = () => {
    const [phoneField, setPhoneField] = useState<field>({
        isValid: false,
        value: '',
        errorMessage: ''
    })

    const handlePhoneField = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (regexPhone.test(e.target.value)) {
            setPhoneField({ isValid: true, value: e.target.value, errorMessage: '' })
        } else {
            const errorMessage = 'Numéro invalide.'
            setPhoneField({ isValid: false, value: e.target.value, errorMessage: errorMessage })
        }
    }
    
    return {
        phoneField,
        handlePhoneField
    }
}