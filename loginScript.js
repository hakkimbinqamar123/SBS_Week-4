const products = [
    { id: 1, title: "Laptop", price: 50000 },
    { id: 2, title: "Mobile", price: 25000 },
    { id: 3, title: "Keyboard", price: 2000 }
]

const productContainer = document.getElementById("products")

productContainer.innerHTML = products.map(product => {
    return `<div class="product-card">
            <h3>${product.title}</h3>
            <p>Price: ₹${product.price}</p>
        </div>`}).join("")



setInterval(() => {
    fetch("https://fakestoreapi.com/products").then(response => response.json).
    then(data => {
        console.log(data)
    })
}, 2000)