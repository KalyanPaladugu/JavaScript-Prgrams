// program to merge property of two objects

// object 1
const person = {
    name: 'Jack',
    age:26
}

// object 2
const student = {
    gender: 'male'
}

// const newObj=Object.assign(person,student)
const newObj={...person,...student}
console.log(newObj)