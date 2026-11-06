const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Monitor", price: 15000 }
]


const sortedProducts = [...products].sort(
    ((a,b) => a.price - b.price)
)

console.log(sortedProducts)