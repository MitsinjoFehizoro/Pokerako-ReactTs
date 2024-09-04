import React, { useState } from "react"
import { field } from "../tools/type"
import { regexPseudo } from "../tools/regex"

export const usePseudoField = () => {
    const [pseudoField, setPseudoField] = useState<field>({
        isValid: false,
        value: '',
        errorMessage: ''
    })

    const handlePseudoField = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (regexPseudo.test(e.target.value)) {
            setPseudoField({ isValid: true, value: e.target.value, errorMessage: '' })
        } else {
            const errorMessage = 'Entre 3 à 20 sans aucun caractère spécial.'
            setPseudoField({ isValid: false, value: e.target.value, errorMessage: errorMessage })
        }
    }
    return {
        pseudoField,
        handlePseudoField
    }
}