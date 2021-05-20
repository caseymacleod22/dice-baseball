let outs = 0
let inning = 1
let totalOuts = 0

// Dice roll function


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
            getHomerunPBP()
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
        getGroundoutPBP()
        outs++
        totalOuts++
    } else if (result === 4) {
        result = 'Flyout'
        getFlyoutPBP()
        outs++
        totalOuts++
    } else if (result === 5) {
        result = 'Lineout'
        getLineoutPBP()
        outs++
        totalOuts++
    } else if (result === 6) {
        result = 'Strikeout'
        getStrikeoutPBP()
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
            console.log(call)
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
            console.log(call)
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
            console.log(call)

        }

        function getHomerunPBP() {
            let PBP = {
                "homerun": [
                    "That ball is drilled to deep left! There it goes, see ya!",
                    "And this ball is clobbered to straight away center, the center fielder turns just to give it a look, it's gone!",
                    "Line drive down the right field line does it have the height... it does! it scrapes over the wall for a homer!",
                    "A high fly ball to left, the left fielder gets to the wall and leaps, but it's just over his glove for a home run!",
                    "Drilled down the right field line, if it's fair it's gone and it is... a fair ball!",
                    "Swung on and there it goes to deep left! It is high, it is far it is GONE!"
                ]
            }

            let homerunPBP = PBP.homerun
            let randomNum = Math.floor(Math.random() * homerunPBP.length)
            homerunPBP = PBP.homerun[randomNum]
            call = homerunPBP
            console.log(call)
        }

        function getGroundoutPBP() {
            let PBP = {
                "groundout": [
                    "Grounded to the shortstop, he fields and fires to first for the out.",
                    "Slow dribbler down the third base line, the third baseman fields it barehanded and makes the throw to just get him by a step.",
                    "Tapped softly back to the pitcher, he flips it to first for the out.",
                    "Chopped to the second baseman for an easy out.",
                    "Ripped down the line but it's back handed beautifully by the first baseman and he takes it himself for the out",
                    "Grounded hard up the middle... diving stop by the shortstop! He fires to first for the out, what a play!",
                    "Tapped right in front of the plate, the catcher pops up to grab it and throws to first for the out.",
                    "Hit sharply but rifht at the third baseman. He takes his time and makes an accurate throw to first.",
                    "High chopper over the pitcher's head, the second baseman ranges over and makes a nice backhand grab, he sets and fires a rocket to first!",
                    "Hit hard in the hole but the third baseman makes a great sliding grab! He gets himself to his feet and makes a perfect throw!"
                ]
            }

            let groundoutPBP = PBP.groundout
            let randomNum = Math.floor(Math.random() * groundoutPBP.length)
            groundoutPBP = PBP.groundout[randomNum]
            call = groundoutPBP
            console.log(call)
        }

        function getFlyoutPBP() {
            let PBP = {
                "flyout": [
                    "High fly ball the straight away center field. The center fielder barely has to move to put it away.",
                    "Hit high and deep to left center, the left fielder tracks it to the wall and leaps... and he makes the play! He pulled that back from over the wall and took a homerun away!.",
                    "Lofted into right field, the right fielder runs in and records the out.",
                    "Popped high in the infield, the shortstop calls everyone off and records the out.",
                    "Shallow fly ball into left field, the left fielder sprints in and dives to make the play!",
                    "Broken bat jam shot over the first base bag, and the first baseman makes a beautiful over the shoulder catch!",
                    "Routine fly ball down the right field line, the right fielder jogs over to make the play.",
                    "Deep fly ball to center... not quite deep enough as the center fielder settles under it for the out.",
                    "Fly ball to left center field, the center fielder sprints over and dives to make the play! What a catch!",
                    "Fly ball to right, the right fielder settles under it at the warning track to put it away, the batter just missed that one."
                ]
            }

            let flyoutPBP = PBP.flyout
            let randomNum = Math.floor(Math.random() * flyoutPBP.length)
            flyoutPBP = PBP.flyout[randomNum]
            call = flyoutPBP
            console.log(call)
        }

        function getLineoutPBP() {
            let PBP = {
                "lineout": [
                    "He hits a bullet, but it's right at the third baseman.",
                    "Line drive towards left center, the center fielder got a good jump and was able to run it down for the out.",
                    "Line drive right back to the pitcher! He got his glove up just in time!",
                    "Hard hit line drive but the second baseman is right there to record the out.",
                    "Lined right to the left fielder, who doesn't have to move an inch to make the play.",
                    "Lined down the right field line, but the right fielder was playing towards the line and is able to track it down!",
                    "Lined... and a diving catch by the first baseman! Oh what a play!",
                    "A bullet hit in the hole but there's a diving catch by the third baseman!"
                ]
            }

            let lineoutPBP = PBP.lineout
            let randomNum = Math.floor(Math.random() * lineoutPBP.length)
            lineoutPBP = PBP.lineout[randomNum]
            call = lineoutPBP
            console.log(call)
        }

        function getStrikeoutPBP() {
            let PBP = {
                "strikeout": [
                    "Swing and a miss on a high fastball! Strike three!",
                    "The 3-2 pitch is called strike three! He painted the corner with a beautiful two seamer.",
                    "Nasty slider down and away gets the batter to chase for strike three!",
                    "Swung on and missed for strike three! He blew a fastball right by him!",
                    "The pitch is called strike three at the knees! The batter didn't like that one and he lets the umpire know on his way abck to the dugout.",
                    "Foul tipped but the catcher is able to squeeze it for strike three.",
                    "He buckles his knees with a nasty 2-2 curveball to put him away looking!",
                    "Swing and a miss for strike three! He had him way out in front with the changeup."
                ]
            }

            let strikeoutPBP = PBP.strikeout
            let randomNum = Math.floor(Math.random() * strikeoutPBP.length)
            strikeoutPBP = PBP.strikeout[randomNum] 
            call = strikeoutPBP
            console.log(call)
        }

        $('#pbp').html(call).fadeIn(500)
        $('#playresult').html(result)
            if (outs === 3) {
                outs = 0
                if ($('#half-inning').text() === 'Top') {
                    $('#half-inning').text('Bottom')
                } else {
                    $('#half-inning').text('Top')
                }
            }
        $('#outsnum').html(outs)
        $('#inningnum').html(inning)
}

// rollDice()




