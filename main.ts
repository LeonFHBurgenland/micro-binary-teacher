function erzeugeAngabe () {
    dezimal = randint(0, 255)
    basic.showNumber(dezimal)
    radio.sendNumber(dezimal)
}
input.onButtonPressed(Button.A, function () {
    erzeugeAngabe()
})
function ergebnisKorrekt (loesung: number, angabe: number) {
    if (loesung == angabe) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    } else {
        basic.showString("X")
    }
}
function wandleUmInDezimal (binär: number) {
	
}
radio.onReceivedString(function (receivedString) {
    basic.showNumber(parseFloat(receivedString))
    wandleUmInDezimal(parseFloat(receivedString))
    ergebnisKorrekt(1, 1)
})
let dezimal = 0
radio.setGroup(191)
erzeugeAngabe()
