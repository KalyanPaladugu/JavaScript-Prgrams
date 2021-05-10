function interSectionOfArrays(arr1,arr2){

   const array1=new Set(arr1);
   const array2=new Set(arr2);
  let result=[]
   for (let i of array1){
       if(array2.has(i)){
            result.push(i)
       }
   }
   return result

}

const arr1=[1,2,3,4,5]
const arr2=[1,3,6,7,8]
let result=interSectionOfArrays(arr1,arr2)
console.log(result)