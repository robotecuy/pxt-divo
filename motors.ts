/**
 * Blocks for driving the Robotec Divo Driver Board
 */
//% weight=100 color=#00A654 icon="\uf21c" block="Motor Driver"
namespace robotec_motor_driver {
	/************************************************************************************************************************************************
	* micro:bit motor driver blocks 
	************************************************************************************************************************************************/
    /*Note that Forward and reverse are slightly arbitrary, as it depends on how the motor is wired...*/
    export enum MotorDirection {
        //% block="forward"
        Forward,
        //% block="reverse"
        Reverse,
        Right,
        Left
    }

	/**
     * Turns on motor specified by eMotors in the direction specified
     * by eDirection, at the requested speed 
     *
	 * @param motor which motor to turn on
	 * @param dir   which direction to go
	 * @param speed how fast to spin the motor
     */
    //% blockId=kitronik_motordriver_motor_on
    //% block="%motor|on direction %dir|speed %speed"
    //% speed.min=0 speed.max=100
    export function motorOn(dir: MotorDirection): void {
        /*first convert 0-100 to 0-1024 (approx) We wont worry about the lsat 24 to make life simpler*/

                switch (dir) {
                    case MotorDirection.Forward:
                        pins.servoWritePin(AnalogPin.P14, 0);
                        pins.servoWritePin(AnalogPin.P15,180); 
                        break
                    case MotorDirection.Reverse:
                        pins.servoWritePin(AnalogPin.P14, 180);
                        pins.servoWritePin(AnaloglPin.P15,0); 
                        break
                }   
     }
}
