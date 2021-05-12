let outs = 0
let inning = 1
let totalOuts = 0

// Dice roll function

rollDice()

function rollDice() {
    let result;
    let call;


    let dice = {
        sides: 6,
        roll: function () {
            const randomNumber = Math.floor(Math.random() * this.sides) + 1
            return randomNumber
        }
    }
    result = dice.roll()
    console.log(result)

    function getHitResult() {
        let dice = {
            sides: 6,
            roll: function () {
                const randomNumber = Math.floor(Math.random() * this.sides) + 1
                return randomNumber
            }
        }
        
        let hitResult = dice.roll()
        if (hitResult === 1) {
            hitResult = 'Single'
        } else if (hitResult === 2) {
            hitResult = 'Single'
        } else if (hitResult ===  3) {
            hitResult = 'Double'
        } else if (hitResult === 4) {
            hitResult ='Double'
        } else if (hitResult === 5) {
            hitResult = 'Triple'
        } else if (hitResult === 6) {
            hitResult = 'Home Run'
        }
        result = hitResult
        // console.log(result)
    }

    if (result === 1) {
        getHitResult();
    } else if (result === 2) {
        getHitResult()
    } else if (result === 3) {
        result = 'Groundout'
        outs++
        totalOuts++
    } else if (result === 4) {
        result = 'Flyout'
        outs++
        totalOuts++
    } else if (result === 5) {
        result = 'Lineout'
        outs++
        totalOuts++
    } else if (result === 6) {
        result = 'Strikeout'
        outs++
        totalOuts++
    }
    console.log(result)
    console.log(`There are ${outs} outs`)
    console.log(`It is the ${inning} inning`)
    console.log(totalOuts)


    if (totalOuts === 6 || totalOuts === 12 || totalOuts === 18 || totalOuts === 24 || totalOuts === 30 ||
        totalOuts === 36 || totalOuts === 42 || totalOuts === 48 || totalOuts === 54) {
            inning++
        }

    getHitResult()
}




