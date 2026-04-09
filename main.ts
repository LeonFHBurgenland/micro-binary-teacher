function wandleDezimalInHexadezimal (dezimal: number) {
    hex2 = ""
    durchlauf = 0
    while (dezimal > 0) {
        hex2 = "" + wandleDezimalInHexadezimalStelle(dezimal % 16) + hex2
        durchlauf += 1
        dezimal /= 16
dezimal = Math.round(dezimal)
    }
    return hex2
}
function wandleDezimalInHexadezimalStelle (dezimal: number) {
    if (dezimal == 10) {
        return "A"
    } else if (dezimal == 11) {
        return "B"
    } else if (dezimal == 12) {
        return "C"
    } else if (dezimal == 13) {
        return "D"
    } else if (dezimal == 14) {
        return "E"
    } else if (dezimal == 15) {
        return "F"
    } else {
        return convertToText(dezimal)
    }
}
function erzeugeAngabe () {
    dezimal = randint(0, 31)
    if (basis == 0) {
        basic.showNumber(dezimal)
        radio.sendString(convertToText(dezimal))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showNumber(dezimal)
        basic.showString("" + (wandleDezimalInHexadezimal(dezimal)))
        radio.sendString("" + (wandleDezimalInHexadezimal(dezimal)))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    erzeugeAngabe()
})
function ergebnisKorrekt (loesung: number, angabe: number) {
    if (loesung == angabe) {
        basic.showIcon(IconNames.Yes)
        return 1
    } else {
        basic.showIcon(IconNames.No)
        return 0
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showNumber(parseFloat(receivedString))
    basic.showNumber(wandleBinaerInDezimal(parseFloat(receivedString)))
    radio.sendString("" + (ergebnisKorrekt(wandleBinaerInDezimal(parseFloat(receivedString)), dezimal)))
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
function wandleBinaerInDezimal (binaer: number) {
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
let ergebnis = 0
let basis = 0
let durchlauf = 0
let hex2 = ""
let binaer = 0
let dezimal = 0
radio.setGroup(190)
erzeugeAngabe()
