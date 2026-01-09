// Scenario: You are building the HR system.

// Instructions:

// Parent Class (Employee):

// Constructor: Accepts name (string) and sets it as a protected property (using shorthand).

// Method: getDetails() returning "Employee: [name]".

// Child Class (Manager):

// Constructor: Accepts name (string) and department (string).

// Critical Step: Handle the name correctly (pass to super) and create the department property (use public shorthand).

// Method: Override getDetails() to return "Manager [name] runs [department]".

// Note: You can read this.name because it is protected!

class Employee{
    constructor(protected name: string){}

    getDetails(): string{
        return `Employee: ${this.name}`
    }
}

class Manager extends Employee{
    constructor(name: string, public department: string){
        super(name)
    }

    getDetails(): string {
        return `Manager ${this.name} runs ${this.department}`
    }
}