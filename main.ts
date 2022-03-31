radio.setGroup(33)
let stav = false
let A = 0
let B = 0
let C = 0
if (input.buttonIsPressed(Button.A)) {
    stav = true
    radio.sendNumber(1)
}

radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    radio.receivedPacket(RadioPacketProperty.SerialNumber)
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
