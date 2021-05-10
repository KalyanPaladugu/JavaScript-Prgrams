// 1. using map 


// function extractObj(arr, prop){
//         let extractedValues= arr.map((item) => item[prop])
//     return extractedValues

// }

// let arr=[{age:23,name:"kalyan"},
// {age:25,name:"P.kalyan"},{age:26,name:"Sam"}]

// let res=extractObj(arr,'age')
// console.log(res)


// 2. using for loop

// program to extract value as an array from an array of objects

function extractValue(arr, prop) {

    let extractedValue = [];

    for (let i=0; i < arr.length ; i++) {

        // extract value from property
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);