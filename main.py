radio.set_group(33)
A = 0
B = 0
C = 0

#stisknutím tlačítek A a B povoluji/zakazuji hlasování
#stisknutím tlačítka AB zobrazuji výsledky hlasování
#stisknutím loga vynuluji výsledky hlasování

def on_button_pressed_a():
    radio.send_number(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    radio.send_number(2)
input.on_button_pressed(Button.B, on_button_pressed_b)


def on_received_value(name, value):
    global A, B, C
    if name == "answer" and value == 1:
        A += 1
        radio.send_number(3)
    if name == "answer" and value == 2:
        B += 1
        radio.send_number(3)
    if name == "answer" and value == 3:
        C += 1
        radio.send_number(3)
radio.on_received_value(on_received_value)

def on_button_pressed_ab():
    global A, B, C
    basic.show_string("A",500)
    basic.show_number(A,500)
    basic.show_string("B",500)
    basic.show_number(B,500)
    basic.show_string("C",500)
    basic.show_number(C,500)
    basic.show_icon(IconNames.HEART)
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_logo_event_pressed():
    global A, B, C
    A = 0
    B = 0
    C = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)

   
    



