// program to add element to an array

function addElement(arr) {

    // adding new array element
    // arr.unshift(4);
    // arr.splice(0, 0, 4);
    // arr = [4, ...arr];
    arr = [4].concat(arr);
    
    
    console.log(arr);
}

const array = [1, 2, 3];

// calling the function
// passing array argument
addElement(array);