const stud = {
    name: "hakeem",
    age: 26
}

const { name: studName, age: studAge, course = "Computer Science" } = stud

console.log(studName)
console.log(studAge)
console.log(course)


const original = {
    name: "John",
    age: 25,
    address: {
        city: "Dubai",
        country: "UAE"
    }
}

const shallowCopy = { ...original }

shallowCopy.name = "Jake"

console.log(original.name)
console.log(shallowCopy.name)

const deepCopy = structuredClone(original)

deepCopy.address.city = "Abu Dhabi"

console.log(original.address.city)
console.log(deepCopy.address.city)