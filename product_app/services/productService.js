import {API_URL} from "../constants/config.js"

export async function getProducts() {
    try {
        const response = await fetch(API_URL)
        const products = await response.json()
        return products
    } catch (error) {
        console.error("Error fetching products:", error)
        throw error
    }
}