const prompt = require('prompt-sync')({sigint: true})

let rigged = Number(prompt("Enter the number you'd like to rig"))

let roll = math.ceil(math.random()*7)

if(roll === 7){
    console.log(rigged)
} else{
    console.log(roll)
}