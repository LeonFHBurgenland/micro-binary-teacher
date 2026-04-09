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
    ergebnis = 0
    durchlauf = 0
    while (binär > 0) {
        ergebnis += binär % 10 * 2 ** durchlauf
        basic.showNumber(ergebnis)
        durchlauf += 1
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showNumber(parseFloat(receivedString))
    wandleUmInDezimal(parseFloat(receivedString))
    ergebnisKorrekt(1, 1)
})
input.onButtonPressed(Button.B, function () {
    dezimal = randint(0, 10)
    basic.showNumber(dezimal)
    wandleUmInDezimal(dezimal)
})
let durchlauf = 0
let ergebnis = 0
let dezimal = 0
radio.setGroup(190)
erzeugeAngabe()
