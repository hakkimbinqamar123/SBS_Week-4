const productsContainer = document.getElementById("products")
const errorMessage = document.getElementById("error")
const loader = document.getElementById("loader")

async function fetchProducts() {
    loader.style.display = " block"
    errorMessage.textContent = ""
    try {
        const response = await fetch("https://fakestoreapi.com/products")

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const products = await response.json()

        displayProducts(products)
    } catch (error) {
        errorMessage.textContent = `Failed to fetch products: ${error.message}`
    } finally {
        loader.style.display = "none"
    }
}

function displayProducts(products) {
    productsContainer.innerHTML = products.map(product => {
        return `
            <div class="product">
            <img
                    src="${product.image}"
                    width="120"
                    alt="${product.title}"
                >
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
            </div>
        `
    }).join("")
}

fetchProducts()