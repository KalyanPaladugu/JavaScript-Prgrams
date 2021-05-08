const string = 'Learning JavaScript Program';

// let copy=string.replace(/a/g,"A")

let stringSplit=string.split('a')
let copy=stringSplit.join('A')
console.log(copy)