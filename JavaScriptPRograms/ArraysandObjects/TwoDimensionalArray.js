

function TwoDArray(a,b){
   let arr=[]
    for(let i=0;i<a;i++){
        for(let j=0;j<b;j++){
            arr[i]=[]
        }
    }

    for(let i=0;i<a;i++){
        for(let j=0;j<b;j++){
            arr[i][j]=[j]
        }
    }

    return arr


}

const a=2,b=3;

const result = TwoDArray(a, b);
console.log(result);