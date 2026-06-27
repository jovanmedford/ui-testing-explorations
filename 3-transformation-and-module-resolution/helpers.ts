
export const isRequiredLength = (password: string) => {
    return password.length >= 7
}

export const hasSpecialCharacter = (password: string) => {
    return /[^A-Za-z0-9\s]/.test(password)
}