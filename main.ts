function erzeugeAngabe () {
    dezimal = randint(0, 31)
    basic.showNumber(dezimal)
    radio.sendString(convertToText(dezimal))
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
input.onButtonPressed(Button.A, function () {
    erzeugeAngabe()
})
function ergebnisKorrekt (loesung: number, angabe: number) {
    if (loesung == angabe) {
        basic.showIcon(IconNames.Yes)
        return "korrekt"
    } else {
        basic.showIcon(IconNames.No)
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
input.onButtonPressed(Button.B, function () {
    basis += 1
    basis = basis % 2
    if (basis == 0) {
        basic.showNumber(10)
    } else {
        basic.showNumber(16)
    }
})
let basis = 0
let binaer = 0
let durchlauf = 0
let ergebnis = 0
let dezimal = 0
radio.setGroup(191)
erzeugeAngabe()
