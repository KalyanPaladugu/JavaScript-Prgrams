let suites=["Spades","Diamonds","Clubs","Hearts"]
let values=["Ace","2", "3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"Jack",
"Queen",
"King",]


let deck=[];

// creating card andpushing into deck
for(let i=0;i<suites.length;i++){
    for(let j=0 ;j<values.length;j++){
             let card={"Values":values[j],"Suites":suites[i]}
             deck.push(card)
    }
}

// shuffle  the cards

for (let x=deck.length-1;x>0;x--){
     let y=Math.floor(Math.random() * x)

     let temp=deck[x]
     deck[x]=deck[y]
     deck[y]=temp

}


console.log("The First four cards are ")

for(let k=0;k<4;k++){
    console.log(`${deck[k].Values} of ${deck[k].Suites}`)
}