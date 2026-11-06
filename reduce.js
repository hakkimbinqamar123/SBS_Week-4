let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = arr.reduce((acc, curr) => {
    return acc + curr
})

console.log(sum)


const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
]


const total = cart.reduce((acc, curr) => {
    return  acc + (curr.price * curr.quantity)
}, 0) 

console.log(total)


const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
]

const count = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})

console.log(count)