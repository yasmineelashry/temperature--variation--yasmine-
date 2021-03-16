input.onGesture(Gesture.Shake, function () {
    let temperature = 0
    basic.showNumber(temperature)
    if (temperature >= 20) {
        basic.showIcon(IconNames.Happy)
    } else if (temperature < 20) {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
	
})
