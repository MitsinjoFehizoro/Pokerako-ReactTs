export type stateAxios = {
    isLoading: boolean
    message: string | null
    data: unknown
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
