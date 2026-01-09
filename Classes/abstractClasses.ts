// 🏋️ Practical Exercise: The Payment Gateway
// Scenario: You are building an E-commerce site. You support PayPal and CreditCard. 
// They both process payments, but the logic is completely different for each.

// Instructions:

// Create an abstract class Payment.

// Constructor: amount (number).

// Abstract Method: process() (returns string).

// Normal Method: getReceipt() returns "Receipt for [amount]".

// Create a class PayPal that extends Payment.

// Constructor: Takes amount and email.

// Implement process(): Return "Paid [amount] using PayPal ([email])".

// Create a class CreditCard that extends Payment.

// Constructor: Takes amount and cardNumber (string).

// Implement process(): Return 
// "Paid [amount] with Card ending in [last 4 digits]". (Hint: Use this.cardNumber.slice(-4) to get the last digits).

abstract class Payment{
    constructor(protected amount: number){}

    abstract process(): string;

    getReceipt(): string{
        return  `Receipt for ${this.amount}`
    }
}

class PayPal extends Payment{
    constructor(amount: number, public email: string){
        super(amount)
    }
    process(): string{
        return `Paid ${this.amount} using PayPal (${this.email})`
    }
}
class CreditCard extends Payment{
    constructor(amount: number, public cardNumber: string){
        super(amount)
    }
    process(): string{
        return `Paid ${this.amount} with Card ending in ${this.cardNumber.slice(-4)}`
    }
}