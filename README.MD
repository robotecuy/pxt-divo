Kitronik blocks for micro:bit
Blocks that support Kitronik kits and shields for the micro:bit This package is for the Motor Driver Board

Motors
turn around
input.onButtonPressed(Button.A, () => {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100);
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100);
})
go forward
input.onButtonPressed(Button.B, () => {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 100);
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100);
})
stop both motors when pressing A+B
input.onButtonPressed(Button.AB, () => {
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1);
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2);
})
License
MIT

Supported targets
for PXT/microbit (The metadata above is needed for package search.)
