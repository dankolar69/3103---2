radio.setGroup(33)
let A = 0
let B = 0
let C = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(2)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    radio.receivedPacket(RadioPacketProperty.SignalStrength)
    
    if (value == 65) {
        A += 1
    }
    
    if (value == 66) {
        B += 1
    }
    
    if (value == 67) {
        C += 1
    }
    
})
if (input.buttonIsPressed(Button.B)) {
    radio.sendNumber(2)
    basic.showNumber(A)
    basic.pause(3000)
    basic.showNumber(B)
    basic.pause(3000)
    basic.showNumber(C)
}

console.logValue(65, A)
console.logValue(66, B)
console.logValue(67, C)
