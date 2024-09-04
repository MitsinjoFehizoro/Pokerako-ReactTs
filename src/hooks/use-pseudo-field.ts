import React, { useState } from "react"
import { field } from "../tools/type"
import { regexPseudo } from "../tools/regex"

export const usePseudoField = () => {
    const [pseudoField, setPseudoField] = useState<field>({
        isValid: false,
        value: '',
        errorMessage: ''
    })

    const hanldePseudoField = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (regexPseudo.test(e.target.value)) {
            setPseudoField({ isValid: true, value: e.target.value, errorMessage: '' })
        } else {
            const errorMessage = 'Le pseudo doit contenir 3 à 15 sans aucun caractère spécial.'
            setPseudoField({ isValid: false, value: e.target.value, errorMessage: errorMessage })
        }
    }
    return {
        pseudoField,
        hanldePseudoField
    }
}