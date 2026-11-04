// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr.filter(num => num % 3 === 0).map(num => num * 2).reduce((acc, curr) => acc + curr, 0))

// arr.forEach(num => {
//     console.log(num * 2)
// })

// let users = [
//     { name: "Rahul", age: 25 },
//     { name: "John", age: 30 },
// //     { name: "David", age: 22 }
// ]

// users.forEach(user => {
//     console.log(`Name: ${user.name}, Age: ${user.age}`)
// })

// const newUsers = users.map(user => {
//     console.log(user.name === "Rahul" ? {...user, age: user.age + 3} : user)
// })

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Keyboard", price: 2000 }
]

const updatedProducts = products.map(product => ({
    ...product,
    tax: product.price * 0.5
}))

console.log(updatedProducts)