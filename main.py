radio.set_group(33)
stav = False
A = 0
B = 0
C = 0

if input.button_is_pressed(Button.A):
    stav = True
    radio.send_number(1)

def on_received_value(name, value):
    global A, B, C
    radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)
    if value == 65:
        A += 1
    if value == 66:
        B += 1
    if value == 67:
        C += 1
radio.on_received_value(on_received_value)


