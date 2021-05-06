
// const num=Math.random()
// const num=Math.floor(Math.random())


const min=prompt("Enter minimum range")
const max=prompt("Enter maximum range")
for (let i=0;i<5;i++){
const num=Math.floor(Math.random() * (max-min))+min
document.write(num+"<br>")
}