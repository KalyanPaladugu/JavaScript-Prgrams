let bin=0,rem=1,i=1;


function decimalToBinary(x){
    while(x!=0 ){
          rem=x%2;
          x=parseInt(x/2)
          bin=bin +rem *i
          i=i*10
    }
    console.log(bin)
}
const dec=prompt("Enter decimal number")

decimalToBinary(dec)