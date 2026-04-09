input.onButtonPressed(Button.A, function () {
    dezimal = randint(0, 10)
    basic.showNumber(dezimal)
    radio.sendNumber(dezimal)
})
let dezimal = 0
radio.setGroup(191)
dezimal = randint(0, 10)
basic.showNumber(dezimal)
radio.sendNumber(dezimal)
