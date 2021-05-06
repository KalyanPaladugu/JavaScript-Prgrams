// program to create JavaScript object using
//  1.object literal

// const person = { 
//     name: 'John',
//     age: 20,
//     hobbies: ['reading', 'games', 'coding'],
//     greet: function() {
//         console.log('Hello everyone.');
//     },
//     score: {
//         maths: 90,
//         science: 80
//     }
// };
// console.log(person.name)

 

// 2.object creation by using new operator or constructor


//  function employee(name,age){
//      this.name=name;
//      this.age=age;
//  }

//  let emp=new employee("kalyan",23);
//  console.log(emp.name)


//3.object.create() which allows to specify the prototype object and the properties

// let employee={
//          name:"kalyan",
//          age:20
//      }

// let emp =Object.create(employee)
//      console.log(emp.age)



// 4. class

class Emploee {

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
   

}

var emp=new Emploee("kalyan",23)
console.log(emp.name)
