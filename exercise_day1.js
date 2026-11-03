var studentName = "Hakeem";
var studentAge = 25;
var course = "JavaScript";

var message = "My name is " + studentName +
              ". I am " + studentAge +
              " years old. I am learning " + course;

console.log(message);


const student = {
    name: "hakeem",
    age: 26,
    course: "Computer Science"
}

const {name, age, course: studentCourse} = student

const message2 = `My name is ${name}. I am ${age} years old. I am learning ${studentCourse}.`


const arr = [1,2,3,4,5]

const newArr = [...arr, 6,7,8]
console.log(arr)
console.log(newArr)


const employee = {
     name: "Shayi",
    age: 25,
    department: "IT",
    leave: {
        days: 5,
        type: "Annual"
    }
}

const shallowCopy = { ...employee }
const deepCopy = structuredClone(employee)

shallowCopy.age = 26
shallowCopy.salary = 5000
deepCopy.leave.days = 7

console.log(employee)
console.log(shallowCopy)
console.log(deepCopy)


function add(...nums) {
    let sum = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
    }
    console.log(sum)
}

add(1, 2, 3, 4, 5)