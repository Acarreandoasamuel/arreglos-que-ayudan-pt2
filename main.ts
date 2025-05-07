let Temperatura: number[] = []
input.onButtonPressed(Button.A, function () {
    Temperatura = [4]
    for (let index = 0; index <= 4; index++) {
        Temperatura[index] = input.temperature()
        basic.pause(5000)
    }
    basic.showString("Final")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(Temperatura[index])
    }
})
