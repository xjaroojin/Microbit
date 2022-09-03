let operation = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    if (operation == 1) {
        basic.showString("" + (x + y))
        for (let index = 0; index < operation; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
    } else if (operation == 2) {
        basic.showString("" + (x - y))
        for (let index = 0; index < operation; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
    } else if (operation == 3) {
        basic.showString("" + (x * y))
        for (let index = 0; index < operation; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
    } else if (operation == 4) {
        basic.showString("" + (x / y))
        for (let index = 0; index < operation; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    x = randint(1, 6)
    basic.showNumber(x)
    for (let index = 0; index < x; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    operation = 0
    x = 0
    y = 0
})
input.onGesture(Gesture.TiltRight, function () {
    y = randint(1, 6)
    basic.showNumber(y)
    for (let index = 0; index < y; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    operation += 1
    if (operation == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (operation == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (operation == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (operation == 4) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (operation == 5) {
        operation = 0
    }
})
