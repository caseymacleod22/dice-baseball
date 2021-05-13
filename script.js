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
            getSinglePBP()
        } else if (hitResult === 2) {
            hitResult = 'Single'
            getSinglePBP()
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


        function getSinglePBP() {
            const PBP = {
                
                "single": [
                    "Line drive into left field, that'll be a base hit,",
                    "Line drive into right, he'll reach with a single.",
                    "A bullet back up the middle for a single!",
                    "A little flare over first base... that's gonna fall in for a single!",
                    "Dribbler down the third base line, it will stat fair for an infield single.",
                    "And that ball is hammered down the right field line! Played beautifully by the right fielder to   hold him to a single",
                    "Ground ball up the middle, diving stop by the shortstop, but the runner beats it out for an infield single",
                    "Weak groundball towards third but the shift is on and no one is there! That's gonna be a single.",
                    "Broken bat pop up and that will drop over the second base bag for a single."
                ]
            }
            let singlePBP = PBP.single
            let randomNum = Math.floor(Math.random() * singlePBP.length)
            singlePBP = PBP.single[randomNum]
            call = singlePBP
            console.log(singlePBP)
        }
}




