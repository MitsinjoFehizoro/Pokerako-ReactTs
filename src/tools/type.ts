export type stateAxios = {
    isLoading: boolean
    message: string | null
    data: unknown
    errorMessage: string | null
}

export type field = {
    isValid: boolean,
    value: string,
    errorMessage: string
}

export type toast = {
    toast: string,
    type: string
}
