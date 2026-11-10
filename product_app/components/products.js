import { formatPrice, capitalText } from "../utils/helpers.js"

export function displayProducts(products, container) {
    container.replaceChildren()

    if (products.length === 0) {
        container.textContent = "No products available."
        return
    }

    products.forEach(product => {
        const card = document.createElement("div")
        card.className = "product-card"

        const img = document.createElement("img")
        img.src = product.image
        img.alt = product.title
        img.loading = "lazy"

        const title = document.createElement("h3")
        title.textContent = capitalText(product.title)

        const price = document.createElement("p")
        price.textContent = formatPrice(product.price)

        const category = document.createElement("p");
        category.textContent = capitalText(product.category)

        card.append(img, title, price, category)

        container.appendChild(card)
    })
}