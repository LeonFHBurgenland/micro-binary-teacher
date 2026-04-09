function erzeugeAngabe () {
    dezimal = randint(0, 31)
    basic.showNumber(dezimal)
    radio.sendNumber(dezimal)
}
input.onButtonPressed(Button.A, function () {
    erzeugeAngabe()
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
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
        return "korrekt"
    } else {
        basic.showString("X")
        return "falsch"
    }
}
function wandleUmInDezimal (binaer: number) {
    ergebnis = 0
    durchlauf = 0
    while (binaer > 0) {
        ergebnis += binaer % 10 * 2 ** durchlauf
        durchlauf += 1
        binaer /= 10
binaer = Math.round(binaer)
    }
    return ergebnis
}
radio.onReceivedString(function (receivedString) {
    basic.showNumber(parseFloat(receivedString))
    basic.showNumber(wandleUmInDezimal(parseFloat(receivedString)))
    radio.sendString("" + (ergebnisKorrekt(wandleUmInDezimal(parseFloat(receivedString)), dezimal)))
})
let binaer = 0
let durchlauf = 0
let ergebnis = 0
let dezimal = 0
radio.setGroup(191)
erzeugeAngabe()
