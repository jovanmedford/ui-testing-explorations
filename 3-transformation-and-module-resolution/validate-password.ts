import { hasSpecialCharacter, isRequiredLength } from "./helpers.js";

export default function validatePassword(password: string) {
    return isRequiredLength(password) && hasSpecialCharacter(password)
}