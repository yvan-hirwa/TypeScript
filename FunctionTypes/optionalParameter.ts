// 🏋️ Practical Exercise: The Pizza Order
// Scenario: You are building a pizza ordering function.

// Instructions:

// Write a function called orderPizza.

// It has one required parameter: size (string, e.g., "Large").

// It has one optional parameter: topping (string).

// Logic:

// If topping is provided, return: "Ordering a [size] pizza with [topping]"

// If topping is missing, return: "Ordering a plain [size] pizza"

// Call the function twice: once with a topping, once without.

function orderPizza(size: string, topping?: string): string {
    if(topping){
        return `Ordering a ${size} pizza with ${topping}`
    }
    else{
        return `Ordering a plain ${size} pizza`
    }
}