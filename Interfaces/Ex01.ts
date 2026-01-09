// 🏋️ Practical Exercise: The Smart Device
// Let's test if you can connect these pieces.

// Scenario: You are building a simulation for smart electronics.

// Instructions:

// Create an interface Electronic with one property: voltage (number).

// Create a second interface Wireless with one property: wifiName (string).

// Create a third interface SmartDevice that extends both Electronic and Wireless.

// Add a method to it: connect(): void.

// Create a class IPhone that implements SmartDevice.

// You must write the code for voltage, wifiName, and the connect function inside the class.

interface Electronic {
    voltage: number
}
interface Wireless {
    wifiName: string
}

interface SmartDevice extends Electronic, Wireless {
    connect(): void
}

class IPhone implements SmartDevice {
    constructor(public readonly voltage: number, public wifiName: string){}

    public connect(): void{}
}