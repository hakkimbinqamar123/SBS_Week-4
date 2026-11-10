import { getProducts } from './services/productService.js'
import { displayProducts } from './components/products.js'
import { APP_NAME } from './constants/config.js'


const loader = document.getElementById("loader")
const errorMessage = document.getElementById("errorMessage")
const productContainer = document.getElementById("products")
const searchInput = document.getElementById("searchInput")
const productCount = document.getElementById("productCount")

let allProducts = []

async function startApp() {
    loader.classList.remove("hidden")
    errorMessage.classList.add("hidden")

    try {
        allProducts = await getProducts()
        displayProducts(allProducts, productContainer)
        productCount.textContent = `${allProducts.length} products found in ${APP_NAME}.`
    } catch (error) {
        errorMessage.textContent = error.message
        errorMessage.classList.remove("hidden")
    } finally {
        loader.classList.add("hidden")
    }
}

searchInput.addEventListener("input", (event) => {
    const searchItem = searchInput.value.toLowerCase().trim()
    const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(searchItem))
    displayProducts(filteredProducts, productContainer)
    productCount.textContent = `${filteredProducts.length} products found in ${APP_NAME}.`
})

startApp()