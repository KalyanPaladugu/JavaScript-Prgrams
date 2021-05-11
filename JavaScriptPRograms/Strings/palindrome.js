

function palindrome(string){
   
    let stringSplit=string.split('');
    let reverseString=stringSplit.reverse();
    let revString=reverseString.join('');
    if(string=== revString){
        console.log(string+ " is palindrome ")
    }
    else {
        console.log("Given string is not palindrome. ")
    }

}

const string="121";

palindrome(string)