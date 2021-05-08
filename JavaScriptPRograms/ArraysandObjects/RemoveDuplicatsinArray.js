// 1. using for of loop

// function removeDuplicate(array){
//         let newArray=[]
//      for(let i of array){
//          if(newArray.indexOf(i)===-1){
//              newArray.push(i)
//          }
//      }
//     console.log(newArray)
// }
// const list=[1,2,23,3,2,2,2,3]
// removeDuplicate(list)

const list=[1,2,23,3,2,2,2,3]

const newList=[...new Set(list)]
console.log(newList)