let outs = 0
let inning = 1
let totalOuts = 0

// Dice roll function

// rollDice()

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
            getDoublePBP()
        } else if (hitResult === 4) {
            hitResult ='Double'
            getDoublePBP()
        } else if (hitResult === 5) {
            hitResult = 'Triple'
            getTriplePBP()
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


    if (totalOuts === 6 || totalOuts === 12 || totalOuts === 18 || totalOuts === 24 || totalOuts === 30 ||
        totalOuts === 36 || totalOuts === 42 || totalOuts === 48 || totalOuts === 54) {
            inning++
        }


        function getSinglePBP() {
            const PBP = {
                
                "single": [
                    "Line drive into left field, that'll be a base hit,",
                    "Line drive into right, he'll reach with a single.",
                    "A bullet back up the middle for a single!",
                    "A little flare over first base... that's gonna fall in for a single!",
                    "Dribbler down the third base line, it will stay fair for an infield single.",
                    "And that ball is hammered down the right field line! Played beautifully by the right fielder to hold him to a single",
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

        function getDoublePBP() {

            // Play by play data
        
            var PBP = {
        
              "double": [
                "Ripped down the left field line! He'll cruise into second with a double.",
                "Line drive over the shortstop's head, it'll split the outfielders and go to the wall!",
                "Sinking line drive, the center fielder dives but can't get there, allowing the runner to head to second for a double.",
                "Fair ball down the line! That's gonna be extra bases.",
                "Hit high and deep to right center... off the wall! A long double!",
                "Hit hard into the right center field gap, that's gonna fall and bounce over the wall for a ground rule double.",
                "Grounded past the diving third baseman! It rolls into the corner as the batter reaches second with a double!"
              ]
        
            };
        
            let doublePBP = PBP.double
            let randomNum = Math.floor(Math.random() * doublePBP.length)
            doublePBP = PBP.double[randomNum]
            call = doublePBP
            console.log(doublePBP)
        }
        
        function getTriplePBP() {
            var PBP = {

                "triple": [
                    "Hit down the left field line! It takes a weird carom off the wall and rolls past the left fielder allowing the batter to scramble to third!",
                    "High and deep to right center, the batter was thinking three right out of the box and he slides in to beat the throw!",
                    "Line drive in front of the center fielder, he dives... but can't come up with it! That will allow the batter to make it to third standing up!",
                    "A bullet into left center, and that will roll all the way to the wall! The batter has good wheels he's gonna head for third as he slides in head first... safe!"
                ]
            }
            let triplePBP = PBP.triple
            let randomNum = Math.floor(Math.random() * triplePBP.length)
            triplePBP = PBP.triple[randomNum]
            call = triplePBP
            console.log(triplePBP)

        }
}

rollDice()




