
// 1.using JSON.stringify() method 

// function compareArrays(arr1,arr2){

// let result = JSON.stringify(arr1) ==JSON.stringify(arr2) 

// if(result){
//     console.log("Elements are equal")
// }
// else {
//     console.log("Elements are not equal") 
// }


// }

// 2. usnig for loop

function compareArrays(arr1,arr2){
     if(arr1.length != arr2.length){
         return false
     }

     else {
         let result =false;
         for (let i=0 ;i<arr1.length;i++){

                if(arr1[i] !=arr2[i]){
                    return false
                }
                else {
                    result= true
                }
         }
         return result
     }
   
}

let arr1=[1,2,3]
let arr2=[1,2,3]
let result = compareArrays(arr1,arr2)
if(result) {
    console.log('The arrays have the same elements.');
}
else {
    console.log('The arrays have different elements.');
}