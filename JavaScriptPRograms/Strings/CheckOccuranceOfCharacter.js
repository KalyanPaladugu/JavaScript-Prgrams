// function CharOccuranceInaString(str,letter){
//     let count=0 
//     for(let i=0;i<str.length;i++){
           
//         if(str.charAt(i)== letter){
//                  count +=1
//               }
//         else {
//             console.log("Please enter proper character")
//         }
       
//     }
//     return count
   
// }


// let result=CharOccuranceInaString("AbcsdfAaas",'c')
// console.log(  result + '   times')

// program to check the occurrence of a character

function countString(str, letter) {

    // creating regex 
    const re = new RegExp(letter, 'g');

    // matching the pattern
    const count = str.match(re).length;

    return count;
}

// take input from the user
const string = prompt('Enter a string: ');
const letterToCheck = prompt('Enter a letter to check: ');

//passing parameters and calling the function
const result = countString(string, letterToCheck);

// displaying the result
console.log(result);