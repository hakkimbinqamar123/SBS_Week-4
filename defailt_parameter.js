function greet(name = "Guest") {
    console.log(`Hello, ${name}!`)
}

greet()
greet("hakeem")


const response = {
    status: "success",
    data: {
        id: 1,
        name: "hakeem",
        age: 26,
        course: "Computer Science"
    }
}

const {name, age} = response.data

console.log(name)
console.log(age)