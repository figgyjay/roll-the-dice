const prompt = require('prompt-sync')({sigint: true})

let x = Number(prompt("How many sides would you like to have on the dice?"))

let num1 = math.floor(math.random()*x)

if( x<= 4){
    console.log( "Enter a larger number ")
}
else if (x >= 5 || x <= 20){
    console.log("Good Roll")

    if (x >= 21){
        console.log("Enter a number below 21.")
    }
else console.log(" error ")
}