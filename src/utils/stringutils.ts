/**
 * Checks if a given value is a non-empty string.
 *
 * @param value - The value to check.
 * @returns True if the value is a non-empty string, false otherwise.
 */
function isValidString(value: any): boolean {
    return typeof value === 'string' && value.trim().length > 0;
}


export { isValidString };