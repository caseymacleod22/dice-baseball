let outs = 0
let inning = 1
let totalOuts = 0

// Dice roll function

function diceRoll() {
    const sides = 6
    const randomNumber = Math.floor(Math.random() * sides) +1
    return randomNumber
}
console.log(diceRoll())