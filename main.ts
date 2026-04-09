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
    basic.showString("" + (wandleDezimalInBasis(dezimal, basis)))
    radio.sendString("basis: " + convertToText(basis) + " Zahl: " + wandleDezimalInBasis(dezimal, basis))
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
        return 1
    } else {
        basic.showIcon(IconNames.No)
        return 0
    }
}
radio.onReceivedString(function (receivedString) {
    basic.showNumber(wandleBinaerInDezimal(parseFloat(receivedString)))
    radio.sendString("" + (ergebnisKorrekt(wandleBinaerInDezimal(parseFloat(receivedString)), dezimal)))
})
input.onButtonPressed(Button.B, function () {
    basisMin2 += 1
    basisMin2 = basisMin2 % 15
    basis = basisMin2 + 2
    basic.showNumber(basis)
})
function wandleDezimalInBasis (dezimal: number, basis: number) {
    varBasis = ""
    durchlauf = 0
    while (dezimal > 0) {
        varBasis = "" + wandleDezimalInHexadezimalStelle(dezimal % basis) + varBasis
        durchlauf += 1
        dezimal /= basis
dezimal = Math.floor(dezimal)
    }
    return varBasis
}
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
let durchlauf = 0
let varBasis = ""
let basis = 0
let basisMin2 = 0
let binaer = 0
let dezimal = 0
basisMin2 = 8
basis = 10
radio.setGroup(190)
erzeugeAngabe()
