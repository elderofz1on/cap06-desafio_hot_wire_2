input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
	
})
let falhas = 0
basic.showLeds(`
    # # # . #
    # . # . #
    # . # # #
    # . . . .
    # . . . .
    `)
basic.pause(200)
soundExpression.spring.playUntilDone()
basic.clearScreen()
