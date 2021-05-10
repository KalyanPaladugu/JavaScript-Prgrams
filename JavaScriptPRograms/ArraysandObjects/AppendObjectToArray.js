
// 1. By using append (push) method

```
function AppendObjTOArr(arr,obj){
             arr.push(obj)
            console.log(arr)
}

2. By using slice method


function AppendObjTOArr(arr,obj){
    let index=arr.length
    arr.splice(index,0,obj)
   console.log(arr)
}

```
// 3.By using spred operator


function AppendObjTOArr(arr,obj){
   arr=[...arr,obj]
   console.log(arr)
}
let arr=[1,2,3]

let obj={name:"kalyan",age:"25"}

AppendObjTOArr(arr,obj)