radio.set_group(33)
A = 0
B = 0
C = 0

def on_button_pressed_a():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(2)
input.on_button_pressed(Button.B, on_button_pressed_b)


def on_received_value(name, value):
    radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
    global A, B, C
    
    if value == 65:
        A += 1
    if value == 66:
        B += 1
    if value == 67:
        C += 1

radio.on_received_value(on_received_value)

if input.button_is_pressed(Button.B):
    radio.send_number(2)

    basic.show_number(A)
    basic.pause(3000)
    basic.show_number(B)
    basic.pause(3000)
    basic.show_number(C)
    
console.log_value(65, A)
console.log_value(66, B)
console.log_value(67, C)



