/**
 * Blocks for driving the Robotec Divo Board
 */
//% weight=100 color=#00A654 icon="\uf21c" block="Motores Divo"
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
	//% block="right"
        Right,
	//% block="left"
        Left,
	//% block="stop"
        Stop  
    }

	/**
     * Turns on motor specified by eMotors in the direction specified
     * by eDirection, at the requested speed 
     *
	 * @param dir   which direction to go
     */
    //% blockId=robotec_motordriver
    //% block="divo direction %dir"
    export function motorOn(dir: MotorDirection): void {
        /*first convert 0-100 to 0-1024 (approx) We wont worry about the lsat 24 to make life simpler*/

                switch (dir) {
                    case MotorDirection.Forward:
                        pins.servoWritePin(AnalogPin.P14, 0);
                        pins.servoWritePin(AnalogPin.P15,180); 
                        break
                    case MotorDirection.Reverse:
                        pins.servoWritePin(AnalogPin.P14, 180);
                        pins.servoWritePin(AnalogPin.P15,0); 
                        break
		     case MotorDirection.Right:
                        pins.servoWritePin(AnalogPin.P14, 90);
                        pins.servoWritePin(AnalogPin.P15,180); 
                        break
		     case MotorDirection.Left:
                        pins.servoWritePin(AnalogPin.P14, 0);
                        pins.servoWritePin(AnalogPin.P15,90); 
                        break
		     case MotorDirection.Stop:
                        pins.servoWritePin(AnalogPin.P14,90);
                        pins.servoWritePin(AnalogPin.P15,90); 
                        break
                }   
     }
}
