function add(...numbers) {
    let sum = 0

    for(let i =0; i<numbers.length; i++){
        sum += numbers[i]
    }
    return sum
}

console.log(add(1,2,3,4,5,6,7,8,9,10))


const arr = [1,2,3,4,5,6,7,8,9,10]

const [first, second, ...remaining] = arr

console.log(first)
console.log(second)
console.log(remaining)