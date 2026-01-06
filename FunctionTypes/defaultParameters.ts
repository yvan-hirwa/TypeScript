// 🏋️ Practical Exercise: The Bank Transaction
// Scenario: You are writing a function to withdraw money from an ATM.

// Instructions:

// Write a function called withdraw.

// Parameter 1: amount (number) -> Required.

// Parameter 2: currency (string) -> Default this to "USD".

// The function should return a string: "You withdrew [amount] [currency]".

// Call it once passing just 100.

// Call it again passing 500 and "EUR".

function withdraw(amount: number, currency: string = 'USD'): string {
    return `You withdrew ${amount} ${currency}`
}