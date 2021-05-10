
// Using for loop

// function removeItem(array,n){
         
//     let newArray=[]
//     for(let i=0 ;i<array.length;i++){
//             if(array[i]!=n){
//                     newArray.push(array[i])
//             }
//     }
//     console.log(newArray)
// }

// removeItem([1,2,3,4,5],4)


// using splice and indexOf methods


function removeItem(array,n){

    let index=array.indexOf(n);

    if(index >-1){
        array.splice(index,1)
    }
    console.log(array)
}
removeItem([1,2,3,4,5],2)


// https://www.tothenew.com/blog/javascript-splice-vs-slice/