radio.setGroup(33)
let A = 0
let B = 0
let C = 0
// stisknutím tlačítek A a B povoluji/zakazuji hlasování
// stisknutím tlačítka AB zobrazuji výsledky hlasování
// stisknutím loga vynuluji výsledky hlasování
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(2)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "answer" && value == 1) {
        A += 1
        radio.sendNumber(3)
    }
    
    if (name == "answer" && value == 2) {
        B += 1
        radio.sendNumber(3)
    }
    
    if (name == "answer" && value == 3) {
        C += 1
        radio.sendNumber(3)
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.showString("A", 500)
    basic.showNumber(A, 500)
    basic.showString("B", 500)
    basic.showNumber(B, 500)
    basic.showString("C", 500)
    basic.showNumber(C, 500)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    
    A = 0
    B = 0
    C = 0
})
