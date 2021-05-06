// program to find the ASCII value of a character

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
// const result = string.charCodeAt(2);
for (let i=0; i<string.length;i++){
    const result = string.charCodeAt(i)
    console.log(`The ASCII value is: ${result}`);
}

