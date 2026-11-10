export function formatPrice(price) {
    return "$" + price.toFixed(2)
}

export function capitalText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}